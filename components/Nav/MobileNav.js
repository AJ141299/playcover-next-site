import NavLink from "./NavLink";
import { RiCloseFill } from "react-icons/ri";

const MobileNav = ({ toggleMenu, isOpen }) => {
  return (
    <div className="select-none">
      <nav className={ 'absolute h-[100vh] w-[100vw] bg-body dark:bg-body-dark z-30 pt-32 text-xl transition duration-200 ease-in-out transform ' + (isOpen ? ' translate-y-[0] ' : ' -translate-y-full ') + (isOpen ? 'opacity-100' : 'opacity-0') }>
        <div onClick={ toggleMenu } className="absolute top-5 right-11 cursor-pointer">
          <RiCloseFill size="40px" />
        </div>
        <div className="flex flex-col items-center space-y-14 w-auto">
          <NavLink close={ toggleMenu } page="Home" pageRoute="/" />
          <NavLink close={ toggleMenu } page="FAQ" pageRoute="/faq" />
          <NavLink close={ toggleMenu } page="Changelog" pageRoute="/changelog" />
          <NavLink close={ toggleMenu } page="Team" pageRoute="/team" />
          <h1>Contact Us</h1>
          <p>Language</p>
        </div>
        <div className="flex w-auto justify-center">
          <p className="mt-16 rounded-full px-5 py-2 dark:bg-gray-200 text-center text-gray-800">Get Playpass</p>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;