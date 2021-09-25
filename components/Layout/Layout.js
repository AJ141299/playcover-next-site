import Navbar from '../Nav/Navbar';
import Footer from '../Footer/Footer';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Contact from '../Buttons/Contact';
import Playpass from '../Buttons/Playpass';
import Head from 'next/head';


const Layout = props => {
  const [isContactOpen, setContactOpen] = useState(null);
  const [isPlaypassOpen, setPlaypassOpen] = useState(null);
  const [hideScrolls, setHideScrolls] = useState(null);

  const toggleContact = () => {
    if (isContactOpen) {
      setContactOpen(false);
    } else {
      setContactOpen(true);
    }
  };

  useEffect(() => {
    if (hideScrolls) {
      document.querySelector('body').classList.toggle('overflow-hidden');
      window.scrollTo(0, 0);
    } else if (hideScrolls === false) {
      document.querySelector('body').classList.toggle('overflow-hidden');
    }
  }, [hideScrolls]);

  const togglePlaypass = () => {
    if (isPlaypassOpen) {
      setPlaypassOpen(false);
    } else {
      setPlaypassOpen(true);
    }
  };

  return (
    <div>
      <Head>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <div className="flex flex-col h-[100vh]">
        <Navbar toggleContact={ toggleContact } togglePlaypass={ togglePlaypass } />

        <main>
          { isPlaypassOpen && <Playpass togglePlaypass={ togglePlaypass } /> }
          { isContactOpen && <Contact toggleContact={ toggleContact } /> }

          { props.children }
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
