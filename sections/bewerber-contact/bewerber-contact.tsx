import { Layout, Button } from "components"
import styles from "./bewerber-contact.module.css"

export function BewerberContact() {
	return (
		<section className={styles.contact}>
			<Layout className={styles.container}>
				<h2 className={styles.heading}>
					Bist du bereit?
					<br />
					Wir sind es!
				</h2>
				<Button text="Jetzt Kontakt aufnehmen" />
			</Layout>
		</section>
	)
}
