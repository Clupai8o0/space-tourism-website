import data from "../data.json";

export interface IDestinations {
	name: string;
	images: {
		png: string;
		webp: string;
	};
	description: string;
	distance: string;
	travel: string;
}

export interface ICrew {
	name: string;
	images: {
		png: string;
		webp: string;
	};
	role: string;
	bio: string;
}

export interface ITechnology {
	name: string;
	images: {
		portrait: string;
		landscape: string;
	};
	description: string;
}

export const destinationsData = () => {
	const destinations = data.destinations;

	//* locations
	const moon = destinations.filter((destination) => destination.name === "Moon")[0];
	const mars = destinations.filter((destination) => destination.name === "Mars")[0];
	const europa = destinations.filter((destination) => destination.name === "Europa")[0];
	const titan = destinations.filter((destination) => destination.name === "Titan")[0];

	return { moon, mars, europa, titan }
}
export const crewData = (): ICrew[] => data.crew;
export const technologyData = (): ITechnology[] => data.technology;
