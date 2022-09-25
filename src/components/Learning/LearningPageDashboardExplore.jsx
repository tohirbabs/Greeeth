import LearningCourseCard from "./LearningCourseCard";

const LearningPageDashboardExplore = ({courses, setSelectedCourse})=>{
	return  <div className="">	
	<h2 className="text-2xl mb-4 font-extrabold capitalize lg:text-3xl" id="home">explore available courses</h2>
	<p>you might also like this courses</p>
	{/* {courses && <div className="grid px-4 lg:px-0 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center my-16 2xl:grid-cols-4">
	<LearningCourseCard courseinfo={courses[0]} setSelectedCourse={setSelectedCourse} />
	<LearningCourseCard courseinfo={courses[0]} setSelectedCourse={setSelectedCourse}/>
	<LearningCourseCard courseinfo={courses[0]} setSelectedCourse={setSelectedCourse}/>
	<LearningCourseCard courseinfo={courses[0]} setSelectedCourse={setSelectedCourse}/>
	<LearningCourseCard courseinfo={courses[0]} setSelectedCourse={setSelectedCourse}/>
	<LearningCourseCard courseinfo={courses[0]} setSelectedCourse={setSelectedCourse}/>
	<LearningCourseCard courseinfo={courses[0]} setSelectedCourse={setSelectedCourse}/>
	<LearningCourseCard courseinfo={courses[0]} setSelectedCourse={setSelectedCourse}/>
	<LearningCourseCard courseinfo={courses[0]} setSelectedCourse={setSelectedCourse}/>
	
</div>	} */}

<div className="grid px-4 lg:px-0 md:grid-cols-2 lg:grid-cols-3 gap-8  justify-center mt-10 lg:mt-16">
				{
					courses && courses.map((course) => <LearningCourseCard courseinfo={course} setSelectedCourse={setSelectedCourse} />
				)
				}
				</div>
</div>
}
export default LearningPageDashboardExplore;