import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
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
