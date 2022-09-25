import tree from "../../../assets/learing-assets/tree-pic.png"
import LearningPageNavbar from "./LearingPageNavbar"


const LearningPageCartNav = ({cart, courses, total, removeFromcart }) =>{
	console.log(cart)
	// console.log(cart.reduce((cart, a) => cart.price + a, 0))
	// console.log(Object.keys(cart))
	// console.log(cart[Object.keys(cart)[0]])

	return <>
		<LearningPageNavbar />
		<div className=" h-screen text-left relative -z-1 pt-8 lg:pt-15">
			<div className="container  sm:mx-6 max-w-screen-xl">
				<h2 className="capitalize text-3xl font-bold pl-4">my cart</h2>
				<p className="text-xl pl-4"> {!cart && "0"}{cart && Object.keys(cart).length} courses</p>
			</div>
				
				<div className="flex flex-col h-5/6 justify-between lg:flex-row lg:h-70v items-start lg:gap-20">
					<div className=" p-4 py-8 overflow-y-scroll h-5/6 w-full container  sm:mx-6 max-w-screen-xl lg:h-full flex-1">
						{/* // cart && cart.map((course) => <div className="flex border-b-1 pb-8 "> 
						// 	<img src={course.coursepic} alt="course-pic" className="w-16 h-16 object-cover"/>
						// 	<div className="pl-4">
						// 		<p className="text-xl">{course.coursename}</p>
						// 		<p className="font-semibold">${course.price}</p>
						// 	</div>
						// 	<div onClick={()=> removeFromcart(course.id)}>remove</div>
						// </div>) */}
						
						<div className="flex border-b-1 py-4 "> 
							<img src={tree} alt="tree-pic" className="w-16 h-16 object-cover lg:w-20"/>
							<div className="pl-4">
								<p className="text-xl">sustainability</p>
								<p className="font-semibold">$10</p>
							</div>
						</div>
						
						<div className="flex border-b-1 py-4 "> 
							<img src={tree} alt="tree-pic" className="w-16 h-16 object-cover lg:w-20"/>
							<div className="pl-4">
								<p className="text-xl">sustainability</p>
								<p className="font-semibold">$10</p>
							</div>
						</div>
						<div className="flex border-b-1 py-4 "> 
							<img src={tree} alt="tree-pic" className="w-16 h-16 object-cover lg:w-20"/>
							<div className="pl-4">
								<p className="text-xl">sustainability</p>
								<p className="font-semibold">$10</p>
							</div>
						</div>
						
						<div className="flex border-b-1 py-4 "> 
							<img src={tree} alt="tree-pic" className="w-16 h-16 object-cover lg:w-20"/>
							<div className="pl-4">
								<p className="text-xl">sustainability</p>
								<p className="font-semibold">$10</p>
							</div>
						</div>
						<div className="flex border-b-1 py-4 "> 
							<img src={tree} alt="tree-pic" className="w-16 h-16 object-cover lg:w-20"/>
							<div className="pl-4">
								<p className="text-xl">sustainability</p>
								<p className="font-semibold">$10</p>
							</div>
						</div>
						
						<div className="flex border-b-1 py-4 "> 
							<img src={tree} alt="tree-pic" className="w-16 h-16 object-cover lg:w-20"/>
							<div className="pl-4">
								<p className="text-xl">sustainability</p>
								<p className="font-semibold">$10</p>
							</div>
						</div>
						<div className="flex border-b-1 py-4 "> 
							<img src={tree} alt="tree-pic" className="w-16 h-16 object-cover lg:w-20"/>
							<div className="pl-4">
								<p className="text-xl">sustainability</p>
								<p className="font-semibold">$10</p>
							</div>
						</div>
						
						<div className="flex border-b-1 py-4 "> 
							<img src={tree} alt="tree-pic" className="w-16 h-16 object-cover lg:w-20"/>
							<div className="pl-4">
								<p className="text-xl">sustainability</p>
								<p className="font-semibold">$10</p>
							</div>
						</div>
						<div className="flex border-b-1 py-4 "> 
							<img src={tree} alt="tree-pic" className="w-16 h-16 object-cover lg:w-20"/>
							<div className="pl-4">
								<p className="text-xl">sustainability</p>
								<p className="font-semibold">$10</p>
							</div>
						</div>
						
						<div className="flex border-b-1 py-4 "> 
							<img src={tree} alt="tree-pic" className="w-16 h-16 object-cover lg:w-20"/>
							<div className="pl-4">
								<p className="text-xl">sustainability</p>
								<p className="font-semibold">$10</p>
							</div>
						</div>
						<div className="flex border-b-1 py-4 "> 
							<img src={tree} alt="tree-pic" className="w-16 h-16 object-cover lg:w-20"/>
							<div className="pl-4">
								<p className="text-xl">sustainability</p>
								<p className="font-semibold">$10</p>
							</div>
						</div>
						
						<div className="flex border-b-1 py-4 "> 
							<img src={tree} alt="tree-pic" className="w-16 h-16 object-cover lg:w-20"/>
							<div className="pl-4">
								<p className="text-xl">sustainability</p>
								<p className="font-semibold">$10</p>
							</div>
						</div>
						<div className="flex border-b-1 py-4 "> 
							<img src={tree} alt="tree-pic" className="w-16 h-16 object-cover lg:w-20"/>
							<div className="pl-4">
								<p className="text-xl">sustainability</p>
								<p className="font-semibold">$10</p>
							</div>
						</div>
						
						<div className="flex border-b-1 py-4 "> 
							<img src={tree} alt="tree-pic" className="w-16 h-16 object-cover lg:w-20"/>
							<div className="pl-4">
								<p className="text-xl">sustainability</p>
								<p className="font-semibold">$10</p>
							</div>
						</div>
						<div className="flex border-b-1 py-4 "> 
							<img src={tree} alt="tree-pic" className="w-16 h-16 object-cover lg:w-20"/>
							<div className="pl-4">
								<p className="text-xl">sustainability</p>
								<p className="font-semibold">$10</p>
							</div>
						</div>
						
						<div className="flex border-b-1 py-4 "> 
							<img src={tree} alt="tree-pic" className="w-16 h-16 object-cover lg:w-20"/>
							<div className="pl-4">
								<p className="text-xl">sustainability</p>
								<p className="font-semibold">$10</p>
							</div>
						</div>
						<div className="flex border-b-1 py-4 "> 
							<img src={tree} alt="tree-pic" className="w-16 h-16 object-cover lg:w-20"/>
							<div className="pl-4">
								<p className="text-xl">sustainability</p>
								<p className="font-semibold">$10</p>
							</div>
						</div>
						
						<div className="flex border-b-1 py-4 "> 
							<img src={tree} alt="tree-pic" className="w-16 h-16 object-cover lg:w-20"/>
							<div className="pl-4">
								<p className="text-xl">sustainability</p>
								<p className="font-semibold">$10</p>
							</div>
						</div>
					</div>

					<div className="flex-1 py-4 pl-4 md:px-10  lg:h-60v lg:grid lg:place-content-center" style={{background: "#F8F9FA"}} >
						
							<p className="text-xl capitalize font-semibold">Total</p>
							<p>{cart && cart.reduce((cart, a) => cart.price + a, 0)}</p>
							<p className="text-2xl font-bold border-b-1 py-2 lg:text-4xl">$10</p>
							<button className=" mt-6 py-3 px-2 text-xl  bg-lgreen text-white rounded-md  hover-bg-lgreen hover:border-white hover:border-1 bd-lgreen border-1 lg:text-xl block capitalize lg:py-4 w-48 md:w-64 mx-auto lg:w-80">checkout</button>
						
					</div>
				</div>
		</div>
	</>
}

export default LearningPageCartNav;