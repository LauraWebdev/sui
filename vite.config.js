import { resolve } from 'path';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'sui',
            formats: ["es", "cjs", "umd"],
            fileName: format => `sui.${format}.js`
        },
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.js")
            },
            external: ['vue'],
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') return 'sui.css';
                    return assetInfo.name;
                },
                exports: "named",
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
})
