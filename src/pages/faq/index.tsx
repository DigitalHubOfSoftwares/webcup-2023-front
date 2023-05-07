import React, { useEffect, useState, useRef } from 'react';
import Layout from '@/src/components/Layout';
import { useRouter } from "next/router";
import { Accordion } from "flowbite";
import type { AccordionOptions, AccordionItem, AccordionInterface } from "flowbite";

export default function FAQ() {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
        const checkLoggedIn = async () => {
			const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API_DATA as string, {
				credentials: 'include',
			});

			if (!response.ok) {
				// Handle error here
				console.log("Error: ", response.status);
				// router.push(
				// {
				// 	pathname: "/login",
				// },
				// "login"
				// );
				setIsLoggedIn(false);
			}

			const data = await response.json();
			console.log('Data from api:', data);
		
			if (data.message == "unauthorized") {
			//   router.push(
			//   {
			//    pathname: "/login",
			//   },
			//   "login"
			//   );
				setIsLoggedIn(false);
			} else {
			  	setIsLoggedIn(true);
			}
		}
		checkLoggedIn();
	}, []);
	
	const logOut = async () => {
		const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API_LOGOUT as string, {
			credentials: 'include',
		});

		setIsLoggedIn(false);
	}

	return (
		<Layout title={'Welcome To ' + process.env.NEXT_PUBLIC_APP_NAME} logOut={logOut} IsLoggedIn={isLoggedIn}>
			<div className='main-blog-container'>
				<section className="">
					<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
						<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">FAQ</h1>
					</div>
				</section>
                <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">					
				<h2 id="accordion-flush-heading-1">
   <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
       <span>How does Onirix work?  </span>
       <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
   </button>
</h2>
<div id="accordion-flush-body-1" className="" aria-labelledby="accordion-flush-heading-1">
   <div className="py-5 border-b border-gray-200 dark:border-gray-700">
       <p className="mb-2 text-gray-500 dark:text-gray-400">Onirix uses a combination of natural language processing and machine learning algorithms to analyze and decode the content of your dreams, identifying patterns and themes that may indicate potential premonitions about your future.</p>
       <p className="text-gray-500 dark:text-gray-400">&nbsp;</p>
   </div>
</div>

<h2 id="accordion-flush-heading-2">
   <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
       <span>Is Onirix accurate?   </span>
       <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
   </button>
</h2>
<div id="accordion-flush-body-2" className="" aria-labelledby="accordion-flush-heading-2">
   <div className="py-5 border-b border-gray-200 dark:border-gray-700">
       <p className="mb-2 text-gray-500 dark:text-gray-400">Onirix&apos;s predictions are based on the content of your dreams and are not guaranteed to be 100% accurate. However, our technology has been extensively tested and validated through rigorous research studies conducted by the International Dreams Institute.</p>
       <p className="text-gray-500 dark:text-gray-400">&nbsp;</p>
   </div>
</div>
<h2 id="accordion-flush-heading-3">
   <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
       <span>How do I submit my dream to Onirix?   </span>
       <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
   </button>
</h2>
<div id="accordion-flush-body-3" className="" aria-labelledby="accordion-flush-heading-3">
   <div className="py-5 border-b border-gray-200 dark:border-gray-700">
       <p className="mb-2 text-gray-500 dark:text-gray-400">Submitting your dream to Onirix is simple and easy. Just visit our user-friendly website and provide a description of your dream. Our algorithms will analyze your dream and provide you with a detailed report of its findings.</p>
       <p className="text-gray-500 dark:text-gray-400">&nbsp;</p>
   </div>
</div>


<h2 id="accordion-flush-heading-4">
   <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
       <span>Can Onirix interpret all types of dreams?   </span>
       <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
   </button>
</h2>
<div id="accordion-flush-body-4" className="" aria-labelledby="accordion-flush-heading-4">
   <div className="py-5 border-b border-gray-200 dark:border-gray-700">
       <p className="mb-2 text-gray-500 dark:text-gray-400">Onirix is designed to analyze and decode a wide variety of dream content. However, the accuracy of its predictions may vary depending on the complexity and detail of the dream description provided.</p>
       <p className="text-gray-500 dark:text-gray-400">&nbsp;</p>
   </div>
</div>


<h2 id="accordion-flush-heading-5">
   <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
       <span>Is my personal information secure?   </span>
       <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
   </button>
</h2>
<div id="accordion-flush-body-5" className="" aria-labelledby="accordion-flush-heading-5">
   <div className="py-5 border-b border-gray-200 dark:border-gray-700">
       <p className="mb-2 text-gray-500 dark:text-gray-400">Yes, we take the privacy and security of our users very seriously. All data submitted to our website is encrypted and stored securely, ensuring the confidentiality of your personal information and dream content.</p>
       <p className="text-gray-500 dark:text-gray-400">&nbsp;</p>
   </div>
</div>


<h2 id="accordion-flush-heading-6">
   <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
       <span>Can I use Onirix to predict specific events?</span>
       <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
   </button>
</h2>
<div id="accordion-flush-body-6" className="" aria-labelledby="accordion-flush-heading-6">
   <div className="py-5 border-b border-gray-200 dark:border-gray-700">
       <p className="mb-2 text-gray-500 dark:text-gray-400">Onirix&apos;s predictions are based on the content of your dreams and may not be able to provide specific information about individual events. However, our reports provide personalized insights and predictions about upcoming events in your life.
       </p>
       <p className="text-gray-500 dark:text-gray-400">&nbsp;</p>
   </div>
</div>
<h2 id="accordion-flush-heading-7">
   <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
       <span>How much does Onirix cost?</span>
       <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
   </button>
</h2>
<div id="accordion-flush-body-7" className="" aria-labelledby="accordion-flush-heading-7">
   <div className="py-5 border-b border-gray-200 dark:border-gray-700">
       <p className="mb-2 text-gray-500 dark:text-gray-400">Onirix is currently available for free on our website. However, you can use premium features and services ( like API’s) for an additional fee.Please contact us for more details.
       </p>
       <p className="text-gray-500 dark:text-gray-400">&nbsp;</p>
   </div>
</div>


<h2 id="accordion-flush-heading-8">
   <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
       <span>How often can I submit my dream to Onirix?</span>
       <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
   </button>
</h2>
<div id="accordion-flush-body-8" className="" aria-labelledby="accordion-flush-heading-8">
   <div className="py-5 border-b border-gray-200 dark:border-gray-700">
       <p className="mb-2 text-gray-500 dark:text-gray-400">You can submit your dream to Onirix as often as you like. However, we recommend waiting at least a few days between submissions to ensure accurate and reliable results.
       </p>
       <p className="text-gray-500 dark:text-gray-400">&nbsp;</p>
   </div>
</div>


<h2 id="accordion-flush-heading-9">
   <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
       <span>Can I share my Onirix report with others?</span>
       <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
   </button>
</h2>
<div id="accordion-flush-body-9" className="" aria-labelledby="accordion-flush-heading-9">
   <div className="py-5 border-b border-gray-200 dark:border-gray-700">
       <p className="mb-2 text-gray-500 dark:text-gray-400"> Yes, you can share your Onirix report with friends and family. However, we recommend using discretion and not relying solely on Onirix for important life decisions.


       </p>
       <p className="text-gray-500 dark:text-gray-400">&nbsp;</p>
   </div>
</div>


<h2 id="accordion-flush-heading-10">
   <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
       <span>Can I share my Onirix report with others?</span>
       <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
   </button>
</h2>
<div id="accordion-flush-body-10" className="" aria-labelledby="accordion-flush-heading-10">
   <div className="py-5 border-b border-gray-200 dark:border-gray-700">
       <p className="mb-2 text-gray-500 dark:text-gray-400"> Yes, you can share your Onirix report with friends and family. However, we recommend using discretion and not relying solely on Onirix for important life decisions.


       </p>
       <p className="text-gray-500 dark:text-gray-400">&nbsp;</p>
   </div>
</div>


<h2 id="accordion-flush-heading-11">
   <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
       <span>What if I don&apos;t remember my dream?</span>
       <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
   </button>
</h2>
<div id="accordion-flush-body-11" className="" aria-labelledby="accordion-flush-heading-11">
   <div className="py-5 border-b border-gray-200 dark:border-gray-700">
       <p className="mb-2 text-gray-500 dark:text-gray-400"> If you are unable to recall your dream, Onirix may not be able to provide accurate predictions. We recommend keeping a dream journal or practicing mindfulness techniques to improve dream recall.


       </p>
       <p className="text-gray-500 dark:text-gray-400">&nbsp;</p>
   </div>
</div>

                </section>
			</div>
		</Layout>
	);
}
