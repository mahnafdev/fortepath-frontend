import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
	applicationName: "FortePath",
	title: "FortePath",
	description: "",
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
			</body>
		</html>
	);
}
