"use client"
import { motion, useAnimation, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const boxVariant = {
	visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
	hidden: { opacity: 0, scale: 0 }
}

type Props = {
	boxVariant: Variants
	children: React.ReactNode
	className?: string
}
export const Animated = ({ boxVariant, children, className }: Props) => {
	const control = useAnimation()
	const [ref, inView] = useInView()

	useEffect(() => {
		if (inView) {
			control.start("visible")
		}
	}, [control, inView])

	return (
		<motion.div
			className={className}
			ref={ref}
			variants={boxVariant}
			initial="hidden"
			animate={control}
		>
			{children}
		</motion.div>
	)
}
