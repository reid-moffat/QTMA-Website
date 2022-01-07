import Layout from "../../components/layout";
import Image from "next/image";
import HungOver from "../../public/assets/hungover.png";
import Wob from "../../public/assets/wob_logo.png";
import Studii from "../../public/assets/studii.png";
import Stocked from "../../public/assets/stocked.png";
import Nav from "../Nav";
import Link from "next/link";
import Head from "next/head";
import Product from "../Products";

export default function Products() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="This year, QTMA’s product teams are working on four exciting apps to tackle everyday student
            problems."
        />
        <title>QTMA</title>
        <meta name="og:title" content={"QTMA"} />
      </Head>
      <Nav />
      <Product />
    </>
  );
}
