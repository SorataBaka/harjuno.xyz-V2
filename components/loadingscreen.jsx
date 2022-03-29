import { Flex, Center, Heading, Fade } from "@chakra-ui/react";
export default function LoadingScreen(props) {
	return (
		<>
			<Fade in={props.isOpen}>
				<Flex
					alignContent="center"
					justifyContent="center"
					m={0}
					p={0}
					h="100vh"
				>
					<Center>
						<Heading>Christian Harjuno</Heading>
					</Center>
				</Flex>
			</Fade>
		</>
	);
}
