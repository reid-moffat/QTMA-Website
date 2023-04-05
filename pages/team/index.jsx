import Layout from "../../components/layout";
import Image from "next/image";
import FamilyPhoto from "../../public/assets/Members/2021-2022/FamilyPhoto.png";
import Nav from "../Nav";
import ClubMembers from "../../data/TeamData.js";
import { AiFillLinkedin } from "react-icons/ai";
import Head from "next/head";

const Team = () => {
    /*
    const MemberCategories = [
        {
            name: "Co-Chairs",
            position: Positions.CoChair,
        },
        {
            name: "Product Managers",
            position: Positions.ProductManager,
        },
        {
            name: "Senior Developers",
            position: Positions.SeniorDeveloper,
        },
        {
            name: "Developers",
            position: Positions.Developer,
        },
        {
            name: "Advisors",
            position: Positions.Advisor,
        },
        {
            name: "Product Marketing Managers",
            position: Positions.ProductMarketingManager,
        },
        {
            name: "UI/UX Designers",
            position: Positions.UIUX,
        },
        {
            name: "Senior Business Analysts",
            position: Positions.SeniorBA,
        },
        {
            name: "Business Analysts",
            position: Positions.BA,
        },
        {
            name: "Directors of Operations",
            position: Positions.Operations,
        },
        {
            name: "Frosh Representatives",
            position: Positions.FroshRep,
        },
        {
            name: "Web Developers",
            position: Positions.WebDev,
        },
    ];
     */
    const MemberCategories = [
        "Co-Chair",
    ];

    const renderClubMembers = () => {
        const renderSpecialRole = (student) => {
            if (student.subPosition) {
                return <p className="special-role">{ student.subPosition }</p>;
            }
        };

        return MemberCategories.map(category => (
            <>
                <p className="position-name">{category + "s"}</p>
                <div className="student-photos">
                    { ClubMembers
                        .filter((student) => student.position === category)
                        .map((student, i) => (
                            <div key={ i } className="student-container">
                                <Image
                                    alt="Student photo"
                                    className="student-image"
                                    src={ student.image }
                                    width={ 500 }
                                    height={ 500 }
                                />
                                <p className="student-name">{ student.name }</p>
                                {renderSpecialRole(student)}
                                <a className="linkedIn" rel="noreferrer" target="_blank" href={ student.linkedIn }>
                                    <AiFillLinkedin/>
                                </a>
                            </div>
                        )) }
                </div>
            </>
        ));
    }

    return (
        <>
            <Head>
                <meta name="description" content="2021/2022 Team"/>
                <title>QTMA</title>
                <meta name="og:title" content={ "QTMA" }/>
            </Head>
            <Nav/>
            <Layout background={ "#edf5fc" }>
                <div className="history-container container">
                    <h1 className="section-title">2021/2022 Team</h1>
                    <div className="family-photo-container">
                        <div className="family-border">
                            <Image alt="Team Photo" src={ FamilyPhoto } className="family-photo"/>
                        </div>
                    </div>
                    {renderClubMembers()}
                </div>
            </Layout>
        </>
    );
}

export default Team;
