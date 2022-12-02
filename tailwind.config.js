/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Bellefair: ["Bellefair", "serif"],
                Barlow: ["Barlow Condensed", "sans-serif"],
            },
            colors: {
                "light-white": "#D0D6F9",
            },
            backgroundImage: {
                "main-bg":
                    "url('/src/assets/home/background-home-desktop.jpg')",
                "main-mb": "url('/src/assets/home/background-home-mobile.jpg')",
                "main-tb": "url('/src/assets/home/background-home-tablet.jpg')",
                "destination-bg":
                    "url('/src/assets/destination/background-destination-desktop.jpg')",
                "destination-mb":
                    "url('/src/assets/destination/background-destination-mobile.jpg')",
                "destination-tb":
                    "url('/src/assets/destination/background-destination-tablet.jpg')",
                "crew-bg":
                    "url('/src/assets/crew/background-crew-desktop.jpg')",
                "crew-mb":
                    "url('/src/assets/crew/background-crew-mobile.jpg')",
                "crew-tb":
                    "url('/src/assets/crew/background-crew-tablet.jpg')",
                "technology-bg":
                    "url('/src/assets/technology/background-technology-desktop.jpg')",
                "technology-mb":
                    "url('/src/assets/technology/background-technology-mobile.jpg')",
                "technology-tb":
                    "url('/src/assets/technology/background-technology-tablet.jpg')",

            },
        },
    },
    plugins: [],
};
