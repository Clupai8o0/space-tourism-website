import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
	mobile?: boolean;
}

/**
 *
 * @param {mobile} boolean to show mobile nav logo or desktop nav logo
 * @returns JSX.Element
 */
const Logo = ({ mobile }: Props) => {
	//* if its mobile then show the mobile:logo
	if (mobile) {
		return (
			<Link href="/">
				<a title="Go to home">
					<Image
						src="/shared/logo.svg"
						height="40"
						width="40"
						title="home"
						alt="logo"
						aria-label="logo"
					/>
				</a>
			</Link>
		);
	}

	//* if its mobile then show the desktop:logo
	return (
		<Link href="/">
			<a title="Go to home">
				<Image
					src="/shared/logo.svg"
					height="48"
					width="48"
					title="home"
					alt="logo"
					aria-label="logo"
				/>
			</a>
		</Link>
	);
};

export default Logo;
