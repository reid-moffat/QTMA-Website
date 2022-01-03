import Layout from "../components/layout";
import Image from "next/image";
import HungOver from "../public/assets/hungover.png";
import Wob from "../public/assets/wob_logo.png";
import Studii from "../public/assets/studii.png";
import Stocked from "../public/assets/stocked.png";
export default function Product() {
  return (
    <Layout background="#EDF5FC">
      <div id="Products" className="products-container container">
        <h1 className="section-title">Products</h1>
        <p className="product-subheading">
          This year, QTMA’s product teams are working on four exciting apps to tackle everyday student
          problems.
        </p>
        <div className="products-container">
          <a className="product" href="#">
            <div className="product-info">
              <h3>Hungover</h3>
              <p>Taking your pregame to the next level</p>
            </div>
            <Image src={HungOver} width={120} height={133.13} />
          </a>
          <a className="product" href="#">
            <div className="product-info">
              <h3>Wob</h3>
              <p>Get the latest word on the street.</p>
            </div>
            <Image src={Wob} width={151.4} height={90} />
          </a>
          <a className="product" href="#">
            <div className="product-info">
              <h3>Studii</h3>
              <p>Academic collaboration at your fingertips</p>
            </div>
            <Image src={Studii} width={176.21} height={59} />
          </a>
          <a className="product" href="#">
            <div className="product-info">
              <h3>Stocked</h3>
              <p>The best a fridge can get.</p>
            </div>
            <Image src={Stocked} width={252.59} height={62} />
          </a>
        </div>
      </div>
    </Layout>
  );
}
