import Layout from "../../components/layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import timelineData from "../../data/timelineData";

export default function ProgramTimeline() {
    return (
        <Layout background="white">
            <div className="program-timeline-container container">
                <h1 className="section-title">Program Timeline</h1>
                <div className="timeline-container">
                    <Carousel showThumbs={ false } emulateTouch={ true } autoPlay={ true } infiniteLoop={ true }>
                        { timelineData.map((info, i) => (
                            <div key={ i } className="timeline-content">
                                <h2 className="timeline-event">{ info.title }</h2>
                                <h4 className="timeline-date">{ info.date }</h4>
                                <p className="timeline-desc">{ info.desc }</p>
                            </div>
                        )) }
                    </Carousel>
                </div>
            </div>
        </Layout>
    );
}
