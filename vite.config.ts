import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { brand, description, meta } from './metadata.json';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'site-content',
          transformIndexHtml() {
            return [
              { tag: 'title', children: meta.title.replaceAll('&', '&amp;').replaceAll('<', '&lt;') },
              { tag: 'meta', attrs: { name: 'description', content: description.replaceAll('&', '&amp;').replaceAll('"', '&quot;') } },
              { tag: 'meta', attrs: { name: 'theme-color', content: brand.palette.dark } }
            ];
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
