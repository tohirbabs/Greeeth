import React, {useState, useRef, useEffect} from "react";
const BenefitsSectionCarousel = ({children})=>{
	const carouselContainer = useRef()
	const [currentIndex, setCurrentIndex] = useState(0)
	const [scrollNum, setScrollNum] = useState(0)
	useEffect(()=> {
	  carouselContainer.current.style.transform = `translateX(-${currentIndex * carouselContainer.current.clientWidth}px)`;
	}, [currentIndex])


	
	const movePrev = () => {
		if (currentIndex > 0) {
		  setCurrentIndex((prevState) => prevState - 1);
		}
	  };
	
	  const moveNext = () => {
		if (
		  carousel.current !== null &&
		  currentIndex !== scrollNum
		) {
		  setCurrentIndex((prevState) => prevState + 1);
		}

	  };

	useEffect(()=>{
		if(carouselContainer.current) {
			if(carouselContainer.current.children.item(0)?.clientWidth < carouselContainer.current.clientWidth) {
				// desktop will scroll half the number of times of mobile
				setScrollNum(children.length/2)
			}else {
				setScrollNum(children.length)

			}
		}
	}, [])
		

	  
	return <section className=""><div className="text-left  container  mx-auto overflow-hidden">
	<div className="flex flex-row   w-full flex-nowrap  relative  transition-transform duration-500 pb-10 pt-10 " ref={carouselContainer}>
		{children}
	</div>
	</div>
	<div className="flex mx-auto w-max gap-8 mb-16 lg:my-14 lg:mb-24">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-24 disabled:opacity-25" onClick={()=>setCurrentIndex(currentIndex - 1 )} disabled={currentIndex === 0}>Previous</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-24 disabled:opacity-25" onClick={()=>setCurrentIndex(currentIndex + 1 )} disabled={currentIndex === scrollNum - 1}>Next</button>
	</div>
	</section>
}

export default BenefitsSectionCarousel;