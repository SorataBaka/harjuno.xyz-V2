import Topbar from "./topbar.jsx";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Head from "./head.jsx";
import { useRef, useState, useEffect } from "react";
import React from "react";
import { Collapse, Flex, Heading } from "@chakra-ui/react";
export default function Layout({ children }) {
	// const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
	const references = {
		page1: useRef(null),
		page2: useRef(null),
		page3: useRef(null),
		page4: useRef(null),
		page5: useRef(null),
	};
	const [isMobile, setIsMobile] = useState(false);
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	setTimeout(() => {
		setIsLoading(false);
	}, 2000);
	useEffect(() => {
		window.innerWidth > 950 ? setIsMobile(false) : setIsMobile(true);
		window.addEventListener("resize", () => {
			window.innerWidth > 950 ? setIsMobile(false) : setIsMobile(true);
		});
	}, []);
	return (
		<>
			<Head />
			<Collapse in={isLoading} animateOpacity unmountOnExit={true}>
				<Flex
					alignItems="center"
					justifyContent="center"
					h="100vh"
					w="99vw"
					position="absolute"
					zIndex={1}
					backgroundColor="gray.900"
				>
					<Heading>Christian Harjuno</Heading>
				</Flex>
			</Collapse>
			<Topbar
				refList={references}
				sidebarOpen={sidebarOpen}
				setSidebarOpen={setSidebarOpen}
				isMobile={isMobile}
			/>
			{/* <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
					<DrawerBody>
						<p>Some contents...</p>
						<p>Some contents...</p>
						<p>Some contents...</p>
					</DrawerBody>
				</DrawerContent>
			</Drawer> */}
			<Header
				refList={references}
				sidebarOpen={sidebarOpen}
				setSidebarOpen={setSidebarOpen}
				isMobile={isMobile}
			/>
			{React.cloneElement(children, {
				isMobile: isMobile,
				sidebar: { sidebarOpen, setSidebarOpen },
				references: references,
			})}
			<Footer />
		</>
	);
}
