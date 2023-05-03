import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import UnderMaintenance from '@/src/components/UnderMaintenance/UnderMaintenance';
// import { ethers } from 'ethers';

export default function App({ Component, pageProps }: AppProps) {
	const isUnderMaintenance: boolean = true;
	return (
		<div>
			{isUnderMaintenance ? (
			<UnderMaintenance />
			) : (
			<Component {...pageProps} />
			)}
	  	</div>
	);
}
