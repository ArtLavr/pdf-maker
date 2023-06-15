import classNames from "classnames"
import styles from "./layout.module.css"

export function Layout({ children, className }: { children: React.ReactNode; className?: string }) {
	return <div className={classNames(styles.layout, className)}>{children}</div>
}
