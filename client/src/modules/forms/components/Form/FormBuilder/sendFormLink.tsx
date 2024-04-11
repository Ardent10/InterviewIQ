import { Box, Button, Container, Divider, Stack, Text } from "@chakra-ui/react";
import { InputField } from "@modules/common/Form";
import { useForm } from "react-hook-form";
import { RiSendPlaneFill } from "react-icons/ri";
import { CustomModal } from "@modules/common";
import { TextAreaInput } from "@modules/common/Form/textAreaInput";
import { SendFormLinkSchema } from "@utils/validations/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForms } from "@modules/forms/hooks/index";
import { useState } from "react";  

interface props {
  openModal: boolean;
  setOpenModal: any;
  formUrl: string;
}

export const SendFormLinkModal = ({
  openModal,
  setOpenModal,
  formUrl,
}: props) => {
  const { sendFormInvite } = useForms();
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, control, watch } = useForm({
    resolver: yupResolver(SendFormLinkSchema),
    defaultValues: {
      subject: "MercForms: Fill out this form",
      message: "Hey, I would like you to take a moment to fill out this form.",
    },
  });


  const onSubmit = handleSubmit(async (formaData) => {
    const { reciever_email, subject, message } = formaData;
    setIsLoading(true); 
    console.log("FORM DATA=> ",formUrl,formaData);
    await sendFormInvite(formUrl, reciever_email, subject, message);
    setIsLoading(false); 

    !isLoading && setOpenModal(false);
  });

  return (
    <CustomModal
      isOpen={openModal}
      onClose={() => setOpenModal(false)}
      title="Send Form Invite"
      size="lg"
    >
      <Divider />
      <Container py={5}>
        <Stack>
          <form onSubmit={onSubmit}>
            <Container>
              <InputField
                name={"reciever_email"}
                control={control}
                type="email"
                placeholder={"Enter Reciever's Email"}
                disable={false}
                inputHeadingType="Bold"
                inputHeadingLabel="To"
                required
              />
              <InputField
                name={"subject"}
                control={control}
                type="text"
                required
                placeholder={"Enter Subject"}
                disable={false}
                inputHeadingType="Bold"
                inputHeadingLabel="Subject"
              />
              <Text fontWeight={600}>Message</Text>
              <TextAreaInput
                name={"message"}
                control={control}
                placeholder={"Message"}
                disable={false}
                size="md"
              />
              <Box display={"flex"} justifyContent={"end"}>
                <Button
                  rightIcon={<RiSendPlaneFill size={17} />}
                  mt={3}
                  colorScheme="purple"
                  type="submit"
                  isLoading={isLoading}
                  loadingText="Submitting"
                >
                  Send
                </Button>
              </Box>
            </Container>
          </form>
        </Stack>
      </Container>
    </CustomModal>
  );
};
