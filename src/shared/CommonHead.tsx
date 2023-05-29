import Head from "next/head";
export default function CommonHead({ title }: { title: string }) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}
