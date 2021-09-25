import Modal from "../Modal/Modal";

const Playpass = ({ togglePlaypass }) => {
	return (
		<div>
			<Modal close={ togglePlaypass }>
				<div className="text-center flex flex-col items-center space-y-20">
					<h1 className="font-light text-3xl md:text-4xl text-center">Get PlayPass</h1>

					{/* patreon */ }
					<a href="https://www.patreon.com/playcoverapp" className="rounded-full flex items-center space-x-2 transition duration-300 bg-gray-100 hover:bg-white dark:bg-[#292929] dark:hover:bg-[#2e2e2e] shadow px-6 py-4">
						<svg className="w-7 md:w-8" viewBox="0 0 567.18 545.8" xmlns="http://www.w3.org/2000/svg"><circle cx="362.59" cy="204.59" fill="#e85b46" r="204.59" /><path d="M0 0h100v545.8H0z" fill="#241e12" />
						</svg>
						<p className="text-red-500 text-xl md:text-2xl uppercase font-bold pt-[0.1rem]">patreon</p>
					</a>
				</div>
			</Modal>
		</div>
	);
};

export default Playpass;
