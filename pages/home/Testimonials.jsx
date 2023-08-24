import Layout from "../../components/layout";
import Image from "next/image";
import Zack from "../../public/assets/Club Data/Homepage/Zack.png";
import Jamyang from "../../public/assets/Club Data/Homepage/Jamyang.png";
import Justin from "../../public/assets/Club Data/Homepage/Justin.png";

export default function Testimonials() {
	return (
		<Layout background="#EDF5FC">
			<div className="testimonials-container container ">
				<h1 className="section-title">Alumni Testimonials</h1>
				<div className="alumni-container">
					<div className="alumni-card">
						<div className="alumni-image-container">
							<Image alt="alumni photo" className="alumni-image" src={Jamyang} width={118}
								   height={118}/>
						</div>
						<div className="alumni-info">
							<h2 className="alumni-name">
								<a className="alumni-social-icon"
								   href="https://www.linkedin.com/in/jamyangtenzin/"
								   target="_blank" rel="noreferrer">
									Jamyang Tenzin - Co-Chair '17
								</a>
							</h2>
							<h3 className="alumni-program">Commerce '18</h3>
							<h3 className="alumni-title">CEO @ Centro Commerce</h3>
						</div>
						<p className="alumni-desc">
							<strong className="alumni-quotation">“</strong>At university, while you’re growing and
							changing, the people you are around matter! <strong className="alumni-bold">I found
							being on QTMA gave me a group of consistently exceptional people, smart, kind, and
							interesting,
							who bettered me.</strong> If you’re looking for the same - join us!
						</p>
					</div>
					<div className="alumni-card">
						<div className="alumni-image-container">
							<Image alt="alumni photo" className="alumni-image" src={Zack} width={118}
								   height={118}/>
						</div>
						<div className="alumni-info">
							<h2 className="alumni-name">
								<a className="alumni-social-icon"
								   href="https://www.linkedin.com/in/zackharley/?originalSubdomain=ca"
								   target="_blank" rel="noreferrer">
									Zackery Harley - Lead Dev '17
								</a>
							</h2>
							<h3 className="alumni-program">Computer Engineering '18</h3>
							<h3 className="alumni-title">Lead Engineer @ The Commons</h3>
						</div>
						<p className="alumni-desc">
							<strong className="alumni-quotation">“</strong><strong className="alumni-bold">QTMA allowed
							me to work with students across multiple faculties to design and build
							long-term
							projects.</strong> Earning this valuable experience is definitely one of the reasons I think
							I stood
							out
							to potential employers. The communication and teamwork skills I developed through QTMA are
							ones
							I still use today. I can not recommend this organization enough!
						</p>
					</div>
					<div className="alumni-card">
						<div className="alumni-image-container">
							<Image alt="alumni photo" className="alumni-image" src={Justin} width={118}
								   height={118}/>
						</div>
						<div className="alumni-info">
							<h2 className="alumni-name">
								<a className="alumni-social-icon"
								   href="https://www.linkedin.com/in/jherlick/"
								   target="_blank" rel="noreferrer">
									Justin Herlick - Co-Founder '13
								</a>
							</h2>
							<h3 className="alumni-program">Commerce and Computing '16</h3>
							<h3 className="alumni-title">Co-founder @ Pine</h3>
						</div>
						<p className="alumni-desc">
							<strong className="alumni-quotation">“</strong>When I founded QTMA over 5 years ago I had no
							idea how large it would become. Looking back
							now.
							<strong className="alumni-bold"> I am thrilled that we have been able to help launch so many
								students’ careers in tech across
								North America. </strong>
							Even today I advocate for QTMA in Silicon Valley
						</p>
					</div>
				</div>
			</div>
		</Layout>
	);
}
