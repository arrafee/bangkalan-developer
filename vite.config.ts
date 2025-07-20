/* eslint-disable @typescript-eslint/no-unused-vars */
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const env = loadEnv(mode, process.cwd(), '')

  return {
    server: {
      port: Number(env.PORT)
    },
    plugins: [
      react(),
      tsconfigPaths()
    ],
    resolve: {
      alias: [{ find: /^~/, replacement: '' }],
    },
    build: { chunkSizeWarningLimit: 3000 },
    css: {
      modules: {
        generateScopedName: 'bangdev-[local]-[hash:base64:5]',
        localsConvention: 'camelCaseOnly',
      },
    },
  }
});
