import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

export function Logo() {
  return (
    <Box>
      <Flex align="center">
        <Image src="/logo.png" alt="Logo" width="50px" height="50px" />
        <Text fontSize="2xl" fontWeight="bold" color="#6d63fc" ml={2}>
         Interview
        </Text>
        <Text fontSize={"2xl"} color={useColorModeValue ("#1400ffa1","#fff")}>
          IQ
        </Text>
      </Flex>
    </Box>
  );
}
