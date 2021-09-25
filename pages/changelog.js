import ListChangelog from '../components/Changelog/ListChangelog';
import PageHeading from '../components/Layout/PageHeading';

export const getStaticProps = async () => {
	const response = await fetch(
		'https://api.github.com/repos/iVoider/PlayCover/releases'
	);
	const gitHubData = await response.json();
	return { props: { gitHubData }, revalidate: 2400 };
};

const Changelog = ({ gitHubData }) => {
	return (
		<>
			<PageHeading text="Changelog" />
			<div className="flex justify-center w-[100vw]">
				<div className="w-[85%] sm:w-[76%]">
					<ListChangelog gitData={ gitHubData } />
				</div>
			</div>
		</ >
	);
};

export default Changelog;
