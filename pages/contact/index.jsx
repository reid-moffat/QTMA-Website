import Layout from "../../components/layout";
import Image from "next/image";
import Instagram from "../../public/assets/Visuals/instagram.png";
import Nav from "../Nav";
import React from "react";
import Head from "next/head";
import Footer from "../../components/Footer";


export async function getStaticProps({params}) {
	return {
		props: {}
	};
}

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
					<form className="contact-info">
						<div className="contact-title-container">
							<h1 className="section-title contact-title">Contact Us</h1>
							<p className="contact-subheading">
								You can reach us by sending a message to QTMA's instagram, {""}
								<a href="https://www.instagram.com/queenstechmedia" style={{ color: "#0000EE" }}>@queenstechmedia</a>
							</p>
						</div>
					</form>
					<div className="email-illustration">
						<Image alt="illustration" src={Instagram} width={400} height={400}/>
					</div>
				</div>
			</Layout>
			<Footer/>
		</>
	);
}
