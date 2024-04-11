/* eslint-disable react-hooks/rules-of-hooks */
import {
  Button,
  Container,
  Flex,
  useToast,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useForms } from "@modules/forms/hooks";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormQuestions } from "./questions";
import { FormResponseHeader } from "./header";
import { Loader } from "@modules/common/Loader";
import { UserDetails } from "./userDetails";
import { useLocation, useParams } from "react-router-dom";

type FormResponseValues = {
  formId: string;
  userFullName: string;
  email: string;
  answers: {
    questionId: string;
    answerType: "Multiple Choice" | "Checkboxes" | "Paragraph";
    userSelectedChoiceIds?: string[];
    userParagraphAnswer?: string;
  }[];
};

export const FormResponse = ({ currentForm }: any) => {
  const [responseForm, setResponseForm] = useState<any>(null);
  const [formResponseViewMode, setFormResponseViewMode] = useState<any>({
    disable: false,
    answers: null,
  });
  const [answers, setAnswers] = useState<any[]>([]);
  const { createFormResponse, getFormResponseById, loading } = useForms();
  const toast = useToast();
  const location = useLocation();
  const { responseId } = useParams();

  let defaultValues;
  const { handleSubmit, control, reset } = useForm({
    defaultValues: defaultValues,
    mode: "onBlur",
  });
  useEffect(() => {
    setResponseForm(currentForm);

    if (currentForm) {
      const formValues = {
        formId: currentForm._id,
        form_title: currentForm.form_title,
        form_description: currentForm.form_description,
        questions: currentForm.questions.map((question: any) => {
          const {
            questionText,
            answerType,
            isRequired,
            choices,
            questionImageUrl,
          } = question;
          return {
            questionText,
            questionImageUrl,
            answerType,
            isRequired,
            choices: [...choices],
          };
        }),
      };
      reset(formValues);
    } 
  }, [currentForm]);

  // for view mode 
  useEffect(() => {
    if (location.pathname.includes("view") && responseId) {
      const getFormResponse = async () => {
        const response = await getFormResponseById(responseId);
        if (response) {
          setFormResponseViewMode({
            disable: true,
            answers: response?.answers,
          });

          reset({
            userFullName: response?.userFullName,
            email: response?.email,
          });
        } else {
          return;
        }
      };
      getFormResponse();
    }
  }, [currentForm,responseId]);

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("#000", "#fff");

  const onSubmit = handleSubmit(async (data) => {
    const formData: FormResponseValues = {
      formId: currentForm._id,
      userFullName: data.userFullName,
      email: data.email,
      answers: answers,
    };

    await createFormResponse(formData);
    setAnswers([]);
    // console.log("Form data", formData);
  });

  const clearAllAnswers = () => {
    setAnswers([]);
    toast({
      title: "Cleared all responses",
      status: "success",
      position: "bottom-left",
      duration: 3000,
      isClosable: true,
    });
    reset({
      userFullName: "",
      email: "",
      answers: [],
    });
  };

  return (
    <Container
      maxW={"100vw"}
      minH={"89vh"}
      bgImage={"/assets/formResponse-bg.svg"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      position={"relative"}
      py={5}
    >
      {!responseForm || responseForm?.length === 0 ? (
        <Loader />
      ) : (
        <form onSubmit={onSubmit}>
          <VStack>
            <FormResponseHeader
              formTitle={responseForm?.form_title}
              formDescription={responseForm?.form_description}
              bgColor={bgColor}
            />

            <Container
              id="formResponse-Input-container"
              w={"full"}
              // maxW={"50vw"}
              maxW={{ base: "full", lg: "50vw" }}
              px={0}
            >
              <UserDetails
                control={control}
                textColor={textColor}
                bgColor={bgColor}
                formResponseViewMode={formResponseViewMode}
              />
              <FormQuestions
                control={control}
                textColor={textColor}
                bgColor={bgColor}
                setAnswers={setAnswers}
                answers={answers}
                questionsArray={responseForm?.questions}
                formResponseViewMode={formResponseViewMode}
              />

              {!location.pathname.includes("view") && (
                <Flex
                  py={5}
                  align={"center"}
                  flex={1}
                  justifyContent={"end"}
                  gap={5}
                >
                  <Button
                    mt={2}
                    variant="outline"
                    colorScheme="purple"
                    _hover={{ bg: "purple.500" }}
                    color={"white"}
                    onClick={clearAllAnswers}
                  >
                    Clear Responses
                  </Button>
                  <Button mt={2} colorScheme="purple" type="submit">
                    Submit
                  </Button>
                </Flex>
              )}
            </Container>
          </VStack>
        </form>
      )}
    </Container>
  );
};
