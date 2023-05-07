import Link from "next/link";
import React from "react";

const HeroSection = () => {
	return (
		<section className="relative h-[31rem] overflow-hidden">
				<video autoPlay muted loop className="absolute w-full object-cover z-0 blur-sm">
						<source src={process.env.NEXT_PUBLIC_PREFIX_URL + "/assets/videos/banner.mp4"} type="video/mp4" />
				</video>
				<div className=" relative flex flex-col items-center justify-center z-20 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
					<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Predict your future, one dream at a time with Onirix.</h1>
					<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Are you having dreams and wish to understand how it could affect you? Meet Onirix our AI which decodes your dreams and predicts your future!</p>
					<Link href="/" className="text-white w-48 h-15 font-bold text-3xl rounded-lg px-6 transition-all ease-in-out delay-50 bg-[#81007f] hover:bg-[#BF13E3]/[.6] hover:rounded-3xl focus:ring-4 focus:ring-primary-300 py-3.5 lg:py-2.5 mr-2 focus:outline-none duration-300">Try Onirix</Link>

				</div>
		</section>
	);
}

export default HeroSection;