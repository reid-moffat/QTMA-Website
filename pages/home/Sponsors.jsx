import Layout from '../../components/layout'
import Image from 'next/image'

import ComSoc from '../../public/assets/Club Data/Homepage/Sponsors/ComSoc.png'
import McKinsey from '../../public/assets/Club Data/Homepage/Sponsors/McKinsey.png'
import QueensArtsci from '../../public/assets/Club Data/Homepage/Sponsors/Queens_Artsci.png'
import QueensComputing from '../../public/assets/Club Data/Homepage/Sponsors/Queens_Computing.png'
import TrendMicro from '../../public/assets/Club Data/Homepage/Sponsors/Trend_Micro.png'

export default function Sponsors() {
	return (
		<Layout>
			<div className="sponsors-container container">
				<h1 className="section-title">Our Sponsors</h1>
				<div className="sponsors">
					<div className="sponsor">
						<a href={"https://comsoc.ca/"} target="_blank">
							<Image
								alt="Sponsor logo"
								src={ComSoc}
								height={125}
								width={'500%'}
							/>
						</a>
					</div>
					<div className="sponsor">
						<a href={"https://www.mckinsey.com/"} target="_blank">
							<Image
								alt="Sponsor logo"
								src={McKinsey}
								height={155}
								width={'300%'}
							/>
						</a>
					</div>
					<div className="sponsor">
						<a href={"https://www.queensu.ca/artsci/"} target="_blank">
							<Image
								alt="Sponsor logo"
								src={QueensArtsci}
								height={105}
								width={'400%'}
							/>
						</a>
					</div>
				</div>
				<div className="sponsors">
					<div className="sponsor">
						<a href={"https://www.cs.queensu.ca/"} target="_blank">
							<Image
								alt="Sponsor logo"
								src={QueensComputing}
								height={115}
								width={'500%'}
							/>
						</a>
					</div>
					<div className="sponsor">
						<a href={"https://www.trendmicro.com/"} target="_blank">
							<Image
								alt="Sponsor logo"
								src={TrendMicro}
								height={155}
								width={'350%'}
							/>
						</a>
					</div>
				</div>
			</div>
		</Layout>
	)
}
