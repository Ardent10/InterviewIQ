import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Divider,
  Flex,
  FormLabel,
  IconButton,
  Radio,
  Stack,
  Switch,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
  Textarea,
} from "@chakra-ui/react";

import { useState } from "react";

// For DND
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Custom Components
import { CutsomTooltip, Selector } from "@modules/common";
import { InputField } from "@modules/common/Form";
import { Controller } from "react-hook-form";
import { ChoicesForm } from "./choicesForm";
import { Styles } from "./index.styles";

// Icons
import { AiFillEye } from "react-icons/ai";
import { BsTextParagraph } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlinePhoto } from "react-icons/hi2";
import { ImCheckboxChecked } from "react-icons/im";
import { IoMdRadioButtonOn } from "react-icons/io";
import { MdContentCopy, MdDragIndicator } from "react-icons/md";
import { CustomModal } from "@modules/common";
import { UploadImage } from "./uploadImage";

const QuestionType = [
  {
    label: "Paragraph",
    icon: <BsTextParagraph color="#6d63fc" />,
  },
  {
    label: "Checkboxes",
    icon: <ImCheckboxChecked color="#6d63fc" />,
  },
  {
    label: "Multiple Choice",
    icon: <IoMdRadioButtonOn color="#6d63fc" />,
  },
];

interface CustomTooltipWithIconProps {
  icon: any;
  label: string;
  color: string;
  onClick?: any;
  rest?: any;
}

export function CustomTooltipWithIcon({
  icon,
  label,
  color,
  onClick,
  rest,
}: CustomTooltipWithIconProps) {
  return (
    <CutsomTooltip label={label} placement="top" color={color}>
      <IconButton
        p={2}
        _hover={{ bgColor: "#6d63fc", color: "#fff" }}
        aria-label={label}
        icon={icon}
        onClick={onClick}
        {...rest}
      />
    </CutsomTooltip>
  );
}

interface IDrangNDropListProps {
  fields: any[];
  control: any;
  bgColor: string;
  textColor: string;
  watchAllFields: any;
  append: any;
  remove: any;
  setValue: any;
}

export const DragAndDropList = ({
  fields,
  setValue,
  control,
  bgColor,
  watchAllFields,
  textColor,
  append,
  remove,
}: IDrangNDropListProps) => {
  
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = fields.findIndex(
        (question: { id: string }) => question.id === active.id
      );
      const newIndex = fields.findIndex(
        (question: { id: string }) => question.id === over.id
      );
      console.log(fields);

      if (oldIndex !== undefined && newIndex !== undefined) {
        const updatedFields = arrayMove(fields, oldIndex, newIndex);

        // Update the order of fields in the form
        updatedFields.forEach((field, index) => {
          setValue(`questions[${index}]`, field);
        });
      }
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={fields} strategy={verticalListSortingStrategy}>
        {fields.map((question: any, questionIndex: any) => (
          <div key={questionIndex}>
            <SortableAccordionItem
              id={question.id}
              key={question.id}
              question={question}
              questionIndex={questionIndex}
              remove={remove}
              bgColor={bgColor}
              textColor={textColor}
              control={control}
              watchAllFields={watchAllFields}
              append={append}
              setValue={setValue}
            />
          </div>
        ))}
      </SortableContext>
    </DndContext>
  );
};

interface ISortableAccordionItemProps {
  id: string;
  question: any;
  control: any;
  bgColor: string;
  textColor: string;
  watchAllFields: any;
  append: any;
  remove: any;
  setValue: any;
  questionIndex: number;
}

