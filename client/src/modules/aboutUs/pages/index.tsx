import {
  AspectRatio,
  Box,
  Center,
  Container,
  Heading,
  Stack,
  useColorModeValue,
  Text,
  Image,
} from "@chakra-ui/react";
import { Layout } from "@modules/common";

export function AboutUs() {
  return (
    <Layout>
      <Container
        id="how_it_works"
        p={{ base: 3, lg: 16 }}
        maxW={"full"}
        bgSize="contain"
        bgPosition="center"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          maxW={{ base: "full", lg: "60vw" }}
          align={"center"}
          alignItems="center"
          justifyContent="center"
          spacing={8} // spacing between image sections
        >
          <Box flex="1" py={5} textAlign={"center"}>
            <Heading fontWeight={500}>Meet Our Team</Heading>
          </Box>
          <Center
            bg={useColorModeValue("#dbceff", "purple.200")}
            rounded="2xl"
            shadow="lg"
            p={10}
            w={"full"}
            gap={6}
          >
            <Stack display="flex" alignItems="center" justifyContent="center">
              <Image
                src="/assets/about/zakariya.jpg"
                alt="Team Member 1"
                boxSize="200px"
                rounded="full"
                objectFit="cover"
              />
              <Text fontWeight={500}>Zakariya Khan</Text>
            </Stack>

            <Stack display="flex" alignItems="center" justifyContent="center">
              <Image
                src="/assets/about/shobit.jpg"
                alt="Team Member 2"
                boxSize="200px"
                rounded="full"
                objectFit="cover"
              />
              <Text fontWeight={500}>Shobit Jain</Text>
            </Stack>

            <Stack display="flex" alignItems="center" justifyContent="center">
              <Image
                src="/assets/about/tushar.jpg"
                alt="Tepatham Member 3"
                boxSize="200px"
                rounded="full"
                objectFit="cover"
              />
              <Text fontWeight={500}>Tushar Gupta</Text>
            </Stack>
          </Center>
          <Stack flex="1" py={5} textAlign={"center"} px={50}>
            <Text fontSize={{ base: 15, lg: 25 }}>
              Meet the brilliant minds behind InterviewIQ. Our diverse team of
              experts brings together a wealth of experience in AI, software
              development, and HR. With a shared passion for innovation, we're
              dedicated to revolutionizing the hiring process. Get to know us
              and discover how we're shaping the future of recruitment.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
}
