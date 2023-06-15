import { Layout, Animated } from "components"
import styles from "./bewerber-arbeiten.module.css"
import Image from "next/image"
import Cubes from "assets/coubs.svg"

export function BewerberArbeiten() {
	return (
		<section className={styles.airbeiten}>
			<Layout className={styles.container}>
				<Animated
					className={styles.imageContainer}
					boxVariant={{
						visible: { opacity: 1, transform: "rotate(0)", transition: { duration: 1 } },
						hidden: { opacity: 0, transform: "rotate(-200deg)" }
					}}
				>
					<Image className={styles.image} src={Cubes} alt="Cubes" />
				</Animated>
				<div className={styles.infoContainer}>
					<h2 className={styles.heading}>
						So arbeiten wir
						<br />
						zusammenc
					</h2>
					<p>JOBTIP stellt eine entscheidende Frage:</p>
					<p>
						<strong>Verdienst du, was du bekommst, oder bekommst du, was du verdienst?</strong>
					</p>
					<p>
						Die Zusammenarbeit von JOBTIP und dir beginnt mit einem intensiven Kennenlernen. Dabei
						ist für die Suche nach dem idealen nächsten Job nicht nur interessant, was du kannst.
						Sondern auch, wie dein Charakter geprägt ist und in welche Teamkonstellationen er
						besonders gut passt. Du erfährst also in jedem Fall während des gesamten Prozesses sehr
						viel über dich selbst.
					</p>
					<p>
						Haben wir dich und deine Wünsche verstanden, machen wir uns auf die Suche, um sie dir zu
						erfüllen. Dabei arbeitet JOBTIP wie ein Job-Butler. Immer persönlich für dich da und
						geschult darin, dir genau das auf dem silbernen Tablett zu servieren, was du bekommen
						möchtest.
					</p>
					<p>
						Der Weg zum idealen Job ist ein Prozess. In ihm lernst du viele neue Möglichkeiten
						kennen. Aber auch dich selbst. JOBTIP geht diesen Weg gemeinsam mit dir, bis deine
						Entscheidung gefallen ist und sich dir die Türen für neue Chancen öffnen.
					</p>
				</div>
			</Layout>
		</section>
	)
}
