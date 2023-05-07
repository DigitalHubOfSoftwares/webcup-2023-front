import React, { useEffect, useState } from 'react';
import Layout from '@/src/components/Layout';
import { useRouter } from "next/router";
import HeroSection from '@/src/components/HeroSection/HeroSection';
import Link from 'next/link';

export default function Blog() {
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
				<HeroSection/>
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
