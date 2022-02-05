import Head from "next/head";
import React from "react";

const Header = () => {
	return (
		<Head>
			<title>Frontend Mentor | Space tourism website</title>
			<link rel="icon" href="/favicon-32x32.png" />

			{/* Fonts */}
			<link
				href="https://fonts.googleapis.com/css?family=Bellefair:regular"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Barlow+Condensed:regular"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Barlow:regular"
				rel="stylesheet"
			/>
		</Head>
	);
};

export default Header;
