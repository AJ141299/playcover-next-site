import ChangelogParser from "./ChangelogParser";
import { FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const ListChangelog = ({ gitData }) => {
  // backup data
  try {
    if (gitData.message.includes("API rate limit exceeded")) {
      gitData = require("../../public/backup/changelog.json");
      console.log("Changelog API rate limit exceeded!");
    }
  } catch {
    if (!gitData) {
      gitData = require("../../public/backup/changelog.json");
      console.log("Changelog API not working!");
    }
  }

  return (
    <div>
      { gitData.map((data) => {
        return (
          <div div className="xl:animate-speedAboveEntranceNormal first:text-pink-500 text-gray-700 dark:text-gray-400 mb-10 " key={ data.id } >
            <h1 className="font-semibold text-2xl">{ data.tag_name } <span className="ml-2 text-lg font-normal">({ data.published_at.split('T')[0] })</span></h1>

            <div className="xl:animate-speedAboveEntranceSlow">
              <ChangelogParser data={ data } />
            </div>

            {/* buttons */ }
            <div className="xl:animate-speedAboveEntranceSlowest">
              <div className="flex space-x-2 mt-3 items-center">
                <a href={ data.assets[0].browser_download_url }>
                  <button className="flex items-center space-x-1 px-5 py-[6px] text-sm bg-gray-700 dark:bg-gray-400 text-gray-200 dark:text-gray-900 hover:bg-black dark:hover:bg-gray-300 transition duration-200 rounded-full">
                    <HiDownload size="17px" />
                    <span>Download</span>
                  </button>
                </a>
                <a href={ data.html_url } target="_blank">
                  <button className="flex items-center space-x-1 px-5 py-[6px] text-sm bg-gray-700 dark:bg-gray-800 text-gray-200 dark:text-gray-300 hover:bg-black dark:hover:bg-gray-700  transition duration-200 rounded-full">
                    <FaGithub size="17px" />
                    <span>GitHub Release</span>
                  </button>
                </a>
              </div>
              <div className="w-full border-b my-3 border-gray-400 dark:border-gray-600 fill-current"></div>
            </div>
          </div>
        );
      })
      }
    </div >
  );
};

export default ListChangelog;
