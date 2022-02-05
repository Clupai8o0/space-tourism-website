module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				serif: ["Bellefair", "serif"],
			},
			text: {
				"heading-1": {
					fontSize: "150px",
					fontWeight: "regular",
				},
				"heading-2": {
					fontSize: "100px",
					fontWeight: "regular",
				},
				"heading-3": {
					fontSize: "56px",
					fontWeight: "regular",
				},
				"heading-4": {
					fontSize: "32px",
					fontWeight: "regular",
				},
				"heading-5": {
					fontSize: "28px",
					fontWeight: "regular",
					letterSpacing: "4.75px",
					fontFamily: ["Barlow Condensed Regular", "sans-serif"],
				},
				"subheading-1": {
					fontSize: "28px",
					fontWeight: "regular",
				},
				"subheading-2": {
					fontSize: "14px",
					fontWeight: "regular",
					letterSpacing: "2.35px",
					fontFamily: ["Barlow Condensed Regular", "sans-serif"],
				},
				nav: {
					fontSize: "16px",
					fontWeight: "regular",
					letterSpacing: "2.7px",
					fontFamily: ["Barlow Condensed Regular", "sans-serif"],
				},
        body: {
          fontSize: "18px",
          fontWeight: "regular",
          lineHeight: "32px",
          fontFamily: ["Barlow", 'sans-serif']
        }
			},
		},
	},
	plugins: [],
};
