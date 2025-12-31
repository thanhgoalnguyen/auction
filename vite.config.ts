import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	// for types directory.
	resolve: {
		alias: {
			'@types': path.resolve(__dirname, './src/types'),
			'@': path.resolve('./src'),
		}
	},
	server: {
		allowedHosts: ['localhost', '127.0.0.1', '0.0.0.0', "separately-central-clam.ngrok-free.app", "surface8.tailea1b04.ts.net"],
		// https: true,
	},
})
