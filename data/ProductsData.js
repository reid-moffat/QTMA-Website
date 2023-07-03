/**
 * Data for all current and previous products
 */

const getTeamPhoto = (name, year) => `/assets/Products/${year}/${name}_Team.png`;
const getPitch = (name, year) => `/assets/Products/${year}/${name}_Pitch.pdf`;

const generateProductData = (name, year, slogan, students, photoxy, overview, demo = '') => {
	if (typeof name != "string" || name === '') {
		throw new Error(`Name ${name} is invalid, must be a non-empty string`);
	}
	if (year.match(/^20(19|20|21|22)-202[0-3]$/) == null || Number(year.substring(0, 4)) + 1 !== Number(year.substring(5, 9))) {
		throw new Error(`Year ${year} is invalid, see regex`);
	}
	if (typeof slogan != "string" || slogan === '') {
		throw new Error(`Slogan ${slogan} is invalid, must be a non-empty string`);
	}

	const studentData = [];
	if (!Array.isArray(students) || !students || (!year === "2020-2021" && students.length === 0)) {
		throw new Error(`Students ${students} is invalid, must be a non-empty array`);
	}
	for (let i = 0; i < students.length; ++i) {
		const student = students[i];
		if (!Array.isArray(student) || student.length !== 2) {
			throw new Error(`Student ${student} is invalid, must be an array with a student name and their linkedin id`);
		}
		if (typeof student[0] !== "string" || !student[0] || typeof student[1] !== "string" || !student[1]) {
			throw new Error(`Student ${student} need a valid name & linkedin id (# if they don't have one)`);
		}

		studentData.push({
			studentName: student[0],
			linkedin: student[1] === '#' ? '#' : `https://www.linkedin.com/in/${student[1]}/`
		});
	}

	if (!year === "2020-2021" && (typeof photoxy != "object" || photoxy === null || typeof photoxy.width != "number" || typeof photoxy.height != "number")) {
		throw new Error(`Photoxy ${photoxy} is invalid, must be an object with width and height`);
	}
	if (!year === "2020-2021" && (typeof overview !== "string" || !overview)) {
		throw new Error(`Overview ${overview} is invalid, must be a non-empty string`);
	}
	if (!(demo === '' || demo.match(/^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]{11}$/))) {
		throw new Error(`Demo ${demo} is invalid, must be either an empty string, or a valid youtube embed link`);
	}

	return {
		productName: name,
		year: year,
		slogan: slogan,
		studentInfo: studentData,
		teamPhoto: year === "2020-2021" ? "" : getTeamPhoto(name, year),
		photoXY: photoxy,
		productOverview: overview,
		productPitch: getPitch(name, year),
		productDemo: demo,
	}
}

