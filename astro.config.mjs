// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'RCR',
			logo: {
				light: '/src/assets/logo.png',
				dark: '/src/assets/logo-dark.png',
				replacesTitle: true,
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/rafaelcesar0/' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/rafaelcesar0/' },
				{ icon: 'email', label: 'Email', href: 'mailto:rafael.cesar.dev@gmail.com' },
			],
			sidebar: [
				{
					label: 'Comece Aqui',
					autogenerate: { directory: 'start' },
					// items: [
					// 	{slug: 'start/introduction' },
					// ],
				},
				{
					label: 'Projetos',
					autogenerate: { directory: 'projects' },
				},
			],
			defaultLocale: 'root',
      locales: {
        root: {
          label: 'Português do Brasil',
          lang: 'pt-BR',
        },
			},
		}),
	],
});
