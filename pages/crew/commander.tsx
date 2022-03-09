import Image from "next/image";
import React from "react";

//* components
import Background from "../../components/Background";
import CrewNav from "../../components/CrewNav";
import Header from "../../components/Header";
import Nav from "../../components/Nav";

//* constants
import { Types } from "../../types";

function Commander() {
	return (
		<div className="container">
			<Header />
			<Nav />

			<main className="container lg:mt-12 lg:flex lg:items-center">
				<section className="lg:w-[50%] lg:px-20">
					<div className="mb-8 sm:my-12 sm:pl-12 md:text-left lg:mb-20 lg:mt-0">
						<h5>
							<span className="font-bold text-gray-600">02</span> Meet your crew
						</h5>
					</div>

					<section className="relative h-60 w-full sm:h-80 lg:hidden">
						<Image
							src="/crew/image-douglas-hurley.webp"
							layout="fill"
							objectFit="contain"
							alt="Commander Douglas Hurley"
						/>
					</section>

					<div className="flex w-full justify-center md:hidden">
						<hr className="w-[327px] border-t border-[#383B4B]" />
					</div>

					<div className="flex flex-col items-center lg:flex-row lg:pl-10">
						<div className="md:hidden">
							<CrewNav />
						</div>

						<div className="lg:text-left">
							<h5 className="font-serif tracking-tight opacity-50">
								Commander
							</h5>
							<h3 className="mb-4 sm:my-4 leading-[64px]">Douglas Hurley</h3>
							<p className="max-w-xs sm:max-w-md">
								Douglas Gerald Hurley is an American engineer, former Marine
								Corps pilot and former NASA astronaut. He launched into space
								for the third time as commander of Crew Dragon Demo-2.
							</p>
						</div>
					</div>
				</section>

				{/* Desktop:Hero Image */}
				<section className="relative hidden lg:flex lg:min-h-[600px] lg:w-[50%]">
					<Image
						src="/crew/image-douglas-hurley.webp"
						layout="fill"
						objectFit="contain"
						alt="Commander Douglas Hurley"
					/>
				</section>
			</main>

			{/* BG */}
			<Background type={Types.crew} />
		</div>
	);
}

export default Commander;
