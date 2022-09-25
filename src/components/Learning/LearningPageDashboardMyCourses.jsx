import { Link } from "react-router-dom";

const LearningPageDashboardMyCourses = () =>{
	return <div className="w-full">
		<h2 className="text-2xl mb-4 font-extrabold capitalize lg:text-3xl" id="home">all courses</h2>
		<p className="mt-12 text-lg">You do not have any course yet</p>
		<small>Courses that you buy will appear here</small>

		<Link to={"/learning/explore"} className="block mt-8 text-lgreen text-lg">Click to buy a course</Link>
	</div>
}

export default LearningPageDashboardMyCourses;