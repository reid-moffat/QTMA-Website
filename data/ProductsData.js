/**
 * Data for all current and previous products
 */

// Builder pattern object for creating & verifying a product object
const ProductBuilder = function () {
	return {
		// Required
		productName: undefined,
		year: undefined,
		slogan: undefined,
		members: undefined,
		logoWidth: undefined,
		logoHeight: undefined,

		// Optional
		overview: undefined,
		demo: undefined,

		setName: function (productName) {
			if (typeof productName != "string" || productName === '') {
				throw new Error(`Name ${productName} is invalid, must be a non-empty string`);
			}
			this.productName = productName;
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
			this.members = studentData;
			return this;
		},
		setLogoDimensions: function (dimensions) {
			this.logoWidth = dimensions.width;
			this.logoHeight = dimensions.height;
			return this;
		},

		setOverview: function (overview) {
			if (!this.year === "2020-2021" && (typeof overview !== "string" || !overview)) {
				throw new Error(`Overview ${overview} is invalid, must be a non-empty string`);
			}
			this.overview = overview;
			return this;
		},
		setDemo: function (demo) {
			if (!(demo === '' || demo.match(/^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]{11}$/))) {
				throw new Error(`Demo ${demo} is invalid, must be either an empty string, or a valid youtube embed link`);
			}
			this.demo = demo;
			return this;
		},

		build: function () {
			if (this.productName === undefined || this.year === undefined || this.slogan === undefined || this.members === undefined) {
				throw new Error("The fields productName, year, slogan and members must be defined. " +
					`productName: ${this.productName} year: ${this.year} slogan: ${this.slogan} studentDate: ${this.members}`);
			}

			return {
				productName: this.productName,
				year: this.year,
				slogan: this.slogan,
				members: this.members,

				photoXY: { width: 2000, height: 1333 },
				overview: this.overview,
				demo: this.demo,

				logoHeight: this.logoHeight,
				logoWidth: this.logoWidth,
				logo: `/assets/Products/${this.year}/${this.productName}_Logo.png`,
				teamPhoto: `/assets/Products/${this.year}/${this.productName}_Team.png`,
				pitch: `/assets/Products/${this.year}/${this.productName}_Pitch.pdf`,
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
		.setLogoDimensions({width: 120, height: 133.13})
		.setOverview("Hangover is a social gaming app inspired by Cards Against Humanity and Kahoot. " +
			"Enter a lobby to play with your friends, with one as the Host. Each round, the players will answer a " +
			"mixture of different question types for the Host to judge at the end. The Host decides on a punishment " +
			"(e.g. take a shot), a winner, and a loser. The loser must take the punishment while the winner can give " +
			"the punishment to another player. The loser is then the new host for the subsequent round. Let Hangover " +
			"be the perfect addition to your night!")
		.setDemo("https://www.youtube.com/embed/xOm3xY2QCik")
		.build(),

	new ProductBuilder()
		.setName("Studii")
		.setYear("2019-2020")
		.setSlogan("Academic collaboration at your fingertips")
		.setStudentData([
			["Shwetha Sivakumar", "shwethasivakumar"],
			["Patrick Lenover", 'patrick-lenover-ab2ab5178'],
			["Max Eisen", 'maxeisen'],
			["Ross Hill", 'rosslh'],
			["Carolyn Day", 'carolyn155'],
			["Andrew Simmons", 'andrew-simmons-87a321153'],
			["Kevin Ding", 'kevding'],
			["Connor Colwill", 'connorcolwill'],
		])
		.setLogoDimensions({width: 176.21, height: 59})
		.setOverview("Studii offers a collaborative forum that provides both peer support and expert advice " +
			"for a student’s course questions. Our vision is to harness the knowledge of students and academic experts " +
			"on a nationwide study platform to improve the performance of Canadian university students")
		.setDemo("https://www.youtube.com/embed/WvmwBEX_7iU")
		.build(),

	new ProductBuilder()
		.setName("Wob")
		.setYear("2019-2020")
		.setSlogan("Get the latest word on the street")
		.setStudentData([
			["David Hao", "david-hao"],
			["Jonathan Stroz", 'jonathan-stroz'],
			["Kyle Meade", 'kyle-meade'],
			["Kasthuri Thambipillai", 'kasthuri-t-ba8531144'],
			["Sophia Yang", 'sophia-yang'],
			["Ehsan Merati", 'ehsanmerati'],
			["Julien Lin", 'julien-lin'],
			["Graham Carkner", 'gcarkner'],
		])
		.setLogoDimensions({width: 151.4, height: 90})
		.setOverview("A geo-based, anti-harassment conscious anonymous messaging and content platform meant " +
			"to strengthen relationships in local communities.")
		.setDemo("https://www.youtube.com/embed/6dHJOGqdT8M")
		.build(),

	new ProductBuilder()
		.setName("Stocked")
		.setYear("2019-2020")
		.setSlogan("The best a fridge can get.")
		.setStudentData([
			["Jason Yang", "jason-yang-1b1a1a1a1"],
			["Quentin Roy-Foster", 'quentin-roy-foster-1b1a1a1a1'],
			["Victor Uemura", 'victor-uemura-1b1a1a1a1'],
			["Sydney Tschritter", 'sydney-tschritter-1b1a1a1a1'],
			["Ricky Zhang", 'ricky-zhang-1b1a1a1a1'],
			["Shani Mithani", 'shani-mithani-1b1a1a1a1'],
			["Alice QI", 'alice-qi-1b1a1a1a1'],
			["Jake Koszczewski", 'jenny-zhang-1b1a1a1a1'],
		])
		.setLogoDimensions({width: 252.59, height: 60})
		.setOverview("As a mobile app for both iOS and Android, Stocked is a dynamic meal generator which " +
			"minimizes the shopping you need to do by suggesting recipes based on the ingredients already in your " +
			"fridge. Other features include a receipt scanner and expiration tracker that helps save time and money.")
		.setDemo("https://www.youtube.com/embed/JghgqwDF0NU")
		.build(),

	/*
	 * 2020-2021
	 */
	new ProductBuilder()
		.setName("Eagle")
		.setYear("2020-2021")
		.setSlogan("Your Delivery Service Companion")
		.setStudentData([])
		.setLogoDimensions({width: 200, height: 122})
		.build(),

	new ProductBuilder()
		.setName("Pronto")
		.setYear("2020-2021")
		.setSlogan("Convenient lending for everyone")
		.setStudentData([])
		.setLogoDimensions({width: 120, height: 116})
		.build(),

	new ProductBuilder()
		.setName("Voluntera")
		.setYear("2020-2021")
		.setSlogan("The one-stop shop for social impact")
		.setStudentData([])
		.setLogoDimensions({width: 250, height: 60})
		.build(),

	new ProductBuilder()
		.setName("Loop")
		.setYear("2020-2021")
		.setSlogan("Authentic connections with good friends")
		.setStudentData([])
		.setLogoDimensions({width: 200, height: 100})
		.build(),

	/*
	 * 2021-2022
	 */
	new ProductBuilder()
		.setName("Casa")
		.setYear("2021-2022")
		.setSlogan("Making the roommate finding process as easy as possible")
		.setStudentData([])
		.setLogoDimensions({width: 205, height: 65})
		.build(),

	new ProductBuilder()
		.setName("Haus")
		.setYear("2021-2022")
		.setSlogan("Haus helps Hausmates collaborate and save on groceries")
		.setStudentData([])
		.setLogoDimensions({width: 180, height: 120})
		.build(),

	new ProductBuilder()
		.setName("Loco")
		.setYear("2021-2022")
		.setSlogan("The travel app for true Locos")
		.setStudentData([])
		.setLogoDimensions({width: 200, height: 100})
		.build(),

	new ProductBuilder()
		.setName("Soar")
		.setYear("2021-2022")
		.setSlogan("Find teammates to build your next side project")
		.setStudentData([])
		.setLogoDimensions({width: 200, height: 100})
		.build(),

	/*
	 * 2022-2023
	 */
	new ProductBuilder()
		.setName("Feastly")
		.setYear("2022-2023")
		.setSlogan("Let's feast on something delicious")
		.setStudentData([])
		.setLogoDimensions({width: 200, height: 100})
		.build(),

	new ProductBuilder()
		.setName("Kartt")
		.setYear("2022-2023")
		.setSlogan("Shop smart with Kartt")
		.setStudentData([])
		.setLogoDimensions({width: 200, height: 70})
		.build(),

	new ProductBuilder()
		.setName("Sift")
		.setYear("2022-2023")
		.setSlogan("Choose the gift you want, stress free")
		.setStudentData([])
		.setLogoDimensions({width: 200, height: 100})
		.build(),

	new ProductBuilder()
		.setName("Venato")
		.setYear("2022-2023")
		.setSlogan("Helping students reach their full potential")
		.setStudentData([])
		.setLogoDimensions({width: 240, height: 80})
		.setOverview("As securing an internship is becoming increasingly " +
			"competitive, students have a hard time finding and staying on top of " +
			"every opportunity. Students’ lack of job application tools further cause " +
			"unnecessary stress and worry. Venato solves that by Helping students " +
			"reach their full potential: a one-stop,simple, easy-to-use internship hub to " +
			"organize your job application processes.")
		.build(),
]

export default ProductData;
