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
		<div className="">
			<PageHeading text="Changelog" />
			<div className="pl-40">
				<ListChangelog gitData={ gitHubData } />
			</div>
		</div >
	);
};

export default Changelog;
