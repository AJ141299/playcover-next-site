import 'tailwindcss/tailwind.css';
import '../css/styles.css';
import Layout from '../components/Layout/Layout';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component { ...pageProps } />
      </Layout>
    </div>
  );
}

export default appWithTranslation(MyApp);

