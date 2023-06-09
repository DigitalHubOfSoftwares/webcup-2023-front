/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./node_modules/flowbite/**/*.js',
		'./src/**/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'light-bg': "url('" + process.env.NEXT_PUBLIC_PREFIX_URL +"/assets/images/light-bg.jpg')",
				'dark-bg': "url('" + process.env.NEXT_PUBLIC_PREFIX_URL +"/assets/images/dark-bg.jpg')",
			},
			colors: {
				primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
			},
			transitionProperty: {
				'border-radius': 'border-radius',
			},
		},
		fontFamily: {
			'body': [
				'Inter', 
				'ui-sans-serif', 
				'system-ui', 
				'-apple-system', 
				'system-ui', 
				'Segoe UI', 
				'Roboto', 
				'Helvetica Neue', 
				'Arial', 
				'Noto Sans', 
				'sans-serif', 
				'Apple Color Emoji', 
				'Segoe UI Emoji', 
				'Segoe UI Symbol', 
				'Noto Color Emoji'
			],
			'sans': [
				'Inter', 
				'ui-sans-serif', 
				'system-ui', 
				'-apple-system', 
				'system-ui', 
				'Segoe UI', 
				'Roboto', 
				'Helvetica Neue', 
				'Arial', 
				'Noto Sans', 
				'sans-serif', 
				'Apple Color Emoji', 
				'Segoe UI Emoji', 
				'Segoe UI Symbol', 
				'Noto Color Emoji'
			]
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
