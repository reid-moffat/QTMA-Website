import Layout from "../../components/layout";
import Nav from "../Nav";
import React, { useEffect, useState } from "react";
import productData from "../../utilities/productsData";
import Image from "next/image";
import { useRouter } from "next/router";
export const getStaticProps = async () => {
  return { props: {} };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "Studii" } },
      { params: { id: "Hungover" } },
      { params: { id: "Wob" } },
      { params: { id: "Stocked" } },
    ],
    fallback: false,
  };
};

export default function Product() {
  const router = useRouter();
  const queryId = router.query.id;
  const [product, setProduct] = useState();
  useEffect(() => {
    const details = productData.filter((productObj) => {
      return productObj.productName === queryId;
    });
    setProduct(details[0]);
    console.log(productData[2].teamPhoto);
  }, []);

  return (
    <>
      <Nav />
      <Layout>
        {product && (
          <div className="product-container-id container">
            <div className="product-header-container">
              <h1 className="product-name">{product.productName}</h1>
              <p className="product-slogan">{product.slogan}</p>
            </div>
            <div className="team-container">
              <h2 className="team-heading">The Team</h2>
              <div className="team-names">
                {product.studentInfo.map((info,i) => (
                  <a key={i} className="student-name" href={info.linkedin} rel="noreferrer" target="_blank">
                    {info.studentName}
                  </a>
                ))}
              </div>
              <div className="team-photo">
                <Image
                  src={product.teamPhoto}
                  width={product.photoXY.width}
                  height={product.photoXY.height}
                />
              </div>
            </div>
            <div className="overview-container">
              <h2 className="overview-heading">Product Overview</h2>
              <p className="product-desc">{product.productOverview}</p>
            </div>
            <div className="pitch-container">
              <h2 className="pitch-heading">Product Pitch</h2>
              <iframe className="product-pdf" src={product.productPitch} type="pdf"></iframe>
            </div>
            <div className="demo-container">
              <h2 className="demo-heading">Product Demo</h2>
              <iframe
              className="demo-video"
                width="560"
                height="315"
                src={product.productDemo}
                title="YouTube video player"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                // allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}
