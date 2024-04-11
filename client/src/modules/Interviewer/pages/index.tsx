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
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Button,
} from "@chakra-ui/react";
import { Layout } from "@modules/common";
import { UploadImage } from "@modules/forms/components/Form/FormBuilder/uploadImage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { AiInterviewer } from "../components/aiInterviewer";

export function Interviewer() {
  const { assessmentId } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const { control, setValue } = useForm();

  return (
    <Layout>
      <Container
        id="how_it_works"
        p={{ base: 3, lg: 16 }}
        height={{ base: "auto", lg: "auto" }}
        maxW={"full"}
        bgSize="contain"
        bgPosition="center"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack>
          <Box flex="1" py={5} textAlign={"center"}>
            <Heading
              display="flex"
              justifyContent="center"
              textAlign="center"
              height={"10vh"}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              <Text
                bgGradient="linear-gradient(to right, #8172fd, #c0afff)"
                bgClip="text"
              >
                NextGen Interview
              </Text>
              &nbsp; / Experience
            </Heading>
          </Box>

          <Tabs isFitted variant="enclosed" borderColor="#9b8ef2">
            <TabList mb="1em">
              <Tab color="#8172fd">Initial Assessment</Tab>
              <Tab color="#8172fd">Resume Upload</Tab>
              <Tab color="#8172fd">AI Interview</Tab>
            </TabList>
            <TabPanels>
              <TabPanel height="60vh">
                <Center
                  bg={useColorModeValue("#dbceff", "purple.200")}
                  rounded="2xl"
                  shadow="lg"
                  p={4}
                  w={"full"}
                >
                  <Box display={"flex"} flexDirection={"column"} py={16}>
                    <Text fontSize="2xl" fontWeight={500}>
                      {" "}
                      General Instructions before attempting{" "}
                    </Text>
                    <Text>
                      1. Please ensure you have a stable internet connection
                    </Text>
                    <Text>
                      2. Please ensure you have a working camera and microphone
                    </Text>
                    <Text>3. Please ensure you are in a quiet environment</Text>
                    <Text>4. Please ensure you are well lit and visible</Text>
                    <Text>5. Please ensure you are dressed appropriately</Text>
                    <Text>6. Please ensure you have a pen and paper</Text>
                    <Link to={`/forms/forms-response/${assessmentId}`}>
                      <Button mt={5}>Start Assessment</Button>
                    </Link>
                  </Box>
                </Center>
              </TabPanel>
              <TabPanel height="auto">
                <UploadImage
                  dropzoneText="Upload Your Resume (PDF Upto 6MB)"
                  control={control}
                  name={"resume"}
                  setOpenModal={setOpenModal}
                  setValue={setValue}
                />
              </TabPanel>
              <TabPanel minHeight="60vh">
                <AiInterviewer />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Container>
    </Layout>
  );
}
