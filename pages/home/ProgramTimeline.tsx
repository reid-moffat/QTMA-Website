import Layout from "../../components/layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";

export default function ProgramTimeline() {
	const timelineData: { title: string, date: string, description: string }[] = [
		{
			title: "Co-Chair Hiring",
			date: "February",
			description: "Each year QTMA hires 3 Co-Chairs to lead the club. Applications include a written application and interview with the current Co - Chairs."
		},
		{
			title: "General Hiring",
			date: "March",
			description: "QTMA hires 4 Product Manager, 4-8 UI/UX Designers, 4 Senior & 12 Junior Developers as well as 4 Senior & 8 Junior Business Analysts to complete our product teams. We also hire various operating roles. Applications include a written application and interview with the incoming Co - Chairs."
		},
		{
			title: "Team Formation",
			date: "April",
			description: "The Co - Chairs organize the product team members into 4 teams based on member’s experience and interests."
		},
		{
			title: "Summer Bootcamp Program & Product Ideation Starts",
			date: "May - August",
			description: "Each team brainstorms product ideas, discusses them with the Co - Chairs, then decides on a products and it's main features."
		},
		{
			title: "Product Ideation - Brainstorming Phase",
			date: "May",
			description: "Each team brainstorms 10+ product ideas with the goal of generating as many profitable ideas as possible."
		},
		{
			title: "Product Ideation - Initiation Filter Phase",
			date: "June",
			description: "The Co - Chairs meet with each product team and discuss their product ideas, giving feedback about which one has the most potential."
		},
		{
			title: "Product Ideation - Final Filter Phase",
			date: "July",
			description: "Each team explores their top three ideas in greater depth and finalizes their product idea with the guidance of the Co - Chairs."
		},
		{
			title: "Product Ideation - Feature Prioritization",
			date: "August",
			description: "Each product team prioritizes the top three features for their product with the guidance of the Co- Chairs."
		},
		{
			title: "Junior Analyst Hiring",
			date: "Early September",
			description: "Each year we hire 4 junior analysts from the freshman class of commerce, computer science or engineering who each join a product team to fill any role required."
		},
		{
			title: "Product Development & Weekly Workshops Start",
			date: "Mid September",
			description: "Students return to campus with a fully scoped product idea and begin designing and developing their product idea. Our ‘all hands’ team meetings begin which feature a Weekly Workshop presented by the Co - Chairs or guest speaker."
		},
		{
			title: "Product MVP features & Feedback",
			date: "October",
			description: "By October, the product should start to have some of the MVP (Minimum Viable Product) features implemented. The Co-Chairs begin respectively meeting with the PMs and Sr.Devs on each team on a biweekly basis to give feedback on the product's development."
		},
		{
			title: "First External Product Pitch",
			date: "November",
			description: "Each team prepares a pitch and live demo of their product to present to a panel of judges. The judges give the product teams feedback on how they can improve their product before the culminating pitch."
		},
		{
			title: "Improvements & Launch",
			date: "December - February",
			description: "Teams augment their business strategy and technical plan to improve their product based on feedback from the first pitch. The product is completed with all required features, tested through a beta release and then launched to the public."
		},
		{
			title: "Final External Product Pitch",
			date: "March",
			description: "Each team prepares a pitch and live demo of their product to present to a panel of judges. The judges assess each product and determine the winning team!"
		}
	]

	return (
		// @ts-ignore
		<Layout>
			<div className="program-timeline-container container">
				<h1 className="section-title">Program Timeline</h1>
				<div className="timeline-container">
					<Carousel showThumbs={false} emulateTouch={true} autoPlay={true} infiniteLoop={true}>
						{timelineData.map((info, i) => (
							<div key={i} className="timeline-content">
								<h2 className="timeline-event">{info.title}</h2>
								<h4 className="timeline-date">{info.date}</h4>
								<p className="timeline-desc">{info.description}</p>
							</div>
						))}
					</Carousel>
				</div>
			</div>
		</Layout>
	);
}
