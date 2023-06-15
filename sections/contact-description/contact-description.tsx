import { Layout, Button } from "components"
import Image from "next/image"
import Logo from "assets/logo.svg"
import styles from "./contact-description.module.css"

export function ContactDescription() {
	return (
		<section className={styles.description}>
			<Layout className={styles.container}>
				<h2 className={styles.heading}>
					Mit uns
					<br />
					gemeinsam
					<br />
					zum Erfolg
				</h2>
				<h2 className={styles.subHeading}>Wie schon viele Kunden und Bewerber zuvor</h2>
			</Layout>
		</section>
	)
}
