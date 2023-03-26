import Layout from "../../components/layout";
import Image from "next/image";
import Nav from "../Nav";
import Recruit1 from "../../public/assets/Data/recruit1.png";
import Recruit2 from "../../public/assets/Data/recruit2.png";
import Recruit3 from "../../public/assets/Data/recruit3.png";
import Recruit4 from "../../public/assets/Data/recruit4.png";
import Recruit5 from "../../public/assets/Data/recruit5.png";
import Recruit6 from "../../public/assets/Data/recruit6.png";
import Recruit7 from "../../public/assets/Data/recruit7.png";
import Recruit8 from "../../public/assets/Data/recruit8.png";
import Recruit9 from "../../public/assets/Data/recruit9.png";
import Recruit10 from "../../public/assets/Data/recruit10.png";
import Recruit11 from "../../public/assets/Data/recruit11.png";
import Recruit12 from "../../public/assets/Data/recruit12.png";
import Recruit13 from "../../public/assets/Data/recruit13.png";
import Recruit14 from "../../public/assets/Data/recruit14.png";
import Recruit15 from "../../public/assets/Data/recruit15.png";
import Recruit16 from "../../public/assets/Data/recruit16.png";
import Recruit17 from "../../public/assets/Data/recruit17.png";
import Recruit18 from "../../public/assets/Data/recruit18.png";
import Recruit19 from "../../public/assets/Data/recruit19.png";
import Head from "next/head";

export async function getStaticProps({ params }) {
  return {
    props: {
    }
  };
}

export default function Placements() {
  return (
    <>
      <Head>
        <meta name="description" content="Our members have sucessfully recruited at these organizations:" />
        <title>QTMA</title>
        <meta name="og:title" content={"QTMA"} />
      </Head>
      <Nav />
      <Layout background={"#edf5fc"}>
        <div className="placements-container container">
          <h1 className="section-title">Placements</h1>
          <p className="placements-subheading">
            Our members have sucessfully recruited at these organizations:
          </p>
          <div className="recruitment-container">
            <div className="recruitment">
              <Image alt="Company logos" src={Recruit1} width={108} height={108} />
            </div>
            <div className="recruitment">
              <Image alt="Company logos" src={Recruit2} width={208} height={75} />
            </div>
            <div className="recruitment">
              <Image alt="Company logos" src={Recruit3} width={200} height={125} />
            </div>
            <div className="recruitment">
              <Image alt="Company logos" src={Recruit4} width={102} height={100} />
            </div>
            <div className="recruitment">
              <Image alt="Company logos" src={Recruit5} width={270} height={135.183} />
            </div>
            <div className="recruitment">
              <Image alt="Company logos" src={Recruit6} width={89} height={89} />
            </div>
            <div className="recruitment">
              <Image alt="Company logos" src={Recruit7} width={275} height={120} />
            </div>
            <div className="recruitment">
              <Image alt="Company logos" src={Recruit8} width={170} height={170} />
            </div>
            <div className="recruitment">
              <Image alt="Company logos" src={Recruit9} width={281} height={56} />
            </div>
            <div className="recruitment">
              <Image alt="Company logos" src={Recruit10} width={266} height={135} />
            </div>
            <div className="recruitment">
              <Image alt="Company logos" src={Recruit11} width={260} height={64} />
            </div>
            <div className="recruitment">
              <Image alt="Company logos" src={Recruit12} width={227} height={60} />
            </div>
            <div className="recruitment">
              <Image alt="Company logos" src={Recruit13} width={297} height={79} />
            </div>
            <div className="recruitment">
              <Image alt="Company logos" src={Recruit14} width={249} height={81} />
            </div>
            <div className="recruitment">
              <Image alt="Company logos" src={Recruit15} width={247} height={72} />
            </div>
            <div className="recruitment">
              <Image alt="Company logos" src={Recruit16} width={249} height={189} />
            </div>
            <div className="recruitment">
              <Image alt="Company logos" src={Recruit17} width={172} height={170} />
            </div>
            <div className="recruitment">
              <Image alt="Company logos" src={Recruit18} width={291} height={193} />
            </div>
            <div className="recruitment">
              <Image alt="Company logos" src={Recruit19} width={95} height={93} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
