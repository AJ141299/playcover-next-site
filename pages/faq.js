import Head from "next/head";
import FaqQuestions from "../components/FAQ/FaqQuestions";
import PageHeading from "../components/Layout/PageHeading";

const FAQ = () => {
	return (
		<div className="flex flex-col justify-center">
			{/* page heading */ }
			<section>
				<span className="hidden md:block">
					<PageHeading text="Frequently Asked Questions" />
				</span>
				<span className="block md:hidden">
					<PageHeading text="FAQ" overwriteStyles="text-5xl font-bold" />
				</span>
			</section>

			{/* data */ }
			<section className="pb-10">
				<FaqQuestions />
			</section>
		</div>
	);
};

export default FAQ;
