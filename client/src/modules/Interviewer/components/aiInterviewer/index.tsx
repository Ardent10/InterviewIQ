import {
  AspectRatio,
  Box,
  Button,
  Center,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { SpeechToText } from "../speechToText";
import { useState } from "react";
import Webcam from "react-webcam";
import { useAIModels } from "@modules/Interviewer/hooks";

export function AiInterviewer() {
  const [webcamPermission, setWebcamPermission] = useState(false);

  const handleWebcamPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      // If permission granted
      setWebcamPermission(true);
    } catch (error) {
      // Handle permission denied or error
      console.error("Error accessing webcam:", error);
    }
  };

  return (
    <Center
      bg={useColorModeValue("#dbceff", "purple.200")}
      rounded="xl"
      shadow="xl"
      p={8}
      w={"full"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignContent={"center"}
    >
      {webcamPermission ? (
        <AspectRatio w={"full"} ratio={16 / 9} mb={4}>
          <Webcam style={{ borderRadius: "10px" }} />
        </AspectRatio>
      ) : (
        <AspectRatio
          w={"full"}
          ratio={16 / 9}
          mb={4}
          bg={"black"}
          rounded={"xl"}
        >
          <Box flexDirection={"column"} textAlign="center" gap={5}>
            <Text fontSize={"2xl"} fontWeight={500} color={"white"}>
              Click below to allow access to your webcam:
            </Text>
            <Button onClick={handleWebcamPermission}>
              Allow Webcam Access
            </Button>
          </Box>
        </AspectRatio>
      )}

      <SpeechToText webcamPermission={webcamPermission} />
    </Center>
  );
}
