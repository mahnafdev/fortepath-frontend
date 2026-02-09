import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";

export default function Home() {
	return (
		<main className="px-80 py-28">
			<Hero />
			<Features />
			<Process />
		</main>
	);
}
