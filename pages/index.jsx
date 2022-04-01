import {
	Heading,
	Flex,
	Center,
	HStack,
	VStack,
	StackDivider,
} from "@chakra-ui/react";
const githubAuth = process.env.GITHUB_AUTH;
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
				<HStack flexDir="row" divider={<StackDivider />} spacing={10}>
					<Heading marginBottom={10}>Activity</Heading>
					<VStack
						overflowY="scroll"
						maxH={"70%"}
						backgroundColor="gray.900"
						borderRadius={10}
						padding={5}
					>
						{props.activitydata.map((item, index) => {
							return (
								<Flex
									key={index}
									backgroundColor="gray.700"
									flexDir="row"
									w={"100%"}
									padding={10}
									borderRadius={10}
								>
									<Heading size="xs">{item.repository.name}</Heading>
								</Flex>
							);
						})}
					</VStack>
				</HStack>
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
