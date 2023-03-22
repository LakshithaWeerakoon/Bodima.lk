/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        colors: {
            "b-dark": "#353a3e",
            "b-yellow": "#ffc01c",
            "b-bg": "#e6f2e5"
        },
        extend: {
        },
    },
    plugins: [require("daisyui"), require('flowbite/plugin')],
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "light",
    },
}