import { Container, Stack } from "@chakra-ui/react";
import { FormResponse } from "../components";
import { useParams } from "react-router-dom";
import { useForms } from "../hooks";
import { useEffect, useState } from "react";

export const SubmitFormResponse = () => {
  const { formId } = useParams();
  const [currentForm, setCurrentForm] = useState<any>(null);
  const { getFormById } = useForms();

  useEffect(() => {
    const getForm = async () => {
      if (formId) {
        const form = await getFormById(formId);
        if (form) {
          setCurrentForm(form);
        }
      }
    };

    getForm();
  }, [formId]);

  return (
    <Container maxW={"full"} px={0}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 10, md: 12 }}
        pt={20}
        px={0}
      >
        <FormResponse currentForm={currentForm} />
      </Stack>
    </Container>
  );
};
