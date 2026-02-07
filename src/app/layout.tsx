import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	applicationName: "FortePath",
	title: "%s | FortePath",
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
				{children}
			</body>
		</html>
	);
}
