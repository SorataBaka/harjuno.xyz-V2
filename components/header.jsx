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
	const headerButton = [
		{
			display: "About Me",
			pageNumber: "page1",
		},
		{
			display: "Projects",
			pageNumber: "page2",
		},
		{
			display: "Achievements",
			pageNumber: "page3",
		},
		{
			display: "Tools",
			pageNumber: "page4",
		},
		{
			display: "Contact Me",
			pageNumber: "page5",
		},
	];
	return (
		<Flex minHeight={10} justifyContent="flex-end" p={5}>
			<Center display="flex" justifyContent="space-evenly">
				{headerButton.map((button) => (
					<Heading
						key={button.pageNumber}
						cursor="pointer"
						size="xs"
						ml={2}
						onClick={() => {
							// Check if the ref exists in the current context
							if (props.refList[button.pageNumber].current !== null) {
								return props.refList[button.pageNumber].current.scrollIntoView({
									behavior: "smooth",
								});
							}
							router.push("/");
						}}
					>
						{button.display}
					</Heading>
				))}

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
