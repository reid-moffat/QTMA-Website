import Layout from "../../components/layout";
import Image from "next/image";
import Nav from "../Nav";
import Link from "next/link";
import Head from "next/head";
import productData from "../../data/ProductsData";
import Footer from "../../components/Footer";

const getLogo = (name, year) => `/assets/Products/${year}/${name}_Logo.png`;

export default function Products() {
	const productContainer = (name) => {
		const link = `/product/${name}`;
		const data = productData.find(product => product.productName === name);
		if (!data) {
			throw new Error(`Product ${name} not found`);
		}

		console.log('Data: ' + JSON.stringify(data, null, 4));
		return (
			<Link passHref href={link}>
				<div className="product2">
					<div className="product-info2">
						<h3>{name}</h3>
						<p>{data["slogan"]}</p>
					</div>
					<Image alt="Product Logo" src={data.logo} width={data.logoWidth}
						   height={data.logoHeight}/>
				</div>
			</Link>
		)
	}

	return (
		<>
			<Head>
				<meta
					name="description"
					content="This year, QTMA’s product teams are working on four exciting apps to tackle everyday student
            problems."
				/>
				<title>QTMA</title>
				<meta name="og:title" content={"QTMA"}/>
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

					<p className="product-subheading2"><i>2022-2023:</i></p>
					<div className="products-container2">
						{productContainer("Feastly")}
						{productContainer("Kartt")}
						{productContainer("Sift")}
						{productContainer("Venato")}
					</div>

					<p className="product-subheading2"><i>2021-2022:</i></p>
					<div className="products-container2">
						{productContainer("Casa")}
						{productContainer("Haus")}
						{productContainer("Loco")}
						{productContainer("Soar")}
					</div>

					<p className="product-subheading2"><i>2020-2021:</i></p>
					<div className="products-container2">
						{productContainer("Eagle")}
						{productContainer("Pronto")}
						{productContainer("Voluntera")}
						{productContainer("Loop")}
					</div>

					<p className="product-subheading2"><i>2019-2020:</i></p>
					<div className="products-container2">
						{productContainer("Stocked")}
						{productContainer("Hungover")}
						{productContainer("Wob")}
						{productContainer("Studii")}
					</div>
				</div>
			</Layout>
		</>
	);
}
