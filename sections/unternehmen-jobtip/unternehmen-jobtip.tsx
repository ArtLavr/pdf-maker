import { Layout } from "components"
import styles from "./unternehmen-jobtip.module.css"

export function UnternehmenJobtip() {
	return (
		<section className={styles.jobtip}>
			<Layout className={styles.container}>
				<h2>
					JOBTIP
					<br />
					für Unternehmen
				</h2>
				<p>
					Wenn offene Jobs passend besetzt werden sollen, wird Ehrlichkeit zu einem wichtigen
					Erfolgsfaktor. Es nutzt nur wenig, in Bewerbungen ausschließlich Sonnenseiten kennen zu
					lernen. Und genauso wenig, in ausgefeilten Präsentationen dem Bewerber die eigene Company
					idealer zu zeigen, als sie eigentlich ist.
				</p>
				<p>
					Bei JOBTIP liegen alle Karten offen auf dem Tisch. Denn ebenso wie wir alle Bewerber
					gründlich unter die Lupe nehmen und mit Hilfe leistungsstarker Tools profilieren,
					durchleuchten wir auch die Unternehmen, ihre Stellen und deren Anforderungen. Erst nachdem
					wir sie genauestens kennen, gelangen sie in unsere Kundenkartei.
				</p>
			</Layout>
		</section>
	)
}
