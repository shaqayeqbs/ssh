// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Your custom head content */}
          <meta charSet="UTF-8" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}

          {/* Link to Iconsax CSS */}
          <link
            rel="stylesheet"
            href="https://cdn.iconsax.io/fonts/iconsax.css"
          />

          {/* Your theme-related styles */}
          <style>
            {`
              /* Add your theme-related styles here */
              /* Example:
              body {
                background-color: #E9C376;
              }
              */
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
