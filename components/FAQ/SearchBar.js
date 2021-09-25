import { IoMdSearch } from "react-icons/io";

const SearchBar = ({ setSearchTerm }) => {
  return (<div className="justify-center flex">
    <div className="focus-within:border-gray-500 dark:focus-within:border-menu-pink border-transparent flex text-gray-700 dark:text-gray-300 items-center px-6 w-[83vw] xl:w-[40rem] min-h-[3.5rem] font-semibold rounded-full border bg-gray-50 dark:bg-[#1d1d1d] shadow transition duration-200">
      <div className="pr-2">
        <IoMdSearch size="18px" color="#9DA3AE" />
      </div>
      <input onInput={ (e) => { setSearchTerm(e.target.value.toLowerCase()); } } className="w-full outline-none bg-transparent" type="text" placeholder="Search..." />
    </div>
  </div>);
};

export default SearchBar;