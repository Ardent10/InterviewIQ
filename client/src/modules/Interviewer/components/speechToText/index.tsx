import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Stack, Text } from "@chakra-ui/react";
import { useAIModels } from "@modules/Interviewer/hooks";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useAppState } from "@store/index";
import { TextToSpeech } from "../systemSpeak";
import { Loader } from "@modules/common";

export function SpeechToText({
  webcamPermission,
}: {
  webcamPermission: boolean;
}) {
  const [state] = useAppState();
  const { GeminiPro, loading } = useAIModels();
  const {
    finalTranscript,
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return (
      <Text fontSize={"2xl"} fontWeight={500}>
        Browser doesn't support speech recognition.
      </Text>
    );
  }

  useEffect(() => {
    if (state?.promptResult) {
      TextToSpeech({
        text: state?.promptResult[state?.promptResult?.length - 1]?.result,
      });
    }
  }, [state.promptResult]);

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  const handleSubmit = async () => {
    try {
      await GeminiPro(finalTranscript);
    } catch (error) {
      console.error("An error occurred while processing the request:", error);
    }
  };

  return (
    <Box w="full">
      <Text textAlign={"center"} fontSize={"2xl"} fontWeight={600} pb={4}>
        Microphone:{" "}
        {listening ? (
          <span style={{ color: "green" }}>ON</span>
        ) : (
          <span style={{ color: "red" }}>OFF</span>
        )}
      </Text>
      <Stack
        direction="row"
        spacing={4}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button isDisabled={!webcamPermission} onClick={startListening}>
          Start
        </Button>
        <Button
          isDisabled={!webcamPermission}
          onClick={SpeechRecognition.stopListening}
        >
          Stop
        </Button>
        <Button isDisabled={!webcamPermission} onClick={resetTranscript}>
          Reset
        </Button>
      </Stack>
      <Box border={"1px solid black"} borderRadius={"10px"} p={4} my={4}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text fontWeight={600}>Prompt: {" " + transcript}</Text>
          <IconButton aria-label={"promptBtn"} onClick={handleSubmit}>
            <img src="/assets/prompt.svg" alt="prompt" height={30} width={30} />
          </IconButton>
        </Box>
        {state?.promptResult.map((chat: any, index: number) => (
          <Box display={"flex"} flexDirection={"column"} key={index}>
            <Text fontWeight={600}>You: {chat?.prompt}</Text>
            {loading ? (
              <Loader />
            ) : (
              <Text fontWeight={600}>Response: {chat?.result}</Text>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
