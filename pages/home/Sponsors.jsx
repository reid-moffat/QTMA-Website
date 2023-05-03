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
            <Image
              alt="Sponsor logo"
              src={ComSoc}
              height={135}
              width={'500%'}
            />
          </div>
          <div className="sponsor">
            <Image
              alt="Sponsor logo"
              src={McKinsey}
              height={145}
              width={'300%'}
            />
          </div>
          <div className="sponsor">
            <Image
              alt="Sponsor logo"
              src={QueensArtsci}
              height={115}
              width={'400%'}
            />
          </div>
        </div>
        <div className="sponsors">
          <div className="sponsor">
            <Image
              alt="Sponsor logo"
              src={QueensComputing}
              height={115}
              width={'500%'}
            />
          </div>
          <div className="sponsor">
            <Image
              alt="Sponsor logo"
              src={TrendMicro}
              height={155}
              width={'350%'}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
