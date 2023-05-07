import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface headerProps {
	app_name: string | undefined;
	logOut? : any;
	IsLoggedIn?: boolean;
}

const MainHeader: React.FC<headerProps> = ({ app_name = 'DHS', logOut, IsLoggedIn }) => {
	// const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    // const handleDarkModeToggle = () => {
    //     console.log("toggle DarkMode" + isDarkMode);
    //     if (isDarkMode == false) {
    //       document.documentElement.classList.add('dark');
    //       localStorage.setItem('color-mode', 'dark');
    //       setIsDarkMode(true);
    //     } else {
    //       document.documentElement.classList.remove('dark');
    //       localStorage.setItem('color-mode', 'light');
    //       setIsDarkMode(false);
    //     }
    // }

	return (
		<header>
			<nav className="bg-[#8f00ff]/[.3] backdrop-blur font-bold border-gray-200 px-1 lg:px-1 py-6">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
					<Link href="https://flowbite.com" className="flex items-center">
						<Image src={process.env.NEXT_PUBLIC_PREFIX_URL + '/assets/images/idi-logo.jpg'} width={140} height={200} className="mr-3 h-6 sm:h-9 rounded" alt="Flowbite Logo" />
						<span className="self-center text-xl font-semibold whitespace-nowrap text-black hidden">{app_name}</span>
					</Link>
					<div className="flex items-center lg:order-2">
						{IsLoggedIn == false ?
							(
								<>
									<Link href="/login" className="text-white font-bold hover:bg-[#BF13E3] focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Log in</Link>
								</>
							)
							:
							(
								<>
									<Link href="" className="text-white font-bold hover:bg-[#BF13E3] focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none " onClick={logOut}>Log Out</Link>
									<Link href="journal" className="text-white hover:bg-[#BF13E3] focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 -700 focus:outline-none">Dream Journal</Link>
								
								</>
							)
						}
						<Link href="/" className="text-white font-bold rounded-lg text-sm px-4 transition-all ease-in-out delay-50 bg-[#81007f] hover:bg-[#BF13E3]/[.6] hover:rounded-3xl focus:ring-4 focus:ring-primary-300 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none duration-300">Try Onirix</Link>
						<button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
							<span className="sr-only">Open main menu</span>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
							<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
						</button>
						{/* <button onClick={handleDarkModeToggle}>Toggle</button> */}
					</div>
					<div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
						<ul className="flex flex-col mt-4 font-bold lg:flex-row lg:space-x-8 lg:mt-0">
							<li>
								<Link href="/" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">Home</Link>
							</li>
							<li>
								<Link href="/research" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Research</Link>
							</li>
							<li>
								<Link href="/onirix" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Onirix</Link>
							</li>
							<li>
								<Link href="/about_us" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">About Us</Link>
							</li>
							<li>
								<Link href="/faq" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">FAQ</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default MainHeader;