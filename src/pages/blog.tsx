import { Inter } from "next/font/google";
import styles from "@/styles/Blog.module.css";
import CommonHead from "@/shared/CommonHead";

const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
	return (
		<>
			<CommonHead title={"Onur Ravli | Blog"} />
			<main className={`${styles.main} ${inter.className}`}></main>
		</>
	);
}
