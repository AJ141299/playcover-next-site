import PageHeading from "../components/Layout/PageHeading";
import ListTeam from "../components/Team/ListTeam";
import { IoIosPeople } from "react-icons/io";
import { IoCodeSlashSharp } from "react-icons/io5";
import { HiOutlineDesktopComputer, HiOutlineTranslate } from "react-icons/hi";
import { CgIfDesign } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import ListTranslators from "../components/Team/ListTranslators";

const Team = () => {
	const translateTeam = [
		{
			"language": "German",
			"translator": "AXDaily"
		},
		{
			"language": "Chinese",
			"translator": "catalpam"
		},
		{
			"language": "Spanish",
			"translator": "Hades"
		},
		{
			"language": "Japanese",
			"translator": "小霖"
		},
		{
			"language": "Korean",
			"translator": "Leo"
		},
		{
			"language": "Indonesian",
			"translator": "Haru and mbah sukocok"
		},
		{
			"language": "Russian",
			"translator": "Annymone"
		},
	];

	return (
		<>
			<PageHeading text="Team" replaceBottomPadding="pb-12" />

			<div className="flex justify-center pb-6">
				<div className="shadow-md w-[85%] md:w-[55%] rounded-lg  bg-gray-200 dark:bg-[#222222] transition duration-200 ease-in-out">
					<div className="p-4 md:p-10 space-y-5 flex flex-col transition duration-[1200ms] ease-out">
						<ListTeam icon={ <IoCodeSlashSharp size="25px" /> } role="Creator" name="iVoider" email="business@playcover.me" />
						<ListTeam icon={ <HiOutlineDesktopComputer size="25px" /> } role="Website" name="AJ and Hades" email="AJ@playcover.me" />
						<ListTeam icon={ <IoIosPeople size="25px" /> } role="Discord Community Manager" name="Sloooopie" />
						<ListTeam icon={ <CgIfDesign size="25px" /> } role="Logo" name="Artemiy" />
						<div>
							<ListTeam icon={ <HiOutlineTranslate size="25px" /> } role="Translation Services" />
							<div className="pl-9 pt-1">
								<ListTranslators data={ translateTeam } />
							</div>
						</div>
						<div>
							<ListTeam icon={ <FaRegHeart size="25px" /> } role="Special thanks to..." name="" />
							<div className="pl-9 pt-1">
								<ul>
									<li>All the moderators</li>
									<li>All the supporters</li>
									<li>LingFei.Shengtian for ARM Support and Services</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Team;
