import Layout from "../../components/layout";
import Image from "next/image";
import Nav from "../Nav";
import Link from "next/link";
import Head from "next/head";
import productData from "../../data/ProductsData";

const getLogo = (name, year) => `/assets/Products/${ year }/${ name }_Logo.png`;

export default function Products() {
	const productContainer = (name, logoWidth, logoHeight) => {
		const link = `/product/${ name }`;
		const data = productData.find(product => product.productName === name);

		return (
			<Link passHref href={ link }>
				<div className="product2">
					<div className="product-info2">
						<h3>{ name }</h3>
						<p>{ data["slogan"] }</p>
					</div>
					<Image alt="Product Logo" src={ getLogo(name, data["year"]) } width={ logoWidth }
						   height={ logoHeight }/>
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
						{ /* 2019 - 2020 */ }
						{ productContainer("Stocked", 252.59, 60) }
						{ productContainer("Hungover", 120, 133.13) }
						{ productContainer("Wob", 151.4, 90) }
						{ productContainer("Studii", 176.21, 59) }
						{ /* 2020 - 2021 */ }
						{ productContainer("Eagle", 200, 122) }
						{ productContainer("Pronto", 120, 116) }
						{ productContainer("Voluntera", 250, 60) }
						{ /* TODO: add loop */ }
						{ /* 2021 - 2022 */ }
						{ /* 2022 - 2023 */ }
					</div>
				</div>
			</Layout>
		</>
	);
}
