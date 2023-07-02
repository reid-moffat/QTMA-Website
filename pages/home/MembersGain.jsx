import Layout from "../../components/layout";
import Image from "next/image";
import Box from "../../public/assets/Visuals/Box.png";
import FlashLight from "../../public/assets/Visuals/Flashlight.png";
import Rocket from "../../public/assets/Visuals/Rocket.png";
import Whiteboard from "../../public/assets/Visuals/Whiteboard.png";

export default function MembersGain() {
	return (
		<Layout background="#0072FF">
			<div className="members-gain-container container">
				<h1 className="section-title">What Our Members Gain</h1>
				<div className="benefits-container">
					<div className="card">
						<h3>Product Experience</h3>
						<Image alt="Illustration" src={Box} width={77.05} height={150}/>
						<p className="card-desc">
							Teams of nine students build products throughout the year to prepare them for competitive
							roles in the tech industry.
						</p>
					</div>
					<div className="card">
						<h3>Mentorship Program</h3>
						<Image alt="illustration" src={FlashLight} width={77.05} height={150}/>
						<p className="card-desc">
							Pair members with a professional in the tech industry providing them valuable experience and
							widening their network.{" "}
						</p>
					</div>
					<div className="card">
						<h3>Summer Bootcamp</h3>
						<Image alt="illustration" src={Rocket} width={77.05} height={150}/>
						<p className="card-desc">
							We provide a summer bootcamp program relevant to each discipline to upskill our members over
							the
							summer.
						</p>
					</div>
					<div className="card">
						<h3>Weekly Workshops</h3>
						<Image alt="illustration" src={Whiteboard} width={77.05} height={150}/>
						<p className="card-desc">
							We provider weekly workshops and guest speakers on topics in design, engineering, product
							management and business strategy.
						</p>
					</div>
				</div>
			</div>
		</Layout>
	);
}
