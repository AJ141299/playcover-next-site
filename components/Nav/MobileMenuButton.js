import { RiCloseFill } from "react-icons/ri";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const MobileMenuButton = ({ toggleMenu, isMenuOpen }) => {
  return (
    <button onClick={ toggleMenu } className="xl:hidden fixed rounded-full bg-white shadow-lg dark:bg-nav-footer p-9 bottom-[40px] right-[35px] transition duration-300 z-30 ease-in-out">
      <div className="flex flex-col rounded-full">
        <div className={ "absolute top-[18%] right-[33%] transition duration-300 ease-in-out" + (isMenuOpen ? ' opacity-0 ' : ' opacity-100 ') }>
          <MdKeyboardArrowUp size="25px" color="#E23B8B" />
          <MdKeyboardArrowDown size="25px" color="#E23B8B" />
        </div>

        <div className={ "absolute top-[25%] right-[25%] transition duration-300 ease-in-out" + (isMenuOpen ? ' opacity-100 ' : ' opacity-0 ') }>
          <RiCloseFill size="35px" color="#E23B8B" />
        </div>
      </div>
    </button>);
};

export default MobileMenuButton;