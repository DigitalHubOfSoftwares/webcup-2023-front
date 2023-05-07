import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface footerProps {
	app_name: string | undefined;
	IsLoggedIn?: boolean;
}

const MainFooter: React.FC<footerProps> = ({ app_name = 'DHS', IsLoggedIn}) => {
	return (
		<footer className="p-4 bg-[#8f00ff]/[.3] backdrop-blur sm:p-6">
			<div className="mx-auto max-w-screen-xl">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<Link href="https://flowbite.com" className="flex items-center">
							<Image src={process.env.NEXT_PUBLIC_PREFIX_URL + '/assets/images/idi-logo.jpg'} width={135} height={100} className="mr-3 h-8 rounded" alt="FlowBite Logo" />
							<span className="self-center text-2xl hidden font-bold whitespace-nowrap">{ app_name }</span>
						</Link>
						<span className="text-sm text-white sm:text-center">© 2023 <Link href="https://flowbite.com" className="hover:underline">System Aliens™</Link>. All Rights Reserved.
						</span>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-bold text-white uppercase">Quick Links</h2>
						<ul>
							<li>
								<Link href="blog" className="hover:underline">Suggestion For Nightmares</Link>
							</li>
						</ul>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
						<div>
							<h2 className="mb-6 text-sm font-bold text-white uppercase">Quick Links</h2>
							<ul className="text-white">
								<li className="mb-4">
									<Link href="blog" className="hover:underline">Blog</Link>
								</li>
								<li className="mb-4">
									<Link href="/" className="hover:underline">Try Onirix</Link>
								</li>
								{IsLoggedIn == true && (
									<li className="mb-4">
										<Link href="journal" className="hover:underline">View Journal</Link>
									</li>
								)}
								<li className="mb-4">
									<Link href="faq" className="hover:underline">FAQ</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="my-3 border-gray-200 sm:mx-auto lg:my-8" />
				<div className="sm:flex sm:items-center sm:justify-between">
					
					<div className='flex flex-col items-center justify-center'>
						<span className="text-sm font-bold text-white uppercase">Disclamer</span>
						<span className='text-[12px] text-center'>Onirix is an AI-powered dream analysis tool that provides personalized predictions and insights based on the information provided by users. While we strive to provide accurate and reliable predictions, we cannot guarantee the accuracy or reliability of the information provided. The predictions provided by Onirix are based solely on the information submitted by users and are not intended to replace professional advice or medical diagnosis. If you are experiencing any medical or mental health concerns, we recommend that you consult with a qualified healthcare professional. Onirix is not responsible for any actions taken or decisions made based on the predictions provided by our AI tool</span>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default MainFooter;