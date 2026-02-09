module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: { 
		extend: {
			fontFamily: {
				inter: ["Inter", "system-ui", "sans-serif"],
			},
			colors: {
				neutral: {
					100: "#F5F5F5",
					200: "#E6E6E6",
					300: "#C6C6C6",
					400: "#808080",
					500: "#DCDCDC",
					600: "#DBDBDB",
					700: "#A5A5A5",
					800: "#727272",
					900: "#B3B3B3",
					1000: "#A3A3A3",
					1100: "#666666",
					1200: "#A0A0A0",
					1300: "#D8D8D8",
					1400: "#4C4C4C",
					1500: "#707070",
					1600: "#3F3F3F"
				},
				dark: {
					100: "#2B2B2B",
					200: "#494949",
					300: "#0F0F0F",
					400: "#0C0C0C",
					500: "#595959",
					600: "#383333"
				},
				red: {
					100: "#FF0000",
					200: "#ED1C24",
					300: "#CC5252",
					400: "#FF1D25",
					500: "#CC0000"
				},
				brown: {
					100: "#381616"
				}
			},
		} 
	},
	plugins: [],
}
