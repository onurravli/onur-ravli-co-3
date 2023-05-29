import { Inter } from "next/font/google";
import styles from "@/styles/About.module.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
	return (
		<>
			<Head>
				<title>Onur Ravli | About</title>
				<meta name="description" content="Onur Ravli Personal Website" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="keywords" content="Onur Ravli, Onur Ravli Personal Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${styles.main} ${inter.className}`}></main>
		</>
	);
}
