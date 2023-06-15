import "app/globals.css"
// import { Suspense } from "react"
import { NavigationBar, Footer } from "components"
import { Poppins } from "next/font/google"

const poppins = Poppins({
	subsets: ["latin"],
	weight: "400"
})

export const metadata = {
	title: "JobTip"
	// description: ""
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<NavigationBar />
				{children}
				<Footer />
			</body>
		</html>
	)
}

