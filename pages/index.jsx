import styles from "../styles/Home.module.css";
import { Heading, Flex, Center, Box } from "@chakra-ui/react";
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
					<Box borderRadius={100}>
						<Image
							src={"/profile.jpg"}
							width={200}
							height={200}
							alt="Christian Harjuno Profile Picture"
						/>
					</Box>
					<Heading>Christian Harjuno</Heading>
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
					<Heading>Page 2</Heading>
				</Center>
			</Flex>
		</>
	);
}
