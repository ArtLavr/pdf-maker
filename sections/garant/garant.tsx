import { Layout, Animated } from "components"
import Image from "next/image"
import Monster from "assets/monster.svg"
import styles from "./garant.module.css"

export function Garant() {
	return (
		<section className={styles.bewerber}>
			<Layout className={styles.container}>
				<Animated
					boxVariant={{
						visible: { opacity: 1, transform: "translateX(0)", transition: { duration: 1 } },
						hidden: { opacity: 0, transform: "translateX(-40px)" }
					}}
					className={styles.textContainer}
				>
					<p>GARANTIERT</p>
					<p>KEINE</p>
					<p>
						<span className={styles.purpleText}>UNGEHEUER</span>
					</p>
					<p>ODER</p>
					<p>
						<span className={styles.grayText}>STOLPER</span>
					</p>
					<p>
						<span className={styles.grayText}>STEINE</span>
					</p>
				</Animated>
				<Animated
					boxVariant={{
						visible: { opacity: 1, transform: "translateX(0)", transition: { duration: 1 } },
						hidden: { opacity: 0, transform: "translateX(40px)" }
					}}
					className={styles.imageContainer}
				>
					<Image className={styles.image} src={Monster} alt="monster" />
				</Animated>
			</Layout>
		</section>
	)
}
