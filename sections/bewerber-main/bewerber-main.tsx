import { Layout, Button } from "components"
import Image from "next/image"
import Logo from "assets/logo.svg"
import styles from "./bewerber-main.module.css"

export function BewerberMain() {
	return (
		<section className={styles.bewerber}>
			<Layout className={styles.container}>
				<Image className={styles.image} src={Logo} alt="logo" />
				<h1 className={styles.heading}>
					Du hast
					<br />
					lange genug
					<br />
					gewartet
				</h1>
				<div className={styles.buttonContainer}>
					<Button text="Mehr zum JOBTIP" type="additional" />
					<Button text="Sofort zu den Jobs" />
				</div>
			</Layout>
		</section>
	)
}
