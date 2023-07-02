import Image from 'next/image'
import qtmaLogo from '../public/assets/Club Data/QTMA_logo.png'
import startup from '../public/assets/Visuals/Startup_SVG.png'
import Layout from '../components/layout'
import { Link as SLink } from 'react-scroll'
import React, { useEffect, useState } from 'react'

function getWindowDimensions() {
	if (typeof window !== 'undefined') {
		const {innerWidth: width, innerHeight: height} = window
		return {
			width,
			height,
		}
	}
	return {
		width: 0,
		height: 0,
	}
}

export function useWindowDimensions() {
	const [windowdimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	)

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowdimensions
}

export default function Home() {
	const {height, width} = useWindowDimensions()
	const [isMobile, setIsMobile] = useState(false)
	useEffect(() => {
		if (width <= 650) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}, [width])

	return (
		<Layout background="#0072ff" home={true}>
			<section id="home" className="home-container container">
				<div className="text-container">
					<div className="home-logo">
						<Image
							alt="QTMA logo"
							src={qtmaLogo.src}
							width={346}
							height={93.71}
							className="QTMA-logo"
						/>
					</div>
					<div className="club-description">
						<p>
							Queen’s Tech and Media Association (QTMA) {!isMobile && <br/>}{' '}
							Canada’s premier product development club and tech incubator.
						</p>
					</div>
					{isMobile ? (
						<div className="startup-art-container">
							<Image
								alt="illustration"
								src={startup}
								width={452}
								height={462.17}
								className="startup-art"
							/>
						</div>
					) : (
						''
					)}
					<SLink
						className="CTA"
						offset={-104}
						to="WhatIsQTMA"
						smooth={true}
						duration={100}
					>
						Learn More
					</SLink>
				</div>
				{!isMobile ? (
					<div className="startup-art-container">
						<Image
							alt="illustration"
							src={startup}
							width={452}
							height={462.17}
							className="startup-art"
						/>
					</div>
				) : (
					''
				)}
			</section>
		</Layout>
	);
}
