import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        palette: {
            primary: {
                on: string;
                bg: string;
            };

            secondary: {
                on: string;
                bg: string;
            };

            default_widget: {
                on: string;
                bg: string;
            };

            accent: {
                blue: {
                    normal: string;
                    alt: string;
                };
                pink: {
                    normal: string;
                    alt: string;
                };
                purple: {
                    normal: string;
                    alt: string;
                };
            };
        };

        breakpoints: {
            large: string;
            medium: string;
            small: string;
        };

        theme: "dark" | "light";
    }
}
