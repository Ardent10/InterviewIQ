import { Stack } from "@chakra-ui/react";
import { InputField } from "@modules/common/Form";

interface IUserDetailsProps {
  control: any;
  textColor: string;
  bgColor: string;
  formResponseViewMode?: any;
}

export const UserDetails = ({
  control,
  textColor,
  bgColor,
  formResponseViewMode,
}: IUserDetailsProps) => {
  return (
    <Stack
      id="form_header"
      mt={5}
      rounded={"2xl"}
      shadow={"xl"}
      p={5}
      maxW={{ base: "full", lg: "50vw" }}
      bg={bgColor}
      direction={"row"}
    >
      <InputField
        name="userFullName"
        required
        control={control}
        type="text"
        placeholder="Enter your name"
        inputHeadingType="Bold"
        inputHeadingLabel="Name"
        disable={formResponseViewMode?.disable ? true : false}
      />
      <InputField
        name="email"
        control={control}
        required
        type="text"
        placeholder="Enter your email"
        disable={formResponseViewMode?.disable ? true : false}
        inputHeadingType="Bold"
        inputHeadingLabel="Email"
      />
    </Stack>
  );
};
