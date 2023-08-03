/**
 * Data for all QTMA members
 */

import MatthewMacEachern from "../public/assets/Members/2023-2024/Matthew_MacEachern.png";
import AlisonXia from "../public/assets/Members/2023-2024/Alison_Xia.png";
import EgorPetrov from "../public/assets/Members/2023-2024/Egor_Petrov.png";

import KevinLiang from "../public/assets/Members/2023-2024/Kevin_Liang.png";
import OliviaXu from "../public/assets/Members/2023-2024/Olivia_Xu.png";
import HelenXu from "../public/assets/Members/2023-2024/Helen_Xu.png";
import MahirHamid from "../public/assets/Members/2023-2024/Mahir_Hamid.png";
import SriyaNarra from "../public/assets/Members/2023-2024/Sriya_Narra.png";
import ArchitaSabhani from "../public/assets/Members/2023-2024/Archita_Sabhani.png";
import MathhewKim from "../public/assets/Members/2023-2024/Mathhew_Kim.png";

import ThomasHuang from "../public/assets/Members/2023-2024/Thomas_Huang.png";
import GrahamCarkner from "../public/assets/Members/2023-2024/Graham_Carkner.png";
import AlexLian from "../public/assets/Members/2023-2024/Alex_Lian.png";
import ManushPatel from "../public/assets/Members/2023-2024/Manush_Patel.png";

import JadeWei from "../public/assets/Members/2023-2024/Jade_Wei.png";
import ReidMoffat from "../public/assets/Members/2023-2024/Reid_Moffat.png";
import CainSusko from "../public/assets/Members/2023-2024/Cain_Susko.png";
import YvesAlikalfic from "../public/assets/Members/2023-2024/Yves_Alikalfic.png";

import JulianBrickman from "../public/assets/Members/2023-2024/Julian_Brickman.png";
import SophieEllwood from "../public/assets/Members/2023-2024/Sophie_Ellwood.png";
import MichaelHan from "../public/assets/Members/2023-2024/Michael_Han.png";
import ConnorRewa from "../public/assets/Members/2023-2024/Connor_Rewa.png";
import DharsanRavindran from "../public/assets/Members/2023-2024/Dharsan_Ravindran.png";
import XimingYu from "../public/assets/Members/2023-2024/Ximing_Yu.png";
import SavannahHan from "../public/assets/Members/2023-2024/Savannah_Han.png";
import ConnorLeung from "../public/assets/Members/2023-2024/Connor_Leung.png";
import DanielJoseph from "../public/assets/Members/2023-2024/Daniel_Joseph.png";
import ShakibAbsar from "../public/assets/Members/2023-2024/Shakib_Absar.png";
import AlBarrAjiboye from "../public/assets/Members/2023-2024/Al-Barr_Ajiboye.png";
import MattDobaj from "../public/assets/Members/2023-2024/Matt_Dobaj.png";
import KeelyMcSpurren from "../public/assets/Members/2023-2024/Keely_McSpurren.png";

import ShabichaSureshkumar from "../public/assets/Members/2023-2024/Shabicha_Sureshkumar.png";
import AmandaLi from "../public/assets/Members/2023-2024/Amanda_Li.png";
import ErinZhang from "../public/assets/Members/2023-2024/Erin_Zhang.png";
import MikeNguyen from "../public/assets/Members/2023-2024/Mike_Nguyen.png";
import JasmineGao from "../public/assets/Members/2023-2024/Jasmine_Gao.png";

import AidanBrown from "../public/assets/Members/2023-2024/Aidan_Brown.png";
import BeatriceBeneciaSetiawan from "../public/assets/Members/2023-2024/Beatrice_Benecia_Setiawan.png";
import StevenVuong from "../public/assets/Members/2023-2024/Steven_Vuong.png";
import NickArchambault from "../public/assets/Members/2023-2024/Nick_Archambault.png";

import VasiliPiliouras from "../public/assets/Members/2023-2024/Vasili_Piliouras.png";
import JennieChoi from "../public/assets/Members/2023-2024/Jennie_Choi.png";
import HannahHe from "../public/assets/Members/2023-2024/Hannah_He.png";
import WilliamDu from "../public/assets/Members/2023-2024/William_Du.png";
import AminahRizvan from "../public/assets/Members/2023-2024/Aminah_Rizvan.png";
import MarcusHui from "../public/assets/Members/2023-2024/Marcus_Hui.png";
import CynthiaChoi from "../public/assets/Members/2023-2024/Cynthia_Choi.png";
import ClaireHu from "../public/assets/Members/2023-2024/Claire_Hu.png";
import EmanuelPiccinini from "../public/assets/Members/2023-2024/Emanuel_Piccinini.png";

// All positions team members can have
const Positions = [
	"Co-Chair",
	"Club Operations",
	"Product Manager",
	"Senior Developer",
	"Developer",
	"UI/UX Designer",
	"Senior Business Analyst",
	"Business Analyst",
	"Website Developer",
	"Frosh Rep",
];

const generateMemberData = (image, name, position, linkedin = "", subPosition = "") => {
	// Param verification
	if (typeof image !== 'object') {
		throw new Error(`Team member's image must be an image object (import it). Image value: ${JSON.stringify(image)} Type: ${typeof image}`);
	}
	if (typeof name !== 'string' || name.match(/^([A-Za-z -])+?$/) == null) {
		throw new Error(`Name: ${name} is invalid, see regex above`);
	}
	if (typeof position !== 'string' || !Positions.includes(position)) {
		throw new Error(`'${position}' is not a valid position`);
	}
	if (typeof linkedin !== 'string' || (linkedin !== "" && linkedin.match(/^https:\/\/www.linkedin.com\/in\/[a-z1-9-]+\/$/) === null)) {
		throw new Error(`Linkedin is invalid, must be an empty string (no linkedin) or a valid profile url. Parameter value: ${linkedin}`);
	}
	if (typeof subPosition !== 'string') {
		throw new Error(`Invalid Sub-Position, must be a string (can be empty). Value: ${subPosition}`);
	}

	// Construct & return new object
	return {
		image: image,
		name: name,
		position: position,
		subPosition: subPosition,
		linkedIn: linkedin,
	};
};

