import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';
import NavLink from './NavLink';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Navbar = ({ toggleContact, togglePlaypass }) => {
  // router for active page styling
  const router = useRouter();
  const isActive = route => {
    if (route == router.pathname) {
      // active styles
      return 'border-[#f54399] px-5 py-1 text-[#f54399]';
    } else {
      // inactive styles
      return 'border-transparent px-5 py-1 hover:border-menu-pink';
    }
  };

  // nav bar scrolling animation
  useEffect(() => {
    const navBar = document.querySelector('nav');
    window.addEventListener('scroll', e => {
      if (window.scrollY >= 1) {
        navBar.classList.remove('bg-body');
        navBar.classList.remove('dark:bg-body-dark');
        navBar.classList.add('bg-white');
        navBar.classList.add('dark:bg-nav-footer');
        navBar.classList.add('drop-shadow-md');
        navBar.classList.add('dark:drop-shadow-md');
      } else {
        navBar.classList.add('bg-body');
        navBar.classList.add('dark:bg-body-dark');
        navBar.classList.remove('bg-white');
        navBar.classList.remove('dark:bg-nav-footer');
        navBar.classList.remove('drop-shadow-md');
        navBar.classList.remove('dark:drop-shadow-md');
      }
    });
  }, []);

  return (
    <nav className="select-none bg-body dark:bg-body-dark pt-1 fixed w-[100vw] text-[1.05rem] font-semibold text-center z-10 transition duration-300 ease-out">
      <div className="flex justify-between px-10">
        {/* primary */ }
        <section className="flex space-x-9">
          {/* logo */ }
          <Link href="/">
            <a>
              <Image
                src="/assets/logo.png"
                alt="playcover logo"
                priority
                width={ 64 }
                height={ 64 }
              />
            </a>
          </Link>
          <div className="flex items-center space-x-5">
            <NavLink page="Home" pageRoute="/" />
            <NavLink page="FAQ" pageRoute="/faq" />
            <NavLink page="Changelog" pageRoute="/changelog" />
            <NavLink page="Team" pageRoute="/team" />
            {/* contact button */ }
            <button
              className="font-semibold text-center border-2 rounded-full border-transparent px-5 py-1 hover:border-menu-pink transition duration-300"
              onClick={ () => {
                toggleContact();
              } }
            >
              Contact Us
            </button>
          </div>
        </section>

        {/* secondary */ }
        <section className="flex items-center space-x-6 pr-8">
          <button
            className="font-semibold text-center bg-gray-700 text-gray-200 dark:bg-gray-300  dark:text-gray-800 hover:bg-gray-800 dark:hover:bg-white rounded-full px-5 py-1 transition duration-300"
            onClick={ togglePlaypass }
          >
            Get PlayPass
          </button>
          <LanguageSelector />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
