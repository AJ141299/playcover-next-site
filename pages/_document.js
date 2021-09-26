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
            href="/fonts/SourceSansPro/SourceSansPro-ExtraLight.woff"
            as="font"
            type="font/woff"
          />
          <link
            rel="preload"
            href="/fonts/SourceSansPro/SourceSansPro-Light.woff"
            as="font"
            type="font/woff"
          />
          <link
            rel="preload"
            href="/fonts/SourceSansPro/SourceSansPro-Regular.woff"
            as="font"
            type="font/woff"
          />
          <link
            rel="preload"
            href="/fonts/SourceSansPro/SourceSansPro-Italic.woff"
            as="font"
            type="font/woff"
          />
          <link
            rel="preload"
            href="/fonts/SourceSansPro/SourceSansPro-SemiBold.woff"
            as="font"
            type="font/woff"
          />
          <link
            rel="preload"
            href="/fonts/SourceSansPro/SourceSansPro-Bold.woff"
            as="font"
            type="font/woff"
          />
          <link
            rel="preload"
            href="/fonts/SourceSansPro/SourceSansPro-Black.woff"
            as="font"
            type="font/woff"
          />

          {/* font test */ }

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet"></link>

        </Head>
        <body className="bg-body dark:bg-body-dark text-gray-700 dark:text-gray-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
