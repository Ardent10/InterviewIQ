"use client";

import {
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Selector } from "@modules/common";
import { InputField } from "@modules/common/Form";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LocationJson from "@utils/SampleData/location.json";
import { dateTimeFormat } from "../../../utils/helperFunctions/globalDateTimeFormat";
import { SignupSchema } from "../../../utils/validations/validations";
import { OAuth } from "../components/OAuth";
import { useAuth } from "../hooks";
import { useEffect } from "react";
import { useAppState } from "@store/index";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const { Signup, isLoading } = useAuth();
  const [state] = useAppState();
  const navigate = useNavigate();

  const defaultValues = {
    username: "John.Doe",
    email: "david@interviewiq.com",
    password: "Test@123",
    confirm_password: "Test@123",
    location: "India",
    agree_tnc: true,
    dob: "",
    firstName: "",
    lastName: "",
  };

  useEffect(() => {
    if (state.userProfile?.id) {
      navigate("/");
    }
  }, [state.userProfile?.id]);

  const { handleSubmit, control } = useForm({
    defaultValues,
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    await Signup({
      username: data.username,
      email: data.email,
      password: data.password,
      location: data.location,
      dob: data.dob,
      firstName: data.firstName,
      lastName: data.lastName,
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
              Create Account
            </Heading>
            <Text textAlign={isMobile ? "center" : "left"}>
              Signup Today and NexGen Interview Experience.
            </Text>
          </Stack>

          <OAuth label="Signup With Google" onClick={() => {}} />

          <form onSubmit={onSubmit}>
            <Grid
              templateRows="repeat(4, 1fr)"
              templateColumns="repeat(4, 1fr)"
              gap={3.5}
            >
              <GridItem colSpan={2}>
                <InputField
                  name="firstName"
                  control={control}
                  type="text"
                  placeholder="Enter First Name*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabel="First Name"
                  required
                />
              </GridItem>
              <GridItem colSpan={2}>
                <InputField
                  name="lastName"
                  control={control}
                  type="text"
                  placeholder="Enter Last Name*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabel="Last Name"
                  required
                />
              </GridItem>
              <GridItem colSpan={2}>
                <InputField
                  name="username"
                  control={control}
                  type="text"
                  placeholder="Enter Username*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabel="Username"
                  required
                />
              </GridItem>
              <GridItem colSpan={2}>
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
              </GridItem>
              <GridItem colSpan={2}>
                <InputField
                  name="dob"
                  type="date"
                  control={control}
                  placeholder="Enter Your DOB*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabel="Date Of Birth"
                  required
                  maxDate={dateTimeFormat({
                    dateTime: new Date(),
                    format: "YYYY-MM-DD",
                  })}
                />
              </GridItem>
              <GridItem colSpan={2}>
                <Selector
                  name="location"
                  inputHeadingType="Bold"
                  control={control}
                  title="Location"
                  placeHolder="Select Location"
                  disable={false}
                  fontSize={14}
                  color="#4b4b4b"
                  data={LocationJson}
                  required={true}
                />
              </GridItem>
              <GridItem colSpan={2}>
                <InputField
                  name="password"
                  control={control}
                  type="password"
                  placeholder="Password*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabel="Password"
                  required
                />
              </GridItem>
              <GridItem colSpan={2}>
                <InputField
                  name="confirm_password"
                  control={control}
                  type="password"
                  placeholder="Password*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabel="Confirm Password"
                  required
                />
              </GridItem>
            </Grid>

            <Stack spacing={6} pt={2}>
              <Checkbox colorScheme="purple" name="agree_tnc" defaultChecked>
                I agree to Term & Conditions.
              </Checkbox>
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
                Create Account
              </Button>
            </Stack>
          </form>
          <Text>
            Already a user? <Link to="/login">Login</Link>
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
