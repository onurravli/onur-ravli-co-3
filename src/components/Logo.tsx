import { Raleway } from "next/font/google";
import Link from "next/link";

const rw = Raleway({ subsets: ["latin-ext"] });

export default function Logo() {
	return (
		<div className={"logo"}>
			<Link href={"/"}>
				<p style={rw.style}>Onur Ravli</p>
			</Link>
		</div>
	);
}
