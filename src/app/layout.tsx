import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
	applicationName: "FortePath",
	title: "FortePath",
	alternates: {
		canonical: "https://fortepath.vercel.app",
		languages: {
			en: "https://fortepath.vercel.app",
		},
	},
	creator: "Muhammad Ahnaf",
	formatDetection: { url: true, email: true, telephone: true },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`bg-background text-foreground antialiased scroll-smooth`}>
				<header>
					<Navbar />
				</header>
				{children}
				<Footer />
			</body>
		</html>
	);
}
