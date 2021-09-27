import NavLink from "./NavLink";
import Link from 'next/link';
import Image from 'next/image';
import { RiCloseFill } from "react-icons/ri";

const MobileNav = ({ toggles, isOpen }) => {
  const [toggleMenu, togglePlayPass, toggleContact] = toggles;

  return (
    <div className="relative">
      <nav className={ 'select-none fixed h-[100vh] w-[50vw] sm:w-[27vw] transform bg-body dark:bg-nav-footer z-20 pt-10 text-xl font-semibold ' + (isOpen ? ' mobile-menu-active ' : ' mobile-menu-inactive ') }>
        {/* nav buttons */ }
        <div className="flex flex-col items-center space-y-12">
          {/* close button */ }
          <div onClick={ toggleMenu } className="cursor-pointer">
            <RiCloseFill size="35px" />
          </div>

          {/* logo */ }
          <Link href="/">
            <a>
              <Image
                src="/assets/logo.png"
                alt="playcover logo"
                priority
                width={ 65 }
                height={ 65 }
              />
            </a>
          </Link>

          <NavLink close={ toggleMenu } page="Home" pageRoute="/" />
          <NavLink close={ toggleMenu } page="FAQ" pageRoute="/faq" />
          <NavLink close={ toggleMenu } page="Changelog" pageRoute="/changelog" />
          <NavLink close={ toggleMenu } page="Team" pageRoute="/team" />

          {/* contact button */ }
          <button className="" onClick={ () => {
            toggleMenu();
            setTimeout(toggleContact, 400);
          } } className="font-semibold hover:text-[#f54399] transition duration-200">Contact Us</button>

          {/* language button */ }
          <p className="font-semibold hover:text-[#f54399] transition duration-200">Language</p>

          {/* playpass button */ }
          <div className="flex justify-center">
            <button onClick={ () => {
              toggleMenu();
              setTimeout(togglePlayPass, 400);
            } } className="rounded-full px-4 py-2 bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-white font-semibold text-center text-gray-200  transition duration-200 dark:text-gray-800">Get Playpass</button>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default MobileNav;