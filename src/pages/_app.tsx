import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import UnderMaintenance from '@/src/components/UnderMaintenance/UnderMaintenance';
// import { ethers } from 'ethers';

export default function App({ Component, pageProps }: AppProps) {
	const isUnderMaintenance: boolean = false;
	const maintenanceEnd = new Date(2023, 4, 7, 10, 0, 0); // May 17th, 2023 at 10:30:00 AM
	return (
		<div>
			{isUnderMaintenance ? (
			<UnderMaintenance message="We are currently under maintenance." maintenanceEnd={maintenanceEnd} />
			) : (
			<Component {...pageProps} />
			)}
	  	</div>
	);
}
