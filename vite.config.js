import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	base: "/wherestream-front/",
  plugins: [react()],
	define: {
		'process.env': {}
	},
})
