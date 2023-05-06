import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import UnderMaintenance from '@/src/components/UnderMaintenance/UnderMaintenance';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	const [isUnderMaintenance, setIsUnderMaintenance ] = useState(false);
	const maintenanceEnd = new Date(2023, 4, 7, 10, 0, 0); // May 17th, 2023 at 10:30:00 AM

	useEffect(() => {
			fetch(process.env.NEXT_PUBLIC_BACKEND_API_MAINTENANCE as string, {}).then(response => response.json())
			.then(data => {
				setIsUnderMaintenance(data)
			});
		
	}, []);

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
