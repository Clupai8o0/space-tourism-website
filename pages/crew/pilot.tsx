import Image from "next/image";
import React from "react";

//* components
import Background from "../../components/Background";
import CrewNav from "../../components/CrewNav";
import Header from "../../components/Header";
import Nav from "../../components/Nav";

//* constants
import { Types } from "../../types";

function Pilot() {
	return (
		<div className="container">
			<Header />
			<Nav />

			<main className="z-5 relative w-full max-w-[1440px] text-center lg:mt-12 lg:flex lg:items-center">
				<section className="lg:w-[60%] lg:px-20">
					<div className="mb-8 sm:my-12 sm:pl-12 md:text-left lg:mb-20 lg:mt-0">
						<h5>
							<span className="font-bold text-gray-600">02</span> Meet your crew
						</h5>
					</div>

					<section className="relative h-60 w-full sm:h-80 lg:hidden">
						<Image
							src="/crew/image-victor-glover.webp"
							layout="fill"
							objectFit="contain"
							alt="Pilot Victor Glover"
						/>
					</section>

					<div className="flex w-full justify-center">
						<hr className="w-[327px] border-t border-[#383B4B]" />
					</div>

					<div className="flex flex-col items-center lg:flex-row">
						<CrewNav />
						<div className="lg:w-3/4 lg:text-left">
							<h5 className="font-serif tracking-tight opacity-50">Pilot</h5>
							<h3 className="mb-4 sm:my-8">Victor Glover</h3>
							<p className="max-w-xs sm:max-w-md">
								Pilot on the first operational flight of the SpaceX Crew Dragon
								to the International Space Station. Glover is a commander in the
								U.S. Navy where he pilots an F/A-18.He was a crew member of
								Expedition 64, and served as a station systems flight engineer.
							</p>
						</div>
					</div>
				</section>

				{/* Desktop:Hero Image */}
				<section className="relative hidden lg:flex lg:min-h-[500px] lg:w-[40%]">
					<Image
						src="/crew/image-victor-glover.webp"
						layout="fill"
						objectFit="cover"
						alt="Pilot Victor Glover"
					/>
				</section>
			</main>

			{/* BG */}
			<Background type={Types.crew} />
		</div>
	);
}

export default Pilot;
