import { Stack } from "@chakra-ui/react";
import { Footer } from "@modules/common";
import { useAppState } from "../../../store";
import { Features, Hero } from "../components";
import { HowItWorks } from "../components/HowItWorks";
import { useAuth } from "@modules/auth/hooks";
import { useEffect } from "react";

export function Home() {
  
  return (
    <>
      <Stack
        align={"center"}
        w="full"
        py={{ base: 8, md: 10 }}
        justify="center"
        textAlign="center"
      >
        <Hero />
        <HowItWorks />
        <Features />
      </Stack>
      <Footer />
    </>
  );
}
