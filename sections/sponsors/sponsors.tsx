import { Layout, Animated } from "components"
import classNames from "classnames"
import Image from "next/image"
import Dnla from "assets/dnla.png"
import Disg from "assets/disg.png"
import styles from "./sponsors.module.css"

export function Sponsors({ className = "" }: { className?: string }) {
	return (
		<section className={classNames(className, styles.sponsor)}>
			<Layout className={styles.container}>
				<h2 className={styles.heading}>
					Weiterführende
					<br />
					Infos zu unseren
					<br />
					Methoden
				</h2>
				<div className={styles.imagesContainer}>
					<Animated
						className={styles.imageContainer}
						boxVariant={{
							visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
							hidden: { opacity: 0, scale: 0.2 }
						}}
					>
						<Image className={styles.image} src={Dnla} alt="dnla" />
					</Animated>
					<Animated
						className={styles.imageContainer}
						boxVariant={{
							visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
							hidden: { opacity: 0, scale: 0.2 }
						}}
					>
						<Image className={styles.image} src={Disg} alt="dnla" />
					</Animated>
				</div>
			</Layout>
		</section>
	)
}
