
import { useRef, useState, useEffect} from "react"
import student from "../../../assets/learing-assets/student.png"
import student2 from "../../../assets/learing-assets/student2.png"



const LearningPageTestimonials  = () =>{
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
		console.log(carouselContainer.current.children)
		if(carouselContainer.current) {
			if(carouselContainer.current.children.item(0)?.clientWidth < carouselContainer.current.clientWidth) {
				// desktop will scroll half the number of times of mobile
				setScrollNum(carouselContainer.current.children.length/2)
			}else {
				setScrollNum(carouselContainer.current.children.length)

			}
		}
	}, [])
		
	return <section className="relative hidden lg:block">
		<div className="text-left  max-w-3xl  mx-auto overflow-hidden">
			<div className="flex flex-row   w-full flex-nowrap  relative  transition-transform duration-500 pb-10 pt-10 " ref={carouselContainer}>
				<div className="flex gap-8 w-full flex-none">
						<img src={student} alt="student" className="w-80"/>
						<div className="capitalize text-left pt-8 flex-none ">
							<h2 className="text-3xl font-bold">student feedback</h2>

							<p className="font-semibold text-xl pt-10">comfort doe</p>
							<p className="">student</p>
							<p>MIT, Cambridge, USA</p>

							<p className="normal-case pt-10 w-5/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur quam enim viverra maecenas ultricies ullamcorper id nunc.</p>

							
							<div className="flex items-center pt-4">
								<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6"  >
								<path d="M13.4187 1.09639C13.6117 0.5612 14.3685 0.561199 14.5615 1.09639L17.5832 9.47588C17.6677 9.71006 17.8864 9.86902 18.1352 9.87696L27.0384 10.1613C27.607 10.1795 27.8409 10.8993 27.3915 11.2483L20.3559 16.7115C20.1593 16.8641 20.0757 17.1213 20.145 17.3604L22.6258 25.9157C22.7843 26.4621 22.1719 26.907 21.7012 26.5874L14.3313 21.5844C14.1253 21.4446 13.8549 21.4446 13.6489 21.5844L6.279 26.5874C5.80829 26.907 5.19595 26.4621 5.35439 25.9157L7.83515 17.3604C7.90448 17.1213 7.82091 16.8641 7.62429 16.7115L0.588668 11.2483C0.139309 10.8993 0.373201 10.1795 0.941835 10.1613L9.84495 9.87696C10.0938 9.86902 10.3125 9.71006 10.397 9.47588L13.4187 1.09639Z" fill="#FDD246"/>
								</svg>
								<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6" >
								<path d="M13.4187 1.09639C13.6117 0.5612 14.3685 0.561199 14.5615 1.09639L17.5832 9.47588C17.6677 9.71006 17.8864 9.86902 18.1352 9.87696L27.0384 10.1613C27.607 10.1795 27.8409 10.8993 27.3915 11.2483L20.3559 16.7115C20.1593 16.8641 20.0757 17.1213 20.145 17.3604L22.6258 25.9157C22.7843 26.4621 22.1719 26.907 21.7012 26.5874L14.3313 21.5844C14.1253 21.4446 13.8549 21.4446 13.6489 21.5844L6.279 26.5874C5.80829 26.907 5.19595 26.4621 5.35439 25.9157L7.83515 17.3604C7.90448 17.1213 7.82091 16.8641 7.62429 16.7115L0.588668 11.2483C0.139309 10.8993 0.373201 10.1795 0.941835 10.1613L9.84495 9.87696C10.0938 9.86902 10.3125 9.71006 10.397 9.47588L13.4187 1.09639Z" fill="#FDD246"/>
								</svg>
								<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6" >
								<path d="M13.4187 1.09639C13.6117 0.5612 14.3685 0.561199 14.5615 1.09639L17.5832 9.47588C17.6677 9.71006 17.8864 9.86902 18.1352 9.87696L27.0384 10.1613C27.607 10.1795 27.8409 10.8993 27.3915 11.2483L20.3559 16.7115C20.1593 16.8641 20.0757 17.1213 20.145 17.3604L22.6258 25.9157C22.7843 26.4621 22.1719 26.907 21.7012 26.5874L14.3313 21.5844C14.1253 21.4446 13.8549 21.4446 13.6489 21.5844L6.279 26.5874C5.80829 26.907 5.19595 26.4621 5.35439 25.9157L7.83515 17.3604C7.90448 17.1213 7.82091 16.8641 7.62429 16.7115L0.588668 11.2483C0.139309 10.8993 0.373201 10.1795 0.941835 10.1613L9.84495 9.87696C10.0938 9.86902 10.3125 9.71006 10.397 9.47588L13.4187 1.09639Z" fill="#FDD246"/>
								</svg>
								<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6" >
								<path d="M13.4187 1.09639C13.6117 0.5612 14.3685 0.561199 14.5615 1.09639L17.5832 9.47588C17.6677 9.71006 17.8864 9.86902 18.1352 9.87696L27.0384 10.1613C27.607 10.1795 27.8409 10.8993 27.3915 11.2483L20.3559 16.7115C20.1593 16.8641 20.0757 17.1213 20.145 17.3604L22.6258 25.9157C22.7843 26.4621 22.1719 26.907 21.7012 26.5874L14.3313 21.5844C14.1253 21.4446 13.8549 21.4446 13.6489 21.5844L6.279 26.5874C5.80829 26.907 5.19595 26.4621 5.35439 25.9157L7.83515 17.3604C7.90448 17.1213 7.82091 16.8641 7.62429 16.7115L0.588668 11.2483C0.139309 10.8993 0.373201 10.1795 0.941835 10.1613L9.84495 9.87696C10.0938 9.86902 10.3125 9.71006 10.397 9.47588L13.4187 1.09639Z" fill="#FDD246"/>
								</svg>
								<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6" >
								<path d="M13.4187 1.09639C13.6117 0.5612 14.3685 0.561199 14.5615 1.09639L17.5832 9.47588C17.6677 9.71006 17.8864 9.86902 18.1352 9.87696L27.0384 10.1613C27.607 10.1795 27.8409 10.8993 27.3915 11.2483L20.3559 16.7115C20.1593 16.8641 20.0757 17.1213 20.145 17.3604L22.6258 25.9157C22.7843 26.4621 22.1719 26.907 21.7012 26.5874L14.3313 21.5844C14.1253 21.4446 13.8549 21.4446 13.6489 21.5844L6.279 26.5874C5.80829 26.907 5.19595 26.4621 5.35439 25.9157L7.83515 17.3604C7.90448 17.1213 7.82091 16.8641 7.62429 16.7115L0.588668 11.2483C0.139309 10.8993 0.373201 10.1795 0.941835 10.1613L9.84495 9.87696C10.0938 9.86902 10.3125 9.71006 10.397 9.47588L13.4187 1.09639Z" fill="#FDD246"/>
								</svg>
							</div>				
						</div>
				</div> 
				<div className="flex gap-8 w-full flex-none">
								<img src={student2} alt="student" className="w-80"/>
								<div className="capitalize text-left pt-8 flex-none ">
									<h2 className="text-3xl font-bold">student feedback</h2>

									<p className="font-semibold text-xl pt-10">comfort doe</p>
									<p className="">student</p>
									<p>MIT, Cambridge, USA</p>

									<p className="normal-case pt-10 w-5/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur quam enim viverra maecenas ultricies ullamcorper id nunc.</p>

									
									<div className="flex items-center pt-4">
										<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6"  >
										<path d="M13.4187 1.09639C13.6117 0.5612 14.3685 0.561199 14.5615 1.09639L17.5832 9.47588C17.6677 9.71006 17.8864 9.86902 18.1352 9.87696L27.0384 10.1613C27.607 10.1795 27.8409 10.8993 27.3915 11.2483L20.3559 16.7115C20.1593 16.8641 20.0757 17.1213 20.145 17.3604L22.6258 25.9157C22.7843 26.4621 22.1719 26.907 21.7012 26.5874L14.3313 21.5844C14.1253 21.4446 13.8549 21.4446 13.6489 21.5844L6.279 26.5874C5.80829 26.907 5.19595 26.4621 5.35439 25.9157L7.83515 17.3604C7.90448 17.1213 7.82091 16.8641 7.62429 16.7115L0.588668 11.2483C0.139309 10.8993 0.373201 10.1795 0.941835 10.1613L9.84495 9.87696C10.0938 9.86902 10.3125 9.71006 10.397 9.47588L13.4187 1.09639Z" fill="#FDD246"/>
										</svg>
										<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6" >
										<path d="M13.4187 1.09639C13.6117 0.5612 14.3685 0.561199 14.5615 1.09639L17.5832 9.47588C17.6677 9.71006 17.8864 9.86902 18.1352 9.87696L27.0384 10.1613C27.607 10.1795 27.8409 10.8993 27.3915 11.2483L20.3559 16.7115C20.1593 16.8641 20.0757 17.1213 20.145 17.3604L22.6258 25.9157C22.7843 26.4621 22.1719 26.907 21.7012 26.5874L14.3313 21.5844C14.1253 21.4446 13.8549 21.4446 13.6489 21.5844L6.279 26.5874C5.80829 26.907 5.19595 26.4621 5.35439 25.9157L7.83515 17.3604C7.90448 17.1213 7.82091 16.8641 7.62429 16.7115L0.588668 11.2483C0.139309 10.8993 0.373201 10.1795 0.941835 10.1613L9.84495 9.87696C10.0938 9.86902 10.3125 9.71006 10.397 9.47588L13.4187 1.09639Z" fill="#FDD246"/>
										</svg>
										<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6" >
										<path d="M13.4187 1.09639C13.6117 0.5612 14.3685 0.561199 14.5615 1.09639L17.5832 9.47588C17.6677 9.71006 17.8864 9.86902 18.1352 9.87696L27.0384 10.1613C27.607 10.1795 27.8409 10.8993 27.3915 11.2483L20.3559 16.7115C20.1593 16.8641 20.0757 17.1213 20.145 17.3604L22.6258 25.9157C22.7843 26.4621 22.1719 26.907 21.7012 26.5874L14.3313 21.5844C14.1253 21.4446 13.8549 21.4446 13.6489 21.5844L6.279 26.5874C5.80829 26.907 5.19595 26.4621 5.35439 25.9157L7.83515 17.3604C7.90448 17.1213 7.82091 16.8641 7.62429 16.7115L0.588668 11.2483C0.139309 10.8993 0.373201 10.1795 0.941835 10.1613L9.84495 9.87696C10.0938 9.86902 10.3125 9.71006 10.397 9.47588L13.4187 1.09639Z" fill="#FDD246"/>
										</svg>
										<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6" >
										<path d="M13.4187 1.09639C13.6117 0.5612 14.3685 0.561199 14.5615 1.09639L17.5832 9.47588C17.6677 9.71006 17.8864 9.86902 18.1352 9.87696L27.0384 10.1613C27.607 10.1795 27.8409 10.8993 27.3915 11.2483L20.3559 16.7115C20.1593 16.8641 20.0757 17.1213 20.145 17.3604L22.6258 25.9157C22.7843 26.4621 22.1719 26.907 21.7012 26.5874L14.3313 21.5844C14.1253 21.4446 13.8549 21.4446 13.6489 21.5844L6.279 26.5874C5.80829 26.907 5.19595 26.4621 5.35439 25.9157L7.83515 17.3604C7.90448 17.1213 7.82091 16.8641 7.62429 16.7115L0.588668 11.2483C0.139309 10.8993 0.373201 10.1795 0.941835 10.1613L9.84495 9.87696C10.0938 9.86902 10.3125 9.71006 10.397 9.47588L13.4187 1.09639Z" fill="#FDD246"/>
										</svg>
										<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6" >
										<path d="M13.4187 1.09639C13.6117 0.5612 14.3685 0.561199 14.5615 1.09639L17.5832 9.47588C17.6677 9.71006 17.8864 9.86902 18.1352 9.87696L27.0384 10.1613C27.607 10.1795 27.8409 10.8993 27.3915 11.2483L20.3559 16.7115C20.1593 16.8641 20.0757 17.1213 20.145 17.3604L22.6258 25.9157C22.7843 26.4621 22.1719 26.907 21.7012 26.5874L14.3313 21.5844C14.1253 21.4446 13.8549 21.4446 13.6489 21.5844L6.279 26.5874C5.80829 26.907 5.19595 26.4621 5.35439 25.9157L7.83515 17.3604C7.90448 17.1213 7.82091 16.8641 7.62429 16.7115L0.588668 11.2483C0.139309 10.8993 0.373201 10.1795 0.941835 10.1613L9.84495 9.87696C10.0938 9.86902 10.3125 9.71006 10.397 9.47588L13.4187 1.09639Z" fill="#FDD246"/>
										</svg>
									</div>				
								</div>
				</div> 
			
				
			</div>
		</div>
	<div className="flex mx-auto w-max gap-8 mb-16 lg:my-14 lg:mb-24 absolute bottom-2 right-80">
          <button className="flex align-middle justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2  rounded w-24 disabled:bg-white" onClick={()=>setCurrentIndex(currentIndex - 1 )} disabled={currentIndex === 0}><svg className="w-8" width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.439339 13.0607C-0.146446 12.4749 -0.146446 11.5251 0.439339 10.9393L9.98528 1.3934C10.5711 0.807615 11.5208 0.807615 12.1066 1.3934C12.6924 1.97919 12.6924 2.92894 12.1066 3.51472L3.62132 12L12.1066 20.4853C12.6924 21.0711 12.6924 22.0208 12.1066 22.6066C11.5208 23.1924 10.5711 23.1924 9.98528 22.6066L0.439339 13.0607ZM51.5 13.5L1.5 13.5L1.5 10.5L51.5 10.5L51.5 13.5Z" fill="#008000"/>
</svg></button>
          <button className="flex align-middle justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2  rounded w-24 disabled:bg-white" onClick={()=>setCurrentIndex(currentIndex + 1 )} disabled={currentIndex === scrollNum - 1}><svg className="w-8" width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M51.5607 13.0607C52.1464 12.4749 52.1464 11.5251 51.5607 10.9393L42.0147 1.3934C41.4289 0.807615 40.4792 0.807615 39.8934 1.3934C39.3076 1.97919 39.3076 2.92894 39.8934 3.51472L48.3787 12L39.8934 20.4853C39.3076 21.0711 39.3076 22.0208 39.8934 22.6066C40.4792 23.1924 41.4289 23.1924 42.0147 22.6066L51.5607 13.0607ZM0.5 13.5L50.5 13.5L50.5 10.5L0.5 10.5L0.5 13.5Z" fill="#008000"/>
</svg></button>
	</div>
	</section>
}
 
export default LearningPageTestimonials

