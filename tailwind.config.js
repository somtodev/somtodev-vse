/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "480px",
            lg: "480px",
            xl: "480px",
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
