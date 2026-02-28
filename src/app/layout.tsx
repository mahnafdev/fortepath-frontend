import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

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
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`bg-background text-foreground scroll-smooth antialiased`}>
				{children}
			</body>
		</html>
	);
}
