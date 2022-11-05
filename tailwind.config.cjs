/**
 * Takes as input a hex of the form #abc123 or abc123 and returns it as a list
 * of rgb values with the tailwind <alpha-value> directive, so they support
 * opacity, text-opacity, bg-opacity and other opacity properties.
 */
const applyHex = (hex) => {
	// Prefix length (1 if "#" at start, 0 else)
	const pre = hex.startsWith('#') ? 1 : 0

	const r = Number.parseInt(hex.substring(pre + 0, pre + 2), 16)
	const g = Number.parseInt(hex.substring(pre + 2, pre + 4), 16)
	const b = Number.parseInt(hex.substring(pre + 4, pre + 6), 16)

	return `rgb(${r} ${g} ${b} / <alpha-value>)`
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: applyHex("#E52C6F"),
				"primary-hover": applyHex("#BE2C60"),
				"primary-active": applyHex("#962A51"),

				secondary: applyHex("#FDE5ED"),
				"secondary-hover": applyHex("#E9CFD9"),
				"secondary-active": applyHex("#C1A3AE"),
			}
		},
	},
	plugins: [],
}
