module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				serif: ["Bellefair", "serif"],
				"condensed-sans": ["Barlow Condensed Regular", "sans-serif"],
				sans: ["Barlow", "sans-serif"],
			},
			letterSpacing: {
				"heading-5": "4.75px",
				"subheading-2": "2.35px",
				nav: "2.7px",
			},
			fontSize: {
				"heading-1": "150px",
				"heading-2": "100px",
				"heading-3": "56px",
				"heading-4": "32px",
				"heading-5": "28px",
				"subheading-1": "28px",
				"subheading-2": "14px",
				nav: "16px",
				body: "18px",
			},
		},
	},
	plugins: [],
};
