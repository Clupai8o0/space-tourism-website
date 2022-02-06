import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

//* components
import Nav from "../components/Nav";
import DestinationNav from "../components/DestinationNav";

//* data
import { destinationsData, IDestinations } from "../helper/data";

enum Destinations {
	moon = "Moon",
	mars = "Mars",
	europa = "Europa",
	titan = "Jupiter",
}

function Destination() {
	//* data
	const { moon, mars, europa, titan } = destinationsData();

	//* states
	const [destination, setDestination] = useState<Destinations>(
		Destinations.moon
	); // default destination
	const [data, setData] = useState<IDestinations>(moon); // data to render

	//* router
	const router = useRouter();

	//* when destination changes
  //* data to render changes
  // TODO: add animations
	useEffect(() => {
		switch (destination) {
			case Destinations.moon:
				setData(moon);
				break;
			case Destinations.mars:
				setData(mars);
				break;
			case Destinations.europa:
				setData(europa);
				break;
			case Destinations.titan:
				setData(titan);
				break;
		}
	}, [destination]);

	return (
		<div>
			<header>
				<Nav />
			</header>

			<main>
				<div>
					<h5>
						<span>01</span> Pick your destination
					</h5>
					<Image src={data.images.webp} width="600" height="600" />
				</div>
				<div>
					<DestinationNav destination={destination} />

					<h1>{data.name}</h1>
					<p>{data.description}</p>

					<hr />

					<div>
            {/* FIXME: must be all caps */}
            {/* distance */}
						<div>
							<span>Avg. Distance</span>
							<h3>{data.distance}</h3>
						</div>

            {/* time */}
						<div>
							<span>Est. Travel Time</span>
							<h3>{data.travel}</h3>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Destination;
