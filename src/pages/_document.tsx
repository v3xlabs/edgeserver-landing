import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

const MainDocument = () => {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                {/* <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                /> */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

MainDocument.getInitialProps = async (context: any) => {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
        context.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App: any) => (properties: any) =>
                    sheet.collectStyles(<App {...properties} />),
            });

        const initialProperties = await Document.getInitialProps(context);

        return {
            ...initialProperties,
            styles: (
                <>
                    {initialProperties.styles}
                    {sheet.getStyleElement()}
                </>
            ),
        };
    } finally {
        sheet.seal();
    }
};

export default MainDocument;
