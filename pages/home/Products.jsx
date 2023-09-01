import Layout from "../../components/layout";
import Image from "next/image";
import Nav from "../Nav";
import Link from "next/link";

import products from './../../data/ProductsData';

export default function Products() {
	const recentProducts = products.filter(prod => prod.year === '2022-2023');

	const renderProduct = (product) => {
		const link = `/product/${product.productName}`;

		return (
			<Link passHref href={link}>
				<div className="product">
					<div className="product-info">
						<h3>{product.productName}</h3>
						<p><i>'{product.slogan}'</i></p>
					</div>
					<Image alt="Product Logo" src={product.logo} width={product.logoWidth} height={product.logoHeight}/>
				</div>
			</Link>
		);
	}

	return (
		<>
			<Nav/>
			<Layout
				background="#EDF5FC"
				metaInfo={
					"This year, QTMA’s product teams worked on exciting apps to tackle everyday student problems"
				}
			>
				<div id="Products" className="product-container product-page container">
					<h1 className="section-title">Products</h1>
					<p className="product-subheading">
						This year, QTMA’s product teams worked on exciting apps to tackle everyday student problems
					</p>
					<div className="products-container">
						{recentProducts.map(prod => renderProduct(prod))}
					</div>
				</div>
			</Layout>
		</>
	);
}
