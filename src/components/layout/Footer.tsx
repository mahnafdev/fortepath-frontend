import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="bg-zinc-950">
			<div className="px-80 py-20">
				<div className="grid gap-12 md:grid-cols-2">
					{/* Platform Info */}
					<div>
						{/* Logo & Title */}
						<div className="flex items-center gap-3">
							<Image
								src="/logo.png"
								alt="Logo"
								width={40}
								height={40}
							/>
							<h4 className="text-2xl font-semibold">FortePath</h4>
						</div>
						{/* Tagline */}
						<p className="mt-5 text-zinc-400 max-w-sm leading-relaxed">
							FortePath is a smart platform that connects learners to expert
							tutors.
						</p>
					</div>
					{/* Links */}
					<div className="md:text-right">
						<h4 className="font-semibold uppercase tracking-wider text-zinc-400 mb-3">
							Explore
						</h4>
						<div className="flex flex-col gap-2 md:items-end">
							<Link
								// @ts-expect-error href accepts string
								href="/tutors"
								className="text-zinc-300 hover:text-primary-400 transition duration-200"
							>
								Find Tutors
							</Link>
							<Link
								// @ts-expect-error href accepts string
								href="/categories"
								className="text-zinc-300 hover:text-primary-400 transition duration-200"
							>
								Categories
							</Link>
							<Link
								// @ts-expect-error href accepts string
								href="/become-tutor"
								className="text-zinc-300 hover:text-primary-400 transition duration-200"
							>
								Become a Tutor
							</Link>
							<Link
								// @ts-expect-error href accepts string
								href="/login"
								className="text-zinc-300 hover:text-primary-400 transition duration-200"
							>
								Sign In
							</Link>
						</div>
					</div>
				</div>
				{/* Copyright Text */}
				<div className="mt-8 border-t border-zinc-800 pt-8 text-center text-zinc-400">
					© {new Date().getFullYear()} FortePath. All rights reserved.
				</div>
			</div>
		</footer>
	);
};
