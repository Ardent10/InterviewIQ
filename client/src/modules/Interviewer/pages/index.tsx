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
} from "@chakra-ui/react";
import { Layout } from "@modules/common";
import { UploadImage } from "@modules/forms/components/Form/FormBuilder/uploadImage";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function Interviewer() {
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
                Unique Design
              </Text>
              &nbsp; / Templates
            </Heading>
          </Box>

          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab>Initial Test</Tab>
              <Tab>Resume Upload</Tab>
              <Tab>AI Interview</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>Three</p>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <UploadImage
            dropzoneText="Upload Your Resume (PDF Upto 6MB)"
            control={control}
            name={"resume"}
            setOpenModal={setOpenModal}
            setValue={setValue}
          />
        </Stack>
      </Container>
    </Layout>
  );
}
