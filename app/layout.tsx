import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const helveticaBold = localFont({
	src: "./fonts/HelveticaBold.otf",
	variable: "--font-helveticaBold",
});
const helveticaRegular = localFont({
	src: "./fonts/HelveticaRegular.otf",
	variable: "--font-helveticaRegular",
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Coterie",
	description:
		"Your AI-Powered Crypto Analysis Companion | nalyze contract addresses, track sentiment trends, and stay ahead in the crypto market.",
	openGraph: {
		title: "Coterie",
		description:
			"Your AI-Powered Crypto Analysis Companion | nalyze contract addresses, track sentiment trends, and stay ahead in the crypto market.",
		type: "website",
		locale: "en_US",
		images: [
			{
				url: "/coterie-banner.png",
				width: 800,
				height: 600,
				alt: "Coterie",
			},
		],
	},
	twitter: {
		title: "Coterie",
		description:
			"Your AI-Powered Crypto Analysis Companion | nalyze contract addresses, track sentiment trends, and stay ahead in the crypto market.",
		creator: "@Coterie",
		images: [
			{
				url: "/coterie-banner.png",
				width: 800,
				height: 600,
				alt: "Coterie",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${helveticaBold.variable} ${helveticaRegular.variable} ${inter.variable} antialiased bg-[#2B49BB]`}
			>
				{children}
			</body>
		</html>
	);
}