let ProductBuilder = function () {
	return {
		// Required
		productName: undefined,
		year: undefined,
		slogan: undefined,
		studentData: undefined,

		// Optional
		photoXY: undefined,
		productOverview: undefined,
		productDemo: undefined,

		setName: function (productName) {
			if (typeof productName != "string" || productName === '') {
				throw new Error(`Name ${productName} is invalid, must be a non-empty string`);
			}
			this.productName = productName;
			console.log("Product name value 1:" + productName);
			return this;
		},
		setYear: function (year) {
			if (year.match(/^20(19|20|21|22)-202[0-3]$/) == null || Number(year.substring(0, 4)) + 1 !== Number(year.substring(5, 9))) {
				throw new Error(`Year ${year} is invalid, see regex`);
			}
			this.year = year;
			return this;
		},
		setSlogan: function (slogan) {
			if (typeof slogan != "string" || slogan === '') {
				throw new Error(`Slogan ${slogan} is invalid, must be a non-empty string`);
			}
			this.slogan = slogan;
			console.log("Product name value 2:" + this.productName);
			return this;
		},
		setStudentData: function (studentInfo) {
			const studentData = [];
			if (!Array.isArray(studentInfo) || !studentInfo || (!this.year === "2020-2021" && studentInfo.length === 0)) {
				throw new Error(`Students ${studentInfo} is invalid, must be a non-empty array`);
			}
			for (let i = 0; i < studentInfo.length; ++i) {
				const student = studentInfo[i];
				if (!Array.isArray(student) || student.length !== 2) {
					throw new Error(`Student ${student} is invalid, must be an array with a student name and their linkedin id`);
				}
				if (typeof student[0] !== "string" || !student[0] || typeof student[1] !== "string" || !student[1]) {
					throw new Error(`Student ${student} need a valid name & linkedin id (# if they don't have one)`);
				}

				studentData.push({
					studentName: student[0],
					linkedin: student[1] === '#' ? '#' : `https://www.linkedin.com/in/${student[1]}/`
				});
			}
			this.studentData = studentData;
			return this;
		},

		setPhotoXY: function (photoXY) {
			if (!this.year === "2020-2021" && (typeof photoXY != "object" || photoXY === null || typeof photoXY.width != "number" || typeof photoXY.height != "number")) {
				throw new Error(`Photoxy ${photoXY} is invalid, must be an object with width and height`);
			}
			this.photoXY = photoXY;
			return this;
		},
		setOverview: function (productOverview) {
			if (!this.year === "2020-2021" && (typeof productOverview !== "string" || !productOverview)) {
				throw new Error(`Overview ${productOverview} is invalid, must be a non-empty string`);
			}
			this.productOverview = productOverview;
			return this;
		},
		setDemo: function (productDemo) {
			if (!(productDemo === '' || productDemo.match(/^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]{11}$/))) {
				throw new Error(`Demo ${productDemo} is invalid, must be either an empty string, or a valid youtube embed link`);
			}
			this.productDemo = productDemo;
			return this;
		},

		build: function () {
			if (this.productName === undefined || this.year === undefined || this.slogan === undefined || this.studentData === undefined) {
				throw new Error("The fields productName, year, slogan and studentData must be defined. " +
					`productName: ${this.productName} year: ${this.year} slogan: ${this.slogan} studentDate: ${this.studentData}`);
			}

			const photo: string = this.year === "2020-2021" ? "" : getTeamPhoto(this.productName, this.year);
			const pitch: string = getPitch(this.productName, this.year);
			return {
				productName: this.productName,
				year: this.year,
				slogan: this.slogan,
				studentInfo: this.studentData,

				photoXY: this.photoXY,
				productOverview: this.productOverview,
				productDemo: this.productDemo,

				teamPhoto: photo,
				productPitch: pitch,
			}
		}
	};
};

