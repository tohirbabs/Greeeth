import { Link } from "react-router-dom";

const LearningPageDashboardCertificates = () =>{
	
	return <div>
		<h2 className="text-2xl mb-4 font-extrabold capitalize lg:text-3xl" id="home">Certificates</h2>
		<p className="mt-12 text-lg">You have not completed any course yet</p>
		<small>Certificates to courses you have completed will apear here</small>

		<Link to={"/learning/explore"} className="block mt-8 text-lgreen text-lg">Click to buy a course</Link>
	</div>
}

export default LearningPageDashboardCertificates;
