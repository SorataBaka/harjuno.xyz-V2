import {
	Flex,
	Center,
	Button,
	IconButton,
	Spacer,
	Heading,
	useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Header(props) {
	const router = useRouter();
	const { colorMode, toggleColorMode } = useColorMode();
	useEffect(() => {
		props.refList.page1.current.scrollIntoView({ behavior: "smooth" });
	});
	return (
		<Flex minHeight={10} justifyContent="flex-end" p={5}>
			<Center display="flex" justifyContent="space-evenly">
				<Heading
					cursor="pointer"
					size="xs"
					ml={2}
					onClick={() => {
						// Check if the ref exists in the current context
						if (props.refList.page1.current !== null) {
							return props.refList.page1.current.scrollIntoView({
								behavior: "smooth",
							});
						}
						router.push("/");
					}}
				>
					Page 1
				</Heading>
				<Heading
					cursor="pointer"
					size="xs"
					ml={2}
					onClick={() => {
						if (props.refList.page2.current !== null) {
							return props.refList.page2.current.scrollIntoView({
								behavior: "smooth",
							});
						}
						props.refList.page2.current.scrollIntoView({ behavior: "smooth" });
					}}
				>
					Page 2
				</Heading>
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
