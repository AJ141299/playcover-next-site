import Image from 'next/image';
import DownloadButton from '../components/Buttons/DownloadButton';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Home = props => {
  const heroImageWidth = 1200;
  const heroImageHeight = heroImageWidth / 1.9359;

  // i18n
  const { t } = useTranslation('Home');

  // set backup link
  let siliconDownloadLink = 'https://github.com/iVoider/PlayCover/releases/latest';
  // try latest link
  try {
    if (!props.gitHubData.message.includes("API rate limit exceeded")) {
      siliconDownloadLink = props.gitHubData[0].assets[0].browser_download_url;
    } else {
      console.log("Download link API rate limit exceeded!");
    }
  } catch {
    if (props.gitHubData) {
      siliconDownloadLink = props.gitHubData[0].assets[0].browser_download_url;
    } else {
      console.log("Download link API not working!");
    }
  }

  return (
    <div className="pt-[8rem] text-gray-700 dark:text-gray-200 bg-body dark:bg-body-dark flex flex-col items-center">
      <h1 className="font-extrabold sm:animate-shiver text-[48px] md:text-[5rem] bg-gradient-to-b from-logo-pink to-text-purple text-transparent bg-clip-text">
        PlayCover
      </h1>
      <section className="pt-2">
        <h2 className="sm:animate-fadeIn md:pl-1 max-w-xs md:max-w-7xl pt-6 md:pt-4 text-center text-lg md:text-2xl">
          { t('hero_text') }
        </h2>
        <div className="flex justify-center space-x-5 pt-5">
          <a className="sm:animate-fadeInRight" href={ siliconDownloadLink }>
            <DownloadButton isActive={ true } text="Download for Apple Silicon" />
          </a>
          <div className="sm:animate-fadeInLeft">
            <DownloadButton isActive={ false } text="Coming Soon for intel mac" />
          </div>
        </div>
      </section>
      <div className="backface-off pt-10">
        <div className="backface-off hidden dark:flex rounded-lg shadow-md md:animate-fadeInAbove">
          <Image
            className="rounded-lg"
            src="/assets/playcover-screenshot-dark.png"
            alt="playcover app dark screenshot"
            width={ heroImageWidth }
            height={ heroImageHeight }
            priority
          />
        </div>
        <div className="backface-off flex dark:hidden shadow-md md:animate-fadeInAbove">
          <Image
            className="rounded-lg"
            src="/assets/playcover-screenshot-light.png"
            alt="playcover app light screenshot"
            width={ heroImageWidth }
            height={ heroImageHeight }
            priority
          />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  const response = await fetch(
    'https://api.github.com/repos/iVoider/PlayCover/releases'
  );
  const gitHubData = await response.json();
  return {
    props: {
      ...(await serverSideTranslations(locale, ['Home'])),
      gitHubData,
    },
    revalidate: 300,
  };
}

export default Home;
