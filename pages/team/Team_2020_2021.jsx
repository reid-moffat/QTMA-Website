import Layout from "../../components/layout";
import Image from "next/image";
import FamilyPhoto from "../../public/assets/FamilyPhoto.jpg";
import Nav from "../Nav";
import team from "../../utilities/teamData";
import { AiFillLinkedin } from "react-icons/ai";
import Head from "next/head";
export default function Team() {
  return (
    <>
      <Head>
        <meta name="description" content="2020/2021 Team" />
        <title>QTMA</title>
        <meta name="og:title" content={"QTMA"} />
      </Head>
      <Nav />
      <Layout background={"#edf5fc"}>
        <div className="history-container container">
          <h1 className="section-title">2020/2021 Team</h1>
          <div className="family-photo-container">
            <div className="family-border">
              <Image src={FamilyPhoto} className="family-photo" />
            </div>
          </div>
          <p className="position-name">Co-Chairs</p>
          <div className="student-photos">
            {team
              .filter((student) => student.position === "Co-Chair")
              .map((student, i) => (
                <div key={i} className="student-container">
                  <Image className="student-image" src={student.image} width={500} height={500} />
                  <p className="student-name">{student.name}</p>
                  <p className="special-role">{student.specialRole}</p>
                  <a className="linkedIn" rel="noreferrer" target="_blank" href={student.linkedIn}>
                    <AiFillLinkedin />
                  </a>
                </div>
              ))}
          </div>
          {/* Product Managers */}
          <p className="position-name">Product Managers</p>
          <div className="student-photos">
            {team
              .filter((student) => student.position === "Product Manager")
              .map((student, i) => (
                <div key={i} className="student-container">
                  <Image className="student-image" src={student.image} width={500} height={500} />
                  <p className="student-name">{student.name}</p>
                  <a className="linkedIn" rel="noreferrer" target="_blank" href={student.linkedIn}>
                    <AiFillLinkedin />
                  </a>
                </div>
              ))}
          </div>
          {/* SENIOR DEVELOPERS */}
          <p className="position-name">Senior Developers</p>
          <div className="student-photos">
            {team
              .filter((student) => student.position === "Senior Developer")
              .map((student, i) => (
                <div key={i} className="student-container">
                  <Image className="student-image" src={student.image} width={500} height={500} />
                  <p className="student-name">{student.name}</p>
                  <a className="linkedIn" rel="noreferrer" target="_blank" href={student.linkedIn}>
                    <AiFillLinkedin />
                  </a>
                </div>
              ))}
          </div>
          {/* DEVELOPERs */}
          <p className="position-name">Developers</p>
          <div className="student-photos">
            {team
              .filter((student) => student.position === "Developer")
              .map((student, i) => (
                <div key={i} className="student-container">
                  <Image className="student-image" src={student.image} width={500} height={500} />
                  <p className="student-name">{student.name}</p>
                  <a className="linkedIn" rel="noreferrer" target="_blank" href={student.linkedIn}>
                    <AiFillLinkedin />
                  </a>
                </div>
              ))}
          </div>
          {/* ADVISORS */}
          <p className="position-name">Advisors</p>
          <div className="student-photos">
            {team
              .filter((student) => student.position === "Advisor")
              .map((student, i) => (
                <div key={i} className="student-container">
                  <Image className="student-image" src={student.image} width={500} height={500} />
                  <p className="student-name">{student.name}</p>
                  <a className="linkedIn" rel="noreferrer" target="_blank" href={student.linkedIn}>
                    <AiFillLinkedin />
                  </a>
                </div>
              ))}
          </div>
          {/* PRODUCT MARKETING MANAGERS*/}
          <p className="position-name">Product Marketing Managers</p>
          <div className="student-photos">
            {team
              .filter((student) => student.position === "Product Marketing Manager")
              .map((student, i) => (
                <div key={i} className="student-container">
                  <Image className="student-image" src={student.image} width={500} height={500} />
                  <p className="student-name">{student.name}</p>
                  <a className="linkedIn" rel="noreferrer" target="_blank" href={student.linkedIn}>
                    <AiFillLinkedin />
                  </a>
                </div>
              ))}
          </div>
          {/* UI/UX DESIGNERS */}
          <p className="position-name">UI/UX Designers</p>
          <div className="student-photos">
            {team
              .filter((student) => student.position === "UI/UX Designer")
              .map((student, i) => (
                <div key={i} className="student-container">
                  <Image className="student-image" src={student.image} width={500} height={500} />
                  <p className="student-name">{student.name}</p>
                  <a className="linkedIn" rel="noreferrer" target="_blank" href={student.linkedIn}>
                    <AiFillLinkedin />
                  </a>
                </div>
              ))}
          </div>
          {/* SENIOR BUSINESS ANALYSTS */}
          <p className="position-name">Senior Business Analysts</p>
          <div className="student-photos">
            {team
              .filter((student) => student.position === "Senior Business Analyst")
              .map((student, i) => (
                <div key={i} className="student-container">
                  <Image className="student-image" src={student.image} width={500} height={500} />
                  <p className="student-name">{student.name}</p>
                  <a className="linkedIn" rel="noreferrer" target="_blank" href={student.linkedIn}>
                    <AiFillLinkedin />
                  </a>
                </div>
              ))}
          </div>
          {/* BUSINESS ANALYSTS */}
          <p className="position-name">Business Analysts</p>
          <div className="student-photos">
            {team
              .filter((student) => student.position === "Business Analyst")
              .map((student, i) => (
                <div key={i} className="student-container">
                  <Image className="student-image" src={student.image} width={500} height={500} />
                  <p className="student-name">{student.name}</p>
                  <a className="linkedIn" rel="noreferrer" target="_blank" href={student.linkedIn}>
                    <AiFillLinkedin />
                  </a>
                </div>
              ))}
          </div>
          {/* DIRECTORS OF OPERATIONS */}
          <p className="position-name">Directors of Operations</p>
          <div className="student-photos">
            {team
              .filter((student) => student.position === "Director of Operation")
              .map((student, i) => (
                <div key={i} className="student-container">
                  <Image className="student-image" src={student.image} width={500} height={500} />
                  <p className="student-name">{student.name}</p>
                  <p className="special-role">{student.specialRole}</p>
                  <a className="linkedIn" rel="noreferrer" target="_blank" href={student.linkedIn}>
                    <AiFillLinkedin />
                  </a>
                </div>
              ))}
          </div>
          {/* FROSH REPRESENTATIVES */}
          <p className="position-name">Frosh Representatives</p>
          <div className="student-photos">
            {team
              .filter((student) => student.position === "Frosh Representatives")
              .map((student, i) => (
                <div key={i} className="student-container">
                  <Image className="student-image" src={student.image} width={500} height={500} />
                  <p className="student-name">{student.name}</p>
                  <a className="linkedIn" rel="noreferrer" target="_blank" href={student.linkedIn}>
                    <AiFillLinkedin />
                  </a>
                </div>
              ))}
          </div>
          {/* WEB DEVELOPERS */}
          <p className="position-name">Web Developer</p>
          <div className="student-photos">
            {team
              .filter((student) => student.position === "Web Developer")
              .map((student, i) => (
                <div key={i} className="student-container">
                  <Image className="student-image" src={student.image} width={500} height={500} />
                  <p className="student-name">{student.name}</p>
                  <a className="linkedIn" rel="noreferrer" target="_blank" href={student.linkedIn}>
                    <AiFillLinkedin />
                  </a>
                </div>
              ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
