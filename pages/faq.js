import Head from "next/head";
import FaqQuestions from "../components/FAQ/FaqQuestions";
import PageHeading from "../components/Layout/PageHeading";

const FAQ = () => {
	return (
		<div className="flex flex-col justify-center">
			{/* page heading */ }
			<span className="hidden lg:block">
				<PageHeading text="Frequently Asked Questions" />
			</span>
			<span className="lg:hidden">
				<PageHeading text="FAQ" overwriteStyles="text-5xl font-bold" />
			</span>

			{/* data */ }
			<FaqQuestions />
		</div>
	);
};

export default FAQ;
