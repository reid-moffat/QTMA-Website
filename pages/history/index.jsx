import Layout from "../../components/layout";
import Image from "next/image";
import Founding from "../../public/assets/Club Data/History/Founding.png";
import Expansion from "../../public/assets/Club Data/History/Expansion.png";
import Initiatives from "../../public/assets/Club Data/History/Initiatives.png";
import FamilyPhoto from "../../public/assets/Club Data/History/Innovation.png";
import Nav from "../Nav";
import Head from "next/head";
import Footer from "../../components/Footer";

export async function getStaticProps({params}) {
	return {
		props: {}
	};
}

export default function History() {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="To reach a wider audience, QTMA partners with Queen’s clubs, including the Queen’s Startup
          Summit (QSS) and Queen’s Entrepreneurs Competition (QEC), as well as companies such as
          Shopify, IBM, Microsoft, Hitachi, Deloitte, and Trend Micro. Additional initiatives are
          launched including tech recruiting panels and a fintech hackathon."
				/>
				<title>QTMA</title>
				<meta name="og:title" content={"QTMA"}/>
			</Head>
			<Nav/>
			<Layout background={"#edf5fc"}>
				<div className="history-container container">
					<h1 className="section-title">Our History</h1>
					<div className="history-events-container">
						<div className="main-timeline"></div>
						<div className="timeline-1">
							<div className="dot"></div>
						</div>
						<div className="timeline-2">
							<div className="dot"></div>
						</div>
						<div className="timeline-3">
							<div className="dot"></div>
						</div>
						<div className="timeline-4">
							<div className="dot"></div>
						</div>

						<div className="event">
							<div className="event-content">
								<h3>2014</h3>
								<h2>The Founding</h2>
								<p>
									QTMA is founded by Justin Herlick and Aleko Kiriakou to bridge the gap between
									Queen’s
									University and the broader tech industry. Initially only a Commerce club, QTMA
									primarily
									focused on researching and analyzing key market trends.
								</p>
							</div>
							<div className="event-image">
								<Image alt="Event photo" src={Founding} width={508} height={346}/>
							</div>
						</div>
						<div className="event">
							<div className="event-content">
								<h3>2015-2016</h3>
								<h2>Club Expansion</h2>
								<p>
									QTMA expands its presence by launching Insights – a yearly research pitch
									competition
									amongst internal members – and Byte Size – the club’s weekly tech newsletters. The
									club
									becomes accessible to Engineering and Computer Science students. In addition,
									Project
									Tädistö is rolled out as an initiative for internal technical teams of three to
									develop
									apps.
								</p>
							</div>
							<div className="event-image">
								<Image alt="Event photo" src={Expansion} width={508} height={337.64}/>
							</div>
						</div>
						<div className="event">
							<div className="event-content">
								<h3>2017 - 2018</h3>
								<h2>Public Facing Initiatives</h2>
								<p>
									To reach a wider audience, QTMA partners with Queen’s clubs, including the Queen’s
									Startup
									Summit (QSS) and Queen’s Entrepreneurs Competition (QEC), as well as companies such
									as
									Shopify, IBM, Microsoft, Hitachi, Deloitte, and Trend Micro. Additional initiatives
									are
									launched including tech recruiting panels and a fintech hackathon.
								</p>
							</div>
							<div className="event-image">
								<Image alt="Event photo" src={Initiatives} width={531} height={354}/>
							</div>
						</div>
						<div className="event">
							<div className="event-content">
								<h3>2019 - Present</h3>
								<h2>Innovation</h2>
								<p>
									QTMA continues its mandate of making Queen’s University a leading tech hub in Canada
									by
									becoming a full year product incubator. Across 4 interdisciplinary product teams,
									students
									work together to build tangible products that can be showcased and launched,
									providing them
									with a realistic preview of the industry and growing their network in the tech
									community.
								</p>
							</div>
							<div className="event-image">
								<Image alt="Event photo" src={FamilyPhoto} width={1000} height={527}/>
							</div>
						</div>
					</div>
				</div>
			</Layout>
			<Footer/>
		</>
	);
}
