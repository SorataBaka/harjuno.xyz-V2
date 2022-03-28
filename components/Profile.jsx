import { Flex, Heading, Text, Button, VStack } from "@chakra-ui/react";
import Image from "next/image";
export function ProfilePictureHeading(props) {
	return (
		<>
			<VStack>
				<Flex position="relative" bottom={props.isMobile ? 0 : 5}>
					<Image
						src={"/profile.jpg"}
						width={200}
						height={200}
						alt="Christian Harjuno Profile Picture"
						style={{ borderRadius: "100%" }}
					/>
				</Flex>
				<Heading size={props.isMobile ? "md" : "lg"}>Christian Harjuno</Heading>
				<Heading size={props.isMobile ? "1px" : "md"} mt={2}>
					Discord Bot and Web Developer
				</Heading>
			</VStack>
		</>
	);
}
export function Description() {
	return (
		<>
			<VStack spacing={5}>
				<Text minWidth={100} maxWidth={450} textAlign="justify">
					Hi! Im Chris. I am an aspiring software engineer and web developer
					currently attending Bina Nusantara University pursuing a Computer
					Science Degree. I usually spend my time creating discord bots,
					websites, or automating tasks with tools such as Docker to make life a
					bit less tedious.
				</Text>
				<Text minWidth={100} maxWidth={450} textAlign="justify">
					Im always curious and actively seeking new challenges to learn and
					expand my knowledge. If you have any question, or would like to do
					projects with me, contact me from the button below!
				</Text>
				<Button variant="solid">Contact Me</Button>
			</VStack>
		</>
	);
}
