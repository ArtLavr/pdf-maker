import { Layout } from "components"
import styles from "./unternehmen-description.module.css"
export function UnternehmenDescription() {
	return (
		<section className={styles.description}>
			<Layout className={styles.container}>
				<div className={styles.subContainer}>
					<h2>
						Warum wir
						<br />
						anders und
						<br />
						erfolgreich sind?
					</h2>
					<p>
						Bei JOBTIP gibt es keine Dienstleistung von der Stange. Alle Stellen und alle
						Jobsuchenden werden so individuell behandelt, wie sie es verdienen. Denn JOBTIP versteht
						sich als Manufaktur. Nur so ist gewährleistet, dass es immer wieder zum passenden
						„Match“ kommt.
					</p>
					<p>
						Und dieser „Match“ ist das Ziel, auf das unsere Prozesse konsequent ausgerichtet sind.
						Von der Persönlichkeitsanalyse und Weiterentwicklung über die persönliche Beratung bis
						zur fachlichen Beurteilung von Qualifikationen stellen wir Schritt für Schritt alle
						Weichen so, dass die perfekte Verbindung entsteht.
					</p>
				</div>
			</Layout>
		</section>
	)
}
