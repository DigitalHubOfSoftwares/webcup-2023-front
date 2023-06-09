import React, {useEffect, useState}  from 'react';
import LoginForm from '../../components/Login/login';
import { useRouter } from "next/router";

export default function Login() {

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
	const [IsLoading, setIsLoading] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
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
						pathname: "/",
					},
					""
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
		setIsLoading(true);

		const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API_LOGIN as string, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				"username": email,
				"password": password			
			}),
			credentials: 'include',
		});

		if (response.ok) {
			const data = await response.json();
			const cookies = response.headers.get('Set-Cookie');
			setIsLoading(false);
			if (cookies) {
				document.cookie = cookies;
			}
			router.push(
				{
					pathname: "/",
				},
				""

			);
		} else {
			const error = await response.json();
			// Display error message
			console.error(error.message);
		}
	}

	return (
		<>
			{ isLoggedIn == false && (<LoginForm onSubmit={handleSubmit} email={email} setEmail={setEmail} password={password} setPassword={setPassword} IsLoading={IsLoading}/>)}
		</>
	);
}