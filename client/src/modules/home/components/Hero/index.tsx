import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Navbar } from "@modules/common";

import { AiFillPlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <Stack
      id="Overview"
      w="full"
      height={"100vh"}
      justify="center"
      textAlign="center"
      bgImage={useColorModeValue(
        "url('/assets/hero/hero-bg.svg')",
        "url('/assets/hero/hero-bg-dark.svg')"
      )}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Box w={"full"} position="absolute" top={0} background="transparent">
        <Navbar />
      </Box>
      <Stack align={"center"} px={5} py={{ base: 8, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          maxW="3xl"
        >
          Transforming Interviews with{" "}
          <Text
            as={"span"}
            // bgGradient="linear(to-r, #6d63fc, #543FE0)"
            bgGradient="linear-gradient(to right, #8172fd, #c0afff)"
            bgClip="text"
          >
            InterviewIQ.
          </Text>{" "}
        </Heading>
        <Text color={useColorModeValue("gray.500", "#fff")} maxW={"4xl"}>
          Discover InterviewIQ, where cutting-edge technology meets hiring
          excellence. Craft bespoke forms effortlessly, harness the power of
          AI-driven resume screening, and engage candidates with our intelligent
          interviewer. Unleash the future of recruitment with InterviewIQ.
        </Text>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={{ base: "column", sm: "row" }}
        >
          <Link to="/forms">
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
              Get started
            </Button>
          </Link>
          <a href="#how_it_works">
            <Button
              rounded={"lg"}
              size={"lg"}
              fontWeight={"normal"}
              px={5}
              colorScheme="gray"
              bg={"transparent"}
              borderColor={"#6d63fc"} // Add the border color here
              borderWidth={"1px"} // Add the border width here
              _hover={{ transform: "scale(1.05)" }}
              leftIcon={<AiFillPlayCircle />}
            >
              How It Works
            </Button>
          </a>
        </Stack>
      </Stack>
    </Stack>
  );
};
