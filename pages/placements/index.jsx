import Layout from "../../components/layout";
import Image from "next/image";
import Nav from "../Nav";
import Head from "next/head";

import Recruit1 from "../../public/assets/Club Data/Placements/recruit1.png";
import Recruit2 from "../../public/assets/Club Data/Placements/amazon.png";
import Recruit3 from "../../public/assets/Club Data/Placements/bain&co.png";
import Recruit4 from "../../public/assets/Club Data/Placements/recruit4.png";
import Recruit5 from "../../public/assets/Club Data/Placements/recruit5.png";
import Recruit6 from "../../public/assets/Club Data/Placements/dropbox.png";
import Recruit7 from "../../public/assets/Club Data/Placements/recruit7.png";
import Recruit8 from "../../public/assets/Club Data/Placements/instagram.png";
import Recruit9 from "../../public/assets/Club Data/Placements/jpmorgan.png";
import Recruit10 from "../../public/assets/Club Data/Placements/mckinsey.png";
import Recruit11 from "../../public/assets/Club Data/Placements/morganstanley.png";
import Recruit12 from "../../public/assets/Club Data/Placements/microsoft.png";
import Recruit13 from "../../public/assets/Club Data/Placements/recruit13.png";
import Recruit14 from "../../public/assets/Club Data/Placements/google.png";
import Recruit15 from "../../public/assets/Club Data/Placements/shopify.png";
import Recruit16 from "../../public/assets/Club Data/Placements/tesla.png";
import Recruit17 from "../../public/assets/Club Data/Placements/tenthousandcoffees.png";
import Recruit18 from "../../public/assets/Club Data/Placements/uber.png";
import Recruit19 from "../../public/assets/Club Data/Placements/wealthsimple.png";

import Footer from "../../components/Footer";


export async function getStaticProps({params}) {
	return {
		props: {}
	};
}

export default function Placements() {

	const generateRecruit = (recruit, url) =>  {
		return (
			<div className="recruitment">
				<a href={url} target="_blank">
					<Image alt="Company logo" src={recruit}/>
				</a>
			</div>
		);
	};

	return (
		<>
			<Head>
				<meta name="description" content="Our members have sucessfully recruited at these organizations:"/>
				<title>QTMA</title>
				<meta name="og:title" content={"QTMA"}/>
			</Head>
			<Nav/>
			<Layout background={"#edf5fc"}>
				<div className="placements-container container">
					<h1 className="section-title">Placements</h1>
					<p className="placements-subheading">
						Our members have sucessfully recruited at these organizations:
					</p>
					<div className="recruitment-container">
						{generateRecruit(Recruit1)}
						{generateRecruit(Recruit2, "https://www.amazon.jobs/en/")}
						{generateRecruit(Recruit3)}
						{generateRecruit(Recruit4)}
						{generateRecruit(Recruit5)}
						{generateRecruit(Recruit6)}
						{generateRecruit(Recruit7)}
						{generateRecruit(Recruit8)}
						{generateRecruit(Recruit9)}
						{generateRecruit(Recruit10)}
						{generateRecruit(Recruit11)}
						{generateRecruit(Recruit12)}
						{generateRecruit(Recruit13)}
						{generateRecruit(Recruit14)}
						{generateRecruit(Recruit15)}
						{generateRecruit(Recruit16)}
						{generateRecruit(Recruit17)}
						{generateRecruit(Recruit18)}
						{generateRecruit(Recruit19)}
					</div>
				</div>
			</Layout>
			<Footer/>
		</>
	);
}
