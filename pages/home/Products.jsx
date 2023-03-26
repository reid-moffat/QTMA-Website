import Layout from "../../components/layout";
import Image from "next/image";
import Stocked from "../../public/assets/Products/stocked.png";
import Nav from "../Nav";
import Link from "next/link";
import Pronto from "../../public/assets/Products/Pronto_Logo.png";
import Voluntera from "../../public/assets/Products/Voluntera_Logo.png";
import Eagle from "../../public/assets/Products/Eagle_Logo.png";

export default function Products() {
    return (
        <>
            <Nav/>
            <Layout
                background="#EDF5FC"
                metaInfo={
                    "This year, QTMA’s product teams are working on four exciting apps to tackle everyday student problems."
                }
            >
                <div id="Products" className="product-container product-page container">
                    <h1 className="section-title">Products</h1>
                    <p className="product-subheading">
                        Over the past years, QTMA’s product teams worked on exciting apps to tackle everyday student
                        problems.
                    </p>
                    <div className="products-container">
                        <Link passHref href="/product/Eagle">
                            <div className="product">
                                <div className="product-info">
                                    <h3>Eagle</h3>
                                    <p>Your delivery service companion</p>
                                </div>
                                <Image alt="Product Logo" src={ Eagle } width={ 200 } height={ 122 }/>
                            </div>
                        </Link>
                        <Link passHref href="/product/Pronto">
                            <div className="product">
                                <div className="product-info">
                                    <h3>Pronto</h3>
                                    <p>Convenient lending for everyone</p>
                                </div>
                                <Image alt="Product Logo" src={ Pronto } width={ 120 } height={ 116 }/>
                            </div>
                        </Link>
                        <Link passHref href="/product/Voluntera">
                            <div className="product">
                                <div className="product-info">
                                    <h3>Voluntera</h3>
                                    <p>The one-stop shop for social impact</p>
                                </div>
                                <Image alt="Product Logo" src={ Voluntera } width={ 250 } height={ 60 }/>
                            </div>
                        </Link>
                        <Link passHref href="/product/Stocked">
                            <div className="product">
                                <div className="product-info">
                                    <h3>Stocked</h3>
                                    <p>The best a fridge can get.</p>
                                </div>
                                <Image alt="Product Logo" src={ Stocked } width={ 252.59 } height={ 62 }/>
                            </div>
                        </Link>
                    </div>
                </div>
            </Layout>
        </>
    );
}
