import React, { useEffect, useState }  from "react";
import Layout from "@/src/components/Layout";
import { useRouter } from "next/router";
import ChatBot from "../components/ChatBot/ChatBot";


export default function Chat() {
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
        <Layout title={'Power Your Dreams'} logOut={logOut} IsLoggedIn={isLoggedIn}>
            <div className="flex w-full h-full">
				<ChatBot/>
            </div>
        </Layout>
    );
}