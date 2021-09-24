const Contact = ({ toggleContact }) => {
	return (
		<div className="">
			<div
				onClick={() => {
					toggleContact();
				}}
				className="absolute w-[100vw] h-[100vh] opacity-50 bg-black z-20"
			></div>
			<div className="absolute top-[40vh] left-[43vw] rounded-lg bg-gray-400 w-52 h-40 z-30"></div>
		</div>
	);
};

export default Contact;
