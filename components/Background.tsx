import React from "react";
import Image from "next/image";

import { Types } from "../types";

//* animation
import { motion } from "framer-motion";

interface Props {
	type: Types;
	variants?: any;
	transition?: any;
	animate?: any;
}

const Background = ({ type, variants, transition, animate }: Props) => {
	return (
		<motion.div
			variants={variants}
			initial="hiddenNoMovement"
			animate={animate}
			transition={{ ...transition }}
		>
			{/* Mobile:BG */}
			<div className="bg-container sm:hidden">
				<Image
					src={`/${type}/background-${type}-mobile.jpg`}
					layout="fill"
					objectFit="cover"
					alt={`background for ${type} page`}
				/>
			</div>

			{/* Tablet:BG */}
			<div className="bg-container hidden sm:block lg:hidden">
				<Image
					src={`/${type}/background-${type}-tablet.jpg`}
					layout="fill"
					objectFit="cover"
					alt={`background for ${type} page`}
				/>
			</div>

			{/* Desktop:BG */}
			<div className="bg-container hidden lg:block">
				<Image
					src={`/${type}/background-${type}-desktop.jpg`}
					layout="fill"
					objectFit="cover"
					alt={`background for ${type} page`}
				/>
			</div>
		</motion.div>
	);
};

export default Background;
