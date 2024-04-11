import { Container, Stack } from "@chakra-ui/react";
import { NewFormsTabs } from "../components";

export const NewForm = () => {
  return (
    <Container maxW={"full"} minH={"3xl"} px={0}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 10, md: 12 }}
        py={10}
        px={0}

      >
        <NewFormsTabs />
      </Stack>
    </Container>
  );
};
