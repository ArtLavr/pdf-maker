import { Layout } from "components/layout"
import Dna from "assets/dna.jpg"
import Image from "next/image"
import styles from "./toolbox.module.css"

export function Toolbox() {
	return (
		<section className={styles.toolbox}>
			<Layout className={styles.container}>
				<div className={styles.subContainer}>
					<h2 className={styles.heading}>
						Die Jobtip
						<br />
						Toolbox
					</h2>
					<p className={styles.description}>
						Die ausgebildeten Coaches von JOBTIP stützen sich auf die Kombination aus persönlichem
						Kennenlernen und ausgeklügelter Analyse. Also auf menschliche Einschätzung und
						leistungsstarke Tools zur charakterlichen Profilerstellung. Dafür setzt JOBTIP auf die
						innovativen Methoden von <strong>DNLA</strong> und <strong>DiSG </strong>
						<span>
							mit denen detaillierte und aufschlussreiche Persönlichkeitsbilder ermittelt werden.
							Wie exakt die Ergebnisse dich und deine Stärken auf den Punkt bringen, erlebst du am
							besten mal selbst bei uns.
						</span>
					</p>
				</div>
			</Layout>
			<Image className={styles.image} src={Dna} alt="Dna" />
		</section>
	)
}
