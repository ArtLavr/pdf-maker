import { Button } from "components"
import * as React from "react"
import { PDFDownloadLink } from "@react-pdf/renderer"
import { FinalResume } from "../../final-resume"
import styles from "./modal.module.css"

export const Modal = ({ closeModal }: { closeModal: () => void }) => {
	const [file, setFile] = React.useState("")
	return (
		<div className={styles.modal}>
			<input type="file" accept=".pdf" onChange={event => setFile(event.target.value)} />
			<div className={styles.buttonContainer}>
				<Button text="Close Modal" onClick={() => closeModal()} />
				{file && (
					<PDFDownloadLink document={<FinalResume />} fileName="resume.pdf">
						{({ blob, url, loading, error }) =>
							loading ? "Loading document..." : <Button text="Download now!" />
						}
					</PDFDownloadLink>
				)}
			</div>
		</div>
	)
}
