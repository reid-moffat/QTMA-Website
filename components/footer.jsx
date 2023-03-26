import Layout from "../components/layout";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
export default function footer() {
  return (
    <Layout background="#222831">
      <div className="footer-container container">
        <div className="socials-container">
          <a className="social-icon" href="https://www.facebook.com/QTMANews/" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a className="social-icon" href="https://www.linkedin.com/company/queen's-technology-and-media-association/about/" target="_blank" rel="noreferrer">
            <AiFillLinkedin />
          </a>
          <a className="social-icon" href="https://www.instagram.com/queenstechmedia/?hl=en" target="_blank" rel="noreferrer">
            <BsInstagram />
          </a>
        </div>
        <p className="copyright">QTMA © 2021</p>
      </div>
    </Layout>
  );
}
