import { Layout } from "components"
import styles from "./unternehmen-employers.module.css"

export function UnternehmenEmployers() {
	return (
		<section className={styles.description}>
			<Layout className={styles.container}>
				<h2>
					Ihre neuen Mitarbeiter
					<br />
					warten bereits auf Sie!
				</h2>
			</Layout>
		</section>
	)
}
