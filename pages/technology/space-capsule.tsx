import Image from "next/image";
import React from "react";

//* components
import Background from "../../components/Background";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import TechnologyNav from "../../components/TechnologyNav";

//* constants
import { Types } from "../../types";

function SpaceCapsule() {
	return (
		<div className="container">
			<Header />
			<Nav />

			<main className="z-5 relative w-full max-w-[1440px] pb-12 text-center lg:mt-12 lg:flex lg:items-center">
				<section className="lg:w-[60%] lg:px-20">
					<div className="mb-8 sm:my-12 sm:pl-12 md:text-left lg:mb-20 lg:mt-0">
						<h5>
							<span className="font-bold text-gray-600">03</span> Space launch
							101
						</h5>
					</div>

					<section className="relative h-44 w-full sm:h-80 lg:hidden">
						<Image
							src="/technology/image-space-capsule-landscape.jpg"
							layout="fill"
							objectFit="cover"
							alt="Space capsule hero"
						/>
					</section>

					<div className="flex flex-col items-center lg:flex-row">
						<TechnologyNav />

						<div className="lg:w-3/4 lg:text-left">
							<span className="subheading-2 my-4">The terminology...</span>
							<h3 className="my-4 sm:my-8">Space capsule</h3>
							<p className="max-w-xs sm:max-w-md">
								A space capsule is an often-crewed spacecraft that uses a
								blunt-body reentry capsule to reenter the Earth's atmosphere
								without wings. Our capsule is where you'll spend your time
								during the flight. It includes a space gym, cinema, and plenty
								of other activities to keep you entertained.
							</p>
						</div>
					</div>
				</section>

				{/* Desktop:Hero Image */}
				<section className="relative hidden lg:flex lg:min-h-[500px] lg:w-[40%]">
					<Image
						src="/technology/image-space-capsule-portrait.jpg"
						layout="fill"
						objectFit="cover"
						alt="Space capsule hero"
					/>
				</section>
			</main>

			{/* BG */}
			<Background type={Types.technology} />
		</div>
	);
}

export default SpaceCapsule;
