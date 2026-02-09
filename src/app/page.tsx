import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";

export default function Home() {
	return (
		<main className="px-80 py-28">
			<Hero />
			<Features />
		</main>
	);
}
