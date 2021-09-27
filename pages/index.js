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
    <div className="pt-16 sm:pt-20 xl:pt-[8rem] text-gray-700 dark:text-gray-200 bg-body dark:bg-body-dark flex flex-col items-center">
      {/* text logo */ }
      <h1 className="font-extrabold animate-shiver text-[3.5rem] sm:text-[5rem] bg-gradient-to-b from-logo-pink to-text-purple text-transparent bg-clip-text">
        PlayCover
      </h1>

      <section className="pt-2 flex flex-col justify-center">

        {/* hero text */ }
        <h2 className="xl:animate-fadeIn w-auto md:max-w-7xl px-10 pt-6 md:pt-4 text-center text-lg md:text-2xl">
          { t('hero_text') }
        </h2>

        {/* download buttons */ }
        <div className="flex flex-col w-auto items-center md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-5 pt-5">
          <a className="xl:animate-fadeInRight" href={ siliconDownloadLink }>
            <DownloadButton isActive={ true } text="Download for Apple Silicon" />
          </a>
          <div className="xl:animate-fadeInLeft">
            <DownloadButton isActive={ false } text="Coming Soon for intel mac" />
          </div>
        </div>
      </section>

      {/* hero images */ }
      <section className="backface-off pt-10">
        {/* dark */ }
        <div className="backface-off hidden dark:flex xl:animate-fadeInAbove">
          <Image
            className="rounded md:rounded-[8px] w-auto"
            src="/assets/playcover-screenshot-dark.png"
            alt="playcover app dark screenshot"
            width={ heroImageWidth }
            height={ heroImageHeight }
            loading="eager"
            priority={ true }
          />
        </div>
        {/* light */ }
        <div className="backface-off flex dark:hidden xl:animate-fadeInAbove">
          <Image
            className="rounded md:rounded-[8px] w-auto"
            src="/assets/playcover-screenshot-light.png"
            alt="playcover app light screenshot"
            width={ heroImageWidth }
            height={ heroImageHeight }
            loading="eager"
            priority={ true }
          />
        </div>
      </section>
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
    revalidate: 150,
  };
}

export default Home;
