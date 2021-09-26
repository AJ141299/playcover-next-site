import ListChangelog from '../components/Changelog/ListChangelog';
import PageHeading from '../components/Layout/PageHeading';

export const getStaticProps = async () => {
	const response = await fetch(
		'https://api.github.com/repos/iVoider/PlayCover/releases'
	);
	const gitHubData = await response.json();
	// refreshes on server every 2400 seconds / ISR feature
	return { props: { gitHubData }, revalidate: 2400 };
};

const Changelog = ({ gitHubData }) => {
	return (
		<>
			<PageHeading text="Changelog" />
			<div className="flex justify-center w-[100vw]">
				<div className="w-[82%] sm:w-[76%] sm:max-w-[90rem]">
					<ListChangelog gitData={ gitHubData } />
				</div>
			</div>
		</ >
	);
};

export default Changelog;
