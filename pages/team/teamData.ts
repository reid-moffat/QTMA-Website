const Alice = "/assets/Members/Alice.jpg"
const Allen = "/assets/Members/Allen_Chen.jpg"
const Aman = "/assets/Members/Aman.jpg"
const Ben = "/assets/Members/Ben_Minor.jpg"
const Catherine = "/assets/Members/Catherine_Pham.jpg"
const Chole = "/assets/Members/Chloe_Hung.jpg"
const David = "/assets/Members/David_Choo.jpg"
const Doris = "/assets/Members/Doris_Zhuo.jpg"
const Egor = "/assets/Members/Egor.jpg"
const Emily = "/assets/Members/Emily_Zhao.jpg"
const Ethan = "/assets/Members/Ethan.jpg"
const Graham = "/assets/Members/Graham_Carkner.jpg"
const Helen = "/assets/Members/Helen_Xu.jpg"
const Isabella = "/assets/Members/Isabella_Enriquez.jpg"
const Jason = "/assets/Members/Jason.png"
const Jessica = "/assets/Members/Jessica_Li.jpg"
const Julien = "/assets/Members/Julien_Lin.jpg"
const Kevin_Ding = "/assets/Members/Kevin_Ding.jpg"
const Kevin_Liang = "/assets/Members/Kevin_Liang.jpg"
const Kevin_Yu = "/assets/Members/Kevin_Yu.jpg"
const Khao = "/assets/Members/Khoa_Nguyen.jpg"
const Krishaan = "/assets/Members/Krishaan.jpg"
const Lexi = "/assets/Members/Lexi_Locca.jpg"
const Lia = "/assets/Members/Lia_Mason.jpg"
const Mahir = "/assets/Members/Mahir_Hamid.jpg"
const Manush = "/assets/Members/Manush.jpg"
const Matthew = "/assets/Members/Matthew_MacEachern.png"
const Mudra = "/assets/Members/Mudra.jpg"
const Olivia = "/assets/Members/Olivia_Xu.jpg"
const Randy = "/assets/Members/Randy_Shao.jpg"
const Reid = "/assets/Members/Reid.jpg"
const Richard = "/assets/Members/Richard.jpg"
const noPhoto = "/assets/Members/JohnnyBravo.png"
const Aaron = "/assets/Members/Aaron_Chen.jpg"
const Arsh = "/assets/Members/Arsh_Kochhar.jpeg"
const Benny = "/assets/Members/Benny_Lam.jpg"
const Chris = "/assets/Members/Chris_Power.png"
const Connor = "/assets/Members/Connor_Colwill.png"
const Dene = "/assets/Members/Dene.jpeg"
const Dylan = "/assets/Members/Dylan_Ratti.jpeg"
const Eesha = "/assets/Members/Eesha_Kohli.png"
const Eunice = "/assets/Members/Eunice_Choi.png"
const Grady = "/assets/Members/Grady_Palfrey.jpg"
const Jacob = "/assets/Members/Jacob_Xu.jpeg"
const Kevin_Quijalvo = "/assets/Members/Kevin_Quijalvo.jpg"
const Kevin_Subagaren = "/assets/Members/Kevin_Subagaren.jpg"
const Kevin_Wu = "/assets/Members/Kevin_Wu.jpg"
const Mark = "/assets/Members/Mark_Gragtmans.jpg"
const Naomi = "/assets/Members/Naomi.jpg"
const Ronan = "/assets/Members/Ronan_Almeida.jpg"
const Sola = "/assets/Members/Sola_Ebina.png"
const Truman = "/assets/Members/Truman_Be.jpg"
const Zaais = "/assets/Members/Zaais_Van_Zyl.jpg"
const Vicky = "/assets/Members/Vicky_Deng.jpg"
const Flora = "/assets/Members/Flora_Lin.png"
const Riyah = "/assets/Members/Riya_Shah.jpg"

enum Positions {
    CoChair,
    SeniorDeveloper,
    Developer,
    Advisor,
    ProductManager,
    ProductMarketingManager,
    UIUX,
    SeniorBA,
    BA,
    Operations,
    FroshRep,
    WebDev,
}

