import Layout from "../../components/layout";
import Image from "next/image";

const getSponsorImg = (name) => `/assets/Data/Homepage/Sponsors/${name}.png`;

export default function Sponsors() {
    return (
        <Layout>
            <div className="sponsors-container container">
                <h1 className="section-title">Our Sponsors</h1>
                <div className="sponsors">
                    <div className="sponsor">
                        <Image alt="Sponsor logo" src={ getSponsorImg('ComSoc') } height={ 155 } width={ 272.02 }/>
                    </div>
                    <div className="sponsor">
                        <Image alt="Sponsor logo" src={ getSponsorImg('McKinsey') } height={ 155 } width={ 451.59 }/>
                    </div>
                    <div className="sponsor">
                        <Image alt="Sponsor logo" src={ getSponsorImg('Queens_Artsci') } height={ 155 } width={ 155 }/>
                    </div>
                    <br/>
                    <div className="sponsor">
                        <Image alt="Sponsor logo" src={ getSponsorImg('Queens_Computing') } height={ 155 } width={ 155 }/>
                    </div>
                    <div className="sponsor">
                        <Image alt="Sponsor logo" src={ getSponsorImg('Trend_Micro') } height={ 155 } width={ 155 }/>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
