import { Layout, Animated } from "components"
import styles from "./bewerber-anonym.module.css"
import Image from "next/image"

export function BewerberAnonym() {
	return (
		<section className={styles.anonym}>
			<Layout className={styles.container}>
				<h2 className={styles.heading}>Garantiert anonym.</h2>
				<p className={styles.description}>
					Selbstverständlich behandelt JOBTIP alle Daten diskret. Dass beispielsweise ein
					Arbeitgeber seinen jobsuchenden Mitarbeiter bei uns entdeckt, ist ausgeschlossen.
				</p>
			</Layout>
		</section>
	)
}
