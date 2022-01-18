import Layout from "../components/layout";
import Image from "next/image";
import Sponsor1 from "../public/assets/Sponsor1.png";
import Sponsor2 from "../public/assets/Sponsor2.png";
import Sponsor3 from "../public/assets/Sponsor3.png";
export default function Sponsors() {
  return (
    <Layout>
      <div className="sponsors-container container">
        <h1 className="section-title">Our Sponsors</h1>
        <div className="sponsors">
          <div className="sponsor">
            <Image alt="Sponsor logo" src={Sponsor1} height={155} width={272.02} />
          </div>
          <div className="sponsor">
            <Image alt="Sponsor logo" src={Sponsor3} height={155} width={451.59} />
          </div>
          <div className="sponsor">
            <Image alt="Sponsor logo" src={Sponsor2} height={155} width={155} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
