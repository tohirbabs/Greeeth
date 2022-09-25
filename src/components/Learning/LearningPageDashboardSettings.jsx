import { Link } from "react-router-dom";

const LearningPageDashboardSettings = () =>{
	return 	<div className=" max-w-screen-2xl mx-auto">
		<div className="w-full lg:flex lg:flex-row lg:flex-nowrap flex-grow mb-16">
			<div className=" lg:block lg:flex-shrink lg:flex-grow-0 lg:h-screen lg:sticky  lg:top-0 lg:bottom-0 lg:w-60">			
				

				<div className="mt-10 text-left pl-2 pb-4 lg:pl-8 lg:pb-8">
					<Link to={"/learning/dashboard"} className="text-lgreen text-lg flex  items-center gap-2"> 
					<span>
					<svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4">
<path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.80761 10.4853 1.3934L0.939341 10.9393ZM23 10.5L2 10.5L2 13.5L23 13.5L23 10.5Z" fill="#028000"/>
</svg>
					</span>
					Go back</Link>
				</div>

				<div>
					<div className="w-40 h-40 rounded-full border-1 border-red-500 mx-auto">

					</div>
					<p className="text-xl capitalize font-semibold mt-4">moses</p>
					<small>moses@gmail.com</small>
				</div>
			</div>
			<main role="main" className="flex-grow pt-12 px-3 lg:text-left lg:pl-8 lg:pr-16 text-left">
				<div className="flex justify-between mb-10 items-center">
					<h2 className=" text-2xl lg:text-3xl capitalize font-bold">Profile setting</h2>
					<Link  to="/learning/settings" className="p-2 px-4 border-1 capitalize">account setting</Link>
				</div>
				<div>
					<h3 className="text-xl font-semibold capitalize border-b-1 pb-4">primary info</h3>

					<div className="p-4 border-1 w-full max-w-md  px-10 mt-4">
						moses
					</div>
					<div className="p-4 border-1 w-full max-w-md  px-10 mt-4">
						jr
					</div>
					<div className="p-4 border-1 w-full max-w-md  px-10 mt-4">
					moses@gmail.com
					</div>
				</div>
				<div>
					<h3 className="text-xl font-semibold capitalize border-b-1 pb-4 mt-10 mb-8">email settings</h3>
					<label htmlFor="currentemail" className="text-lg capitalize my-2 block">current email</label>
					<input id="email" value={""} placeholder={""} className="w-full max-w-md  border-1 p-4 px-10 block"/>
					<label htmlFor="newemail" className="text-lg capitalize mt-10 mb-2 block">new email</label>
					<input id="newemail" value={""} placeholder={""} className="w-full max-w-md  border-1 p-4 px-10 block"/>

					<button className="p-2 px-4 bg-lgreen text-white mt-8 capitalize">change email</button>	
				</div>

				<div>
					<h3 className="text-xl font-semibold capitalize border-b-1 pb-4 mt-10 mb-8">password settings</h3>

					<label htmlFor="currentemail" className="text-lg capitalize my-2 block" >current email</label>
					<input id="email" value={""} placeholder={""} className="w-full max-w-md  border-1 p-4 px-10 block"/>
					<label htmlFor="newemail" className="text-lg capitalize mt-10 mb-2 block">new email</label>
					<input id="newemail" value={""} placeholder={""} className="w-full max-w-md  border-1 p-4 px-10 block"/>

					<button className="p-2 px-4 bg-lgreen text-white mt-8 capitalize">change password</button>	
				</div>
			</main>
		</div>
	</div>
}

export default LearningPageDashboardSettings;