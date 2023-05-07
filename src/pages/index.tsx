import React, { useEffect, useState, useRef } from 'react';
import Layout from '@/src/components/Layout';
import { useRouter } from "next/router";
import HeroSection from '@/src/components/HeroSection/HeroSection';
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
				<HeroSection/>
				<section id="rmtcontent" className="">
					<div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
						<div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
							<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Onirix</h2>
							<p className="mb-4">
							&quot;Our state-of-the-art technology is the result of years of research and development by the International Dreams Institute, a leading organization in the field of dream studies.&quot;
							</p>
							<Link href="/onirix" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#81007f] hover:bg-[#BF13E3]/[.6] rounded-lg focus:ring-4 focus:outline-non">
							Try Onirix
							<svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</Link>
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
							<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">International Dreams Institute</h2>
							<p className="mb-4">International Dreams Institute provides individuals with a deeper understanding of their subconscious mind, tap into their inner wisdom, and unlock their full potential.</p>
							<a href="about_us" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#81007f] hover:bg-[#BF13E3]/[.6] rounded-lg focus:ring-4 focus:outline-none">
							Read more
							<svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</a>
						</div>
					</div>
				</section>
				<section id="rmtcontent" className="">
					<div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
						<div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
							<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Research</h2>
							<p className="mb-4">
							[...leading organization in dream studies that has made a groundbreaking discovery. Our team of scientists and dream experts have find a way to make dreams a reality]
							</p>
							<a href="research" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#81007f] hover:bg-[#BF13E3]/[.6] rounded-lg focus:ring-4 focus:outline-none ">
							Read more
							<svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</a>
						</div>
						<div className="grid grid-cols-2 gap-4 mt-8">
							<img className="w-full rounded-lg" src="https://drive.google.com/uc?id=1Ln2XIhBcNbTL0VLb5HVzPJibwZQjp422" alt="office content 1"/>
							<img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://drive.google.com/uc?id=1HO6G9PCS1aUie9zPgA_0Hdh9obywRg27" alt="office content 2"/>
						</div>
					</div>
				</section>
				<div>
				<div className="text-center">
				<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Partners</h2>
				</div>

					<div className="grid mb-8 border p-16 border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3">
				<figure className="flex flex-col m-2 items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800/[.6] dark:backdrop-blur-sm dark:border-gray-700">
					<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
					</blockquote>
					<figcaption className="flex items-center justify-center space-x-3">
					<img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://drive.google.com/uc?id=1-RZaK_9JeC-ob8trW4BE9HlpCHi-JrMC" alt="profile picture" />
					</figcaption>
				</figure>
				<figure className="flex flex-col m-2  items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800/[.6] dark:backdrop-blur-sm dark:border-gray-700">
					<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
					</blockquote>
					<figcaption className="flex items-center justify-center space-x-3">
					<img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://drive.google.com/uc?id=1_5dqbGRXyWY1qKW4kYH23PMlBai5ftG0" alt="profile picture" />
					</figcaption>
				</figure>
				<figure className="flex flex-col m-2  items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800/[.6] dark:backdrop-blur-sm dark:border-gray-700">
					<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
					</blockquote>
					<figcaption className="flex items-center justify-center space-x-3">
					<img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://drive.google.com/uc?id=17PSXdnI7j1TIRxXbEgQ_EnmQSJbNsBNL" alt="profile picture" />
					</figcaption>
				</figure>
				<figure className="flex flex-col m-2  items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800/[.6] dark:backdrop-blur-sm dark:border-gray-700">
					<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
					</blockquote>
					<figcaption className="flex items-center justify-center space-x-3">
					<img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://drive.google.com/uc?id=1FRC_ReWR9lDGCXH1zZJu4L43f-zq__5w" alt="profile picture" />
					</figcaption>
				</figure>
				<figure className="flex flex-col m-2  items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800/[.6] dark:backdrop-blur-sm dark:border-gray-700">
					<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
					</blockquote>
					<figcaption className="flex  items-center justify-center space-x-3">
					<img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://drive.google.com/uc?id=1EmH7eJtVooSFRmtmHbK2PEfxjo6Hxk0r" alt="profile picture" />
					</figcaption>
				</figure>
				<figure className="flex flex-col m-2  items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800/[.6] dark:backdrop-blur-sm dark:border-gray-700">
					<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
					</blockquote>
					<figcaption className="flex items-center justify-center space-x-3">
					<img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://drive.google.com/uc?id=1a45L35QOLrHUTJMJbhO6uyeFpaaxv6P4" alt="profile picture" />
					</figcaption>
				</figure>
				</div>
				</div>
				<section className="relative h-[31rem] overflow-hidden">
					<div className=" relative m-10 flex flex-col items-center justify-center z-20 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
						<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get Help and Support with Counseling and Nightmare Services</h1>
						<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Are you facing personal issues and feeling like you&apos;re trapped in a nightmare? You don&apos;t have to deal with it alone. Counseling can provide you a safe and supportive space to work through your challenges. Our experienced counselors can help you develop coping skills and gain new insights to improve your mental and emotional wellbeing. Take the first step towards a happier and healthier life by contacting us today to schedule an appointment.</p>
						<Link href="https://www.mayoclinic.org/diseases-conditions/nightmare-disorder/symptoms-causes/syc-20353515#:~:text=Depression%20and%20other%20mental%20health,be%20associated%20with%20having%20nightmares" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
							<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
								TRY MAYO CLINIC
							</span>
						</Link>
					</div>
				</section>
			</div>
		</Layout>
	);
}
