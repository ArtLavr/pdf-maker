import { Layout } from "components"
import styles from "./bewerber-anders.module.css"

export function BewerberAnders() {
	return (
		<section className={styles.anders}>
			<Layout className={styles.container}>
				<h2 className={styles.heading}>
					Warum wir
					<br />
					anders und
					<br />
					erfolgreich sind?
				</h2>
			</Layout>
		</section>
	)
}
