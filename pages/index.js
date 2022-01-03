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
  )
}
