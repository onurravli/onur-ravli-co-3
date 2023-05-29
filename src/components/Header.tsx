import styles from "@/styles/Header.module.css";
import Logo from "./Logo";
import Link from "next/link";
import { Raleway } from "next/font/google";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const rw = Raleway({ subsets: ["latin-ext"] });
const links = [
	{ name: "Home", url: "/" },
	{ name: "About", url: "/about" },
	{ name: "Blog", url: "/blog" },
	{ name: "Contact", url: "/contact" },
];

export default function Header() {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<div className={`${styles.menu} ${showMenu ? styles.expanded : ""}`}>
					<ul>
						{links.map((link) => {
							return (
								<li key={link.name}>
									<Link style={rw.style} href={link.url}>
										{link.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className={styles.toggle} onClick={toggleMenu}>
					<GiHamburgerMenu />
				</div>
			</div>
		</header>
	);
}
