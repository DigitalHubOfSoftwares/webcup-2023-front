import React, { useEffect, useState, useRef } from 'react';
import Layout from '@/src/components/Layout';
import { useRouter } from "next/router";
import Link from 'next/link';

export default function Research() {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const router = useRouter();
	const myRef = useRef(null);
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
						<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Research</h1>
						<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                            The International Dreams Institute is a leading organization in dream studies that has made a groundbreaking discovery - dreams can predict the future! Using our advanced AI system, Onirix, we analyze and decode users&apos; dreams to provide personalized premonitory predictions about upcoming events. Our team of scientists and dream experts have conducted extensive research to refine Onirix&apos;s algorithms, ensuring the accuracy and reliability of its predictions. By harnessing the power of artificial intelligence, we provide individuals with a unique glimpse into their future and help them prepare for what&apos;s to come. Learn more about Onirix and our ongoing research projects on this page. Join us on this exciting journey and discover the power of your dreams!
                        </p>
					</div>
				</section>
                <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2013</time>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                The International Dreams Institute begins a large-scale study on the relationship between dream content and real-life events. 
                            
                                Over the next few years, the study collects data from thousands of participants around the world, using a combination of surveys, diaries, and interviews.
                            </p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2014</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Researchers at the International Dreams Institute begin to notice patterns in the data that suggest that dreams may be able to predict future events. They begin to develop algorithms and machine learning techniques to analyze dream content and identify potential premonitions.
                            </p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2016</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            The first version of Onirix is developed, using a combination of natural language processing and machine learning algorithms to analyze and interpret dream content. The system is tested extensively using data from the International Dreams Institute&apos;s ongoing research studies.
                            </p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dec 2017</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Onirix is used to predict several major real-life events, including the outcome of a political election and the occurrence of a natural disaster. The accuracy of these predictions is validated through rigorous testing and analysis.
                            </p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2020</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            The International Dreams Institute partners with technology experts to develop a user-friendly website where individuals can submit the description of their dreams and receive personalized predictions about their future. The website also provides information about the science of dreams and the technology behind Onirix.
                            </p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2023</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Onirix becomes widely available to the public, attracting millions of users from around the world. The International Dreams Institute continues to conduct research on the science of dreams and the implications of Onirix&apos;s predictive capabilities.
                            </p>
                        </li>
                    </ol>
                </section>
			</div>
		</Layout>
	);
}
