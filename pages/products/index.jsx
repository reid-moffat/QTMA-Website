import Layout from "../../components/layout";
import Image from "next/image";
import Nav from "../Nav";
import Link from "next/link";
import Head from "next/head";

const getLogo = (name, year) => `../../public/assets/Products/${year}/${name}_Logo.png`;

export default function Products() {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="This year, QTMA’s product teams are working on four exciting apps to tackle everyday student
            problems."
                />
                <title>QTMA</title>
                <meta name="og:title" content={ "QTMA" }/>
            </Head>
            <Nav/>
            <Layout
                background="#EDF5FC"
                metaInfo={
                    "This year, QTMA’s product teams are working on four exciting apps to tackle everyday student problems."
                }
            >
                <div id="Products" className="product-container2 product-page2 container">
                    <h1 className="section-title">Products</h1>
                    <p className="product-subheading2">
                        Over the past years, QTMA’s product teams worked on exciting apps to tackle everyday student
                        problems.
                    </p>
                    <div className="products-container2">
                        <Link passHref href="/product/Eagle">
                            <div className="product2">
                                <div className="product-info2">
                                    <h3>Eagle</h3>
                                    <p>Your delivery service companion</p>
                                </div>
                                <Image alt="Product Logo" src={ getLogo("Eagle", "2020-2021") } width={ 200 } height={ 122 }/>
                            </div>
                        </Link>
                        <Link passHref href="/product/Pronto">
                            <div className="product2">
                                <div className="product-info2">
                                    <h3>Pronto</h3>
                                    <p>Convenient lending for everyone</p>
                                </div>
                                <Image alt="Product Logo" src={ getLogo("Pronto", "2020-2021") } width={ 120 } height={ 116 }/>
                            </div>
                        </Link>
                        <Link passHref href="/product/Voluntera">
                            <div className="product2">
                                <div className="product-info2">
                                    <h3>Voluntera</h3>
                                    <p>The one-stop shop for social impact</p>
                                </div>
                                <Image alt="Product Logo" src={ getLogo("Voluntera", "2020-2021") } width={ 250 } height={ 60 }/>
                            </div>
                        </Link>
                        <Link passHref href="/product/Stocked">
                            <div className="product2">
                                <div className="product-info2">
                                    <h3>Stocked</h3>
                                    <p>The best a fridge can get.</p>
                                </div>
                                <Image alt="Product Logo" src={ getLogo("Stocked", "2020-2021") } width={ 252.59 } height={ 62 }/>
                            </div>
                        </Link>
                        <Link passHref href="/product/Hungover">
                            <div className="product2">
                                <div className="product-info2">
                                    <h3>Hungover</h3>
                                    <p>Taking your pregame to the next level</p>
                                </div>
                                <Image alt="Product Logo" src={ getLogo("Hungover", "2019-2020") } width={ 120 } height={ 133.13 }/>
                            </div>
                        </Link>
                        <Link passHref href="/product/Wob">
                            <div className="product2">
                                <div className="product-info2">
                                    <h3>Wob</h3>
                                    <p>Get the latest word on the street.</p>
                                </div>
                                <Image alt="Product Logo" src={ getLogo("Wob", "2019-2020") } width={ 151.4 } height={ 90 }/>
                            </div>
                        </Link>
                        <Link passHref href="/product/Studii">
                            <div className="product2">
                                <div className="product-info2">
                                    <h3>Studii</h3>
                                    <p>Academic collaboration at your fingertips</p>
                                </div>
                                <Image alt="Product Logo" src={ getLogo("Studii", "2019-2020") } width={ 176.21 } height={ 59 }/>
                            </div>
                        </Link>
                    </div>
                </div>
            </Layout>
        </>
    );
}
