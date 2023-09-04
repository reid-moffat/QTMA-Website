import Layout from "../../components/layout";
import Image from "next/image";
import TeamStructureLg from "../../public/assets/Club Data/Homepage/TeamStructureLg.png";
import TeamStructureSm1 from "../../public/assets/Club Data/Homepage/TeamStructureSm1.png";
import TeamStructureSm2 from "../../public/assets/Club Data/Homepage/TeamStructureSm2.png";

export default function OurTeamStructure() {
	return (
		<Layout>
			<div className="team-structure-container container">
				<h1 className="section-title">Our Team Structure</h1>
				<div className="team-structure-lg">
					<Image alt="illustration" src={TeamStructureLg} width={1283.09} height={442}/>
				</div>
				<div className="team-structure-sm">
					<Image alt="illustration" src={TeamStructureSm1} width={774} height={521.91}/>
					<Image alt="illustration" src={TeamStructureSm2} width={744} height={521.91}/>
				</div>
			</div>
		</Layout>
	);
}
