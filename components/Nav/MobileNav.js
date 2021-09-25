import NavLink from "./NavLink";
import Link from 'next/link';
import Image from 'next/image';


const MobileNav = ({ toggles, isOpen }) => {
  const [toggleMenu, togglePlayPass, toggleContact] = toggles;

  return (
    <div className="relative">
      <nav className={ 'select-none fixed h-[100vh] w-[50vw] sm:w-[27vw] transform bg-body dark:bg-nav-footer z-20 pt-10 text-xl' + (isOpen ? ' mobile-menu-active ' : ' mobile-menu-inactive ') }>
        {/* nav buttons */ }
        <div className="flex flex-col items-center space-y-12">
          {/* logo */ }
          <Link href="/">
            <a>
              <Image
                src="/assets/logo.png"
                alt="playcover logo"
                priority
                width={ 70 }
                height={ 70 }
              />
            </a>
          </Link>

          <NavLink close={ toggleMenu } page="Home" pageRoute="/" />
          <NavLink close={ toggleMenu } page="FAQ" pageRoute="/faq" />
          <NavLink close={ toggleMenu } page="Changelog" pageRoute="/changelog" />
          <NavLink close={ toggleMenu } page="Team" pageRoute="/team" />

          {/* contact button */ }
          <button onClick={ () => {
            toggleMenu();
            setTimeout(toggleContact, 250);
          } }>Contact Us</button>

          {/* language button */ }
          <p>Language</p>

          {/* playpass button */ }
          <div className="flex justify-center">
            <button onClick={ () => {
              toggleMenu();
              setTimeout(togglePlayPass, 250);
            } } className="rounded-full px-4 py-2 dark:bg-gray-200 font-semibold text-center text-gray-800">Get Playpass</button>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default MobileNav;