import Modal from "../Modal/Modal";
import { AiOutlineCode } from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const Contact = ({ toggleContact }) => {
	return (
		<div>
			<Modal close={ toggleContact }>
				<div className="flex flex-col items-center space-y-10">
					<h1 className="font-light text-3xl md:text-4xl text-center">Contact Details</h1>

					<div className="flex flex-col items-center sm:text-lg text-center">
						<AiOutlineCode size="30px" />
						<h2>Business</h2>
						<a href="mailto:business@playcover.me">iVoider - business@playcover.me</a>
					</div>

					<div className="flex flex-col items-center sm:text-lg text-center">
						<HiOutlineDesktopComputer size="30px" />
						<h2>Website</h2>
						<a href="mailto:aj@playcover.me">AJ - aj@playcover.me</a>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default Contact;
