import Image from "next/image";
import Link from "next/link";

export const TutorSidebar = () => {
	return (
		<aside className="min-h-screen h-full bg-zinc-900/60 overflow-x-auto px-8 py-12">
			{/* Logo */}
			<div className="flex items-center gap-3 mb-16">
				<Link href="/">
					<Image
						src="/logo.png"
						alt="Logo"
						width={48}
						height={48}
					/>
				</Link>
				<h4 className="text-3xl font-bold text-primary-100">Dashboard</h4>
			</div>
			{/* Links */}
			<div className="flex flex-col gap-y-3 text-xl tracking-wide">
				<Link
					// @ts-expect-error route will be created
					href="/dashboard/tutor"
					className="pl-3 -ml-3 border-l border-l-transparent hover:border-l-primary-500 transition-colors"
				>
					Dashboard
				</Link>
				<Link
					// @ts-expect-error route will be created
					href="/dashboard/tutor/profile"
					className="pl-3 -ml-3 border-l border-l-transparent hover:border-l-primary-500 transition-colors"
				>
					Profile
				</Link>
				<Link
					// @ts-expect-error route will be created
					href="/dashboard/tutor/bookings"
					className="pl-3 -ml-3 border-l border-l-transparent hover:border-l-primary-500 transition-colors"
				>
					Sessions
				</Link>
			</div>
		</aside>
	);
};