const SortableAccordionItem = ({
  id,
  question,
  questionIndex,
  control,
  bgColor,
  watchAllFields,
  textColor,
  append,
  remove,
  setValue,
}: ISortableAccordionItemProps) => {
  const [answerType, setAnswerType] = useState("Multiple Choice");
  const [openModal, setOpenModal] = useState(false);
  
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const styles = Styles();
  const dndStyles = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    // Node Ref is used to get the reference of the element to be dragged
    <AccordionItem
      ref={setNodeRef}
      id={id}
      key={id}
      border="none"
      sx={dndStyles}
    >
      {/* Modal for Image selection for the Question */}
      <CustomModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Upload Image"
        size="xl"
      >
        <UploadImage
          control={control}
          name={`questions[${questionIndex}].questionImageUrl`}
          setOpenModal={setOpenModal}
          setValue={setValue}
        />
      </CustomModal>

      <Stack mt={5} rounded={"2xl"} bg={bgColor} key={id}>
        <AccordionButton
          id="question_preview"
          p={5}
          _hover={{
            bgColor: "#dbceff",
            borderRadius: "16px 16px 0 0",
            border: "none",
          }}
        >
          {/* This button is used as the dragger to drag the accordionItem */}
          <CutsomTooltip label="Drag to reorder" placement="top" color="#fff">
            <IconButton
              aria-label="dragger"
              icon={
                <MdDragIndicator
                  size={22}
                  cursor="grab"
                  {...attributes}
                  {...listeners}
                />
              }
            />
          </CutsomTooltip>

          <Flex pl={5} direction={"column"} flex="1" textAlign="left">
            {/* Question Preview Section  */}
            <Box
              sx={styles.accordionBoxStyles}
              justifyContent={"space-between"}
            >
              <Text id="question" fontSize={"lg"} color={textColor}>
                {watchAllFields.questions[questionIndex].questionText}
              </Text>

              <Tag
                size={"md"}
                borderRadius="full"
                variant="solid"
                colorScheme="purple"
              >
                <TagLabel>Preview</TagLabel>
                <TagRightIcon as={AiFillEye} />
              </Tag>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              {watchAllFields.questions[questionIndex]?.questionImageUrl && (
                <img
                  src={
                    watchAllFields.questions[questionIndex]?.questionImageUrl
                  }
                  width={"250px"}
                  style={{ borderRadius: "10px" }}
                  alt="option-image"
                />
              )}
            </Box>

            {/* Question Choices preview section */}

            <Stack pt={5} id="question_choices">
              {watchAllFields.questions[questionIndex].answerType ===
                "Paragraph" && (
                <Textarea
                  placeholder="Enter your answer..."
                  size="lg"
                  isDisabled
                />
              )}

              {watchAllFields.questions[questionIndex].choices.map(
                (choice: any, choiceIndex: any) => (
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    key={choiceIndex}
                  >
                    {watchAllFields.questions[questionIndex].answerType ===
                      "Multiple Choice" && (
                      <Radio
                        value={choice.choiceText}
                        colorScheme="purple"
                        isDisabled
                      >
                        {choice.choiceText}
                      </Radio>
                    )}
                    {watchAllFields.questions[questionIndex].answerType ===
                      "Checkboxes" && (
                      <Checkbox isDisabled colorScheme="purple">
                        {choice.choiceText}
                      </Checkbox>
                    )}
                    <Box display={"flex"} justifyContent={"center"} p={3}>
                      {watchAllFields.questions[questionIndex]?.choices[
                        choiceIndex
                      ]?.imageUrl && (
                        <img
                          src={
                            watchAllFields.questions[questionIndex].choices[
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
                )
              )}
            </Stack>
          </Flex>
          <AccordionIcon />
        </AccordionButton>

        {/* Form builder */}
        <AccordionPanel>
          <Stack direction={"column"} px={6}>
            <Divider colorScheme={"telegram"} />
            <Box sx={styles.accordionBoxStyles}>
              <Box w={"60%"} pr={3} alignItems={"end"}>
                <InputField
                  name={`questions[${questionIndex}].questionText`}
                  control={control}
                  type="text"
                  placeholder="Enter your Question*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabel="Question"
                  required
                />
              </Box>
              <Box p={"0 0 10px"} flex={1} display={"flex"} alignItems={"end"}>
                <CustomTooltipWithIcon
                  icon={<HiOutlinePhoto />}
                  label="Add Image"
                  color="#fff"
                  onClick={() => setOpenModal(true)}
                />

                <Box flex={1} pl={2}>
                  <Selector
                    name={`questions[${questionIndex}].answerType`}
                    inputHeadingType="Bold"
                    control={control}
                    title="Answer Type"
                    placeHolder="Select Type"
                    disable={false}
                    fontSize={14}
                    defaultLabel="Multiple Choice"
                    color="#4b4b4b"
                    required={true}
                    data={QuestionType}
                    setOption={setAnswerType}
                    currentAnswerType={
                      watchAllFields.questions[questionIndex].answerType
                    }
                  />
                </Box>
              </Box>
            </Box>
            <Divider />

            {/* Choice Form is separated to make the nested Choice array and return to react hook form */}
            <ChoicesForm
              control={control}
              questionIndex={questionIndex}
              answerType={answerType}
              setValue={setValue}
              question={question}
              watchAllFields={watchAllFields}
            />

            <Divider />
            <Stack id="question-actions" direction={"row"} maxW="full">
              <Box sx={styles.questionActionsStyle}>
                <CustomTooltipWithIcon
                  label="Duplicate"
                  icon={<MdContentCopy />}
                  color="#fff"
                  onClick={() =>
                    append({
                      questionText: question.questionText,
                      answerType: question.answerType,
                      isRequired: question.isRequired,
                      choices: question.choices,
                    })
                  }
                />
                <CustomTooltipWithIcon
                  label="Delete"
                  icon={<FaRegTrashAlt />}
                  onClick={() => remove(questionIndex)}
                  color="#fff"
                />
                <FormLabel htmlFor={`questions[${questionIndex}].isRequired`}>
                  Required:
                </FormLabel>
                <Controller
                  name={`questions.${questionIndex}.isRequired`}
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <Switch
                      id={`questions[${questionIndex}].isRequired`}
                      colorScheme="purple"
                      onChange={(e) => {
                        field.onChange(e.target.checked);
                      }}
                    />
                  )}
                />
              </Box>
            </Stack>
          </Stack>
        </AccordionPanel>
      </Stack>
    </AccordionItem>
  );
};

{
  /* <Stack pt={5} id="question_choices" maxW={"sm"}>
              {watchAllFields.questions[questionIndex].choices.map(
                (choice: any, choiceIndex: any) =>
                  // Checking different types of Answer type to render different components
                  watchAllFields.questions[questionIndex].answerType ===
                  "Multiple Choice" ? (
                    <Box display={"flex"} flexDirection={"column"}>
                      <Radio
                        key={choiceIndex}
                        value={choice.choiceText}
                        colorScheme="purple"
                        isDisabled
                      >
                        {choice.choiceText}
                      </Radio>
                      <Box display={"flex"} justifyContent={"center"} p={3}>
                        {watchAllFields.questions[questionIndex]?.choices[
                          choiceIndex
                        ]?.imageUrl && (
                          <img
                            src={
                              watchAllFields.questions[questionIndex].choices[
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
                  ) : watchAllFields.questions[questionIndex].answerType ===
                    "Checkboxes" ? (
                    <Checkbox isDisabled key={choiceIndex} colorScheme="purple">
                      {choice.choiceText}
                    </Checkbox>
                  ) : (
                    <Textarea
                      key={choiceIndex}
                      placeholder="Enter your answer..."
                      size="lg"
                      isDisabled
                    />
                  )
              )}
            </Stack> */
}
