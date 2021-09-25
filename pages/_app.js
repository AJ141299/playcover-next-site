import 'tailwindcss/tailwind.css';
import '../css/global_styles.css';
import Layout from '../components/Layout/Layout';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/jpg" href="/favicon.ico" />
      </Head>
      <div>
        <Layout>
          <Component { ...pageProps } />
        </Layout>
      </div>
    </>
  );
}

export default appWithTranslation(MyApp);

