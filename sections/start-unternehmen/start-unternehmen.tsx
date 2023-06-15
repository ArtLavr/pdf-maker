import { Layout, Animated } from "components"
import Business from "assets/business.jpg"
import Image from "next/image"
import Link from "next/link"
import { Button } from "components/button"
import styles from "./start-unternehmen.module.css"

export function StartUnternehmen() {
	return (
		<section className={styles.unternehmen}>
			<Image className={styles.image} src={Business} alt="Unternehmen" />
			<Layout className={styles.container}>
				<div className={styles.subContainer}>
					<h3 className={styles.subHeading}>UNTERNEHMEN</h3>
					<Animated
						boxVariant={{
							visible: { opacity: 1, marginRight: 0, transition: { duration: 0.5 } },
							hidden: { opacity: 0, marginRight: "-20px" }
						}}
					>
						<h2 className={styles.heading}>
							Next level in <br />
							recruiting
						</h2>
					</Animated>
					<Link href="/">
						<Button text="JOBTIP für Unternehmen" />
					</Link>
				</div>
			</Layout>
		</section>
	)
}
