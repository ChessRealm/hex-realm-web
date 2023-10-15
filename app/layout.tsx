import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

let description = "Hex Realm - Coming soonn";
let ogimage = "https://www.hexrealm.com/og.png";
let sitename = "hexrealm.com";
let title = "Hex Realm";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content={description!} />
				<meta property="og:site_name" content={sitename} />
				<meta property="og:description" content={description} />
				<meta property="og:title" content={title} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta property="og:image" content={ogimage} />
				<meta name="twitter:image" content={ogimage} />
			</Head>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
