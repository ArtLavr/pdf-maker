import Link from "next/link"
import Image from "next/image"
import Jobby from "assets/jobby_trans.png"
import { Layout } from "components"
import styles from "./footer.module.css"

export function Footer() {
	return (
		<footer className={styles.footer}>
			<Layout className={styles.container}>
				<div className={styles.info}>
					<div>
						<h3>JOBTIP GmbH</h3>
						<span>Next Level Recruiting</span>
					</div>
					<div className={styles.hannover}>
						<h3>Hannover</h3>
						<div>
							<span>Rathenaustraße 13/14</span>
							<span>Kröpcke Passage</span>
							<span>30159 Hannover</span>
						</div>
					</div>
					<div className={styles.contactInfo}>
						<span>+49 511 – 999 88 0 88</span>
						<span>info@deinjobtip.de</span>
					</div>
				</div>
				<div>
					<h3>Navigation</h3>
					<ul>
						<li>
							<Link href="/">Start</Link>
						</li>
						<li>
							<Link href="/bewerber">Bewerber</Link>
						</li>
						<li>
							<Link href="">Unternehmen</Link>
						</li>
						<li>
							<Link href="">Kontakt</Link>
						</li>
						<li>
							<Link href="">Datenschutz</Link>
						</li>
						<li>
							<Link href="">Impressum</Link>
						</li>
					</ul>
				</div>
				<Image className={styles.image} src={Jobby} alt="Jobby" />
			</Layout>
		</footer>
	)
}
