import { Heading, Stack, Text } from "@chakra-ui/react";
import { InputField } from "@modules/common/Form";
import { TextAreaInput } from "@modules/common/Form/textAreaInput";

interface IFormHeaderProps {
  formTitle: string;
  formDescription: string;
  bgColor: string;
}

export const FormResponseHeader = ({
  formTitle,
  formDescription,
  bgColor,
}: IFormHeaderProps) => {
  return (
    <Stack
      id="form_header"
      mt={5}
      borderTop={"10px solid #6d63fc"}
      rounded={"2xl"}
      shadow={"xl"}
      p={5}
      minW={{ base: "full", lg: "50vw" }}
      maxW={{ base: "full", lg: "50vw" }}
      bg={bgColor}
    >
      <Heading fontWeight={500}>{formTitle}</Heading>
      <Text>{formDescription}</Text>
    </Stack>
  );
};
