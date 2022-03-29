import "../styles/globals.css";
import Layout from "../components/layout.jsx";

import { ChakraProvider } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import LoadingScreen from "../components/loadingScreen.jsx";
function MyApp({ Component, pageProps }) {
	const [isLoading, setIsLoading] = useState(true);
	setTimeout(() => {
		setIsLoading(false);
	}, 1000);
	if (isLoading) {
		return <LoadingScreen isOpen={isLoading} />;
	}
	return (
		<ChakraProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