const ClubMembers = [
	// Co-chairs
	generateMemberData(MatthewMacEachern, "Matthew MacEachern", "Co-Chair", "https://www.linkedin.com/in/matthew-maceachern/"),
	generateMemberData(AlisonXia, "Alison Xia", "Co-Chair", "https://www.linkedin.com/in/alison-xia/"),
	generateMemberData(EgorPetrov, "Jegor Petrov", "Co-Chair"),

	// Club operations
	generateMemberData(KevinLiang, "Kevin Liang", "Club Operations", "", "Director"),
	generateMemberData(OliviaXu, "Olivia Xu", "Club Operations", "", "Director"),
	generateMemberData(HelenXu, "Helen Xu", "Club Operations", "", "Director"),
	generateMemberData(MahirHamid, "Mahir Hamid", "Club Operations", "", "Senior Advisor"),
	generateMemberData(SriyaNarra, "Sriya Narra", "Club Operations", "", "Operations"),
	generateMemberData(ArchitaSabhani, "Archita Sabhani", "Club Operations", "", "Operations"),
	generateMemberData(MathhewKim, "Mathhew Kim", "Club Operations", "", "Operations"),

	// PMs
	generateMemberData(ThomasHuang, "Thomas Huang", "Product Manager"),
	generateMemberData(GrahamCarkner, "Graham Carkner", "Product Manager"),
	generateMemberData(AlexLian, "Alex Lian", "Product Manager"),
	generateMemberData(ManushPatel, "Manush Patel", "Product Manager"),

	// Sr. devs
	generateMemberData(JadeWei, "Jade Wei", "Senior Developer"),
	generateMemberData(ReidMoffat, "Reid Moffat", "Senior Developer"),
	generateMemberData(CainSusko, "Cain Susko", "Senior Developer"),
	generateMemberData(YvesAlikalfic, "Yves Alikalfic", "Senior Developer"),

	// Devs
	generateMemberData(JulianBrickman, "Julian Brickman", "Developer"),
	generateMemberData(SophieEllwood, "Sophie Ellwood", "Developer"),
	generateMemberData(MichaelHan, "Michael Han", "Developer"),

	generateMemberData(ConnorRewa, "Connor Rewa", "Developer"),
	generateMemberData(DharsanRavindran, "Dharsan Ravindran", "Developer"),
	generateMemberData(XimingYu, "Ximing Yu", "Developer"),

	generateMemberData(SavannahHan, "Savannah Han", "Developer"),
	generateMemberData(ConnorLeung, "Connor Leung", "Developer"),
	generateMemberData(DanielJoseph, "Daniel Joseph", "Developer"),
	generateMemberData(ShakibAbsar, "Shakib Absar", "Developer"),

	generateMemberData(AlBarrAjiboye, "Al-Barr Ajiboye", "Developer"),
	generateMemberData(MattDobaj, "Matt Dobaj", "Developer"),
	generateMemberData(KeelyMcSpurren, "Keely McSpurren", "Developer"),

	// UI/UX
	generateMemberData(ShabichaSureshkumar, "Shabicha Sureshkumar", "UI/UX Designer", "", "Senior Designer"),
	generateMemberData(AmandaLi, "Amanda Li", "UI/UX Designer", "", "Junior Designer"),
	generateMemberData(ErinZhang, "Erin Zhang", "UI/UX Designer", "", "Senior Designer"),
	generateMemberData(MikeNguyen, "Mike Nguyen", "UI/UX Designer", "", "Senior Designer"),
	generateMemberData(JasmineGao, "Jasmine Gao", "UI/UX Designer", "", "Senior Designer"),

	// Sr. BAs
	generateMemberData(AidanBrown, "Aidan Brown", "Senior Business Analyst"),
	generateMemberData(BeatriceBeneciaSetiawan, "Beatrice Benecia Setiawan", "Senior Business Analyst"),
	generateMemberData(StevenVuong, "Steven Vuong", "Senior Business Analyst"),
	generateMemberData(NickArchambault, "Nick Archambault", "Senior Business Analyst"),

	// BAs
	generateMemberData(VasiliPiliouras, "Vasili Piliouras", "Business Analyst"),
	generateMemberData(JennieChoi, "Jennie Choi", "Business Analyst"),
	generateMemberData(HannahHe, "Hannah He", "Business Analyst"),
	generateMemberData(WilliamDu, "William Du", "Business Analyst"),
	generateMemberData(AminahRizvan, "Aminah Rizvan", "Business Analyst"),
	generateMemberData(MarcusHui, "Marcus Hui", "Business Analyst"),
	generateMemberData(CynthiaChoi, "Cynthia Choi", "Business Analyst"),
	generateMemberData(ClaireHu, "Claire Hu", "Business Analyst"),
	generateMemberData(EmanuelPiccinini, "Emanuel Piccinini", "Business Analyst"),

	// Web devs 🙂
	generateMemberData(ReidMoffat, "Reid Moffat", "Website Developer"),
	generateMemberData(YvesAlikalfic, "Yves Alikalfic", "Website Developer"),
	generateMemberData(KevinLiang, "Kevin Liang", "Website Developer"),
]

export { Positions, ClubMembers };
