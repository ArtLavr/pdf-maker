import { Layout, Button } from "components"
import Image from "next/image"
import Logo from "assets/logo.svg"
import styles from "./contact-main.module.css"

export function ContactMain() {
	return (
		<section className={styles.contact}>
			<Layout className={styles.container}>
				<Image className={styles.image} src={Logo} alt="logo" />
				<h1 className={styles.heading}>
					Ein Anruf bei uns
					<br />
					könnte dein Leben
					<br />
					nachhaltig und
					<br />
					positiv verändern
				</h1>
				<p>Viele Wege führen zum Erfolg und somit auch viele zu uns.</p>
				<Button text="Kontakt aufnehmen" />
			</Layout>
		</section>
	)
}
