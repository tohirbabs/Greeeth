import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Spinner from "../../components/Spinner";
import { GeotagIcon } from "../../components/Dashboard/GeotagIcon";

import { ThreeDots } from "react-loader-spinner";


const PlantedTree = ({tree}) => {

    const [cookies, setCookie] = useCookies();

    const [tree_details,setTreeDetails] = useState(null)

    const [to_maintain,setToMaintain] = useState(false)


    const [submitLoading,setSubmitLoading] = useState(false)

    const [image,setImage] = useState(null)

    const [treeH,setTreeH] = useState('10mm - 49mm')

    const [isLoading,setIsLoading] = useState(false)


    const newImageURL = {};
    var locationLon;
    var locationLat;
    // console.log(image);
    function locate() {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        locationLat = position.coords.latitude;
        locationLon = position.coords.longitude;
        setCookie(`locationLat`, parseInt(position.coords.latitude), {
          path: "/",
        });
        setCookie(`locationLong`, parseInt(position.coords.longitude), {
          path: "/",
        });
      });
    }

    const fetchingTreeDetails  = (id) => {
        setIsLoading(true)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Token ${cookies.key}`);

        var requestOptions = {
            method: "GET",
            headers: myHeaders,
          };

          try {
            fetch("https://api.greeeth.com/trees/"+id, requestOptions)
              .then((response) => response.json())
              .then((result) => {
                    setTreeDetails(result)
                    setIsLoading(false)
                    console.log(result)
              });
          } catch (err) {
            setErr(err.message);
          }

    }


    useEffect(() => {
        fetchingTreeDetails(tree.id)
    }, []);


    function onImageChange(e) {
        locate();
        setImage(e.target.files[0]);

      }
      function addMaintainTree() {
        setSubmitLoading(true);
        var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");
    
        myHeaders.append("Authorization", `Token ${cookies.key}`);
        let form_data = new FormData();
        form_data.append("image", image);
        form_data.append(
          "location",
          `{"type":"Point","coordinates": [${cookies.locationLat},${cookies.locationLong}]}`

        );
        form_data.append("height", treeH);
        form_data.append("tree",tree_details.id);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: form_data,
        };
    

        console.log(cookies.locationLat)
        console.log(cookies.locationLong)
    
    
        try {
          fetch("https://api.greeeth.com/maintainance/", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setSubmitLoading(false)
                setToMaintain(false)
                fetchingTreeDetails(tree_details.id)
            });
        } catch (err) {
          setErr(err.message);
          console.log(err.message)
        } 
      }


    return ( 

     isLoading ?
     <Spinner/>
    :

    tree_details && 

    !to_maintain ? 

    <>

        <div className="w-full px-3">
            <div className="w-full border border-green-700 rounded-3xl p-4">
            <p className="text-gray-600 font-bold text-sm my-1">Tree Name: &nbsp; <span className="capitalize">{tree_details.tree_type ? tree_details.tree_type : 'N/A' }</span></p>
            <p className="text-gray-600 font-bold text-sm my-1">Tree Location: &nbsp;  {tree_details.address}</p>
            <p className="text-gray-600 font-bold text-sm my-1">Planted: {tree_details.age} Days Ago</p>
            <p className="text-gray-600 font-bold text-sm my-1">Height: {tree_details.height}</p>
            {tree_details.weather && 
            <>
            <p className="bg-lgreen py-3 px-5 rounded text-sm font-bold text-white inline-flex"> Weather Conditions </p>
            <p className="text-gray-600 font-bold text-sm my-1">{tree_details.weather.narrative}</p>
            
            <p className="text-gray-600 font-bold text-sm my-1">Temperature: &nbsp; {tree_details.weather.temperature} <sup>o</sup>C</p>
            <p className="text-gray-600 font-bold text-sm my-1">Humidity: &nbsp; {tree_details.weather.humidity} g.kg <sup>-1</sup> </p>

            <p className="text-gray-600 font-bold text-sm my-1">UV Light: &nbsp; {tree_details.weather.uvIndex} - {tree_details.weather.uvDescription} </p>

            <p className="text-gray-600 font-bold text-sm my-1">Windspeed: &nbsp; {tree_details.weather.windspeed} km/hr <sup></sup> </p>


                {!tree_details.to_be_maintained ? 
                
                <p className="py-1 px-3 rounded text-sm text-red-600 border-2 inline-flex border-red-600">Not Suitable For Maintainance</p>
                :
                <p className="py-1 px-3 rounded text-sm text-green-600 border-2 inline-flex border-green-600">Suitable For Maintainance</p>
                
            
            }
            
            
            </>
            
            }
            </div>
        </div>

            

        <p className="my-2 text-sm font-bold text-gray-600">Images</p>
        <div className="w-full overflow-x-scroll p-2 flex ">


        {tree_details.maintainances.length > 0 && 
                tree_details.maintainances.map(maintain=>
            <img src={maintain.image} className="w-48 mr-2 h-64 object-cover rounded-lg border-green-600 border-2"></img>
                    )                
            }

            <img src={tree_details.image} className="w-48 h-64 object-cover rounded-lg border-green-600 border-2"></img>
        </div>


        <div className="w-full lg:w-1/2 mx-auto">
                <button className="w-full bg-lgreen text-white py-3 rounded-2xl mt-3 font-bold" onClick={()=>setToMaintain(true)} >Maintain Tree</button>
        </div>

    </>
    :
    <>
    <p className="font-bold text-gray-600 px-2" >Maintain Tree</p>

    <div className="my-1">
      <label for="treeImages" className="">
        <div className="left flex gap-4 items-center mr-5 ">
          <div className="p-2 cursor-pointer bg-lgreen border   rounded-full flex justify-between items-center">
            <div className="bg-lightgreen p-2 rounded-full">
              <GeotagIcon />
            </div>
            <div className="flex flex-col text-left ml-2">
              <div className="text-md font-bold text-white">
                Maintain Tree Image
              </div>
            </div>
          </div>
        </div>
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={onImageChange}
        id="treeImages"
        className="imgFile"
      />
    </div>


        
    <label htmlFor="" className="text-gray-600 font-bold">Select Tree Height</label>

    <select id="employeenum" placeholder="Enter Tree Height" name="employeenum" className="w-full py-3 px-3" onInput={(e)=> setTreeH(e.target.value)}>
                {/* <option value="one">Enter tree Height</option> */}
                <option value="10mm - 49mm">10mm - 49mm</option>
                <option value="50mm - 99mm">50mm - 99mm</option>
                <option value="100mm - 499mm">100mm - 499mm</option>
                <option value="500mm+">500mm+</option>
              </select>
            



              <div className="w-full lg:w-1/2 mx-auto">
                {!submitLoading ? 
                 <button 
                 className="w-full bg-lgreen text-white py-3 rounded-2xl mt-3 font-bold" onClick={addMaintainTree} >Submit</button>

                 :
                 <button 
                 className="w-full bg-lgreen disabled text-white py-3 rounded-2xl mt-3 font-bold" >
                    <ThreeDots
                    height="20"
                    width="100"
                    color="white"
                    ariaLabel="loading"
                  />
                    </button>
                    
            }
               
        </div>


        <div className="w-full lg:w-1/2 mx-auto">
                <button className="w-full bg-yellow-600 text-white py-3 rounded-2xl mt-3 font-bold" onClick={()=>setToMaintain(false)} >Cancel</button>
        </div>




    </>

     );
}
 
export default PlantedTree;