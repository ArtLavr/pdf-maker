import { Layout, Button } from "components"
import Image from "next/image"
import Logo from "assets/logo.svg"
import styles from "./unternehmen-main.module.css"

export function UnternehmenMain() {
	return (
		<section className={styles.unternehmen}>
			<Layout className={styles.container}>
				<Image className={styles.image} src={Logo} alt="logo" />
				<h1 className={styles.heading}>
					Setzen Sie
					<br />
					auf echtes
					<br />
					Know-how
				</h1>
				<div className={styles.buttonContainer}>
					<Button text="Mehr zum JOBTIP" type="additional" />
					<Button text="Kontakt aufnehmen" />
				</div>
			</Layout>
		</section>
	)
}
