import { Link } from "react-router-dom";

const LearningDashboardAccountSettings = () =>{
	return <div>
				<div className="flex justify-between mb-10 items-center">
					<h2 className=" text-2xl lg:text-3xl capitalize font-bold">account settings</h2>
					<Link to="/learning/account" className="p-2 px-4 border-1 capitalize">view profile</Link>
				</div>
				
				<div>
					<h3 className=" text-lg lg:text-xl font-semibold capitalize border-b-1 pb-4 mt-10 mb-8">notification settings</h3>
					<div className="border-1 p-8">
						<div className="flex justify-between items-center">
							<p className="capitalize">disable notification</p>
							<svg width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6">
<path d="M27.3346 0H10.668C5.1513 0 0.667969 4.48333 0.667969 10C0.667969 15.5167 5.1513 20 10.668 20H27.3346C32.8513 20 37.3346 15.5167 37.3346 10C37.3346 4.48333 32.8513 0 27.3346 0ZM27.3346 16.6667H10.668C6.98463 16.6667 4.0013 13.6833 4.0013 10C4.0013 6.31667 6.98463 3.33333 10.668 3.33333H27.3346C31.018 3.33333 34.0013 6.31667 34.0013 10C34.0013 13.6833 31.018 16.6667 27.3346 16.6667ZM10.668 5C7.9013 5 5.66797 7.23333 5.66797 10C5.66797 12.7667 7.9013 15 10.668 15C13.4346 15 15.668 12.7667 15.668 10C15.668 7.23333 13.4346 5 10.668 5Z" fill="black"/>
</svg>
						</div>

						<div className="flex justify-between items-center mt-6">
							<p className="capitalize">message notification</p>
							<svg width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6">
<path d="M27.3346 0H10.668C5.1513 0 0.667969 4.48333 0.667969 10C0.667969 15.5167 5.1513 20 10.668 20H27.3346C32.8513 20 37.3346 15.5167 37.3346 10C37.3346 4.48333 32.8513 0 27.3346 0ZM27.3346 16.6667H10.668C6.98463 16.6667 4.0013 13.6833 4.0013 10C4.0013 6.31667 6.98463 3.33333 10.668 3.33333H27.3346C31.018 3.33333 34.0013 6.31667 34.0013 10C34.0013 13.6833 31.018 16.6667 27.3346 16.6667ZM10.668 5C7.9013 5 5.66797 7.23333 5.66797 10C5.66797 12.7667 7.9013 15 10.668 15C13.4346 15 15.668 12.7667 15.668 10C15.668 7.23333 13.4346 5 10.668 5Z" fill="black"/>
</svg>
						</div>
					</div> 
				</div>

				<div>
					<h3 className="text-lg lg:text-xl font-semibold capitalize border-b-1 pb-4 mt-10 mb-8">message settings</h3>
					<div className="border-1 p-8">
					<div className="flex justify-between items-center">
							<p className="capitalize">Disable Direct Messaging</p>
							<svg width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6">
<path d="M27.3346 0H10.668C5.1513 0 0.667969 4.48333 0.667969 10C0.667969 15.5167 5.1513 20 10.668 20H27.3346C32.8513 20 37.3346 15.5167 37.3346 10C37.3346 4.48333 32.8513 0 27.3346 0ZM27.3346 16.6667H10.668C6.98463 16.6667 4.0013 13.6833 4.0013 10C4.0013 6.31667 6.98463 3.33333 10.668 3.33333H27.3346C31.018 3.33333 34.0013 6.31667 34.0013 10C34.0013 13.6833 31.018 16.6667 27.3346 16.6667ZM10.668 5C7.9013 5 5.66797 7.23333 5.66797 10C5.66797 12.7667 7.9013 15 10.668 15C13.4346 15 15.668 12.7667 15.668 10C15.668 7.23333 13.4346 5 10.668 5Z" fill="black"/>
</svg>
						</div>
					</div>
					
			</div>
	</div>
}

export default LearningDashboardAccountSettings;