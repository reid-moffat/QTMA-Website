import Layout from "../components/layout";
import Image from "next/image";
import Zack from "../public/assets/Zack.png";
import Jamyang from "../public/assets/Jamyang.png";
import Justin from "../public/assets/Justin.png";
export default function Testimonials() {
  return (
    <Layout background="#EDF5FC">
      <div className="testimonials-container container ">
        <h1 className="section-title">Alumni Testimonials</h1>
        <div className="alumni-container">
          <div className="alumni-card">
            <div className="alumni-image-container">
              <Image className="alumni-image" src={Jamyang} width={118} height={118} />
            </div>
            <div className="alumni-info">
              <h2 className="alumni-name">Jamyang Tenzin</h2>
              <h3 className="alumni-title">Business Operations & Strategy @ Shopify</h3>
            </div>
            <p className="alumni-desc">
              “At university, while you’re growing and changing, the people you are around matter! I found
              being on QTMA gave me a group of consistently exceptional people, smart, kind, and interesting,
              who bettered me. If you’re looking for the same - join us!”
            </p>
          </div>
          <div className="alumni-card">
            <div className="alumni-image-container">
              <Image className="alumni-image" src={Zack} width={118} height={118} />
            </div>
            <div className="alumni-info">
              <h2 className="alumni-name">Zack Harley</h2>
              <h3 className="alumni-title">Software Engineer @ Ten Thousand Coffees</h3>
            </div>
            <p className="alumni-desc">
              “QTMA allowed me to work with students across multiple faculties to design and build long-term
              projects. Earning this valuable experience is definitely one of the reasons I think I stood out
              to potential employers. The communication and teamwork skills I developed through QTMA are ones
              I still use today. I can not recommend this organization enough!”
            </p>
          </div>
          <div className="alumni-card">
            <div className="alumni-image-container">
              <Image className="alumni-image" src={Justin} width={118} height={118} />
            </div>
            <div className="alumni-info">
              <h2 className="alumni-name">Justin Herlick</h2>
              <h3 className="alumni-title">Co-founder @ Pine</h3>
            </div>
            <p className="alumni-desc">
              “When I founded QTMA over 5 years ago I had no idea how large it would become. Looking back now
              I am thrilled that we have been able to help launch so many students’ careers in tech across
              North America. Even today I advocate for QTMA in Silicon Valley”
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
