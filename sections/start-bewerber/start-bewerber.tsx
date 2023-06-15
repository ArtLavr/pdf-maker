import { Layout } from "components/layout"
import Bewerber from "assets/bewerber.jpg"
import Image from "next/image"
import Link from "next/link"
import { Button } from "components/button"
import styles from "./start-bewerber.module.css"
import { Animated } from "components"

export function StartBewerder() {
	return (
		<section className={styles.bewerder}>
			<Layout className={styles.container}>
				<div className={styles.subContainer}>
					<h3 className={styles.subHeading}>BEWERBER</h3>
					<Animated
						boxVariant={{
							visible: { opacity: 1, marginLeft: 0, transition: { duration: 0.5 } },
							hidden: { opacity: 0, marginLeft: "-20px" }
						}}
					>
						<h2 className={styles.heading}>
							Bereit für <br />
							den nächsten <br />
							Schritt?
						</h2>
					</Animated>
					<Button text="JOBTIP für Bewerber" />
				</div>
			</Layout>
			<Image className={styles.image} src={Bewerber} alt="Bewerber" />
		</section>
	)
}
