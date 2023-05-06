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
  return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<MainHeader/>
			<main>{children}</main>
			<MainFooter/>
		</div>
  );
};

export default Layout;