const ClubMembers = [
    {
        image: Mudra,
        name: "Mudra Patel",
        position: Positions.CoChair,
        specialRole: "Product Lead",
        linkedIn: "https://www.linkedin.com/in/mudrapatel/"
    },
    {
        image: Aman,
        name: "Aman Dhaliwal",
        position: Positions.CoChair,
        specialRole: "Development Lead",
        linkedIn: "https://www.linkedin.com/in/amandhaliwal44/"
    },
    {
        image: Kevin_Ding,
        name: "Kevin Ding",
        position: Positions.CoChair,
        specialRole: "Business Lead",
        linkedIn: "https://www.linkedin.com/in/kevding/"
    },
    {
        image: Alice,
        name: "Alice Qi",
        position: Positions.CoChair,
        specialRole: "Business Lead",
        linkedIn: "https://www.linkedin.com/company/queen's-technology-and-media-association/mycompany/"
    },
    {
        image: Truman,
        name: "Truman Be",
        position: Positions.SeniorDeveloper,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/truman-be/"
    },
    {
        image: Ben,
        name: "Ben Minor",
        position: Positions.SeniorDeveloper,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/ben-minor/"
    },
    {
        image: Kevin_Quijalvo,
        name: "Kevin Quijalvo",
        position: Positions.SeniorDeveloper,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/marc-quijalvo/"
    },
    {
        image: Emily,
        name: "Emily Zhao",
        position: Positions.SeniorDeveloper,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/emily-zhaoo/"
    },
    {
        image: Ronan,
        name: "Ronan Almeida",
        position: Positions.Developer,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/ronanalmeida/"
    },
    {
        image: Connor,
        name: "Connor Colwill",
        position: Positions.Developer,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/connorcolwill/"
    },
    {
        image: Isabella,
        name: "Isabella Enriquez",
        position: Positions.Developer,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/isabellaenriquez/"
    },
    {
        image: Lexi,
        name: "Lexi Locca",
        position: Positions.Developer,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/company/queen's-technology-and-media-association/mycompany/"
    },
    {
        image: Jessica,
        name: "Jessica Li",
        position: Positions.Developer,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/jessica-a-li/"
    },
    {
        image: Kevin_Liang,
        name: "Kevin Liang",
        position: Positions.Developer,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/kevin-liang-32b9791aa/"
    },
    {
        image: Matthew,
        name: "Matthew MacEachern",
        position: Positions.Developer,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/matthew-maceachern/"
    },
    {
        image: Lia,
        name: "Lia Mason",
        position: Positions.Developer,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/lia-k-mason/"
    },
    {
        image: Reid,
        name: "Reid Moffat",
        position: Positions.Developer,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/reid-moffat/"
    },
    {
        image: Khao,
        name: "Khoa Nguyen",
        position: Positions.Developer,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/khoa-nguyen-438a5417a/"
    },
    {
        image: Grady,
        name: "Grady Palfrey",
        position: Positions.Developer,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/gradypalfrey/"
    },
    {
        image: Kevin_Subagaren,
        name: "Kevin Subagaran",
        position: Positions.Developer,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/kevin-s-a76b741b0/"
    },
    {
        image: Mark,
        name: "Mark Gragtmans",
        position: Positions.Advisor,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/mark-gragtmans/"
    },
    {
        image: Arsh,
        name: "Arsh Kochhar",
        position: Positions.Advisor,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/arshkochhar/"
    },
    {
        image: Jason,
        name: "Jason Yang",
        position: Positions.Advisor,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/jason-z-yang/"
    },
    {
        image: Zaais,
        name: "Zaais Van Zyl",
        position: Positions.Advisor,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/zaais-van-zyl/"
    },
    {
        image: Richard,
        name: "Richard Li",
        position: Positions.ProductManager,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/richardliqu/"
    },
    {
        image: Ethan,
        name: "Ethan Bonnardeaux",
        position: Positions.ProductManager,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/ethan-bonnardeaux/"
    },
    {
        image: Julien,
        name: "Julien Lin",
        position: Positions.ProductManager,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/julien-lin/"
    },
    {
        image: Riyah,
        name: "Riya Shah",
        position: Positions.ProductManager,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/riya-shah-queens-university/"
    },
    {
        image: Vicky,
        name: "Vicky Deng",
        position: Positions.ProductMarketingManager,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/dengvicky/"
    },
    {
        image: Chole,
        name: "Chloe Hung",
        position: Positions.ProductMarketingManager,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/chloe-hung/"
    },
    {
        image: Eesha,
        name: "Eesha Kohli",
        position: Positions.ProductMarketingManager,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/eesha-kohli/"
    },
    {
        image: Helen,
        name: "Helen Xu",
        position: Positions.ProductMarketingManager,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/helencxu/"
    },
    {
        image: Flora,
        name: "Flora Lin",
        position: Positions.UIUX,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/~flora/"
    },
    {
        image: Graham,
        name: "Graham Carkner",
        position: Positions.UIUX,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/gcarkner/"
    },
    {
        image: Randy,
        name: "Randy Shao",
        position: Positions.UIUX,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/randyshao/"
    },
    {
        image: Doris,
        name: "Doris Zhuo",
        position: Positions.UIUX,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/doris-zhuo/"
    },
    {
        image: Dylan,
        name: "Dylan Ratti",
        position: Positions.SeniorBA,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/dylan-ratti/"
    },
    {
        image: Aaron,
        name: "Aaron Chen",
        position: Positions.BA,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/aaron-chen-44306b135/"
    },
    {
        image: David,
        name: "David Choo",
        position: Positions.BA,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/david-j-choo/"
    },
    {
        image: Mahir,
        name: "Mahir Hamid",
        position: Positions.BA,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/mahirhamid/"
    },
    {
        image: Naomi,
        name: "Naomi Junatas",
        position: Positions.BA,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/naomijunatas/"
    },
    {
        image: Chris,
        name: "Chris Power",
        position: Positions.BA,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/chris-power-canada/"
    },
    {
        image: Kevin_Wu,
        name: "Kevin Wu",
        position: Positions.BA,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/wu-kevin/"
    },
    {
        image: Jacob,
        name: "Jacob Xu",
        position: Positions.BA,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/jacobx/"
    },
    {
        image: Dene,
        name: "Dene Bezuidenhout",
        position: Positions.Operations,
        specialRole: "Marketing",
        linkedIn: "https://www.linkedin.com/in/denebezuidenhout/"
    },
    {
        image: Sola,
        name: "Sola Ebina",
        position: Positions.Operations,
        specialRole: "Marketing",
        linkedIn: "https://www.linkedin.com/in/solaebina/"
    },
    {
        image: Allen,
        name: "Allen Chen",
        position: Positions.Operations,
        specialRole: "Internal Affairs",
        linkedIn: "https://www.linkedin.com/in/allen-chen0/"
    },
    {
        image: Benny,
        name: "Benny Lam",
        position: Positions.Operations,
        specialRole: "Sponsorships",
        linkedIn: "https://www.linkedin.com/in/bennylam116/"
    },
    {
        image: Catherine,
        name: "Catherine Pham",
        position: Positions.Operations,
        specialRole: "Sponsorships",
        linkedIn: "https://www.linkedin.com/in/catherinepham123/"
    },
    {
        image: Krishaan,
        name: "Krishaan Thyagarajan",
        position: Positions.FroshRep,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/krishaan-thyagarajan/"
    },
    {
        image: Egor,
        name: "Egor Petrov",
        position: Positions.FroshRep,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/egorpetrov1402/"
    },
    {
        image: Manush,
        name: "Manush Patel",
        position: Positions.FroshRep,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/manushpatel/"
    },
    {
        image: Olivia,
        name: "Olivia Xu",
        position: Positions.FroshRep,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/olivia-xu-057a27171/"
    },
    {
        image: Kevin_Yu,
        name: "Kevin Yu",
        position: Positions.WebDev,
        specialRole: "",
        linkedIn: "https://www.linkedin.com/in/kevin-yu-246147199/"
    },
]

export { Positions, ClubMembers };
