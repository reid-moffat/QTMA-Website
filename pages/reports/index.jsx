import Layout from "../../components/layout";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import Nav from "../Nav";
import Head from "next/head";
import Footer from "../../components/Footer";

export async function getStaticProps({params}) {
	return {
		props: {},
	};
}

export default function Report() {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="Recruiting Guide & Research Update"
				/>
				<title>QTMA</title>
				<meta name="og:title" content={"QTMA"}/>
			</Head>
			<Nav/>
			<Layout background={"#edf5fc"}>
				<div className="history-container container">
					<h1 className="section-title">Reports</h1>
					<a
						className="recruiting-container"
						href="/assets/Club Data/Info/2023_Hiring_Package.pdf"
					>
						<p>Recruiting Guide</p>
						<p className="download-icon">
							<HiOutlineDocumentDownload></HiOutlineDocumentDownload>
						</p>
					</a>
					{/* Outdated */}
					{/* <a className="research-container" href="/assets/Club Data/Info/2018_Research_Update.pdf">
						<p>Research Update</p>
						<p className="download-icon">
							<HiOutlineDocumentDownload></HiOutlineDocumentDownload>
						</p>
					</a> */}
				</div>
			</Layout>
			<Footer/>
		</>
	);
}
