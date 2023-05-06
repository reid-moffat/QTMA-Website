/**
 * Data for all current and previous products
 */
import { ClubMembers } from "./TeamData.js";

const getTeamPhoto = (name, year) => `/assets/Products/${ year }/${ name }_Team.png`;
const getPitch = (name, year) => `/assets/Products/${ year }/Pitches/${ name }_Pitch.pdf`;

const generateProductData = (name, year, slogan, students, photoxy, overview, demo = '') => {
	if (typeof name != "string" || name === '') {
		throw new Error(`Name ${ name } is invalid, must be a non-empty string`);
	}
	if (year.match(/^20(19|20|21|22)-202[0-3]$/) == null || Number(year.substring(0, 4)) + 1 !== Number(year.substring(5, 9))) {
		throw new Error(`Year ${ year } is invalid, see regex`);
	}
	if (typeof slogan != "string" || slogan === '') {
		throw new Error(`Slogan ${ slogan } is invalid, must be a non-empty string`);
	}

	const studentData = [];
	if (!Array.isArray(students) || students.length === 0) {
		throw new Error(`Students ${ students } is invalid, must be an array`);
	}
	for (let i = 0; i < students.length; ++i) {
		const memberData = ClubMembers.find((member) => member.name === students[i]);
		if (!memberData) {
			throw new Error(`Student ${ students[i] } could not be found in the team data file`);
		}

		studentData.push({
			studentName: memberData.name,
			linkedin: `https://www.linkedin.com/in/${ memberData.linkedin }`
		});
	}

	if (typeof photoxy != "object" || photoxy === null || typeof photoxy.width != "number" || typeof photoxy.height != "number") {
		throw new Error(`Photoxy ${ photoxy } is invalid, must be an object with width and height`);
	}
	if (typeof overview !== "string" || !overview) {
		throw new Error(`Overview ${ overview } is invalid, must be a non-empty string`);
	}
	if (!(demo === '' || demo.match(/^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]{11}$/))) {
		throw new Error(`Demo ${ demo } is invalid, must be either an empty string, or a valid youtube embed link`);
	}

	return {
		productName: name,
		year: year,
		slogan: slogan,
		studentInfo: studentData,
		teamPhoto: getTeamPhoto(name, year),
		photoXY: photoxy,
		productOverview: overview,
		productPitch: getPitch(name, year),
		productDemo: demo,
	}
}

