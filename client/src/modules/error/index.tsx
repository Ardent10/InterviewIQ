import {
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";

export function Error404() {
  return (
    <Flex
      bgSize="contain"
      bgImage={"url('/assets/404.svg')"}
      w={"100vw"}
    >
      <Container maxWidth={"4xl"}>
        <Stack
          align={"center"}
          textAlign={"center"}
          spacing={{ base: 3, md: 5 }}
          py={{ base: 5, md: 10 }}
        >
          <Image src="/assets/404.jpg" width={"45%"} />
          <Heading
            display="flex"
            justifyContent="center"
            textAlign="center"
            height={"10vh"}
            fontSize={{ base: "1xl", sm: "1xl", md: "2xl", lg: "3xl" }}
          >
            <Text
              bgGradient="linear-gradient(to right, #8172fd, #c0afff)"
              bgClip="text"
            >
              Sorry the page you are looking for does not exist.
            </Text>
          </Heading>

          <a href="/">
            <Button
              rounded={"lg"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              color={"white"}
              colorScheme={"white"}
              bgGradient={"linear-gradient(to right, #8172fd, #c0afff)"}
              _hover={{ transform: "scale(1.05)" }}
            >
              Go Home
            </Button>
          </a>
        </Stack>
      </Container>
    </Flex>
  );
}
