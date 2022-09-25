import { Link } from "react-router-dom";
import LearningCourseCard from "./LearningCourseCard";

const LearningPageDashboardHome = ({courses, setSelectedCourse})=>{

	return <div className="mb-16">

		<h3 className="text-2xl lg:text-4xl font-semibold mb-4 capitalize ">welcome <span className="text-green-400">moses,</span></h3>
		<div className="hidden lg:flex bg-gray-200 h-75 justify-between px-10">
			<div className="flex flex-col">
				<p className="capitalize mt-10">last viewed</p>

				<h2 className="capitalize text-4xl font-bold mt-12">carbon offset</h2>

				<Link  to="/hello" className="block mt-15 capitalize text-lgreen text-lg">continue course</Link>
			</div>
			<div className="w-60 h-60 rounded-full border-40 border-green-500  self-center"></div>

		</div>

		<div className="lg:flex justify-between lg:my-30">
			<div>
				<h2 className=" text-2xl font-bold lg:text-3xl capitalize">
				Offset your carbon footprint with Greeeth
				</h2>
				<p className="text-md mt-4 max-w-xl">The best way for individuals and organizations to plant trees, offset their carbon footprint to save the planet.</p>
			</div>

			<button className=" mt-8 bg-lgreen p-2 px-10 text-white self-center" >plant now</button>
		</div>

		<div className="flex flex-col lg:justify-between lg:flex-row capitalize gap-3 pt-8 mb-8 ">
			<div>
				<h2 className="text-2xl lg:text-4xl font-bold">recommended for you</h2>
				<small>you might also like these courses</small>
				</div>
				<a className="self-end py-2 px-5 bg-lgreen lg:bg-white lg:text-black text-white rounded-lg lg:hover:text-white hover-bg-lgreen hover:border-white hover:border-1 bd-lgreen border-1 lg:text-xl" href="/learning/all">explore courses</a>
			</div>

			
			<div className="grid px-4 lg:px-0 md:grid-cols-2 lg:grid-cols-3 gap-8  justify-center">
				<LearningCourseCard courseinfo={courses[0]} setSelectedCourse={setSelectedCourse} />
				<LearningCourseCard courseinfo={courses[1]} setSelectedCourse={setSelectedCourse}/>
				<LearningCourseCard courseinfo={courses[2]} setSelectedCourse={setSelectedCourse}/>
				</div>
			

	</div>
			
}

export default LearningPageDashboardHome;