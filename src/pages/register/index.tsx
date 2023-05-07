import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Register() {
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

        setIsLoading(true);

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
            setIsLoading(false);
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
                <section className="bg-dark-bg flex h-screen bg-no-repeat bg-cover bg-center dark:bg-dark-bg">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <Link href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <Image src={process.env.NEXT_PUBLIC_PREFIX_URL + '/assets/images/idi-logo.jpg'} width={140} height={200} className="mr-3 h-6 sm:h-9 rounded" alt="Flowbite Logo" />
                            {/* { process.env.NEXT_PUBLIC_APP_NAME }     */}
                        </Link>
                        <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800/[.6] dark:backdrop-blur-sm dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Register your account
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit = {onSubmit}>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#BF13E3] focus:border-[#BF13E3] block w-full p-2.5 dark:bg-gray-700/[.15] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#BF13E3] dark:focus:border-[#BF13E3]" placeholder="name@company.com" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#BF13E3] focus:border-[#BF13E3] block w-full p-2.5 dark:bg-gray-700/[.15] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#BF13E3] dark:focus:border-[#BF13E3]" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#BF13E3] focus:border-[#BF13E3] block w-full p-2.5 dark:bg-gray-700/[.15] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#BF13E3] dark:focus:border-[#BF13E3]" required/>
                                    </div>
                                    <button type="submit" className="w-full text-white font-medium rounded-lg transition-all ease-in-out bg-[#81007f] hover:bg-[#BF13E3]/[.6] hover:rounded-3xl text-sm px-5 py-2.5 flex justify-center items-center">
                                    {IsLoading == false ? 
                                        
                                        "Register new account"
                                        :
                                        (
                                            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                            </svg>
                                        )
                                    }
                                    </button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account? <Link href="/login" className="font-medium text-[#BF13E3] hover:underline dark:text-[#BF13E3]">Log In</Link>
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