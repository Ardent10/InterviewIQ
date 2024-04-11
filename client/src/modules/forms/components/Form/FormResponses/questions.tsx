import { Stack, Text, Box, Radio, Checkbox, Textarea } from "@chakra-ui/react";
import { TextAreaInput } from "@modules/common/Form/textAreaInput";
import { useEffect, useState } from "react";

interface IQuestion {
  questionText: string;
  questionImageUrl?: string;
  answerType: string;
  paragraphAnswer?: string;
  isRequired: boolean;
  choices?: {
    choiceText?: string;
    imageUrl?: string;
  }[];
}

interface IFormHeaderProps {
  control: any;
  textColor: string;
  bgColor: string;
  questionsArray: IQuestion[];
  setAnswers: any;
  answers: any;
  formResponseViewMode?: any;
}

export const FormQuestions = ({
  control,
  textColor,
  bgColor,
  questionsArray,
  setAnswers,
  answers,
  formResponseViewMode,
}: IFormHeaderProps) => {
  const [selectedChoices, setSelectedChoices] = useState<
    Record<string, string>
  >({});

  useEffect(() => {
    if (answers.length === 0) {
      setSelectedChoices({});
    }
  }, [answers]);

  const handleChoiceSelection = (
    question: any,
    questionId: string,
    choiceId: string
  ) => {
    if (
      question?.answerType === "Multiple Choice" ||
      question?.answerType === "Checkboxes"
    ) {
      setSelectedChoices((prevSelectedChoices) => ({
        ...prevSelectedChoices,
        [questionId]: choiceId,
      }));

      const answer = {
        questionId: question._id,
        answerType: question?.answerType,
        userSelectedChoiceIds: [choiceId],
      };

      // Use setAnswers to update the answers state
      setAnswers((prevAnswers: any) => [...prevAnswers, answer]);
    }
  };

  const handleParagraphAnswer = (e: any, question: any) => {
    const paragraphAnswer = e.target.value;
    console.log("questionId", paragraphAnswer);

    const answer = {
      questionId: question._id,
      answerType: question?.answerType,
      userParagraphAnswer: paragraphAnswer,
    };

    // Checking that if the user has modified the same paragraph TextArea Input
    const existingIndex = answers.findIndex(
      (answer: any) => answer.questionId === question._id
    );

    if (existingIndex !== -1) {
      // If a duplicate is found, replace the existing answer
      setAnswers((prevAnswers: any) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[existingIndex] = answer;
        return updatedAnswers;
      });
    } else {
      // If no duplicate is found, add the new answer
      setAnswers((prevAnswers: any) => [...prevAnswers, answer]);
    }
  };

  return (
    <>
      {questionsArray?.map((question: any) => (
        <Stack
          id="form_questions"
          mt={5}
          shadow={"xl"}
          rounded={"2xl"}
          p={8}
          maxW={{ base: "full", lg: "50vw" }}
          bg={bgColor}
          textAlign={"left"}
          key={question._id}
        >
          <Text pb={2}>
            {question.questionText}
            {question.isRequired && <span style={{ color: "red" }}> *</span>}
          </Text>

          {question?.questionImageUrl && (
            <Box display={"flex"} justifyContent={"center"}>
              <img
                src={question?.questionImageUrl}
                width={"250px"}
                style={{ borderRadius: "10px" }}
                alt="question-image"
              />
            </Box>
          )}

          <Stack id="question_choices">
            {question.answerType === "Paragraph" ? (
              <TextAreaInput
                name={`userParagraphAnswer_${question._id}`}
                control={control}
                placeholder={
                  formResponseViewMode
                    ? formResponseViewMode?.answers?.find(
                        (q: any) => q.questionId === question._id
                      )?.userParagraphAnswer
                    : "Untitled Description"
                }
                onBlur={(e: any) => handleParagraphAnswer(e, question)}
                size="lg"
                minRows={3}
                disable={formResponseViewMode?.disable ? true : false}
                rest={{
                  h: "50%",
                  color: textColor,
                  fontSize: "xl",
                }}
              />
            ) : (
              <>
                {question?.choices.map((choice: any, choiceIndex: any) =>
                  question?.answerType === "Multiple Choice" ? (
                    <Box
                      key={choice._id}
                      display={"flex"}
                      flexDirection={"column"}
                    >
                      <Radio
                        key={choiceIndex}
                        value={choice.choiceText}
                        colorScheme="purple"
                        isDisabled={
                          formResponseViewMode?.disable ? true : false
                        }
                        isChecked={
                          formResponseViewMode
                            ? formResponseViewMode?.answers?.some(
                                (q: any) =>
                                  q.questionId === question._id &&
                                  q.userSelectedChoiceIds?.includes(choice._id)
                              )
                            : selectedChoices[question._id] === choice._id
                        }
                        onChange={() =>
                          handleChoiceSelection(
                            question,
                            question._id,
                            choice._id
                          )
                        }
                      >
                        {choice.choiceText}
                      </Radio>
                      <Box display={"flex"} justifyContent={"center"} p={3}>
                        {choice?.imageUrl && (
                          <img
                            src={choice?.imageUrl}
                            width={"180px"}
                            style={{ borderRadius: "10px" }}
                            alt="option-image"
                          />
                        )}
                      </Box>
                    </Box>
                  ) : (
                    question?.answerType === "Checkboxes" && (
                      <Box
                        key={choice._id}
                        display={"flex"}
                        flexDirection={"column"}
                      >
                        <Checkbox
                          key={choiceIndex}
                          isChecked={
                            formResponseViewMode
                              ? formResponseViewMode?.answers?.some(
                                  (q: any) =>
                                    q.questionId === question._id &&
                                    q.userSelectedChoiceIds?.includes(
                                      choice._id
                                    )
                                )
                              : selectedChoices[question._id] === choice._id
                          }
                          isDisabled={
                            formResponseViewMode?.disable ? true : false
                          }
                          onChange={() =>
                            handleChoiceSelection(
                              question,
                              question._id,
                              choice._id
                            )
                          }
                          colorScheme="purple"
                        >
                          {choice.choiceText}
                        </Checkbox>
                        <Box display={"flex"} justifyContent={"center"} p={3}>
                          {choice?.imageUrl && (
                            <img
                              src={choice?.imageUrl}
                              width={"180px"}
                              style={{ borderRadius: "10px" }}
                              alt="option-image"
                            />
                          )}
                        </Box>
                      </Box>
                    )
                  )
                )}
              </>
            )}
          </Stack>
        </Stack>
      ))}
    </>
  );
};
