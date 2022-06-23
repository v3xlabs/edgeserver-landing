import "nprogress/nprogress.css";

import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { DarkTheme } from "../lib/theme";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const GlobalStyle = createGlobalStyle`
    :root {
        color-scheme: ${({ theme }) => theme.theme};
    }

    * { 
        box-sizing: border-box;
        /* outline: 1px solid red; */
    }

    html, body {
        scroll-behavior: smooth;
        padding: 0;
        margin: 0;
        font-family: 'Manrope', sans-serif;
        color: ${({ theme }) => theme.palette.primary.on};
        background: ${({ theme }) => theme.palette.primary.bg};
    }

    h1, h2, h3, h4, h5, h6 {
        padding: 0; 
        margin: 0;
    }

    /* Remove spinner */
    #nprogress .spinner, #nprogress .spinner-icon {
        display: none;
    }
`;

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <div>
            <ThemeProvider theme={DarkTheme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </div>
    );
};

export default App;
