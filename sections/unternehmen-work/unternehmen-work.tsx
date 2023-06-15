import { Layout, Animated } from "components"
import styles from "./unternehmen-work.module.css"
import Image from "next/image"
import Cubes from "assets/coubs.svg"

export function UnternehmenWork() {
	return (
		<section className={styles.work}>
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
						So bringt JOBTIP
						<br />
						zuverlässig und nachhaltig
						<br />
						zusammen, was wirklich
						<br />
						zusammengehört!
					</h2>
				</div>
			</Layout>
		</section>
	)
}
