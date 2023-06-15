import { Layout } from "components"
import styles from "./unternehmen-arbeiten.module.css"

export function Unternehmenarbeiten() {
	return (
		<section className={styles.arbeiten}>
			<Layout className={styles.container}>
				<h2>
					So arbeitet Jobtip
					<br />
					für Unternehmen
				</h2>
				<p>
					Es gibt zwei Aufgabenbereiche, bei denen JOBTIP sein Know-how und seine Erfahrungen für
					Unternehmen in die Waagschale werfen kann. Zum einen unterstützen wir Sie bei der
					Besetzung offener Stellen mit externen Bewerber*innen. Zum anderen schafft die JOBTIP
					Toolbox beste Voraussetzungen, um interne Stellenbesetzungsprozesse auf Basis fundierter
					Persönlichkeitsfakten zu begleiten und erfolgreich zu gestalten.
				</p>
			</Layout>
		</section>
	)
}
