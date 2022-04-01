import { Flex, Center, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon, FaList } from "react-icons/fa";

export default function Header(props) {
	const colorModeconfig = {
		initialColorMode: "dark",
		useSystemColorMode: false,
	};
	const { colorMode, toggleColorMode } = useColorMode({
		config: colorModeconfig,
	});
	return (
		<Flex minHeight={10} justifyContent="flex-end" p={5}>
			<Center display="flex" justifyContent="space-evenly">
				<IconButton
					icon={<FaList />}
					isRound={true}
					marginLeft={3}
					onClick={() => {
						props.sidebarOpen
							? props.setSidebarOpen(false)
							: props.setSidebarOpen(true);
					}}
				/>
				<IconButton
					icon={colorMode === "dark" ? <FaMoon /> : <FaSun />}
					isRound={true}
					marginLeft={3}
					onClick={toggleColorMode}
				/>
			</Center>
		</Flex>
	);
}
