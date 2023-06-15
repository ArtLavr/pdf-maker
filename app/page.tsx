import styles from "./page.module.css"

import { StartSection, StartBewerder, StartUnternehmen } from "sections"


export default function Home() {
	return (
		<main className={styles.main}>
			<StartSection />
			<StartBewerder />
			<StartUnternehmen />
		</main>
	)
}

