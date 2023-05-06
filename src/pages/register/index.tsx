import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Register() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
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

    const onSubmit = async(e : any) => {
        e.preventDefault();
        console.log(email)
        console.log(password)


		const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API_REGISTER as string, {
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
			if (cookies) {
				document.cookie = cookies;
			}
			router.push(
				{
					pathname: "/",
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
            {isLoggedIn == false && (
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <Link href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <Image className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" width={0} height={0} alt="logo"/>
                            { process.env.NEXT_PUBLIC_APP_NAME }    
                        </Link>
                        <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Register your account
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit = {onSubmit}>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                            </div>
                                        </div>
                                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                    </div>
                                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register new account</button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}