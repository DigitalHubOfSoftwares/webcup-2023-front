import React, { useEffect, useState, useRef } from 'react';
import Layout from '@/src/components/Layout';
import { useRouter } from "next/router";
import Link from 'next/link';

export default function Blog() {
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
						<Link href="/register" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
							<span className="text-xs rounded-full text-white px-4 py-1.5 mr-3" style={{ backgroundColor: '#917FB3' }}>New User?</span> <span className="text-sm font-medium">Register Here</span> 
							<svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
						</Link>
						<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Turn Dreams Into Reality Today</h1>
						<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Unlock the Power of Your Dreams with Onirix: Get Personalized Premonitory Predictions and Discover Your Future Today!</p>
					</div>
				</section>
				<section id="rmtcontent" className="">
					<div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
						<div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
							<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Decode Your Dreams, Change Tomorrow</h2>
							<p className="mb-4">Welcome to Onirix, the revolutionary dream analysis platform that helps you decode your dreams and change your tomorrow. Our advanced artificial intelligence technology provides personalized premonitory predictions based on your unique dreams, helping you gain a deeper understanding of your subconscious mind and unlock new insights about your future. By decoding your dreams, you can make more informed decisions, take control of your life, and achieve your dreams. Join us on this exciting journey and discover the power of your dreams with Onirix.</p>
						</div>
						<div className="grid grid-cols-2 gap-4 mt-8">
							<img className="w-full rounded-lg" src="https://drive.google.com/uc?id=1Ln2XIhBcNbTL0VLb5HVzPJibwZQjp422" alt="office content 1"/>
							<img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://drive.google.com/uc?id=1HO6G9PCS1aUie9zPgA_0Hdh9obywRg27" alt="office content 2"/>
						</div>
					</div>
				</section>
				<section id="rmtcontent" className="">
					<div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
						<div className="grid grid-cols-2 gap-4 mt-8">
							<img className="w-full rounded-lg" src="https://drive.google.com/uc?id=1wq1dV7fHQYtC-SI2LZZp2zKoIeO5V8aH" alt="office content 1"/>
							<img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://drive.google.com/uc?id=1JL7TwT6bsJ5SJoAoAE6y7623Uiq4pBMg" alt="office content 2"/>
						</div>
						<div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
							<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Unlock Your True Potential with Onirix: Decode the Messages Hidden Within Your Dreams</h2>
							<p className="mb-4">At Onirix, we believe that dreams hold the key to unlocking our true potential. Our advanced artificial intelligence technology helps you decode the messages hidden within your dreams, providing you with valuable insights and guidance for the future. Whether you&apos;re seeking to improve your relationships, advance your career, or enhance your spiritual growth, Onirix can help you tap into your inner wisdom and achieve your goals. Join us on this journey of self-discovery and unlock the power of your dreams with Onirix.</p>
						</div>
					</div>
				</section>
				<section id="rmtcontent" ref={myRef} className="" style={{ margin: '0 `auto`', width: '500px' }}>
					<div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
						<div className="flex items-center justify-between mb-4">
							<h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Pricing Plan</h5>
					</div>
					<div className="flow-root">
							<ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
								<li className="py-3 sm:py-4">
									<div className="flex items-center space-x-4">
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
												Free Plan
											</p>
										</div>
										<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
											$0
										</div>
									</div>
								</li>
								<li className="py-3 sm:py-4">
									<div className="flex items-center space-x-4">
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
												Professional Plan
											</p>
											<p className="text-sm text-gray-500 truncate dark:text-gray-400">
												Unlimited APIs
											</p>
										</div>
										<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
											Contact Us
										</div>
									</div>
								</li>
							</ul>
					</div>
					</div>
				</section>
				<div className="grid border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:grid-cols-2">
					<figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
						<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white">Accurate Dream Analysis for Valuable Insights</h3>
						<p className="my-4">Onirix decoded my dreams with accuracy, providing valuable insights. Highly recommend!</p>
						</blockquote>
					</figure>
					<figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
						<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white">Take Control of Your Future with Onirix&apos;s Spot-On Predictions</h3>
						<p className="my-4">Thanks to Onirix, I feel more in control of my future. The personalized predictions are spot-on!</p>
						</blockquote>
					</figure>
					<figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
						<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white">The Easy-to-Use Dream Analysis Website with Clear and Accurate Results</h3>
						<p className="my-4">The Onirix website is easy to use and provides clear and accurate results. Highly recommended.</p>
						</blockquote>
					</figure>
					<figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
						<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white">Get Surprisingly Accurate Predictions with Onirix&apos;s Personalized Dream Analysis </h3>
						<p className="my-4">Onirix provides personalized predictions that are surprisingly accurate. Highly impressed!</p>
						</blockquote>   
					</figure>
				</div>
			</div>
		</Layout>
	);
}
