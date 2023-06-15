import {
	BewerberMain,
	BewerberJobtip,
	Garant,
	BewerberArbeiten,
	BewerberAnonym,
	BewerberAnders,
	BewerberDescription,
	Toolbox,
	Sponsors,
	BewerberContact
} from "sections"
import Image from "next/image"
import People from "assets/people.jpg"
import styles from "./page.module.css"

export default function Bewerber() {
	return (
		<main className={styles.main}>
			<BewerberMain />
			<BewerberJobtip />
			<Image className={styles.imagePeople} src={People} alt="People" />
			<Garant />
			<BewerberArbeiten />
			<div className={styles.imageWorks} />
			<BewerberAnders />
			<BewerberDescription />
			<BewerberAnonym />
			<Toolbox />
			<Sponsors />
			<BewerberContact />
		</main>
	)
}
