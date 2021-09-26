import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Source Sans Pro fonts preload */ }
          <link
            rel="preload"
            href="/fonts/SourceSansPro/SourceSansPro-ExtraLight.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/SourceSansPro/SourceSansPro-Light.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/SourceSansPro/SourceSansPro-Regular.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/SourceSansPro/SourceSansPro-Italic.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/SourceSansPro/SourceSansPro-SemiBold.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/SourceSansPro/SourceSansPro-Bold.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/SourceSansPro/SourceSansPro-Black.woff2"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body className="bg-body dark:bg-body-dark font-sourceSansPro text-gray-700 dark:text-gray-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
