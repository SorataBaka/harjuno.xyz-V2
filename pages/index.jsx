import {
	Heading,
	Flex,
	Center,
	HStack,
	VStack,
	StackDivider,
} from "@chakra-ui/react";
import { ProfilePictureHeading, Description } from "../components/Profile";
export default function Home(props) {
	const { isMobile } = props;
	return (
		<>
			<Flex
				alignContent="center"
				justifyContent="center"
				m={0}
				p={0}
				minHeight="100vh"
				ref={props.references.page1}
				padding={10}
			>
				<Center flexDir={"column"}>
					{!isMobile ? (
						<HStack
							divider={<StackDivider borderColor="gray.400" />}
							spacing={10}
						>
							<ProfilePictureHeading />
							<Description />
						</HStack>
					) : (
						<VStack divider={<StackDivider borderColor="gray.400" />}>
							<ProfilePictureHeading isMobile={isMobile} />
							<Description isMobile={isMobile} />
						</VStack>
					)}
				</Center>
			</Flex>
			<Flex
				alignContent="center"
				justifyContent="center"
				m={0}
				p={0}
				h="100vh"
				ref={props.references.page2}
			>
				<Center>
					<Heading>Projects</Heading>
				</Center>
			</Flex>
			<Flex
				alignContent="center"
				justifyContent="center"
				m={0}
				p={0}
				h="100vh"
				ref={props.references.page3}
			>
				<Center>
					<Heading>Achievements</Heading>
				</Center>
			</Flex>
			<Flex
				alignContent="center"
				justifyContent="center"
				m={0}
				p={0}
				h="100vh"
				ref={props.references.page4}
			>
				<Center>
					<Heading>Tools</Heading>
				</Center>
			</Flex>
			<Flex
				alignContent="center"
				justifyContent="center"
				m={0}
				p={0}
				h="100vh"
				ref={props.references.page5}
			>
				<Center>
					<Heading>Contact Me</Heading>
				</Center>
			</Flex>
		</>
	);
}
