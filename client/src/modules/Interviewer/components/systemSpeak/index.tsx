export function TextToSpeech({ text }: { text: string }) {
  // Checking if the Web Speech API is available or supported in the browser
  if ("speechSynthesis" in window) {
    // Create a new SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance(text);

    // Speak the text
    speechSynthesis.speak(utterance);
  } else {
    console.log("Speech synthesis not supported.");
  }
}
