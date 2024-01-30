import Layout from "../../components/layout";
import Image from "next/image";
import Instagram from "../../public/assets/Visuals/instagram.png";
import Nav from "../Nav";
import React from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function Contact() {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="You can reach us by sending a message to QTMA's instagram, @queenstechmedia"
				/>
				<title>QTMA</title>
				<meta name="og:title" content={"QTMA"}/>
			</Head>
			<Nav/>
			<Layout background="#EDF5FC">
				<div className="contact-container container">
					<div className="contact-info">
						<div className="contact-title-container">
							<h1 className="section-title contact-title">Contact Us</h1>
							<p className="contact-subheading">
								You can reach us by sending a message to QTMA's instagram, {""}
								<a href="https://www.instagram.com/queenstechmedia"
								   style={{ color: "#0000EE" }}>@queenstechmedia</a>
							</p>
							<a href="https://www.instagram.com/queenstechmedia" target="_blank">
								<Image alt="instagram" src={Instagram} width={180} height={180}/>
							</a>
						</div>
					</div>
					<div className="contact-info">
						<div className="contact-title-container">
							<h1 className="section-title contact-title">QTMA guide</h1>
							<p className="contact-subheading">
								See our recruiting guide for a comprehensive overview of the club
							</p>
							<a
								className="recruiting-container"
								href="/assets/Club Data/Info/2023_Hiring_Package.pdf"
								target="_blank"
							>
								<p>Recruiting Guide</p>
								<p className="download-icon">
									<HiOutlineDocumentDownload></HiOutlineDocumentDownload>
								</p>
							</a>
						</div>
					</div>
				</div>
			</Layout>
			<Footer/>
		</>
	);
}
