import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import CommonHead from "@/shared/CommonHead";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<CommonHead title={"Onur Ravli | Home"} />
			<main className={`${styles.main} ${inter.className}`}></main>
		</>
	);
}
