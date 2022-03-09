import React, { useState } from "react";

//* components
import Background from "../components/Background";
import Header from "../components/Header";
import Nav from "../components/Nav";

//* constants
import { Types } from "../types";

//* styles
import { motion } from "framer-motion";

const variants = {
	visible: { opacity: 1, y: 0, z: 0},
	hidden: { opacity: 0, y: -100, z: 100},
	hiddenNoMovement: { opacity: 0 },
};
const transition = {
	duration: 0.8,
	// ease: "easeInOut",
};

export default function Home() {
	const [animate, setAnimate] = useState("visible");

	return (
		// FIXME: fix the semantic htmls like having sections or h1 in a section
		<div className="container">
			<Header />
			<Nav variants={variants} transition={transition} />

			{/* Main Context */}
			<main className="container flex-col items-center md:pb-20 lg:mt-20 lg:flex-row lg:text-left">
				{/* Section:Details */}
				<section className="z-5 lg:flex lg:w-1/2 lg:flex-col lg:items-center lg:justify-center">
					{/* Titles */}
					<motion.div
						initial="hidden"
						animate={animate}
						variants={variants}
						transition={{ ...transition, delay: 0.6 }}
						className="z-5 my-2 sm:mt-20"
					>
						{/* Sub-title above title */}
						<h5>So, you want to travel to</h5>

						{/* Title */}
						<h1>Space</h1>
					</motion.div>

					{/* Body */}
					<motion.p
						className="body z-5 max-w-xs sm:max-w-md"
						initial="hidden"
						animate={animate}
						variants={variants}
						transition={{ ...transition, delay: 1.2 }}
					>
						Let's face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we'll give you a truly out of this
						world experience!
					</motion.p>
				</section>

				{/* Section Button */}
				<motion.section
					className="z-5 lg:flex lg:w-1/2 lg:flex-col lg:items-center lg:justify-center"
					initial="hidden"
					animate={animate}
					variants={variants}
					transition={{ ...transition, delay: 1.8 }}
				>
					<a
						onClick={() => setAnimate("hidden")}
						className="shadow-hard z-5 mt-16 grid h-36 w-36 cursor-pointer place-items-center rounded-full bg-white shadow-xl transition-all duration-500 ease-in-out sm:mt-32 sm:h-60 sm:w-60"
					>
						<h4 className="heading-4 text-black">Explore</h4>
					</a>
				</motion.section>
			</main>

			<Background
				type={Types.home}
				variants={variants}
				animate={animate}
				transition={{ ...transition, delay: 2.4 }}
			/>
		</div>
	);
}
