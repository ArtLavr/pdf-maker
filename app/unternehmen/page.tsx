import {
	UnternehmenMain,
	UnternehmenJobtip,
	UnternehmenWork,
	Unternehmenarbeiten,
	Toolbox,
	Sponsors,
	Garant,
	UnternehmenSteps,
	UnternehmenDescription,
	UnternehmenEmployers,
	Contact
} from "sections"
import styles from "./page.module.css"

export default function Bewerber() {
	return (
		<main className={styles.main}>
			<UnternehmenMain />
			<UnternehmenJobtip />
			<UnternehmenWork />
			<Unternehmenarbeiten />
			<UnternehmenSteps />
			<UnternehmenDescription />
			<Toolbox />
			<Sponsors className={styles.sponsor} />
			<Garant />
			<UnternehmenEmployers />
			<Contact />
		</main>
	)
}
