import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
	const images = [
		{
			source: "/images/kid-elearning.jpg",
			label: "Kid E-Learning",
			marginTop: 2.5,
			hideInMobile: true,
		},
		{
			source: "/images/man-elearning.jpg",
			label: "Man Sessioning",
			marginTop: 0,
			hideInMobile: false,
		},
		{
			source: "/images/elearning-accessories.jpg",
			label: "E-Learning Accessories",
			marginTop: 2.5,
			hideInMobile: true,
		},
	];
	return (
		<section
			id="hero"
			className="flex flex-col items-center justify-center gap-y-10"
		>
			{/* Images */}
			<div className="flex items-start justify-center md:gap-3 lg:gap-5">
				{images.map((image, idx) => (
					<Image
						key={idx}
						src={image.source}
						alt={image.label}
						title={image.label}
						width={350}
						height={350}
						className={`border-3 border-primary-600 rounded-3xl ${image.hideInMobile && "max-md:hidden"}`}
						style={{
							marginTop: `${image.marginTop}rem`,
						}}
					/>
				))}
			</div>
			{/* Texts */}
			<div className="space-y-4 text-center">
				{/* Tagline */}
				<h1 className="text-5xl font-extrabold text-primary-200 leading-tight text-shadow-lg text-shadow-primary-600">
					Connect with Expert Tutors
					<br />
					Learn Anything
				</h1>
				{/* Subtext */}
				<p className="max-w-180 text-zinc-300 font-medium">
					FortePath is a smart platform that connects learners to expert tutors.
					Students can browse tutors and book sessions instantly. Tutors can track
					their sessions and attend them.
				</p>
			</div>
			{/* Buttons */}
			<div className="flex justify-center gap-4">
				<Link
					// @ts-expect-error href accepts string
					href="/tutors"
					target="_blank"
				>
					<Button
						variant="primary"
						className="bg-primary-500 text-xl hover:bg-primary-600 active:bg-primary-600 transition-all duration-200"
						size="lg"
					>
						Browse Tutors
					</Button>
				</Link>
				<Link
					// @ts-expect-error href accepts string
					href="/become-tutor"
					target="_blank"
				>
					<Button
						variant="outline"
						className="border-primary-500 text-primary-500 text-xl hover:bg-primary-500 active:bg-primary-500 hover:text-foreground active:text-foreground transition-all duration-200"
						size="lg"
					>
						Become a Tutor
					</Button>
				</Link>
			</div>
		</section>
	);
};
