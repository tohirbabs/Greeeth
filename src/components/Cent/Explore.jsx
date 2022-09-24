import CourseCard from "./CourseCard";
import windmill from "./assets/windmill.svg";
import people from "./assets/people.svg";
import ImageCard from "./ImageCard";

const Explore = () => {
  return (
    <section>
      <header>
        <h1>Explore Available Courses</h1>
        <p>You might also like these courses</p>
      </header>
      <div className="flex flex-col mb-4 md:flex-row md:gap-6 md:flex-wrap">
        <ImageCard image={people} title="Sustainability" />
        <ImageCard image={people} title="Sustainability" />
        <ImageCard image={people} title="Sustainability" />
        <ImageCard image={people} title="Sustainability" />
        <ImageCard image={people} title="Sustainability" />
        <ImageCard image={people} title="Sustainability" />
        <ImageCard image={people} title="Sustainability" />
        <ImageCard image={people} title="Sustainability" />
        <ImageCard image={people} title="Sustainability" />
      </div>
    </section>
  );
};

export default Explore;
