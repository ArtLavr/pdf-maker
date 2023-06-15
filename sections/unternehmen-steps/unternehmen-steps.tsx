import { Layout } from "components"
import Image from "next/image"
import Step1 from "assets/select.jpg"
import Step2 from "assets/select_1.jpg"
import styles from "./unternehmen-steps.module.css"

export function UnternehmenSteps() {
	return (
		<section className={styles.steps}>
			<Layout className={styles.container}>
				<div className={styles.firstStep}>
					<div>
						<h2>Step 1</h2>
						<p>
							Das Fundament jeder Zusammenarbeit bleibt das gleiche: Im ersten Schritt lernt das
							JOBTIP Expertenteam das Unternehmen, seine Personalstruktur und seine Umgangsformen
							kennen, um das komplette Puzzle zu überschauen und nicht nur das Teil, das gerade
							fehlt.
						</p>
					</div>
					<Image className={styles.image} src={Step1} alt="step 1" />
				</div>
				<div className={styles.secondStep}>
					<Image className={styles.image} src={Step2} alt="step 2" />
					<div>
						<h2>Step 2</h2>
						<p>
							Im nächsten Schritt ermittelt JOBTIP passende Kandidat*innen aus dem eigenen
							Bewerberpool. Mit zwei Vorteilen für Sie:
							<br />
							<strong>
								Die JOBTIP Datenbank ist absolut auf aktuellem Stand. Und Vermittlungshonorare
								werden erst fällig, wenn die Stelle besetzt ist.
							</strong>
						</p>
					</div>
				</div>
			</Layout>
		</section>
	)
}
