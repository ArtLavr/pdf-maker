import { Layout, Button } from "components"
import styles from "./contact.module.css"

export function Contact() {
	return (
		<section className={styles.contact}>
			<Layout className={styles.container}>
				<h2>
					Durchstarten
					<br />
					und Kontakt
					<br />
					aufnehmen.
				</h2>
				<Button type="additional" text="Kontakt" />
			</Layout>
		</section>
	)
}
