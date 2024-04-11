import { Stack } from "@chakra-ui/react";
import { InputField } from "@modules/common/Form";
import { TextAreaInput } from "@modules/common/Form/textAreaInput";

interface IFormHeaderProps {
  control: any;
  textColor: string;
  bgColor: string;
}

export const FormHeader = ({ control, textColor, bgColor}:IFormHeaderProps) => {
  return (
    <Stack
      id="form_header"
      mt={5}
      borderTop={"10px solid #6d63fc"}
      rounded={"2xl"}
      shadow={"xl"}
      p={5}
      maxW={{ base: "full", lg: "50vw" }}
      bg={bgColor}
    >
      <InputField
        name="form_title"
        control={control}
        type="text"
        placeholder="Untitled Form"
        disable={false}
        inputHeadingType="Bold"
        inputHeadingLabel=""
        rest={{
          h: "50%",
          border: "none",
          color: textColor,
          _focusVisible: { outline: "none", border: "none" },
          fontWeight: 500,
          fontSize: "3xl",
        }}
      />
      <TextAreaInput
        name="form_description"
        control={control}
        placeholder="Untitled Description"
        size="lg"
        minRows={1}
        rest={{
          h: "50%",
          border: "none",
          color: textColor,
          _focusVisible: { outline: "none", border: "none" },
          fontSize: "xl",
        }}
      />
    </Stack>
  );
};
