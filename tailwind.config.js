const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backdropFilter: {
				none: "none",
				blur: "blur(20px)",
			},
			fontFamily: {
				serif: ["Bellefair", "serif"],
				"condensed-sans": ["Barlow Condensed", "sans-serif"],
				sans: ["Barlow", "sans-serif"],
			},
			letterSpacing: {
				"heading-5": "4.75px",
				"subheading-2": "2.35px",
			},
			fontSize: {
				"heading-1": "150px",
				"heading-2": "100px",
				"heading-3": "56px",
				"heading-4": "32px",
				"heading-5": "28px",
				"subheading-1": "28px",
				"subheading-2": "14px",
				body: "18px",
			},
			zIndex: {
				"5": "5",
			}
		},
	},
	plugins: [
		plugin(function ({ addVariant, e, postcss }) {
			addVariant("firefox", ({ container, separator }) => {
				const isFirefoxRule = postcss.atRule({
					name: "-moz-document",
					params: "url-prefix()",
				});
				isFirefoxRule.append(container.nodes);
				container.append(isFirefoxRule);
				isFirefoxRule.walkRules((rule) => {
					rule.selector = `.${e(
						`firefox${separator}${rule.selector.slice(1)}`
					)}`;
				});
			});
		}),
		require("tailwind-scrollbar-hide"),
	],
};
