import Head from "next/head";
export default function HeadComponent() {
	return (
		<Head>
			<title>Christian Harjuno</title>
			<meta
				name="description"
				content="Amateur Web/Software Developer who is currently attending college for a Computer Science degree at Bina Nusantara University. Currently active developing Discord Bots for various community servers."
			/>
			<link rel="icon" href="/favicon.ico" />

			<meta name="viewport" content="width=device-width, initial-scale=1" />
			{/* Add meta tags for google */}
			<meta name="googlebot" content="index, follow" />
			<meta name="robots" content="index, follow" />
			<meta name="google" content="nopagereadaloud" />
			<meta name="title" content="Christian Harjuno" />

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://harjuno.xyz//" />
			<meta property="og:title" content="Christian Harjuno" />
			<meta
				property="og:description"
				content="Amateur Web/Software Developer who is currently attending college for a Computer Science degree at Bina Nusantara University. Currently active developing Discord Bots for various community servers. "
			/>
			<meta property="og:image" content="/api/assets/snapshot.png" />

			<meta name="theme-color" content="#000343" />
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://harjuno.xyz//" />
			<meta
				property="twitter:title"
				content="Christian Harjuno's Personal Website"
			/>
			<meta
				property="twitter:description"
				content="Amateur Web/Software Developer who is currently attending college for a Computer Science degree at Bina Nusantara University. Currently active developing Discord Bots for various community servers. "
			/>
			<meta property="twitter:image" content="/api/assets/snapshot.png" />
		</Head>
	);
}
