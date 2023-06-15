import { Layout, Animated } from "components"
import HandsImage from "assets/hands.png"
import { ArrowRight } from "assets/svg/arrow-right.svg"
import Image from "next/image"
import Link from "next/link"
import { SVGIcon } from "components/svg-icon"
import styles from "./start-main.module.css"

export function StartSection() {
	return (
		<section className={styles.start}>
			<Layout className={styles.container}>
				<div className={styles.info}>
					<h2 className={styles.heading}>
						Erfolgreich anders.
						<br /> Anders erfolgreich.
					</h2>
					<h3 className={styles.subHeading}>Wir machen den Unterschied</h3>
					<p className={styles.description}>
						JOBTIP bringt die richtigen Menschen mit den richtigen Jobs zusammen. Nicht wie eine
						Maschine. Sondern ganz persönlich. Mit Erfahrung und Fingerspitzengefühl. Eben
						erfolgreich anders. Um anders erfolgreich zu sein. Denn einen besseren JOBTIP gibt es in
						Deutschland nicht!
					</p>
					<Animated
						className={styles.linkContainer}
						boxVariant={{
							visible: { opacity: 1, marginLeft: 0, transition: { duration: 0.5 } },
							hidden: { opacity: 0, marginLeft: "-20px" }
						}}
					>
						<Link href="/bewerber" className={styles.link}>
							<SVGIcon className={styles.linkIcon} width={50} height={60} icon={<ArrowRight />} />
							JOBTIP für Bewerber
						</Link>
						<Link href="/" className={styles.link}>
							<SVGIcon className={styles.linkIcon} width={50} height={60} icon={<ArrowRight />} />
							JOBTIP für Unternehmen
						</Link>
					</Animated>
				</div>
				<Animated
					className={styles.handsImageContainer}
					boxVariant={{
						visible: { opacity: 1, marginRight: 0, transition: { duration: 0.5 } },
						hidden: { opacity: 0, marginRight: "-20px" }
					}}
				>
					<Image className={styles.handsImage} src={HandsImage} alt="hands" />
				</Animated>
			</Layout>
		</section>
	)
}
