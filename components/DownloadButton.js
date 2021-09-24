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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-[1.10rem] w-[1.10rem] fill-current mr-2 mb-[0.05rem]"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      { text }
    </button>
  );
};

export default DownloadButton;
