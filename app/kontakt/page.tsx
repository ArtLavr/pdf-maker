import { ContactMain, ContactDescription } from "sections"
import styles from "./page.module.css"

export default function Page() {
	return (
		<main className={styles.main}>
			<ContactMain />
			<ContactDescription />
		</main>
	)
}
