import { GoogleGenerativeAI } from "@google/generative-ai";
import { useAppState } from "@store/index";
import { useState } from "react";

export function useAIModels() {
  const [state, dispatch] = useAppState();
  const [loading, setLoading] = useState<boolean>(false);

  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  async function GeminiPro(prompt: string) {
    try {
      setLoading(true);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContentStream(prompt);
      let text = "";
      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        text += chunkText;

        dispatch({
          type: "setPromptResult",
          payload: [...state.promptResult, { prompt: prompt, result: text }],
        });
        setLoading(false);
      }
      return text;
    } catch (error) {
      dispatch({
        type: "setToggleSnackbar",
        payload: {
          open: true,
          severity: "error",
          message: "An error occurred while generating the prompt.",
        },
      });
    } finally {
      setLoading(false);
    }
  }

  return {
    GeminiPro,
    loading,
  };
}
