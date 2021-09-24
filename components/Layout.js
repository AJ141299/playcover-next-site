import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';
import Contact from './Contact';
import useScrollBlock from './hooks/useScrollBlock';
import Playpass from './Playpass';
import Head from 'next/head';


const Layout = props => {
  const [isContactOpen, setContactOpen] = useState(false);
  const [isPlaypassOpen, setPlaypassOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const toggleContact = () => {
    if (isContactOpen) {
      setContactOpen(false);
      allowScroll();
      // document.body.style.overflow = "unset";
    } else {
      window.scrollTo(0, 0);
      blockScroll();
      setContactOpen(true);
      // document.body.style.overflow = "hidden";
    }
  };

  const togglePlaypass = () => {
    if (isPlaypassOpen) {
      setPlaypassOpen(false);
      allowScroll();
      // document.body.style.overflow = "unset";
    } else {
      window.scrollTo(0, 0);
      blockScroll();
      setPlaypassOpen(true);
      // document.body.style.overflow = "hidden";
    }
  };

  return (
    <div>
      <Head>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <main>
        <Navbar toggleContact={ toggleContact } togglePlaypass={ togglePlaypass } />
        { isPlaypassOpen && <Playpass togglePlaypass={ togglePlaypass } /> }
        { isContactOpen && <Contact toggleContact={ toggleContact } /> }
        { props.children }
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
