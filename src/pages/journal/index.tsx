import React, {useEffect, useState}  from 'react';
import { useRouter } from "next/router";
import Layout from '@/src/components/Layout';
import Link from 'next/link';

export default function journal()
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
        <>
            <Layout title={'Welcome To ' + process.env.NEXT_PUBLIC_APP_NAME} logOut={logOut} IsLoggedIn={isLoggedIn}>
                <div className="flex">
                {
                        dreams.map((dream : any)=> {
                            return (
                                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <Link href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{dream.title}</h5>
                                    </Link>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{dream.description}</p>
                                    <Link href={`/dream/${dream.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            )
                        })
                }
                </div>
            </Layout>
        </>
    )
}
