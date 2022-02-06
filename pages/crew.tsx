import Image from "next/image";
import React, { useState } from "react";

//* data
import { crewData } from "../helper/data";

//* components
import Header from "../components/Header";
import Nav from "../components/Nav";

function Crew() {
	//* data
	const data = crewData();

	//* state
	const [index, setIndex] = useState(0);

	return (
		<div>
			<Header />

			<header>
				<Nav />
			</header>

			<main>
				{/* Heading */}
				<div>
					<h5>
						<span>02</span> Meet your crew
					</h5>
				</div>

				{/* Crew info */}
				<div>
					<h4>{data[index].role}</h4>
					<h3>{data[index].name}</h3>
					<p>{data[index].bio}</p>
				</div>

				{/* Nav cirles */}
				<div>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</main>

			<div>
				<Image src={data[index].images.webp} width="600" height="600" />
			</div>
		</div>
	);
}

export default Crew;
