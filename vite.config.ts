import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import vue from '@vitejs/plugin-vue'
/* if you're using React */
// import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        vue(),
        symfonyPlugin(),
    ],
    build: {
        rollupOptions: {
            input: {
                app: "./assets/app.ts",
            },
        }
    },
});
