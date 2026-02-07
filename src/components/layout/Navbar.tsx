import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

export const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 min-w-screen w-full px-80 py-4 shadow-md shadow-black/7.5">
			{/* Flex container */}
			<div className="flex items-center justify-between">
				{/* Logo */}
				<Link href="/">
					<div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-250">
						<Image
							src="/logo.png"
							alt="Logo"
							width={40}
							height={40}
						/>
						<h3 className="text-3xl font-bold tracking-wide group-hover:text-primary-300 transition-colors duration-250">
							FortePath
						</h3>
					</div>
				</Link>
				{/* Desktop Links */}
				<div className="flex items-center gap-3 text-lg">
					<Link
						href="/"
						className="px-3 py-1.5 rounded-lg hover:text-primary-400 hover:bg-primary-900/20 active:text-primary-500 active:bg-primary-900/25 transition-colors duration-250"
					>
						Home
					</Link>
					<Link
						// @ts-expect-error href accepts string
						href="/about"
						target="_blank"
						className="px-3 py-1.5 rounded-lg hover:text-primary-400 hover:bg-primary-900/20 active:text-primary-500 active:bg-primary-900/25 transition-colors duration-250"
					>
						About
					</Link>
					<Link
						// @ts-expect-error href accepts string
						href="/tutors"
						target="_blank"
						className="px-3 py-1.5 rounded-lg hover:text-primary-400 hover:bg-primary-900/20 active:text-primary-500 active:bg-primary-900/25 transition-colors duration-250"
					>
						Tutors
					</Link>
					<Link
						// @ts-expect-error href accepts string
						href="/categories"
						target="_blank"
						className="px-3 py-1.5 rounded-lg hover:text-primary-400 hover:bg-primary-900/20 active:text-primary-500 active:bg-primary-900/25 transition-colors duration-250"
					>
						Categories
					</Link>
				</div>
				{/* CTA Buttons */}
				<div className="flex items-center gap-3">
					<Link
						// @ts-expect-error href accepts string
						href="/auth/signup"
						className="rounded-full"
					>
						<Button
							variant="primary"
							className="bg-primary-600 text-[17px] active:opacity-90 transition-all duration-200"
							size="lg"
						>
							Sign Up
						</Button>
					</Link>
					<Link
						// @ts-expect-error href accepts string
						href="/auth/login"
						className="rounded-full"
					>
						<Button
							variant="outline"
							className="border-primary-600 text-primary-500 text-[17px] hover:bg-primary-600 active:bg-primary-600 hover:text-foreground active:text-foreground transition-all duration-200"
							size="lg"
						>
							Login
						</Button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