const ProductData = [
	/*
	 * 2019-2020
	 */
	new ProductBuilder()
		.setName("Hungover")
		.setYear("2019-2020")
		.setSlogan("Taking your pregame to the next level")
		.setStudentData([
			["Diane Huang", "dianehuang11"],
			["Ben Kitor", 'bkitor'],
			["Tim Lampen", 'timlampen'],
			["Sam Mcphail", 'sam-mcphail'],
			["Sierra Cache angus", 'sierra-cache'],
			["Victor Gao", 'victor-gao'],
			["Tina Huang", 'tina-c-huang'],
			["Ethan Blumberg", '#'],
		])
		.setPhotoXY( { width: 2000, height: 1470 })
		.setOverview("Hangover is a social gaming app inspired by Cards Against Humanity and Kahoot. " +
			"Enter a lobby to play with your friends, with one as the Host. Each round, the players will answer a " +
			"mixture of different question types for the Host to judge at the end. The Host decides on a punishment " +
			"(e.g. take a shot), a winner, and a loser. The loser must take the punishment while the winner can give " +
			"the punishment to another player. The loser is then the new host for the subsequent round. Let Hangover " +
			"be the perfect addition to your night!")
		.setDemo("https://www.youtube.com/embed/xOm3xY2QCik")
		.build(),

	generateProductData("Hungover", "2019-2020", "Taking your pregame to the next level", [
			["Diane Huang", "dianehuang11"],
			["Ben Kitor", 'bkitor'],
			["Tim Lampen", 'timlampen'],
			["Sam Mcphail", 'sam-mcphail'],
			["Sierra Cache angus", 'sierra-cache'],
			["Victor Gao", 'victor-gao'],
			["Tina Huang", 'tina-c-huang'],
			["Ethan Blumberg", '#'],
		],
		{
			width: 2000,
			height: 1470
		},
		"Hangover is a social gaming app inspired by Cards Against Humanity and Kahoot. Enter a lobby to play with your friends, with one as the Host. Each round, the players will answer a mixture of different question types for the Host to judge at the end. The Host decides on a punishment (e.g. take a shot), a winner, and a loser. The loser must take the punishment while the winner can give the punishment to another player. The loser is then the new host for the subsequent round. Let Hangover be the perfect addition to your night!",
		"https://www.youtube.com/embed/xOm3xY2QCik"
	),

	generateProductData("Studii", "2019-2020", "Academic collaboration at your fingertips", [
			["Shwetha Sivakumar", "shwethasivakumar"],
			["Patrick Lenover", 'patrick-lenover-ab2ab5178'],
			["Max Eisen", 'maxeisen'],
			["Ross Hill", 'rosslh'],
			["Carolyn Day", 'carolyn155'],
			["Andrew Simmons", 'andrew-simmons-87a321153'],
			["Kevin Ding", 'kevding'],
			["Connor Colwill", 'connorcolwill'],
		],
		{
			width: 2000,
			height: 1333
		},
		"Studii offers a collaborative forum that provides both peer support and expert advice for a student’s course questions. Our vision is to harness the knowledge of students and academic experts on a nationwide study platform to improve the performance of Canadian university students",
		"https://www.youtube.com/embed/WvmwBEX_7iU"
	),

	generateProductData("Wob", "2019-2020", "Get the latest word on the street", [
			["David Hao", "david-hao"],
			["Jonathan Stroz", 'jonathan-stroz'],
			["Kyle Meade", 'kyle-meade'],
			["Kasthuri Thambipillai", 'kasthuri-t-ba8531144'],
			["Sophia Yang", 'sophia-yang'],
			["Ehsan Merati", 'ehsanmerati'],
			["Julien Lin", 'julien-lin'],
			["Graham Carkner", 'gcarkner'],
		],
		{
			width: 2000,
			height: 1333
		},
		"A geo-based, anti-harassment conscious anonymous messaging and content platform meant to strengthen relationships in local communities.",
		"https://www.youtube.com/embed/6dHJOGqdT8M",
	),

	generateProductData("Stocked", "2019-2020", "The best a fridge can get.", [
			["Jason Yang", "jason-yang-1b1a1a1a1"],
			["Quentin Roy-Foster", 'quentin-roy-foster-1b1a1a1a1'],
			["Victor Uemura", 'victor-uemura-1b1a1a1a1'],
			["Sydney Tschritter", 'sydney-tschritter-1b1a1a1a1'],
			["Ricky Zhang", 'ricky-zhang-1b1a1a1a1'],
			["Shani Mithani", 'shani-mithani-1b1a1a1a1'],
			["Alice QI", 'alice-qi-1b1a1a1a1'],
			["Jake Koszczewski", 'jenny-zhang-1b1a1a1a1'],
		],
		{
			width: 2000,
			height: 1333
		},
		"As a mobile app for both iOS and Android, Stocked is a dynamic meal generator which minimizes the shopping you need to do by suggesting recipes based on the ingredients already in your fridge. Other features include a receipt scanner and expiration tracker that helps save time and money.",
		"https://www.youtube.com/embed/JghgqwDF0NU",
	),

	/*
	 * 2020-2021
	 */
	generateProductData("Eagle", "2020-2021", "Your Delivery Service Companion", [],
		{},
		"",
	),

	generateProductData("Pronto", "2020-2021", "Convenient lending for everyone", [],
		{},
		"",
	),

	generateProductData("Voluntera", "2020-2021", "The one-stop shop for social impact", [],
		{},
		"",
	),

	generateProductData("Loop", "2020-2021", "Authentic connections with good friends", [],
		{},
		"",
	),

	/*
	 * 2021-2022
	 */
	generateProductData("Casa", "2021-2022", "Making the roommate finding process as easy as possible",
		[],
		{},
		"",
	),

	generateProductData("Haus", "2021-2022", "Haus helps Hausmates collaborate and save on groceries",
		[],
		{},
		"",
	),

	generateProductData("Loco", "2021-2022", "The travel app for true Locos",
		[],
		{},
		"",
	),

	generateProductData("Soar", "2021-2022", "Find teammates to build your next side project",
		[],
		{},
		"",
	),

	/*
	 * 2022-2023
	 */
	generateProductData("Feastly", "2022-2023", "Let's feast on something delicious",
		[],
		{},
		"",
	),

	generateProductData("Kartt", "2022-2023", "Shop smart with Kartt",
		[],
		{},
		"",
	),

	generateProductData("Sift", "2022-2023", "Choose the gift you want, stress free",
		[],
		{},
		"",
	),

	generateProductData("Venato", "2022-2023", "Helping students reach their full potential",
		[],
		{},
		"",
	),
]

console.log(JSON.stringify(ProductData[0], null, 4));

export default ProductData;
