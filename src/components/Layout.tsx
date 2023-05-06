// components/Layout.tsx
import React from 'react';
import Head from 'next/head';
import MainHeader from './MainHeader/MainHeader';
import MainFooter from './MainFooter/MainFooter';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  logOut?: any;
  IsLoggedIn? : boolean;
};

const Layout: React.FC<LayoutProps> = ({ children, title = 'DHS', logOut, IsLoggedIn }) => {

	const AppName : string | undefined = process.env.NEXT_PUBLIC_APP_NAME;
	console.log(IsLoggedIn);
  return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<MainHeader app_name={ AppName } logOut={logOut} IsLoggedIn={IsLoggedIn}/>
			<main className='bg-light-bg bg-cover bg-no-repeat bg-center dark:bg-dark-bg'>{children}</main>
			<MainFooter app_name={ AppName }/>
		</div>
  );
};

export default Layout;
