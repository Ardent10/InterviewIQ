import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export function SpeechToText({
  webcamPermission,
}: {
  webcamPermission: boolean;
}) {
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
  console.log("transcript", transcript);
  console.log("listening", listening);
  return (
    <Box>
      <Text fontSize={"2xl"} fontWeight={600}>
        Microphone:{" "}
        {listening ? (
          <span style={{ color: "green" }}>on</span>
        ) : (
          <span style={{ color: "red" }}>off</span>
        )}
      </Text>
      <Box gap={5} w={"full"}>
        <Button
          isDisabled={!webcamPermission}
          onClick={() => SpeechRecognition.startListening()}
        >
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
      </Box>
      <Text>
        Transcription: <br />
        {transcript}
      </Text>
      <Text>
        Final Transcription: <br />
        {finalTranscript}
      </Text>
    </Box>
  );
}
