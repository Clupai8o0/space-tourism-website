import Image from "next/image";
import React, { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { technologyData } from "../helper/data";

function Technology() {
	//* data
	const data = technologyData();

	//* state
	const [index, setIndex] = useState(0);

	return (
		<div>
			<Header />

			<header>
				<Nav />
			</header>

			<main>
				<div>
					<div>
						<h3>
							<span>03</span> Space launch 101
						</h3>
					</div>

					<div>
						<div>
							<span>1</span>
							<span>2</span>
							<span>3</span>
						</div>

						<div>
							<span>The Terminology</span>

							<h3>{data[index].name}</h3>
							<p>{data[index].description}</p>
						</div>
					</div>
				</div>
				<div>
					<Image src={data[index].images.portrait} width="400" height="800" />
				</div>
			</main>
		</div>
	);
}

export default Technology;
