import Layout from "../../components/layout";
import Image from "next/image";
import Nav from "../Nav";
import Head from "next/head";

import Recruit1 from "../../public/assets/Club Data/Placements/recruit1.png";
import Amazon from "../../public/assets/Club Data/Placements/amazon.png";
import BainAndCo from "../../public/assets/Club Data/Placements/bain&co.png";
import Recruit4 from "../../public/assets/Club Data/Placements/recruit4.png";
import Recruit5 from "../../public/assets/Club Data/Placements/recruit5.png";
import Dropbox from "../../public/assets/Club Data/Placements/dropbox.png";
import Evercore from "../../public/assets/Club Data/Placements/evercore.png";
import Instagram from "../../public/assets/Club Data/Placements/instagram.png";
import JPMorgan from "../../public/assets/Club Data/Placements/jpmorgan.png";
import McKinsey from "../../public/assets/Club Data/Placements/mckinsey.png";
import MorganStanley from "../../public/assets/Club Data/Placements/morganstanley.png";
import Microsoft from "../../public/assets/Club Data/Placements/microsoft.png";
import Recruit13 from "../../public/assets/Club Data/Placements/recruit13.png";
import Google from "../../public/assets/Club Data/Placements/google.png";
import Shopify from "../../public/assets/Club Data/Placements/shopify.png";
import Tesla from "../../public/assets/Club Data/Placements/tesla.png";
import TenThousandCoffees from "../../public/assets/Club Data/Placements/tenthousandcoffees.png";
import Uber from "../../public/assets/Club Data/Placements/uber.png";
import Wealthsimple from "../../public/assets/Club Data/Placements/wealthsimple.png";

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
						{generateRecruit(Amazon, "https://www.amazon.jobs/en/")}
						{generateRecruit(BainAndCo)}
						{generateRecruit(Recruit4)}
						{generateRecruit(Recruit5)}
						{generateRecruit(Dropbox)}
						{generateRecruit(Evercore, "https://www.evercore.com/join-our-team/")}
						{generateRecruit(Instagram)}
						{generateRecruit(JPMorgan)}
						{generateRecruit(McKinsey)}
						{generateRecruit(MorganStanley)}
						{generateRecruit(Microsoft)}
						{generateRecruit(Recruit13)}
						{generateRecruit(Google)}
						{generateRecruit(Shopify)}
						{generateRecruit(Tesla)}
						{generateRecruit(TenThousandCoffees)}
						{generateRecruit(Uber)}
						{generateRecruit(Wealthsimple)}
					</div>
				</div>
			</Layout>
			<Footer/>
		</>
	);
}
