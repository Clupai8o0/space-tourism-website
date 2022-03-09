import Head from "next/head";
import React from "react";

interface Props {
	title?: string;
}

const Header = ({ title }: Props) => {
	return (
		<Head>
			<title>{title || "Space tourism"}</title>
			<link rel="icon" href="/favicon-32x32.png" />
		</Head>
	);
};

export default Header;
