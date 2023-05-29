import { Inter } from "next/font/google";
import styles from "@/styles/Contact.module.css";
import CommonHead from "@/shared/CommonHead";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
	return (
		<>
			<CommonHead title={"Onur Ravli | Contact"} />
			<main className={`${styles.main} ${inter.className}`}></main>
		</>
	);
}
