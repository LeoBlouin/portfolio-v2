// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  // 1. Les intégrations Astro (C'est ici que vit le module virtuel)
  integrations: [icon()],
  // 2. Les plugins Vite (Pour Tailwind 4 notamment)
  vite: {
    plugins: [tailwindcss()],
  },
});
