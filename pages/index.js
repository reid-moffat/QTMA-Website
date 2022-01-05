import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout';
import Home from "./Home";
import Nav from "./Nav";
import Product from './Products';
import WhatIsQTMA from './WhatIsQTMA';
import OurTeamStructure from './OurTeamStructure';
import MembersGain from "./MembersGain";
import ProgramTimeline from './ProgramTimeline';
import Testimonials from './Testimonials';
import Sponsors from "./Sponsors";
import Footer from "./footer";
export default function Main() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mohave:ital,wght@0,300;1,300&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mohave:ital,wght@0,300;1,300&family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="QTMA hires 12 Developers, 4 Product Manager, 4 Designers, 8 Business Analysts to complete our product teams. We also hire various operating roles. Applications include a written application and interview with the incoming Co - Chairs."
        />
        <link rel="icon" href="/favicon.ico" />
        <title>QTMA</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={"QTMA"} />
      </Head>
      <Layout>
        <div className="index-container">
          <Nav />
          <Home />
          <WhatIsQTMA />
          <Product />
          <OurTeamStructure />
          <MembersGain />
          <ProgramTimeline />
          <Testimonials />
          <Sponsors />
          <Footer />
        </div>
      </Layout>
    </>
  )
}
