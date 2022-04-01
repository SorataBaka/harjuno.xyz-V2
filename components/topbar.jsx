import { Flex, Button, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Collapse } from "@chakra-ui/react";
export default function Topbar(props) {
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
			display: "Activity",
			pageNumber: "page4",
		},
		{
			display: "Tools",
			pageNumber: "page5",
		},
		{
			display: "Contact Me",
			pageNumber: "page6",
		},
	];
	const router = useRouter();
	return (
		<Collapse in={props.sidebarOpen} animateOpacity unmountOnExit={true}>
			<Flex
				minHeight={10}
				justifyContent="center"
				p={5}
				display={props.sidebarOpen ? "block" : "none"}
				// backgroundColor="gray.900"
			>
				<Center
					display="flex"
					justifyContent="space-evenly"
					flexDir={props.isMobile ? "column" : "row"}
				>
					{headerButton.map((button) => (
						<Button
							variant="ghost"
							key={button.pageNumber}
							cursor="pointer"
							size={props.isMobile ? "lg" : "sm"}
							ml={2}
							width={props.isMobile ? "100%" : "10%"}
							onClick={() => {
								// Check if the ref exists in the current context
								if (props.refList[button.pageNumber].current !== null) {
									return props.refList[
										button.pageNumber
									].current.scrollIntoView({
										behavior: "smooth",
									});
								}
								router.push("/");
							}}
						>
							{button.display}
						</Button>
					))}
				</Center>
			</Flex>
		</Collapse>
	);
}
