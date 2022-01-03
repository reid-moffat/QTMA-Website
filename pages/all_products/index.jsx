import Layout from "../../components/layout";
import Image from "next/image";
import HungOver from "../../public/assets/hungover.png";
import Wob from "../../public/assets/wob_logo.png";
import Studii from "../../public/assets/studii.png";
import Stocked from "../../public/assets/stocked.png";
import Nav from "../Nav";
import Link from "next/link";

export default function Products() {
  return (
    <>
      <Nav />
      <Layout background="#EDF5FC">
        <div id="Products" className="product-container product-page container">
          <h1 className="section-title">Products</h1>
          <p className="product-subheading">
            This year, QTMA’s product teams are working on four exciting apps to tackle everyday student
            problems.
          </p>
          <div className="products-container">
            <Link href="/product/Hungover">
              <div className="product">
                <div className="product-info">
                  <h3>Hungover</h3>
                  <p>Taking your pregame to the next level</p>
                </div>
                <Image src={HungOver} width={120} height={133.13} />
              </div>
            </Link>
            <Link href="/product/Wob">
              <div className="product">
                <div className="product-info">
                  <h3>Wob</h3>
                  <p>Get the latest word on the street.</p>
                </div>
                <Image src={Wob} width={151.4} height={90} />
              </div>
            </Link>
            <Link href="/product/Studii">
              <div className="product">
                <div className="product-info">
                  <h3>Studii</h3>
                  <p>Academic collaboration at your fingertips</p>
                </div>
                <Image src={Studii} width={176.21} height={59} />
              </div>
            </Link>
            <Link href="/product/Stocked">
              <div className="product">
                <div className="product-info">
                  <h3>Stocked</h3>
                  <p>The best a fridge can get.</p>
                </div>
                <Image src={Stocked} width={252.59} height={62} />
              </div>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
