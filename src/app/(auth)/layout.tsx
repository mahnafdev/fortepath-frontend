import { Navbar } from "@/components/layout/Navbar";
import { ReactNode } from "react";

export default function AuthLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<>
			<header>
				<Navbar />
			</header>
			{children}
		</>
	);
}
