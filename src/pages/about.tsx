import { Inter } from "next/font/google";
import styles from "@/styles/About.module.css";
import CommonHead from "@/shared/CommonHead";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
	return (
		<>
			<CommonHead title={"Onur Ravli | About"} />
			<main className={`${styles.main} ${inter.className}`}></main>
		</>
	);
}
