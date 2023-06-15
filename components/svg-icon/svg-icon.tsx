import styles from "./svg-icon.module.css"
import classNames from "classnames"

export function SVGIcon({
	icon,
	height,
	width,
	className,
	onClick
}: {
	icon: React.ReactNode
	width?: number
	height?: number
	className?: string
	onClick?: () => void
}) {
	const sizeStyle = {
		height: `${height}px`,
		width: `${width}px`
	}
	return (
		<i className={classNames(styles.svgIcon, className)} style={sizeStyle} onClick={onClick}>
			{icon}
		</i>
	)
}
