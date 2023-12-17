import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
export default defineConfig({
    build: {
        manifest: true,
        minify: true,
        rollupOptions: {
            input: './src/index.jsx',
        },
        sourcemap: true,
    },
    plugins: [react()]
})