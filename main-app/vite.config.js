import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
export default defineConfig({
    // base: '/vite/',
    build: {
        manifest: true,
        minify: true,
        rollupOptions: {
            input: './react-app/index.jsx',
        },
        sourcemap: true,
    },
    plugins: [react()]
})