/** @type {import('tailwindcss').Config} */


export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				UrubambaPrimaryColor: '#1e293b',
				UrubambaSecondaryColor: '#101010',
				UrubambaWhiteColor: '#ededed',
				UrubambaMarronColor: '#926a4f',

			},
			fontFamily: {
				sans: ['Raleway', 'sams-serif'],
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],

}
