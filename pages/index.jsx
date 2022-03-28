import styles from "../styles/Home.module.css";
import { Heading, Flex, Center, Text } from "@chakra-ui/react";
import Image from "next/image";
export default function Home(props) {
	return (
		<>
			<Flex
				alignContent="center"
				justifyContent="center"
				m={0}
				p={0}
				h="100vh"
				ref={props.references.page1}
			>
				<Center flexDir={"column"}>
					<Flex position="relative" bottom={5}>
						<Image
							src={"/profile.jpg"}
							width={200}
							height={200}
							alt="Christian Harjuno Profile Picture"
							className="rounder-full"
							style={{ borderRadius: "100%" }}
						/>
					</Flex>
					<Heading>Christian Harjuno</Heading>
					<Heading size="xs" mt={2}>
						Discord Bot and Web Developer
					</Heading>
					<Text>Greetings! Im Chris. </Text>
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
