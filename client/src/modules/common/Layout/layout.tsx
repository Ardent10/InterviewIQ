import { Container, Stack } from "@chakra-ui/react";
import { Footer, Navbar } from "@modules/common/Layout";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <Container mx={0} px={0}  flex={1} maxWidth="100%" overflowX="hidden">
      <Navbar />
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        
        direction={{ base: "column", md: "row" }}
      >
        {children}
      </Stack>
      <Footer />
    </Container>
  );
}
