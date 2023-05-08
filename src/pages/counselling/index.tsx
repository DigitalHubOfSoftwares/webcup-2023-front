import React, {useEffect, useState}  from 'react';
import { useRouter } from "next/router";
import Layout from '@/src/components/Layout';
import Link from 'next/link';

export default function Counselling()
{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();
    const [dreams, setDreams] = useState<any>([]);
    useEffect(() => {
        const checkLoggedIn = async () => {
			const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API_DATA as string, {
				credentials: 'include',
			});

			if (!response.ok) {
				// Handle error here
				console.log("Error: ", response.status);
				router.push(
				{
					pathname: "/login",
				},
				"login"
				);
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

    useEffect(() => {
        const getDreams = async () => {
            const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API_GET_JOURNAL as string, {
				credentials: 'include',
			});

            const data = await response.json();
            console.log(data);
            setDreams(data);
        }

        getDreams();
    }, []);

    function logOut()
    {
        return '';
    }
    return (
        <div>
            <Layout title={'Welcome To ' + process.env.NEXT_PUBLIC_APP_NAME} logOut={logOut} IsLoggedIn={isLoggedIn}>
           <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nightmare</h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">Nightmare disorder is referred to by doctors as a parasomnia — a type of sleep disorder that involves undesirable experiences that occur while you&apos;re falling asleep, during sleep or when you&apos;re waking up. Nightmares usually occur during the stage of sleep known as rapid eye movement (REM) sleep. The exact cause of nightmares is not known..</p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Trauma</h3>
                        <p className="text-gray-500 dark:text-gray-400">Nightmares are common after an accident, injury, physical or sexual abuse, or other traumatic event. Nightmares are common in people who have post-traumatic stress disorder (PTSD).</p>
                    </div>
                    <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Sleep deprivation</h3>
                        <p className="text-gray-500 dark:text-gray-400">Changes in your schedule that cause irregular sleeping and waking times or that interrupt or reduce the amount of sleep you get can increase your risk of having nightmares. Insomnia is associated with an increased risk of nightmares.</p>
                    </div>
                    <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Medications</h3>
                        <p className="text-gray-500 dark:text-gray-400">Some drugs — including certain antidepressants, blood pressure medications, beta blockers, and drugs used to treat Parkinson&apos;s disease or to help stop smoking — can trigger nightmares.</p>
                    </div>
                    <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Substance misuse</h3>
                        <p className="text-gray-500 dark:text-gray-400">Alcohol and recreational drug use or withdrawal can trigger nightmares..</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Other disorders</h3>
                        <p className="text-gray-500 dark:text-gray-400">Depression and other mental health disorders may be linked to nightmares. Nightmares can happen along with some medical conditions, such as heart disease or cancer. Having other sleep disorders that interfere with adequate sleep can be associated with having nightmares.</p>
                    </div>
                    <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Scary books and movies</h3>
                        <p className="text-gray-500 dark:text-gray-400">For some people, reading scary books or watching frightening movies, especially before bed, can be associated with nightmares.</p>
                    </div>
                </div>
            </div>
            </section>
            </Layout>
        </div>
    )
}