const ProductData = [
	// 2019-2020
	{
		productName: "Hungover",
		year: "2019-2020",
		slogan: "Taking your pregame to the next level",
		studentInfo: [
			{
				studentName: "Diane Huang",
				linkedin: "https://www.linkedin.com/in/dianehuang11/"
			},
			{
				studentName: "Ben Kitor",
				linkedin: "https://www.linkedin.com/in/bkitor/"
			},
			{
				studentName: "Tim Lampen",
				linkedin: "https://www.linkedin.com/in/timlampen/"
			},
			{
				studentName: "Sam Mcphail",
				linkedin: "https://www.linkedin.com/in/sam-mcphail/"
			},
			{
				studentName: "Sierra Cache angus",
				linkedin: "https://www.linkedin.com/in/sierra-cache/"
			},
			{
				studentName: "Victor Gao",
				linkedin: "https://www.linkedin.com/in/victor-gao/"
			},
			{
				studentName: "Tina Huang",
				linkedin: "https://www.linkedin.com/in/tina-c-huang/"
			},
			{
				studentName: "Ethan Blumberg",
				linkedin: "#"
			},
		],
		teamPhoto: getTeamPhoto("Hungover", "2019-2020"),
		photoXY: {
			width: 2000,
			height: 1470
		},
		productOverview: "Hangover is a social gaming app inspired by Cards Against Humanity and Kahoot. Enter a lobby to play with your friends, with one as the Host. Each round, the players will answer a mixture of different question types for the Host to judge at the end. The Host decides on a punishment (e.g. take a shot), a winner, and a loser. The loser must take the punishment while the winner can give the punishment to another player. The loser is then the new host for the subsequent round. Let Hangover be the perfect addition to your night!",
		productPitch: getPitch("Hungover", "2019-2020"),
		productDemo: "https://www.youtube.com/embed/xOm3xY2QCik",
	},
	{
		productName: "Studii",
		year: "2019-2020",
		slogan: "Academic collaboration at your fingertips",
		studentInfo: [
			{
				studentName: "Shwetha Sivakumar",
				linkedin: "https://www.linkedin.com/in/shwethasivakumar/"
			},
			{
				studentName: "Patrick Lenover",
				linkedin: "https://www.linkedin.com/in/patrick-lenover-ab2ab5178/"
			},
			{
				studentName: "Max Eisen",
				linkedin: "https://www.linkedin.com/in/maxeisen/"
			},
			{
				studentName: "Ross Hill",
				linkedin: "https://www.linkedin.com/in/rosslh/"
			},
			{
				studentName: "Carolyn Day",
				linkedin: "https://www.linkedin.com/in/carolyn155/"
			},
			{
				studentName: "Andrew Simmons",
				linkedin: "https://www.linkedin.com/in/andrew-simmons-87a321153/"
			},
			{
				studentName: "Kevin Ding",
				linkedin: "https://www.linkedin.com/in/kevding/"
			},
			{
				studentName: "Connor Colwill",
				linkedin: "https://www.linkedin.com/in/connorcolwill/"
			},
		],
		teamPhoto: getTeamPhoto("Studii", "2019-2020"),
		photoXY: {
			width: 2000,
			height: 1333
		},
		productOverview: "Studii offers a collaborative forum that provides both peer support and expert advice for a student’s course questions. Our vision is to harness the knowledge of students and academic experts on a nationwide study platform to improve the performance of Canadian university students.",
		productPitch: "",
		productDemo: "https://www.youtube.com/embed/WvmwBEX_7iU",
	},
	{
		productName: "Wob",
		year: "2019-2020",
		slogan: "Get the latest word on the street",
		studentInfo: [
			{
				studentName: "David Hao",
				linkedin: "https://www.linkedin.com/in/david-hao/"
			},
			{
				studentName: "Jonathan Stroz",
				linkedin: "https://www.linkedin.com/in/jonathan-stroz/"
			},
			{
				studentName: "Kyle Meade",
				linkedin: "https://www.linkedin.com/in/kymed/"
			},
			{
				studentName: "Kasthuri Thambipillai",
				linkedin: "https://www.linkedin.com/in/kasthuri-t-ba8531144/"
			},
			{
				studentName: "Sophia Yang",
				linkedin: "https://www.linkedin.com/in/sophia-yangg/"
			},
			{
				studentName: "Ehsan Merati",
				linkedin: "https://www.linkedin.com/in/ehsanmerati/"
			},
			{
				studentName: "Julien Lin",
				linkedin: "https://www.linkedin.com/in/julien-lin/"
			},
			{
				studentName: "Graham Carkner",
				linkedin: "#"
			},
		],
		teamPhoto: getTeamPhoto("Wob", "2019-2020"),
		photoXY: {
			width: 2000,
			height: 1333
		},
		productOverview: "A geo-based, anti-harassment conscious anonymous messaging and content platform meant to strengthen relationships in local communities.",
		productPitch: getPitch("Wob", "2019-2020"),
		productDemo: "https://www.youtube.com/embed/6dHJOGqdT8M",
	},
	{
		productName: "Stocked",
		year: "2019-2020",
		slogan: "The best a fridge can get.",
		studentInfo: [
			{
				studentName: "Jason Yang",
				linkedin: ""
			},
			{
				studentName: "Quentin Roy-Foster",
				linkedin: ""
			},
			{
				studentName: "Victor Uemura",
				linkedin: ""
			},
			{
				studentName: "Sydney Tschritter",
				linkedin: ""
			},
			{
				studentName: "Ricky Zhang",
				linkedin: ""
			},
			{
				studentName: "Shani Mithani",
				linkedin: ""
			},
			{
				studentName: "Alice QI",
				linkedin: ""
			},
			{
				studentName: "Jake Koszczewski",
				linkedin: ""
			},
		],
		teamPhoto: getTeamPhoto("Stocked", "2020-2021"),
		photoXY: {
			width: 2000,
			height: 1333
		},
		productOverview: "As a mobile app for both iOS and Android, Stocked is a dynamic meal generator which minimizes the shopping you need to do by suggesting recipes based on the ingredients already in your fridge. Other features include a receipt scanner and expiration tracker that helps save time and money.",
		productPitch: getPitch("Stocked", "2020-2021"),
		productDemo: "https://www.youtube.com/embed/JghgqwDF0NU",
	},

	// 2020-2021
	{
		productName: "Eagle",
		year: "2020-2021",
		slogan: "Your Delivery Service Companion",
		studentInfo: [],
		teamPhoto: "",
		photoXY: {},
		productOverview: "",
		productPitch: getPitch("Eagle", "2020-2021"),
		productDemo: ""
	},
	{
		productName: "Pronto",
		year: "2020-2021",
		slogan: "Convenient lending for everyone",
		studentInfo: [],
		teamPhoto: "",
		photoXY: {},
		productOverview: "",
		productPitch: getPitch("Pronto", "2020-2021"),
		productDemo: ""
	},
	{
		productName: "Voluntera",
		year: "2020-2021",
		slogan: "The one-stop shop for social impact",
		studentInfo: [],
		teamPhoto: "",
		photoXY: {},
		productOverview: "",
		productPitch: getPitch("Voluntera", "2020-2021"),
		productDemo: ""
	},

	// 2021-2022

	// 2022-2023
]

export default ProductData;
