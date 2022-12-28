const uikit = require('../../packages/core');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.svelte', './src/**/*.html'],
	theme: {
		extend: {}
	},
	plugins: [uikit]
};
