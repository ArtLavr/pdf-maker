"use client"

import React from "react"
import { PDFViewer, Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer"
import Footer from "@assets/pdf-footer.png"
import Photo from "@assets/test-reume-photo.jpg"
import { data } from "./data"

const styles = StyleSheet.create({
	document: {
		width: "100%",
		height: "1000px"
	},
	page: {
		flexDirection: "column",
		gap: 20,
		padding: "80px 70px 200px 70px"
	},
	person: {
		position: "relative",
		display: "flex",
		flexDirection: "row"
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1
	},
	photo: {
		width: 150,
		height: 150,
		borderRadius: 24,
		objectFit: "cover"
	},
	photoShadow: {
		width: 150,
		height: 150,
		borderRadius: 24,
		position: "absolute",
		backgroundColor: "#12b0cc",
		top: -5,
		left: -5
	},
	footer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		width: "100vw"
	},
	nameContainer: {
		marginTop: "30px",
		marginLeft: "20px",
		display: "flex",
		flexDirection: "column",
		gap: "10px"
	},
	firstName: {
		fontWeight: "extrabold",
		fontSize: 30
	},
	data: {
		width: 120,
		color: "#00a4c2",
		fontSize: 14,
		fontWeight: "extrabold"
	},
	heading: {
		marginTop: 20
	},
	description: {
		marginTop: 40,
		display: "flex",
		flexDirection: "row",
		gap: 80
	},
	speciality: {
		fontWeight: "bold"
	},
	location: {
		fontSize: 14,
		marginTop: 4
	},
	experienceContainer: {},
	responsobilitiesContainer: {
		marginTop: 10,
		display: "flex",
		flexDirection: "column",
		gap: 10,
		maxWidth: 300
	},
	responsobilityContainer: {
		display: "flex",
		flexDirection: "row",
		gap: 6,
		alignItems: "center"
	},
	dot: {
		width: 4,
		height: 4,
		borderRadius: 32,
		backgroundColor: "black"
	},
	responsobility: {
		fontSize: 12,
		fontWeight: "thin"
	}
})

export const FinalResume = () => (
	// <PDFViewer style={styles.document}>
	<Document>
		<Page size="A4" style={styles.page}>
			<View style={styles.person}>
				<View style={styles.photoShadow}></View>
				<Image style={styles.photo} src={Photo.src} />
				<View style={styles.nameContainer}>
					<Text style={styles.firstName}>{data.name}</Text>
					<Text>{data.speciality}</Text>
				</View>
			</View>
			<View>
				<Text style={styles.heading}>ERUFSERFAHRUNG</Text>
				{data.experience.map((exp, index) => (
					<View style={styles.description} key={index}>
						<Text style={styles.data}>{exp.data}</Text>
						<View style={styles.experienceContainer}>
							<Text style={styles.speciality}>{exp.description.speciality}</Text>
							<Text style={styles.location}>{exp.description.location}</Text>
							<View style={styles.responsobilitiesContainer}>
								{exp.description.responsibilities.map(responsobility => (
									<View style={styles.responsobilityContainer} key={responsobility}>
										<View style={styles.dot} />
										<Text style={styles.responsobility}>{responsobility}</Text>
									</View>
								))}
							</View>
						</View>
					</View>
				))}
			</View>
			<View>
				<Text style={styles.heading}>FORTBILDUNG</Text>
				{data.training.map((exp, index) => (
					<View style={styles.description} key={index}>
						<Text style={styles.data}>{exp.data}</Text>
						<View style={styles.experienceContainer}>
							<Text style={styles.speciality}>{exp.description.speciality}</Text>
							<Text style={styles.location}>{exp.description.location}</Text>
						</View>
					</View>
				))}
			</View>
			<View>
				<Text style={styles.heading}>AUS- UND SCHULBILDUNG</Text>
				{data.education.map((exp, index) => (
					<View style={styles.description} key={index}>
						<Text style={styles.data}>{exp.data}</Text>
						<View style={styles.experienceContainer}>
							<Text style={styles.speciality}>{exp.description.speciality}</Text>
							<Text style={styles.location}>{exp.description.location}</Text>
							<View style={styles.responsobilitiesContainer}>
								{exp.description.responsibilities.map(responsobility => (
									<View style={styles.responsobilityContainer} key={responsobility}>
										<View style={styles.dot} />
										<Text style={styles.responsobility}>{responsobility}</Text>
									</View>
								))}
							</View>
						</View>
					</View>
				))}
			</View>

			<View style={styles.footer} fixed>
				<Image src={Footer.src} />
			</View>
		</Page>
	</Document>
	// </PDFViewer>
)
