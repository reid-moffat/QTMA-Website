import Layout from "../components/layout";
import Image from "next/image";
import Business from "../public/assets/Business.png";
import ComSci from "../public/assets/Computer_Scientist.png";
import Engineer from "../public/assets/Engineer.png";
export default function WhatIsQTMA() {
  return (
    <Layout background="white">
      <section id="WhatIsQTMA" className="about-container container">
        <h1 className="section-title">What is QTMA?</h1>
        <div className="about-description">
          <p>
            Queen’s Tech and Media Association (QTMA) is Canada’s premier product development club and tech
            incubator. Over the course of the year, four multi-disciplinary teams of eight students from
            Commerce, Computer Science and Engineering compete to build and launch the best software product.{" "}
          </p>
        </div>
        <div className="about-illustration-container">
          <div className="about-illustration">
            <Image src={Business} width={316} height={300} />
          </div>
          <div className="about-illustration">
            <Image src={ComSci} width={316} height={300} />
          </div>
          <div className="about-illustration">
            <Image src={Engineer} width={316} height={300} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
