import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import HtmlPlugin from 'vite-plugin-html-config';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        HtmlPlugin({
            metas: [
                {
                    name: 'title',
                    content: 'Quote Thai',
                },
                {
                    name: 'description',
                    content:
                        'Quote Thai คือแอปเว็บที่ง่าย ซึ่งจะแสดงคำคมสุ่มในภาษาไทย',
                },
            ],
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        let chunkName = null;

                        if (id.includes('framer-motion')) {
                            chunkName = 'motion-vendor';
                        }

                        if (id.includes('react') || id.includes('react-dom')) {
                            chunkName = 'react-vendor';
                        }

                        return chunkName;
                    }
                },
            },
        },
    },
});
