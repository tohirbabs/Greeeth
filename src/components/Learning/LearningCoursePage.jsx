import { useParams } from "react-router"

const LearningCoursePage = ({addToCart , selectedCourse}) => {
	
	
	return <div className="text-left ">
		<section className="w-screen h-screen lg:flex lg:justify-center lg:items-center lg:container lg:mx-auto lg:px-9" >
			<div className="relative flex flex-col items-center gap-18 h-full  lg:w-full  lg:h-5/6 lg:p-0  lg:justify-center lg:items-start lg:gap-0 z-3">
				<img src={selectedCourse.coursepic} alt="tree picture" className="absolute inset-0 w-full h-full object-cover -z-1 lg:rounded-2xl " />
				<div className="absolute -bottom-40 right-0 shadow-xl w-96  bg-white  p-6 rounded-md">
					<h3 className="text-4xl text-black pb-10 font-extrabold">${selectedCourse.price}</h3>
					<button className="self-end py-2 px-5 bg-lgreen  text-white lg:hover:text-white hover-bg-lgreen hover:border-white hover:border-1 bd-lgreen border-1  block  w-full capitalize lg:py-4 mb-5 text-center" href="#" onClick={()=>{
						addToCart(selectedCourse.courseid)
					}}>add to cart</button>
					<button className="self-end py-2 px-5 bg-lgreen  text-white lg:hover:text-white hover-bg-lgreen hover:border-white hover:border-1 bd-lgreen border-1  block  w-full capitalize lg:py-4 text-center" href="#">buy now</button>
				</div>
			</div>
		</section>
		<section className="lg:container lg:mx-auto lg:px-9 text-base mb-20">
			<h2 className="text-4xl font-extrabold capitalize">{selectedCourse.coursename}</h2>
			<p className="py-2">Greeth</p>
			<p className="pb-12 text-2xl font-extrabold">${selectedCourse.price}</p>
			<div className="w-3/6">
				<div>{selectedCourse.courseDescription}</div>
				<h3 className="text-xl capitalize font-bold pt-12 pb-2">what you will learn in this module</h3>
				<ol>
				{selectedCourse.moduleDescription.map((item)=> <li className="pl-4 pb-3">{item}</li>)}
				</ol>
			</div>
			
		</section>
	</div>
}

export default LearningCoursePage;