import Layout from "../../components/layout";
import Image from "next/image";
import Email from "../../public/assets/Email.png";
import Nav from "../Nav";
import React, { useState, useEffect, useRef } from "react";
import validator from "validator";
import axios from "axios";

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
      //Request payload data
      const contactData = {
        value1: email.current.value,
        value2: subject.current.value,
        value3: message.current.value,
      };
      try {
        if (validator.isEmail(email.current.value)) {
          const response = await axios.post(
            `https://maker.ifttt.com/trigger/${process.env.NEXT_PUBLIC_EVENT_NAME}/with/key/${process.env.NEXT_PUBLIC_API_KEY}`,
            JSON.stringify(contactData),
            { headers: { "Content-Type": "application/json" } }
          );

          if (response.status === 200) {
            setMessageSent(true);
          }

          email.current.value = "";
          subject.current.value = "";
          message.current.value = "";
        } else {
          setEmailError(true);
        }
      } catch (error) {
        alert("Error sending message try again.");
      }
      setSendingMessage(false); //Renables the button.
    }, 3000);
  };

  return (
    <>
      <Nav />
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
                <a className="email-address" href="mailto:qtmaexec@gmail.com">
                  qtmaexec@gmail.com
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
            <Image src={Email} width={444} height={437.87} />
          </div>
        </div>
      </Layout>
    </>
  );
}
