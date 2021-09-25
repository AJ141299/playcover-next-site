import { IoIosCloseCircle } from "react-icons/io";

const Modal = ({ close, children }) => {
  return (
    <div>
      {/* dark background */ }
      <div
        onClick={ () => {
          close();
        } }
        className="absolute w-[100vw] h-[100vh] opacity-80 bg-black z-50"
      ></div>

      <div className="absolute md:max-w-[40vw] max-h-[90vh] top-[50vh] left-[50vw] transform translate-x-[-50%] translate-y-[-50%] rounded-lg bg-gray-100 dark:bg-[#1E1E1E] z-50 p-16 pb-12">

        <div onClick={ () => { close(); } } className="absolute right-4 top-4 cursor-pointer">
          {/* close icon */ }
          <IoIosCloseCircle size="25px" />
        </div>

        <div className="flex justify-center">
          { children }
        </div>
      </div>
    </div>
  );
};

export default Modal;