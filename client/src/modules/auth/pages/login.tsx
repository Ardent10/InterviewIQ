import React, { useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "@modules/common/Form";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LoginSchema } from "../../../utils/validations/validations";
import { OAuth } from "../components/OAuth";
import { useAuth } from "../hooks";
import { useAppState } from "@store/index";

export function Login() {
  const { Login, isLoading } = useAuth();
  const [state] = useAppState();
  const navigate = useNavigate();
  const defaultValues = {
    email: "john@mercforms.com",
    password: "Test@123",
  };

  useEffect(() => {
    if (!state.userProfile?.id) {
      navigate("/login");
    }
  }, [state.userProfile?.id]);

  const { handleSubmit, control } = useForm({
    defaultValues,
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    await Login({
      email: data.email,
      password: data.password,
    });
  });

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Stack
      minH={"100vh"}
      minW={"100vw"}
      direction={isMobile ? "column" : "row"}
      bgImage={"url('assets/auth/bg.svg')"}
      bgSize="cover"
      bgPosition={"left"}
      bgRepeat="no-repeat"
    >
      <Flex
        p={3}
        flex={{ base: 1, md: "50%" }}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Stack align={{ base: "center", lg: "left" }}>
          <Image
            alt={"Login Image"}
            objectFit={"contain"}
            src={"/logo.png"}
            width={100}
            height={100}
          />
        </Stack>
        <Stack
          spacing={4}
          pl={5}
          w={"full"}
          maxW={"md"}
          align={"center"}
          justify={"center"}
        >
          <Stack>
            <Heading
              textAlign={isMobile ? "center" : "left"}
              fontSize={isMobile ? "4xl" : "5xl"}
              color={"#6d63fc"}
            >
              Welcome Back
            </Heading>
            <Text textAlign={isMobile ? "center" : "left"}>
              Transform Interviews with Conversational AI.
            </Text>
          </Stack>

          <OAuth label="Login With Google" onClick={() => {}} />

          <form onSubmit={onSubmit}>
            <SimpleGrid minChildWidth="350px" spacing={4}>
              <Box>
                <InputField
                  name="email"
                  control={control}
                  type="email"
                  placeholder="Enter Email*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabel="Email"
                  required
                />
              </Box>
              <Box>
                <InputField
                  name="password"
                  control={control}
                  type="password"
                  placeholder="Enter Password*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabel="Password"
                  required
                />
              </Box>
              <Box>
                <Checkbox colorScheme="purple" name="remember" defaultChecked>
                  Remember me
                </Checkbox>
              </Box>
              <Box>
                <Button
                  type="submit"
                  w="full"
                  rounded={"xl"}
                  shadow={"2xl"}
                  bgGradient={"linear-gradient(to right, #8172fd, #c0afff)"}
                  color={"#fff"}
                  h={50}
                  _hover={{
                    border: "1px solid #6d63fc",
                    bg: "#fff",
                    transform: "translateY(-0.05em)",
                    color: "#000",
                  }}
                  isLoading={isLoading}
                  loadingText="Please Wait..."
                >
                  Login
                </Button>
              </Box>
            </SimpleGrid>
          </form>
          <Text color={"#6d63fc"}>
            Don't have an account? <Link to="/signup">Signup</Link>
          </Text>
        </Stack>
      </Flex>
      {!isMobile && (
        <Flex
          flex={{ base: 1, md: "50%" }}
          // bg={"#eae8ff"}
          direction={"column"}
        >
          <Image
            alt={"Login Image"}
            objectFit={"contain"}
            src={"/signup-hero.png"}
          />
        </Flex>
      )}
      <Text
        position={{ base: "fixed", lg: "absolute" }}
        bottom={0}
        right={0}
        fontSize={24}
        fontWeight={900}
        color={"#6d63fc"}
        textAlign="center"
        padding={4}
        backgroundColor="rgba(255, 255, 255, 0.7)"
      >
        InterviewIQ.
      </Text>
    </Stack>
  );
}
