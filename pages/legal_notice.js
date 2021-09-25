import Head from "next/head";
import PageHeading from "../components/Layout/PageHeading";
import Legal from "../components/Legal/Legal";


const LegalNotice = () => {
	const legalData = [
		{
			"title": "Copyright Notice",
			"content": [
				"All contents, software, programs, code, technologies and user interfaces contained on this website are protected by the copyright laws. The copyright belongs to Alexandr Dorofeev and is subject to relevant copyright conventions.",
				"Alexandr Dorofeev reserves the right to pursue legal responsibilities if any use of the aforesaid copyright is beyond the scope of reasonable use and without its written permission."
			]
		},
		{
			"title": "Trademark Statement",
			"content": [
				"All trademarks and marks used and displayed on this website belong to Alexandr Dorofeev and are protected by international conventions.",
				"Without prior written permission of Alexandr Dorofeev, trademarks, marks and software names of Alexandr Dorofeev shall not be used in any manner whatsoever. Unauthorized use of the aforesaid trademarks may constitute trademark infringement and Alexandr Dorofeev reserves the right to pursue legal responsibilities."
			]
		}
	];

	return <div className="">
		<PageHeading text="Legal Notice" />

		<main className="px-40">
			<Legal data={ legalData } />
		</main>

	</div>;
};

export default LegalNotice;
