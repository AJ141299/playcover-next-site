import NavLink from "./NavLink";
import { RiCloseFill } from "react-icons/ri";

const MobileNav = ({ toggles, isOpen }) => {
  const [toggleMenu, togglePlayPass, toggleContact] = toggles;

  return (
    <div className="relative">
      <nav className={ 'select-none absolute h-[100vh] w-[27vw] right-0 bg-body dark:bg-nav-footer z-30 pt-32 text-xl transition duration-200 ease-in-out transform ' + (isOpen ? ' translate-x-[0] ' : ' translate-x-full ') }>
        {/* close button */ }
        <div onClick={ toggleMenu } className="absolute top-5 right-7 md:right-11 cursor-pointer">
          <RiCloseFill size="35px" />
        </div>
        {/* nav buttons */ }
        <div className="flex flex-col items-center space-y-14">
          <NavLink close={ toggleMenu } page="Home" pageRoute="/" />
          <NavLink close={ toggleMenu } page="FAQ" pageRoute="/faq" />
          <NavLink close={ toggleMenu } page="Changelog" pageRoute="/changelog" />
          <NavLink close={ toggleMenu } page="Team" pageRoute="/team" />
          <button onClick={ () => {
            toggleMenu();
            setTimeout(toggleContact, 250);
          } }>Contact Us</button>
          <p>Language</p>
        </div>
        {/* playpass button */ }
        <div className="flex justify-center">
          <button onClick={ () => {
            toggleMenu();
            setTimeout(togglePlayPass, 250);
          } } className="mt-16 rounded-full px-5 py-2 dark:bg-gray-200 font-semibold text-center text-gray-800">Get Playpass</button>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;