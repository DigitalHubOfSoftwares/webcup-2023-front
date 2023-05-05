import React, {useEffect, useState}  from 'react';
import LoginForm from '../../components/Login/login';
import { useRouter } from "next/router";
import { signIn } from 'next-auth/react';

export default function Login() {

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
	const router = useRouter();

	useEffect(() => {
		const userItem = localStorage.getItem("user");

		//console.log(userItem);
		if(userItem){
			const user = JSON.parse(userItem);
		
			if (user) {
			  	console.log("Logged in as: ", user);
			  	router.push(
				{
					pathname: "/home",
					query: {message: email}
				},
				"home"
				);
			} else {
			  console.log("Not logged in");
			  setIsLoggedIn(false);
			}
		} else{
			console.log('Error Not Logged');
			setIsLoggedIn(false);
		}

	}, []);

	const handleSubmit = async (e : any) => {
		e.preventDefault();

		console.log('Email:' + email);
		console.log('Password:' + password);
		console.log('Logging In');

		const result = await signIn("credentials",{
			username: email,
			password: password,
			redirect: false,
			callbackUrl: "/home"
		});

		if (result?.ok) {
			localStorage.setItem("user", JSON.stringify(email));
			router.push(
				{
					pathname: "/home",
					query: {message: email}
				},
				"home"
			);
		} else {
			console.error("Login failed");
		}

		// const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API_LOGIN as string, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify({
		// 		"username": email,
		// 		"password": password			
		// 	}),
		// });

		// if (response.ok) {
		// 	const data = await response.json();
		// 	// Handle the response data as needed, perhaps storing it in local state, localStorage or cookies
		// 	console.log(data);

		// 	router.push(
		// 		{
		// 			pathname: "/home",
		// 			query: {message: data.message}
		// 		},
		// 		"home"

		// 	);
		// } else {
		// 	const error = await response.json();
		// 	// Display error message
		// 	console.error(error.message);
		// }
	}

	return (
		<>
			{ isLoggedIn == false && (<LoginForm onSubmit={handleSubmit} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>)}
		</>
	);
}