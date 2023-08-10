/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px"
        },
        colors: {
           "secondary": "#66CC99",
            "primary": "#FFFFFF",
            "border": "#222222",
            "text": "#DDDDDD",
            "bg": "#111111",
        },
        fontFamily: {
            header: ["Inter", "sans-serif"],
            body: ["Open Sans", "sans-serif"],
        },
        extend: {},
    },
    plugins: [],
};
