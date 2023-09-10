import Layout from "../../components/layout";
import Image from "next/image";
import Nav from "../Nav";
import Head from "next/head";

import AdaSupport from "../../public/assets/Club Data/Placements/adaSupport.png";
import Amazon from "../../public/assets/Club Data/Placements/amazon.png";
import BainAndCo from "../../public/assets/Club Data/Placements/bain&co.png";
import BostonConsulting from "../../public/assets/Club Data/Placements/bostonConsultingGroup.png";
import Blend from "../../public/assets/Club Data/Placements/blend.png";
import Dropbox from "../../public/assets/Club Data/Placements/dropbox.png";
import Evercore from "../../public/assets/Club Data/Placements/evercore.png";
import Instagram from "../../public/assets/Club Data/Placements/instagram.png";
import JPMorgan from "../../public/assets/Club Data/Placements/jpmorgan.png";
import McKinsey from "../../public/assets/Club Data/Placements/mckinsey.png";
import MorganStanley from "../../public/assets/Club Data/Placements/morganstanley.png";
import Microsoft from "../../public/assets/Club Data/Placements/microsoft.png";
import Next36 from "../../public/assets/Club Data/Placements/next36.png";
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

	const generateRecruit = (recruit, url) => {
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
						{generateRecruit(AdaSupport, "https://www.ada.cx/careers")}
						{generateRecruit(Amazon, "https://www.amazon.jobs/en/")}
						{generateRecruit(BainAndCo, "https://www.bain.com/careers/")}
						{generateRecruit(BostonConsulting, "https://careers.bcg.com/")}
						{generateRecruit(Blend, "https://blend.com/company/careers/")}
						{generateRecruit(Dropbox, "https://jobs.dropbox.com/all-jobs")}
						{generateRecruit(Evercore, "https://www.evercore.com/join-our-team/")}
						{generateRecruit(Instagram, "https://about.instagram.com/about-us/careers")}
						{generateRecruit(JPMorgan, "https://careers.jpmorgan.com/us/en/home")}
						{generateRecruit(McKinsey, "https://www.mckinsey.com/careers/search-jobs")}
						{generateRecruit(MorganStanley, "https://www.morganstanley.com/careers/career-opportunities-search")}
						{generateRecruit(Microsoft, "https://careers.microsoft.com/v2/global/en/home.html")}
						{generateRecruit(Next36, "https://www.nextcanada.com/next-36/")}
						{generateRecruit(Google, "https://www.google.com/about/careers/applications/jobs/results/")}
						{generateRecruit(Shopify, "https://www.shopify.com/ca/careers")}
						{generateRecruit(Tesla, "https://www.tesla.com/en_ca/careers")}
						{generateRecruit(TenThousandCoffees, "https://www.tenthousandcoffees.com/")}
						{generateRecruit(Uber, "https://www.uber.com/ca/en/careers/")}
						{generateRecruit(Wealthsimple, "https://www.wealthsimple.com/en-ca/careers")}
					</div>
				</div>
			</Layout>
			<Footer/>
		</>
	);
}
