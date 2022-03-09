import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const TechnologyNav = () => {
	//* route
	const router = useRouter();
	const currentRoute = router.pathname.split("/")[2];

	return (
		<aside className="w-full lg:w-1/4">
			<nav>
				<ul className="my-8 flex w-full justify-center space-x-4 sm:my-12 lg:flex-col lg:space-x-0 lg:space-y-8 lg:pl-12">
					<li>
						<Link href="/technology/launch-vehicle">
							<a
								className={`nav-link-technology ${
									currentRoute === "launch-vehicle"
										? "bg-white text-black"
										: "text-white"
								}`}
							>
								1
							</a>
						</Link>
					</li>
					<li>
						<Link href="/technology/spaceport">
							<a
								className={`nav-link-technology ${
									currentRoute === "spaceport"
										? "bg-white text-black"
										: "text-white"
								}`}
							>
								2
							</a>
						</Link>
					</li>
					<li>
						<Link href="/technology/space-capsule">
							<a
								className={`nav-link-technology ${
									currentRoute === "space-capsule"
										? "bg-white text-black"
										: "text-white"
								}`}
							>
								3
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default TechnologyNav;
