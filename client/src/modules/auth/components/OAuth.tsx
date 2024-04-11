import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

interface OAuthProps {
  label: string;
  onClick: any;
}

export const OAuth = ({ label, onClick }: OAuthProps) => {
  return (
    <SimpleGrid columns={1} spacing={1} minWidth="300px">
      <Button
        type="submit"
        bg={"#fff"}
        border={"1px solid #6d63fc"}
        rounded={"lg"}
        h={45}
      >
        <AbsoluteCenter>
          <Flex alignItems="center" justifyContent="center">
            <img
              src="/assets/google.svg"
              alt="google"
              style={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
            {label}
          </Flex>
        </AbsoluteCenter>
      </Button>
      <Box width="100%">
        <Flex alignItems="center" justifyContent="center">
          <Divider flex={1} borderColor="blue" />
          <Text p={2}>or</Text>
          <Divider flex={1} borderColor="blue" />
        </Flex>
      </Box>
    </SimpleGrid>
  );
};
