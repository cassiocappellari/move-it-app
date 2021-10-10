export default {
	head: {
		title: 'movue-it-nuxt',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap' },
		],
	},

	css: [
		'~/assets/css/global.css',
		'~/assets/css/components.css',
	],

	components: true,

	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/tailwindcss',
	],

	modules: [
		['cookie-universal-nuxt', { alias: 'cookiz' }],
	],

	tailwindcss: {
		viewer: false,
	},
};
