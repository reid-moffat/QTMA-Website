import Contact from "../contact";
import Report from "../reports";
import Layout from "../../components/layout";
import Nav from "../Nav";
import Head from "next/head";
import Image from "next/image";
import FamilyPhoto from "../../public/assets/Members/2021-2022/FamilyPhoto.png";

export async function getStaticProps({params}) {
	return {
		props: {},
	};
}

export default function About() {
	return (
		<>
			<Head>
				<meta name="description" content="Info"/>
				<title>QTMA</title>
				<meta name="og:title" content={"QTMA"}/>
			</Head>
			<Nav/>
			<Layout background={"#edf5fc"}>
				<div className="about-us-container container">
					<div className="info-container">
						<div className="info-title-container">
							<h1 className="section-title info-title">
								About Us
							</h1>
							<p className="contact-subheading">
								Queen’s Tech and Media Association (QTMA) is
								Canada’s premier product development club and
								tech incubator. Over the course of the year,
								four multi-disciplinary teams of nine primarily
								Commerce, Computer Science and Engineering
								students compete to build and launch the best
								software product. QTMA is also proud to be a
								part of the Commerce Society.
							</p>
						</div>
					</div>
					<div className="info-illustration">
						<Image
							alt="illustration"
							src={FamilyPhoto}
							width={600}
							height={437.87}
						/>
					</div>
				</div>
				<Report/>
				<Contact/>
			</Layout>
		</>
	);
}
