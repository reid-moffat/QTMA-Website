/**
 * Data for all QTMA members
 */

import MatthewMacEachern from "../public/assets/Members/2023-2024/Matthew_MacEachern.png";
import AlisonXia from "../public/assets/Members/2023-2024/Alison_Xia.png";
import EgorPetrov from "../public/assets/Members/2023-2024/Egor_Petrov.png";

import JadeWei from "../public/assets/Members/2023-2024/Jade_Wei.png";
import ReidMoffat from "../public/assets/Members/2023-2024/Reid_Moffat.png";
import CainSusko from "../public/assets/Members/2023-2024/Cain_Susko.png";
import YvesAlikalfic from "../public/assets/Members/2023-2024/Yves_Alikalfic.png";

const Positions = [
    "Co-Chair",
    "Senior Developer",
    "Developer",
    "Advisor",
    "ProductManager",
    "ProductMarketingManager",
    "UIUX",
    "SeniorBA",
    "BA",
    "Operations",
    "FroshRep",
    "WebDev",
];

const generateMemberData = (image, name, position, linkedin = "", subPosition = "") => {
    if (!Positions.includes(position)) {
        throw new Error(`'${position}' is not a valid position`);
    }

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
    generateMemberData(MatthewMacEachern, "Matthew MacEachern", "Co-Chair"),
    generateMemberData(AlisonXia, "Alison Xia", "Co-Chair"),
    generateMemberData(EgorPetrov, "Egor Petrov", "Co-Chair"),

    // Sr. devs
    generateMemberData(JadeWei, "Jade Wei", "Senior Developer"),
    generateMemberData(ReidMoffat, "Reid Moffat", "Senior Developer"),
    generateMemberData(CainSusko, "Cain Susko", "Senior Developer"),
    generateMemberData(YvesAlikalfic, "Yves Alikalfic", "Senior Developer"),

    // Devs
    /*
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

    generateMemberData(AlBarAjiboye, "Al-Bar Ajiboye", "Developer"),
    generateMemberData(MattDobaj, "Matt Dobaj", "Developer"),
    generateMemberData(KeelyMcSpurren, "Keely McSpurren", "Developer"),
    */

    // Sr. BAs
    /*
    {
        image: getImage("Mark_Gragtmans"),
        name: "Mark Gragtmans",
        position: Positions.Advisor,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/mark-gragtmans/"
    },
    {
        image: getImage("Arsh_Kochhar"),
        name: "Arsh Kochhar",
        position: Positions.Advisor,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/arshkochhar/"
    },
    {
        image: getImage("Jason"),
        name: "Jason Yang",
        position: Positions.Advisor,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/jason-z-yang/"
    },
    {
        image: getImage("Zaais_Van_Zyl"),
        name: "Zaais Van Zyl",
        position: Positions.Advisor,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/zaais-van-zyl/"
    },
    {
        image: getImage("Richard"),
        name: "Richard Li",
        position: Positions.ProductManager,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/richardliqu/"
    },
    {
        image: getImage("Ethan"),
        name: "Ethan Bonnardeaux",
        position: Positions.ProductManager,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/ethan-bonnardeaux/"
    },
    {
        image: getImage("Julien_Lin"),
        name: "Julien Lin",
        position: Positions.ProductManager,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/julien-lin/"
    },
    {
        image: getImage("Riya_Shah"),
        name: "Riya Shah",
        position: Positions.ProductManager,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/riya-shah-queens-university/"
    },
    {
        image: getImage("Vicky_Deng"),
        name: "Vicky Deng",
        position: Positions.ProductMarketingManager,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/dengvicky/"
    },
    {
        image: getImage("Chloe_Hung"),
        name: "Chloe Hung",
        position: Positions.ProductMarketingManager,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/chloe-hung/"
    },
    {
        image: getImage("Eesha_Kohli"),
        name: "Eesha Kohli",
        position: Positions.ProductMarketingManager,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/eesha-kohli/"
    },
    {
        image: getImage("Helen_Xu"),
        name: "Helen Xu",
        position: Positions.ProductMarketingManager,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/helencxu/"
    },
    {
        image: getImage("Flora_Lin"),
        name: "Flora Lin",
        position: Positions.UIUX,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/~flora/"
    },
    {
        image: getImage("Graham_Carkner"),
        name: "Graham Carkner",
        position: Positions.UIUX,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/gcarkner/"
    },
    {
        image: getImage("Randy_Shao"),
        name: "Randy Shao",
        position: Positions.UIUX,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/randyshao/"
    },
    {
        image: getImage("Doris_Zhuo"),
        name: "Doris Zhuo",
        position: Positions.UIUX,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/doris-zhuo/"
    },
    {
        image: getImage("Dylan_Ratti"),
        name: "Dylan Ratti",
        position: Positions.SeniorBA,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/dylan-ratti/"
    },
    {
        image: getImage("Aaron_Chen"),
        name: "Aaron Chen",
        position: Positions.BA,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/aaron-chen-44306b135/"
    },
    {
        image: getImage("David_Choo"),
        name: "David Choo",
        position: Positions.BA,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/david-j-choo/"
    },
    {
        image: getImage("Mahir_Hamid"),
        name: "Mahir Hamid",
        position: Positions.BA,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/mahirhamid/"
    },
    {
        image: getImage("Naomi"),
        name: "Naomi Junatas",
        position: Positions.BA,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/naomijunatas/"
    },
    {
        image: getImage("Chris_Power"),
        name: "Chris Power",
        position: Positions.BA,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/chris-power-canada/"
    },
    {
        image: getImage("Kevin_Wu"),
        name: "Kevin Wu",
        position: Positions.BA,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/wu-kevin/"
    },
    {
        image: getImage("Jacob_Xu"),
        name: "Jacob Xu",
        position: Positions.BA,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/jacobx/"
    },
    {
        image: getImage("Dene"),
        name: "Dene Bezuidenhout",
        position: Positions.Operations,
        subPosition: "Marketing",
        linkedIn: "https://www.linkedin.com/in/denebezuidenhout/"
    },
    {
        image: getImage("Sola_Ebina"),
        name: "Sola Ebina",
        position: Positions.Operations,
        subPosition: "Marketing",
        linkedIn: "https://www.linkedin.com/in/solaebina/"
    },
    {
        image: getImage("Allen_Chen"),
        name: "Allen Chen",
        position: Positions.Operations,
        subPosition: "Internal Affairs",
        linkedIn: "https://www.linkedin.com/in/allen-chen0/"
    },
    {
        image: getImage("Benny_Lam"),
        name: "Benny Lam",
        position: Positions.Operations,
        subPosition: "Sponsorships",
        linkedIn: "https://www.linkedin.com/in/bennylam116/"
    },
    {
        image: getImage("Catherine_Pham"),
        name: "Catherine Pham",
        position: Positions.Operations,
        subPosition: "Sponsorships",
        linkedIn: "https://www.linkedin.com/in/catherinepham123/"
    },
    {
        image: getImage("Krishaan"),
        name: "Krishaan Thyagarajan",
        position: Positions.FroshRep,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/krishaan-thyagarajan/"
    },
    {
        image: getImage("Egor"),
        name: "Egor Petrov",
        position: Positions.FroshRep,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/egorpetrov1402/"
    },
    {
        image: getImage("Manush"),
        name: "Manush Patel",
        position: Positions.FroshRep,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/manushpatel/"
    },
    {
        image: getImage("Olivia_Xu"),
        name: "Olivia Xu",
        position: Positions.FroshRep,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/olivia-xu-057a27171/"
    },
    {
        image: getImage("Kevin_Yu"),
        name: "Kevin Yu",
        position: Positions.WebDev,
        subPosition: "",
        linkedIn: "https://www.linkedin.com/in/kevin-yu-246147199/"
    },
    */
]

export { Positions, ClubMembers };
