const LearningPageCheckout = ()=>{
	return <div className="pt-10 md:pt-12 lg:pt-16">
		<h2 className="capitalize text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">payment method</h2>
		<p className="md:text-xl">Please select your best payment method</p>
		<div className="pt-16 md:pt-20 ">
			<button className="py-4 px-2 text-xl capitalize font-bold  bg-lgreen text-white rounded-md  hover-bg-lgreen hover:border-white hover:border-1  border w-3/4 mx-auto lg:max-w-3xl lg:py-6 lg:text-2xl block mb-4 ">paypal</button>
			<button className="py-4 px-2 text-xl capitalize font-bold  bg-lgreen text-white rounded-md  hover-bg-lgreen hover:border-white hover:border-1  border w-3/4 mx-auto lg:max-w-3xl lg:py-6 lg:text-2xl block mb-4 ">stripe</button>
			<button className="py-4 px-2 text-xl capitalize font-bold  bg-lgreen text-white rounded-md  hover-bg-lgreen hover:border-white hover:border-1  border w-3/4 mx-auto lg:max-w-3xl lg:py-6 lg:text-2xl block mb-4 ">credit card</button>
		</div>
	</div>
}

export default LearningPageCheckout;