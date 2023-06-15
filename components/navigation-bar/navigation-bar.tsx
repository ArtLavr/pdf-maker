"use client"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import classNames from "classnames"
import { BurgerMenu } from "@assets/svg/burger-menu.svg"
import { Close } from "@assets/svg/close.svg"
import LogoWhite from "@assets/logo-white.svg"
import Logo from "@assets/logo.svg"
import { SVGIcon } from "../svg-icon"
import styles from "./navigation-bar.module.css"
import { Layout } from "../layout"
import { useSticky } from "./utils"
import { Modal } from "./modal/modal"
const navList = [
	{
		title: "START",
		link: "/"
	},
	{
		title: "BEWERBER",
		link: "/bewerber"
	},
	{
		title: "UNTERNEHMEN",
		link: "/unternehmen"
	},
	{
		title: "JOBS",
		link: "https://deinjobtip.career.softgarden.de/"
	},
	{
		title: "DER JOBTIP",
		link: "/andreastip"
	},
	{
		title: "MEDIA",
		link: "/media"
	},
	{
		title: "KONTAKT",
		link: "/kontakt"
	}
]

export function NavigationBar() {
	const { sticky, stickyRef } = useSticky()
	const [isModalOpen, setIsModalOpen] = React.useState(false)

	return (
		<header ref={stickyRef} className={classNames(styles.container, { [styles.sticky]: sticky })}>
			<Layout className={styles.wrapper}>
				<div className={styles.logo}>
					<Link href="/">
						<Image
							style={{ height: "100%", width: "fit-content" }}
							src={sticky ? Logo : LogoWhite}
							alt="logo"
						/>
					</Link>
				</div>
				<DesktopNavigationBar openModal={() => setIsModalOpen(true)} />
				<MobileNavigationBar openModal={() => setIsModalOpen(true)} />
				{isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}
			</Layout>
		</header>
	)
}

const DesktopNavigationBar = ({ openModal }: { openModal: () => void }) => (
	<nav className={styles.navBar}>
		<ul className={styles.list}>
			{navList.map(li => (
				<li key={li.title}>
					<Link href={li.link}>{li.title}</Link>
				</li>
			))}
			<li onClick={() => openModal()}>PDF KONVERTIEREN</li>
		</ul>
	</nav>
)

const MobileNavigationBar = ({ openModal }: { openModal: () => void }) => {
	const [isActive, setIsActive] = React.useState(false)
	return (
		<div className={styles.mobileContainer}>
			<SVGIcon
				width={46}
				height={46}
				className={styles.burgerIcon}
				icon={<BurgerMenu />}
				onClick={() => setIsActive(true)}
			/>
			<ul className={classNames(styles.mobileList, { [styles.active]: isActive })}>
				{navList.map(li => (
					<li key={li.title} onClick={() => setIsActive(false)}>
						<Link href={li.link}>{li.title}</Link>
					</li>
				))}
				<li
					onClick={() => {
						openModal()
						setIsActive(false)
					}}
				>
					PDF KONVERTIEREN
				</li>
				<li className={styles.closeIcon}>
					<SVGIcon width={46} height={46} icon={<Close />} onClick={() => setIsActive(false)} />
				</li>
			</ul>
		</div>
	)
}
