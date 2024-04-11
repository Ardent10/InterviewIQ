import {
  Box,
  Button,
  Checkbox,
  Grid,
  GridItem,
  Radio,
  Stack,
} from "@chakra-ui/react";

import { InputField } from "@modules/common/Form";
import { TextAreaInput } from "@modules/common/Form/textAreaInput";
import { useState } from "react";
import { useFieldArray } from "react-hook-form";

import { CustomModal } from "@modules/common";
import { CustomTooltipWithIcon } from "./dragAndDropList";
import { Styles } from "./index.styles";

import { GrFormClose } from "react-icons/gr";
import { HiOutlinePhoto } from "react-icons/hi2";
import { UploadImage } from "./uploadImage";

interface IChoice {
  control: any;
  questionIndex: number;
  answerType: string;
  setValue: any;
  question: any;
  watchAllFields?: any;
}

export const ChoicesForm = ({
  control,
  questionIndex,
  answerType,
  setValue,
  question,
  watchAllFields,
}: IChoice) => {
  const [openModal, setOpenModal] = useState(false);
  const [uploadImageName, setUploadImageName] = useState<any>(null);
  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions[${questionIndex}].choices`,
  });

  console.log("uploadImageName", uploadImageName);

  const styles = Styles();
  const questionsList = watchAllFields.questions;
  return (
    <>
      <Stack
        id="answer-container"
        sx={styles.answerContainerStackStyles}
        gap={0}
      >
        {answerType === "Paragraph" ? (
          <TextAreaInput
            name={`questions[${questionIndex}].paragraphAnswer`}
            key={`questions[${questionIndex}].paragraphAnswer`}
            control={control}
            placeholder="Enter your answer..."
            size="lg"
          />
        ) : answerType === "Checkboxes" || answerType === "Multiple Choice" ? (
          <>
            <CustomModal
              isOpen={openModal}
              onClose={() => setOpenModal(false)}
              title="Upload Image"
              size="xl"
            >
              <UploadImage
                control={control}
                name={uploadImageName ? uploadImageName : ""}
                setOpenModal={setOpenModal}
                setValue={setValue}
              />
            </CustomModal>
            {fields.map((choice, choiceIndex) => (
              <>
                <Box key={choice.id}>
                  {answerType === "Checkboxes" ? (
                    // Checkbox choices here
                    <Stack
                      key={choice.id}
                      alignItems="center"
                      maxW="full"
                      flex={1}
                    >
                      <Box sx={styles.accordionBoxStyles} gap={2}>
                        <Box
                          sx={styles.accordionBoxStyles}
                          gap={2}
                          flexDirection={"column"}
                        >
                          <Box sx={styles.accordionBoxStyles} gap={2}>
                            <Checkbox colorScheme="purple" />
                            <InputField
                              name={`questions[${questionIndex}].choices[${choiceIndex}].choiceText`}
                              control={control}
                              type="text"
                              placeholder={`Option ${choiceIndex + 1}`}
                              disable={false}
                              inputHeadingType="Normal"
                              inputHeadingLabel=""
                            />
                          </Box>

                          {questionsList[questionIndex]?.choices[choiceIndex]
                            ?.imageUrl && (
                            <img
                              src={
                                questionsList[questionIndex].choices[
                                  choiceIndex
                                ].imageUrl
                              }
                              width={"180px"}
                              style={{ borderRadius: "10px" }}
                              alt="option-image"
                            />
                          )}
                        </Box>
                        <CustomTooltipWithIcon
                          icon={<HiOutlinePhoto />}
                          label="Add Image"
                          color="#fff"
                          onClick={() => {
                            setUploadImageName(
                              `questions[${questionIndex}].choices[${choiceIndex}].imageUrl`
                            );
                            setOpenModal(true);
                          }}
                        />
                        <CustomTooltipWithIcon
                          icon={<GrFormClose />}
                          label="Remove"
                          color="#fff"
                          onClick={() => remove(choiceIndex)}
                        />
                      </Box>
                    </Stack>
                  ) : (
                    // Radio choices here
                    <Grid
                      templateRows="repeat(1, 1fr)"
                      templateColumns="repeat(7, 1fr)"
                      gap={4}
                      key={choice.id}
                    >
                      <GridItem
                        colSpan={6}
                        display="flex"
                        alignItems="center"
                        gap={2}
                        w={"full"}
                      >
                        <Box
                          w={"full"}
                          display={"flex"}
                          flexDirection={"column"}
                        >
                          <Box w={"full"} display={"flex"} gap={2}>
                            <Radio colorScheme="purple" />
                            <InputField
                              name={`questions[${questionIndex}].choices[${choiceIndex}].choiceText`}
                              control={control}
                              type="text"
                              placeholder={`Option ${choiceIndex + 1}`}
                              disable={false}
                              inputHeadingType="Normal"
                              inputHeadingLabel=""
                              rest={{ flex: 1, width: "100%" }}
                            />
                          </Box>
                          <Box>
                            {questionsList[questionIndex]?.choices[choiceIndex]
                              ?.imageUrl && (
                              <img
                                src={
                                  questionsList[questionIndex].choices[
                                    choiceIndex
                                  ].imageUrl
                                }
                                width={"180px"}
                                style={{ borderRadius: "10px" }}
                                alt="option-image"
                              />
                            )}
                          </Box>
                        </Box>
                      </GridItem>
                      <GridItem display={"flex"}>
                        <Box sx={styles.accordionBoxStyles} gap={2}>
                          <CustomTooltipWithIcon
                            icon={<HiOutlinePhoto />}
                            label="Add Image"
                            color="#fff"
                            onClick={() => {
                              setUploadImageName(
                                `questions[${questionIndex}].choices[${choiceIndex}].imageUrl`
                              );
                              setOpenModal(true);
                            }}
                          />
                          <CustomTooltipWithIcon
                            icon={<GrFormClose />}
                            label="Remove"
                            color="#fff"
                            onClick={() => remove(choiceIndex)}
                          />
                        </Box>
                      </GridItem>
                    </Grid>
                  )}
                </Box>
              </>
            ))}
            {answerType === "Checkboxes" || answerType === "Multiple Choice" ? (
              <Box pt={3}>
                <Button
                  variant="outline"
                  colorScheme="purple"
                  onClick={() => {
                    append({
                      choiceText: "",
                    });
                  }}
                >
                  Add Choice
                </Button>
              </Box>
            ) : null}
          </>
        ) : null}
      </Stack>
    </>
  );
};
