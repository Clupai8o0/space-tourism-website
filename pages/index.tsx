import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2">
			<Header />

			<header>
				<Nav />
			</header>

			{/* TODO: make sure to make component classes */}
			{/* TODO: make sure to make micro github commit */}
			<main>
				<h1 className="text-heading font-serif">So, you want to travel to </h1>
				Space <br />
				Let’s face it; if you want to go to space, you might as well genuinely
				go to outer space and not hover kind of on the edge of it. Well sit
				back, and relax because we’ll give you a truly out of this world
				experience! <br />
				Explore
			</main>
		</div>
	);
}
