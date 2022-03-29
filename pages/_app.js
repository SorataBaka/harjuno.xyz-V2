import "../styles/globals.css";
import Layout from "../components/layout.jsx";

import { ChakraProvider, Heading, Flex, Collapse } from "@chakra-ui/react";
import { useState, useEffect } from "react";
function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
