"use client"
import { Layout, Button } from "components"
import Image from "next/image"
import Logo from "assets/logo.svg"
import YouTube from "react-youtube"
import styles from "./media.module.css"

export function Media() {
	return (
		<section className={styles.media}>
			<Layout className={styles.container}>
				<Image className={styles.image} src={Logo} alt="logo" />
				<h1 className={styles.heading}>KURZ ERKLÄRT</h1>
				<YouTube id="KjGlMsbt7Lo" />
        <Button type="additional" text="Mehr zum JOBTIP"/>
			</Layout>
		</section>
	)
}
