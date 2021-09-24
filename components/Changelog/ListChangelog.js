import ChangelogParser from "./ChangelogParser";

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
          <div className="first:text-pink-500 text-gray-700 dark:text-gray-400 mb-6 w-[75%] " key={ data.id }>
            <h1 className="font-semibold text-2xl">{ data.tag_name }</h1>
            <div className="">
              <ChangelogParser data={ data } />
            </div>
            <div className="w-full border-b my-3 border-gray-500 fill-current"></div>
            <div className="flex space-x-2 mt-2 items-center">
              <a href={ data.assets[0].browser_download_url }>
                <button className="text-sm px-4 py-1 bg-gray-700 dark:bg-gray-400 text-gray-200 dark:text-gray-900 hover:bg-black dark:hover:bg-gray-300 transition duration-200 rounded">Download</button>
              </a>
              <a href={ data.html_url } target="_blank">
                <button className="text-sm px-4 py-1 bg-gray-700 dark:bg-gray-800 text-gray-200 dark:text-gray-300 hover:bg-black dark:hover:bg-gray-700  transition duration-200 rounded">GitHub</button>
              </a>
            </div>
          </div>
        );
      }) }
    </div>
  );
};

export default ListChangelog;
