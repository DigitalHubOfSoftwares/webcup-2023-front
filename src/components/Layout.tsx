// components/Layout.tsx
import React from 'react';
import Head from 'next/head';
import MainHeader from './MainHeader/MainHeader';
import MainFooter from './MainFooter/MainFooter';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title = 'DHS' }) => {

	const AppName : string | undefined = process.env.NEXT_PUBLIC_APP_NAME;

  return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<MainHeader app_name={ AppName }/>
			<main>{children}</main>
			<MainFooter app_name={ AppName }/>
		</div>
  );
};

export default Layout;
