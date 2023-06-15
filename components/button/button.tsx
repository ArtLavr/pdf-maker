import styles from "./button.module.css"
import classNames from "classnames"

type Props = {
	onClick?: () => void
	type?: "primary" | "additional"
	text: string
}

export function Button({ type = "primary", text, onClick }: Props) {
	return (
		<button
			onClick={onClick}
			className={classNames(styles.button, {
				[styles.primary]: type === "primary",
				[styles.additional]: type === "additional"
			})}
		>
			{text}
		</button>
	)
}
