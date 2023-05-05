import React, {useEffect, useState}  from 'react';
import LoginForm from '../../components/Login/login';
import Layout from '../../components/Layout';
import { useRouter } from "next/router";

export default function Login() {

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const router = useRouter();

	const handleSubmit = async (e : any) => {
		e.preventDefault();

		console.log('Email:' + email);
		console.log('Password:' + password);
		console.log('Logging In');

		const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API_LOGIN as string, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				"username": email,
				"password": password			
			}),
		});

		if (response.ok) {
			const data = await response.json();
			// Handle the response data as needed, perhaps storing it in local state, localStorage or cookies
			console.log(data.message);

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
		<Layout title="Log In">
			<LoginForm onSubmit={handleSubmit} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
		</Layout>
	);
}