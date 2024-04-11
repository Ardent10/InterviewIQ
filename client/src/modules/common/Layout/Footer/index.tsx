"use client";

import {
  Box,
  Container,
  IconButton,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { Logo } from "../Logo";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export function Footer() {
  return (
    <Box
      // bg={useColorModeValue("gray.50", "gray.900")}
      // color={useColorModeValue("gray.700", "gray.200")}
      position="relative"
    >
      <Image
        src="/assets/footer/footer.svg"
        alt="Footer Background"
        transform="rotateX(180deg)"
        position="absolute"
        bottom={0}
        w="100%"
        h="100%"
        objectFit="cover"
        className="footer-bg" // Add this class
      />
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
          zIndex={2}
        >
          <Stack spacing={6}>
            <Box>
              <Logo />
            </Box>
            <Text fontSize={"sm"}>
              © {new Date().getFullYear()} InterviewIQ. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"YouTube"} href={"#"}>
                <AiFillGithub />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <BsLinkedin />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={"#"}>
              About us
            </Box>
            <Box as="a" href={"#"}>
              Blog
            </Box>
            <Box as="a" href={"#"}>
              Contact us
            </Box>
            <Box as="a" href={"#"}>
              Pricing
            </Box>
            <Box as="a" href={"#"}>
              Testimonials
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={"#"}>
              Help Center
            </Box>
            <Box as="a" href={"#"}>
              Terms of Service
            </Box>
            <Box as="a" href={"#"}>
              Legal
            </Box>
            <Box as="a" href={"#"}>
              Privacy Policy
            </Box>
            <Box as="a" href={"#"}>
              Satus
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.200", "whiteAlpha.600")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
                _placeholder={{
                  color: useColorModeValue("whiteAlpha.700", "gray.500"),
                }}
              />
              <IconButton
                bg={useColorModeValue("purple.400", "purple.800")}
                color={"white"}
                _hover={{
                  bg: "purple.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
