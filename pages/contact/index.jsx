import Layout from "../../components/layout";
import Image from "next/image";
import Email from "../../public/assets/Visuals/Email.png";
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
					content="You can reach us through the form below or by sending an email to qtmaweb@gmail.com"
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
								You can reach us through the form below or by sending an email to{" "}
								<a className="email-address" href="mailto:qtmaweb@gmail.com">
									qtmaweb@gmail.com
								</a>
							</p>
						</div>
						<div className="inputs-container">
							{emailError && <p className="error-email">Please enter a valid email.</p>}
							<input
								ref={email}
								className="contact-input email-input"
								type="text"
								onKeyDown={() => {
									setEmailError(false);
								}}
								placeholder="Email"
								required
							/>
							<input
								ref={subject}
								className="contact-input subject-input"
								type="text"
								placeholder="Subject"
								required
							/>
							<textarea
								ref={message}
								className="contact-input message-input"
								rows="5"
								cols="60"
								name="text"
								placeholder="Message"
							/>
						</div>
						<button
							disabled={sendingMessage}
							className={`send-email ${sendingMessage ? "send-email-disabled" : ""}`}
							onClick={(e) => {
								validateInfo(e);
							}}
						>
							SEND
						</button>
					</form>
					<div className="email-illustration">
						<Image alt="illustration" src={Email} width={444} height={437.87}/>
					</div>
				</div>
			</Layout>
			<Footer/>
		</>
	);
}
