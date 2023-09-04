import Layout from './layout'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import qtmaLogo from '../public/assets/Club Data/QTMA_logo.png'
import Image from 'next/image'

export default function Footer() {
	return (
		<Layout background="#222831">
			<div className="footer-container container">
				<div className="top-section">
					<div className="logo-footer-container">
						<Image
							alt="QTMA logo"
							src={qtmaLogo}
							className="footer-logo"
							height={35.71}
							width={134}
						/>
						<div className="text-footer-container">
							<p>
								Canada's premier product development club and tech incubator
							</p>
						</div>
					</div>

					<div className="top-containers">
						<p>COMSOC</p>
						<p>Proudly part of the Commerce Society</p>
					</div>
					<div className="top-containers">
						<p>CONTACT US</p>
						<p>
							Feel free to reach us at{' '}
							<a href="mailto:qtmaweb@gmail.com">qtmaweb@gmail.com</a>
						</p>
					</div>
				</div>
				<hr/>
				<div className="socials-container">
					<a
						className="social-icon"
						href="https://www.facebook.com/QTMANews/"
						target="_blank"
						rel="noreferrer"
					>
						<FaFacebookF/>
					</a>
					<a
						className="social-icon"
						href="https://www.linkedin.com/company/queen's-technology-and-media-association/about/"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillLinkedin/>
					</a>
					<a
						className="social-icon"
						href="https://www.instagram.com/queenstechmedia/?hl=en"
						target="_blank"
						rel="noreferrer"
					>
						<BsInstagram/>
					</a>
				</div>
				<p className="copyright">QTMA © 2014-2023</p>
			</div>
		</Layout>
	);
}
