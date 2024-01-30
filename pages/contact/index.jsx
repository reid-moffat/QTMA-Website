import Layout from "../../components/layout";
import Image from "next/image";
import Email from "../../public/assets/Visuals/Email.png";
import Instagram from "../../public/assets/Visuals/instagram.png";
import Nav from "../Nav";
import React, { useRef, useState } from "react";
import validator from "validator";
import axios from "axios";
import Head from "next/head";
import Footer from "../../components/Footer";


export async function getStaticProps({params}) {
	return {
		props: {}
	};
}

export default function Contact() {
	const email = useRef();
	const subject = useRef();
	const message = useRef();

	const [sendingMessage, setSendingMessage] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [messageSent, setMessageSent] = useState(false);

	const validateInfo = async (e) => {
		e.preventDefault();
		setSendingMessage(true);
		setTimeout(async () => {
			try {
				if (validator.isEmail(email.current.value)) {
					const response = await axios.post(
						`https://maker.ifttt.com/trigger/New_Email/with/key/bx66spDE0qGrEwyi0z6TpM?value1=${email.current.value}&value2=${subject.current.value}&value3=${message.current.value}`,
						// JSON.stringify(contactData),
						{headers: {"Content-Type": "application/json"}}
					);

					if (response.status === 200) {
						setMessageSent(true);
						alert("Email sent to qtmaweb@gmail.com.");
					}

					email.current.value = "";
					subject.current.value = "";
					message.current.value = "";
				} else {
					setEmailError(true);
				}
			} catch (error) {
				alert("Email sent to qtmaweb@gmail.com.");
				email.current.value = "";
				subject.current.value = "";
				message.current.value = "";
			}
			setSendingMessage(false); // Re-enables the button.
		}, 3000);
	};

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
					<form
						className="contact-info"
						onSubmit={(e) => {
							validateInfo(e);
						}}
					>
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
