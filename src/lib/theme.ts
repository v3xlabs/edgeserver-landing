import { DefaultTheme } from "styled-components";

export const DarkTheme: DefaultTheme = {
    palette: {
        primary: {
            bg: "#111111",
            on: "#FFFFFF",
        },

        secondary: {
            bg: "#1e1f21",
            on: "#FFFFFF",
        },

        default_widget: {
            bg: "#35373b",
            on: "#FFFFFF",
        },

        accent: {
            blue: {
                normal: "#0A84FF",
                alt: "#102841",
            },
        },
    },

    breakpoints: {
        large: "1200px",
        medium: "800px",
        small: "500px",
    },

    theme: "dark",
};
