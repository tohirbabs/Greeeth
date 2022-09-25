
import { Link } from "react-router-dom";

const blog = [
	{
		name:"What is Sustainability",
		date: "Aug 22, 2022",
		comments :" 10",
		text: "In the broadest sense, sustainability refers to the ability to maintain or support a process continuously over time. In business and policy contexts, ...",
		imgUrl : "../../../assets/learing-assets/planet.png",
	},
	{
		name:"Why we should save our Planet",
		date: "Aug 22, 2022",
		comments :" 10",
		text: "In the broadest sense, sustainability refers to the ability to maintain or support a process continuously over time. In business and policy contexts, ...",
		imgUrl : "../../../assets/learing-assets/planet2.png",
	},

	{
		name:"What is Sustainability",
		date: "Aug 22, 2022",
		comments :" 10",
		text: "In the broadest sense, sustainability refers to the ability to maintain or support a process continuously over time. In business and policy contexts, ...",
		imgUrl : "../../../assets/learing-assets/planet3.png",
	}
]
const LearningPageBlog = ()=>{
	
	return <section className="container mx-auto px-4 md:px-8  my-10 lg:px-12">
			<div className="flex flex-col lg:justify-between lg:flex-row capitalize gap-3 pt-8 mb-8">
				<h2 className="text-3xl lg:text-4xl font-bold">our latest blog</h2>	
				<a className="self-end py-2 px-5 bg-lgreen lg:bg-white lg:text-black text-white rounded-lg lg:hover:text-white hover-bg-lgreen hover:border-white hover:border-1 bd-lgreen border-1 lg:text-xl" href="/learning/all">Go to blog</a>
			</div>
			<div className="grid px-4 lg:px-0 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
				{blog.map((blog)=>(<div className="shadow-lg overflow-hidden rounded-lg text-base" >
					<Link to="/#"><img  src={blog.imgUrl} alt="planet" className="w-full object-cover h-60"/></Link>
					<div className="p-4 text-left">
						<div className="flex gap-8">
							<span>{blog.date}</span>
							<span>{blog.comments} comments</span>
						</div>
						<h3 className=" text-xl font-bold my-2">{blog.name}</h3>
						<p className="pb-4">{blog.text}</p>
						<Link to="/#"><span>Read more</span></Link>
					</div>
				</div>))}
				
			</div>

	</section>
}

export default LearningPageBlog;
