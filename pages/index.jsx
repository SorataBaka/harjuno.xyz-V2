import {
	Heading,
	Flex,
	Center,
	HStack,
	VStack,
	StackDivider,
	useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";
const githubAuth = process.env.GITHUB_AUTH;
import { ProfilePictureHeading, Description } from "../components/Profile";
import styles from "../styles/Home.module.css";

export default function Home(props) {
	const { isMobile } = props;
	const router = useRouter();
	let redirectToGithub = (url) => {
		router.replace(url);
	};
	const { colorMode } = useColorMode();
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
				<VStack alignContent="center" justifyContent="center">
					<Heading size="2xl" marginBottom={10}>
						Activity
					</Heading>
					<VStack
						overflowY="scroll"
						maxH={"60%"}
						backgroundColor={colorMode === "dark" ? "gray.900" : "gray.300"}
						borderRadius={10}
						padding={5}
						spacing={5}
					>
						{props.activitydata.map((item, index) => {
							return (
								<Flex
									key={index}
									backgroundColor={
										colorMode === "dark" ? "gray.700" : "gray.100"
									}
									flexDir="row"
									w={"100%"}
									padding={10}
									borderRadius={10}
									onClick={() => {
										redirectToGithub(item.repository.url);
									}}
									cursor="pointer"
								>
									<HStack justifyContent="flex-start" spacing={10}>
										<Image
											src={
												colorMode === "dark"
													? "/github-light.png"
													: "/github-dark.png"
											}
											width={50}
											height={50}
											alt="github logo"
										/>
										<VStack alignItems="flex-start" justifyContent="flex-start">
											<Heading size="md" maxWidth={"60%"} isTruncated>
												{item.repository.name}
											</Heading>
											<Heading size="xs">
												Last commit at:{" "}
												{new Date(item.occurredAt).toLocaleString()}
											</Heading>
										</VStack>
									</HStack>
								</Flex>
							);
						})}
					</VStack>
				</VStack>
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
					<Heading>Tools</Heading>
				</Center>
			</Flex>
			<Flex
				alignContent="center"
				justifyContent="center"
				m={0}
				p={0}
				h="100vh"
				ref={props.references.page6}
			>
				<Center>
					<Heading>Contact Me</Heading>
				</Center>
			</Flex>
		</>
	);
}

export async function getServerSideProps(context) {
	const data = await fetch("https://api.github.com/graphql", {
		method: "POST",
		body: JSON.stringify({
			query: `{
				viewer {
					contributionsCollection {
						repositoryContributions(first: 20) {
							nodes {
								occurredAt
								repository {
									name
									url
								}
							}
						}
					}
				}
			}
			`,
		}),
		headers: {
			Authorization: `${githubAuth}`,
			"Content-Type": "application/json",
		},
	});
	const jsonData = await data.json();
	return {
		props: {
			activitydata:
				jsonData.data.viewer.contributionsCollection.repositoryContributions
					.nodes,
		},
	};
}
