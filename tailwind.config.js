/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
		'./components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
			animation: {
				openmodal: 'openmodal 0.15s ease-in-out',
				closemodal: 'closemodal 1s ease-in',
				click: "wiggle 200ms ease-in-out"
			},
			keyframes: {
				openmodal: {
					'0%': {scale: 0},
					'100%': {scale: 1}
				},
				wiggle: {
					'0%, 100%': { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" }
				}
			}
		},
  },
  plugins: [],
}