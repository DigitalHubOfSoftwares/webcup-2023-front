import React, {useEffect, useState}  from 'react';
import { useRouter } from "next/router";
import Layout from '@/src/components/Layout';
import Link from 'next/link';

export default function Journal(){

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

	const logOut = async () => {
		const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API_LOGOUT as string, {
			credentials: 'include',
		});

		setIsLoggedIn(false);
	}
    return (
        <>
            <Layout title={'Welcome To ' + process.env.NEXT_PUBLIC_APP_NAME} logOut={logOut} IsLoggedIn={isLoggedIn}>
                <h2 className='text-center text-3xl font-bold my-2'>Dream Journals</h2>
                <div className="m-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                        dreams.map((dream : any, index : any)=> {
                            return (
                                <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800/[.6] dark:backdrop-blur-sm dark:border-gray-700">
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{dream.description}</p>
                                </div>
                            )
                        })
                }
                </div>
            </Layout>
        </>
    );
}
