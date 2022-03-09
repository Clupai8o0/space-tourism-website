import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CrewNav = () => {
	//* router
	const router = useRouter();
	const currentRoute = router.pathname.split("/")[2];

	return (
		<aside className="w-full lg:w-1/4">
			<nav>
				<ul className="my-8 flex w-full justify-center space-x-4 sm:my-12 lg:flex-col lg:space-x-0 lg:space-y-8 lg:pl-12">
					<li>
						<Link href="/crew/commander">
							<a
								className={`nav-link-crew ${
									currentRoute === "commander"
										? "opacity-100"
										: "opacity-20"
								}`}
                title="Go to commander"
							></a>
						</Link>
					</li>
					<li>
						<Link href="/crew/flight-engineer">
							<a
								className={`nav-link-crew ${
									currentRoute === "flight-engineer" ? "opacity-100" : "opacity-20"
								}`}
                title="Go to flight-engineer"
							></a>
						</Link>
					</li>
					<li>
						<Link href="/crew/mission-specialist">
							<a
								className={`nav-link-crew ${
									currentRoute === "mission-specialist"
										? "opacity-100"
										: "opacity-20"
								}`}
                title="Go to mission-specialist"
							></a>
						</Link>
					</li>
					<li>
						<Link href="/crew/pilot">
							<a
								className={`nav-link-crew ${
									currentRoute === "pilot"
										? "opacity-100"
										: "opacity-20"
								}`}
                title="Go to pilot"
							></a>
						</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default CrewNav;
