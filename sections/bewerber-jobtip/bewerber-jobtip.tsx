import { Layout } from "components"
import styles from "./bewerber-jobtip.module.css"

export function BewerberJobtip() {
	return (
		<section className={styles.jobtip}>
			<Layout className={styles.container}>
				<h2>Dein JOBTIP</h2>
				<p>
					Du bist bereit, den nächsten Schritt auf deinem beruflichen Weg zu gehen. Die nächste
					Station deiner Karriere kennen zu lernen. Eine neue Herausforderung anzugehen – und sie zu
					meistern. Das Einzige, was jetzt noch fehlt, ist die nächste Stelle, der neue Job. In
					anderen Worten: Du brauchst den JOBTIP!
				</p>
				<p>
					Mit innovativer Profilanalyse, persönlicher Beratung und Begleitung und umfassendem
					Know-how im Bereich der Personalentwicklung unterstützt dich JOBTIP, die Position zu
					finden, in der du deine Stärken ausspielen kannst und neue Perspektiven für die Zukunft
					entdeckst. Und für dich als Bewerber*in ist dieser Service sogar kostenlos.
				</p>
				<p>Also: Freu dich auf deinen JOBTIP!</p>
			</Layout>
		</section>
	)
}
