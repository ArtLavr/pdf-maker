import { Layout } from "components/layout"
import Man from "assets/man.jpg"
import Image from "next/image"
import { Button } from "components/button"
import styles from "./bewerber-description.module.css"

export function BewerberDescription() {
	return (
		<section className={styles.description}>
			<Layout className={styles.container}>
				<div className={styles.subContainer}>
					<p>
						Bei JOBTIP arbeiten Menschen für Menschen. Und das ist gut so, weil die entscheidenden
						Faktoren für eine erfolgreiche Jobsuche am Ende von Maschinen und Algorithmen doch nur
						unzureichend erfüllt werden. JOBTIP ist wichtig, dich genau zu verstehen, sich in deine
						aktuelle Situation hineindenken und deine Vorstellungen für die Zukunft nachvollziehen
						zu können. Nur so kommen wir gemeinsam an ein Ziel, das dich am Ende wirklich überzeugt.
					</p>
					<p>
						Eine Besonderheit: JOBTIP beleuchtet immer beide Seiten der Suche. Besonders die
						Unternehmen und Positionen, die über uns vermittelt werden, nehmen wir ganz genau unter
						die Lupe, um entscheiden zu können, welcher Mensch mit welchen Qualifikationen und
						Eigenschaften jeweils perfekt passt. Dabei schauen wir uns sorgfältig die jeweiligen
						Unternehmensphilosophien an. Denn eins gibt es beim JOBTIP nicht: Wir vermitteln nie ins
						Blaue!
					</p>
					<Button text="Zu den Jobs" />
				</div>
			</Layout>
			<Image className={styles.image} src={Man} alt="Man" />
		</section>
	)
}
