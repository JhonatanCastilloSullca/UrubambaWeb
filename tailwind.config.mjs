/** @type {import('tailwindcss').Config} */


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				UrubambaPrimaryColor: '#1e293b',
				UrubambaSecondaryColor: '#101010',
				UrubambaWhiteColor: '#ededed',

			},
			fontFamily: {
				sans: ['Raleway', 'sams-serif'],
			}
		},
	},
	plugins: [],
}
