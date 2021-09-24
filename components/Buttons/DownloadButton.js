import { HiDownload } from "react-icons/hi";

const DownloadButton = ({ text, isActive }) => {
  let buttonStyling =
    'flex items-center justify-center font-openSans text-xs md:text-sm tracking-widest uppercase py-4 px-12 md:py-4 md:px-14 rounded-full ';
  if (isActive) {
    buttonStyling +=
      'drop-shadow-sm bg-logo-purple dark:bg-logo-purple-dark hover:bg-logo-purple-light  text-gray-100 cursor-pointer  transition duration-100 ease-linear';
  } else {
    buttonStyling +=
      'cursor-default bg-[#E5E2E3] dark:bg-[#292729] text-gray-400 dark:text-[#494949] transition duration-200';
  }

  return (
    <button className={ buttonStyling }>
      <div className="mr-[5px] mb-[0.07rem]">
        <HiDownload size="18px" />
      </div>
      { text }
    </button>
  );
};

export default DownloadButton;
