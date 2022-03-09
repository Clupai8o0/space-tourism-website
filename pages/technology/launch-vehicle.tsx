import Image from "next/image";
import React from "react";
import Background from "../../components/Background";

//* components
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import TechnologyNav from "../../components/TechnologyNav";
import { Types } from "../../types";

function LaunchVehicle() {
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
							src="/technology/image-launch-vehicle-landscape.jpg"
							layout="fill"
							objectFit="cover"
							alt="Launch vehicle hero"
						/>
					</section>

					<div className="flex flex-col items-center lg:flex-row">
						<TechnologyNav />

						<div className="lg:w-3/4 lg:text-left">
							<span className="subheading-2 my-4">The terminology...</span>
							<h3 className="my-4 sm:my-8">Launch vehicle</h3>
							<p className="max-w-xs sm:max-w-md">
								A launch vehicle or carrier rocket is a rocket-propelled vehicle
								used to carry a payload from Earth's surface to space, usually
								to Earth orbit or beyond. Our WEB-X carrier rocket is the most
								powerful in operation. Standing 150 metres tall, it's quite an
								awe-inspiring sight on the launch pad!
							</p>
						</div>
					</div>
				</section>

				{/* Desktop:Hero Image */}
				<section className="relative hidden lg:flex lg:min-h-[500px] lg:w-[40%]">
					<Image
						src="/technology/image-launch-vehicle-portrait.jpg"
						layout="fill"
						objectFit="cover"
						alt="Launch vehicle hero"
					/>
				</section>
			</main>

			{/* BG */}
			<Background type={Types.technology} />
		</div>
	);
}

export default LaunchVehicle;
