import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ReactNode } from "react";

export default function CommonLayout({
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
			<Footer />
		</>
	);
}
