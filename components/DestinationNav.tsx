import React from 'react';

enum Destinations {
	moon = "Moon",
	mars = "Mars",
	europa = "Europa",
	titan = "Jupiter",
}

function DestinationNav({ destination }: { destination: Destinations }) {
  return (
		<div>
			<ul>
				<li>Moon</li>
				<li>Mars</li>
				<li>Europa</li>
				<li>Titan</li>
			</ul>
		</div>
	);
}

export default DestinationNav;
