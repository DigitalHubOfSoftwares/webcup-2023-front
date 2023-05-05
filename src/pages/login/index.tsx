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
		//const userItem = localStorage.getItem("user");

        fetch(process.env.NEXT_PUBLIC_BACKEND_API_DATA as string, {
			credentials: 'include',
		})
          .then(response => response.json())
          .then(data => {
				console.log('Data from api Login:')
				console.log(data)
				if (data == "logged in data"){
					router.push(
					{
						pathname: "/home",
					},
					"home"
					);
				}else{
					setIsLoggedIn(false)
				}
            })
          .catch(error => console.log(error));

	}, []);

	const handleSubmit = async (e : any) => {
		e.preventDefault();

		console.log('Email:' + email);
		console.log('Password:' + password);
		console.log('Logging In');

		// const result = await signIn("credentials",{
		// 	username: email,
		// 	password: password,
		// 	redirect: false,
		// 	callbackUrl: "/home"
		// });


		// if (result?.ok) {
		// 	console.log(result);
		// 	router.push(
		// 		{
		// 			pathname: "/home",
		// 			query: {message: email}
		// 		},
		// 		"home"
		// 	);
		// } else {
		// 	console.error("Login failed");
		// }

		const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API_LOGIN as string, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				"username": email,
				"password": password			
			}),
			credentials: 'include',
		});
		

		if (response.ok) {
			const data = await response.json();
			// Handle the response data as needed, perhaps storing it in local state, localStorage or cookies
			console.log(data);

			router.push(
				{
					pathname: "/home",
					query: {message: data.message}
				},
				"home"

			);
		} else {
			const error = await response.json();
			// Display error message
			console.error(error.message);
		}
	}

	return (
		<>
			{ isLoggedIn == false && (<LoginForm onSubmit={handleSubmit} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>)}
		</>
	);
}