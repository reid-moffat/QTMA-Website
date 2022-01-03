import Layout from "../../components/layout";
import Image from "next/image";
import Founding from "../../public/assets/Founding.png";
import Expansion from "../../public/assets/Expansion.png";
import Initiatives from "../../public/assets/Initiatives.png";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import Nav from "../Nav";

export default function Report() {
  return (
    <>
      <Nav />
      <Layout background={"#edf5fc"}>
        <div className="history-container container">
          <h1 className="section-title">Reports</h1>
          <a className="recruiting-container" href="/ReportForms/2018_Recruiting_Guide.pdf">
            <p>Recruiting Guide</p>
            <p className="download-icon">
              <HiOutlineDocumentDownload></HiOutlineDocumentDownload>
            </p>
          </a>
          <a className="research-container" href="/ReportForms/2018_Research_Update.pdf" >
            <p>Research Update</p>
            <p className="download-icon">
              <HiOutlineDocumentDownload></HiOutlineDocumentDownload>
            </p>
          </a>
        </div>
      </Layout>
    </>
  );
}
