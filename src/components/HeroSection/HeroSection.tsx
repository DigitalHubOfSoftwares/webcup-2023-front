import Link from "next/link";
import React from "react";

const HeroSection = () => {
	return (
		<section className="relative h-[31rem] overflow-hidden">
				<video autoPlay muted loop className="absolute w-full object-cover z-0 blur-sm">
						<source src={process.env.NEXT_PUBLIC_PREFIX_URL + "/assets/videos/hero-section-vid.mp4"} type="video/mp4" />
				</video>
				<div className=" relative z-20 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
					<Link href="/register" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
						<span className="text-xs rounded-full text-white px-4 py-1.5 mr-3" style={{ backgroundColor: '#917FB3' }}>New User?</span> <span className="text-sm font-medium">Register Here</span> 
						<svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
					</Link>
					<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Turn Dreams Into Reality Today</h1>
					<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Unlock the Power of Your Dreams with Onirix: Get Personalized Premonitory Predictions and Discover Your Future Today!</p>
				</div>
		</section>
	);
}

export default HeroSection;