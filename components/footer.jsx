import { Flex, Center, Heading, Footer, Text } from "@chakra-ui/react";
export default function FooterComponent() {
	return (
		<Flex flexDir="column" h={10} alignItems="center" justifyContent="center">
			<Center>
				<Text fontSize={10}>
					Copyright © 2022 All Right Reserved. Christian Harjuno. Powered by
					Next.Js and Vercel
				</Text>
			</Center>
		</Flex>
	);
}
