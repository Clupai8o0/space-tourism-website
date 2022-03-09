import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

//* components
import Logo from "./Logo";

//* animations
import { motion } from "framer-motion";

//* constants
const navigation = {
	home: {
		route: "/",
		title: "Go to home",
	},
	destinations: {
		route: "/destinations/moon",
		title: "Go to destinations",
	},
	crew: {
		route: "/crew/commander",
		title: "Go to crew",
	},
	technology: {
		route: "/technology/launch-vehicle",
		title: "Go to technology",
	},
};

/**
 * Returns the nav element
 * @returns {JSX.Element}
 */
const Nav = ({ variants, transition }: any) => {
	//* state to show menu sidebar
	const [showMenu, setShowMenu] = useState(false);

	//* router
	const router = useRouter();
	const route = router.pathname.split("/")[1];

	//? Nav-bar component
	return (
		<motion.header
			className="relative z-10 w-full lg:flex lg:justify-center"
			initial="hidden"
			animate="visible"
			variants={variants}
			transition={{ ...transition }}
		>
			{/* Desktop/Tablet:Nav */}
			<nav className="hidden h-24 w-full max-w-[1385px] items-center justify-between sm:flex lg:mt-8">
				{/* Desktop/Tablet:Logo */}
				<div className="pl-10">
					<Logo />
				</div>

				{/* Desktop/Tablet:Nav elements */}
				<ul className="glassmorphism flex h-full w-[450px] items-center justify-evenly lg:w-[830px] lg:px-16">
					<li className="group nav-link" title={navigation.home.title}>
						<Link href={navigation.home.route}>
							<a title={navigation.home.title}>
								<b>00</b> Home{" "}
								<hr className={`nav-hr ${route === "" && "opacity-100"}`} />
							</a>
						</Link>
					</li>
					<li className="group nav-link" title={navigation.destinations.title}>
						<Link href={navigation.destinations.route}>
							<a title={navigation.destinations.title}>
								<b>01</b> Destination{" "}
								<hr
									className={`nav-hr ${
										route === "destination" && "opacity-100"
									}`}
								/>
							</a>
						</Link>
					</li>
					<li className="group nav-link" title={navigation.crew.title}>
						<Link href={navigation.crew.route}>
							<a title={navigation.crew.title}>
								<b>02</b> Crew{" "}
								<hr className={`nav-hr ${route === "crew" && "opacity-100"}`} />
							</a>
						</Link>
					</li>
					<li className="group nav-link" title={navigation.technology.title}>
						<Link href={navigation.technology.route}>
							<a title={navigation.technology.title}>
								<b>03</b> Technology{" "}
								<hr
									className={`nav-hr ${
										route === "technology" && "opacity-100"
									}`}
								/>
							</a>
						</Link>
					</li>
				</ul>
			</nav>

			{/* Mobile:Menu */}
			<aside
				className={`glassmorphism fixed top-0 right-0 z-40 h-screen w-3/4 translate-x-full sm:hidden ${
					showMenu && "translate-x-0"
				} transition-transform duration-300 ease-in-out`}
				aria-label="Menu side bar"
			>
				{/* Menu:Close menu icon */}
				<span>
					<button title="Close menu" onClick={() => setShowMenu(false)}>
						<img
							src="/shared/icon-close.svg"
							className="absolute right-6 top-10 z-50 fill-white"
							alt="close"
							title="Close menu"
						/>
					</button>
				</span>

				{/* Menu:Nav elements */}
				<ul className="mt-36 ml-10 space-y-5">
					<li className="nav-link" title="Go to home">
						<Link href={navigation.home.route}>
							<a title={navigation.home.title}>
								<b>00</b> Home
							</a>
						</Link>
					</li>
					<li className="nav-link" title={navigation.destinations.title}>
						<Link href={navigation.destinations.route}>
							<a title={navigation.destinations.title}>
								<b>01</b> Destination
							</a>
						</Link>
					</li>
					<li className="nav-link" title={navigation.crew.title}>
						<Link href={navigation.crew.route}>
							<a title={navigation.crew.title}>
								<b>02</b> Crew
							</a>
						</Link>
					</li>
					<li className="nav-link" title={navigation.technology.title}>
						<Link href={navigation.technology.route}>
							<a title={navigation.technology.title}>
								<b>03</b> Technology
							</a>
						</Link>
					</li>
				</ul>
			</aside>

			{/* Mobile:Nav elements */}
			<nav className="sm:hidden">
				<ul className="flex h-24 items-center justify-between px-6">
					{/* Mobile:Logo */}
					<li>
						<Logo mobile={true} />
					</li>

					{/* Mobile:Burger */}
					<li>
						<button
							onClick={() => setShowMenu(true)}
							title="Show navigation menu"
						>
							<img
								src="/shared/icon-hamburger.svg"
								title="Show navigation"
								alt="navigation"
							/>
						</button>
					</li>
				</ul>
			</nav>
		</motion.header>
	);
};

export default Nav;
