/* eslint-disable react-hooks/rules-of-hooks */
// import {
//   Accordion,
//   AccordionButton,
//   AccordionIcon,
//   AccordionItem,
//   AccordionPanel,
//   Box,
//   Button,
//   Checkbox,
//   Container,
//   Divider,
//   Flex,
//   FormLabel,
//   Grid,
//   GridItem,
//   IconButton,
//   Radio,
//   Stack,
//   Switch,
//   Tag,
//   TagLabel,
//   TagRightIcon,
//   Text,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { CutsomTooltip, Selector } from "@modules/common";
// import { InputField } from "@modules/common/Form";
// import { TextAreaInput } from "@modules/common/Form/textAreaInput";
// import { useState } from "react";
// import { Controller, useFieldArray, useForm } from "react-hook-form";
// import {
//   AiFillEye,
//   AiOutlineImport,
//   AiOutlinePlusCircle,
// } from "react-icons/ai";
// import { BsImage, BsTextParagraph } from "react-icons/bs";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { GoVideo } from "react-icons/go";
// import { GrFormClose } from "react-icons/gr";
// import { HiOutlinePhoto } from "react-icons/hi2";
// import { ImCheckboxChecked } from "react-icons/im";
// import { IoMdRadioButtonOn } from "react-icons/io";
// import { MdContentCopy, MdTitle } from "react-icons/md";
// import { TbSection } from "react-icons/tb";
// import { Styles } from "./index.styles";

// const iconData = [
//   {
//     title: "Add Question",
//     icon: <AiOutlinePlusCircle size={25} />,
//     onClick: () => {
//       // Define the action for this icon's click event
//     },
//   },
//   {
//     title: "Import Questions",
//     icon: <AiOutlineImport size={25} />,
//     onClick: () => {
//       // Define the action for this icon's click event
//     },
//   },
//   {
//     title: "Add Title",
//     icon: <MdTitle size={25} />,
//     onClick: () => {
//       // Define the action for this icon's click event
//     },
//   },
//   {
//     title: "Add Image",
//     icon: <BsImage size={25} />,
//     onClick: () => {
//       // Define the action for this icon's click event
//     },
//   },
//   {
//     title: "Add Video",
//     icon: <GoVideo size={25} />,
//     onClick: () => {
//       // Define the action for this icon's click event
//     },
//   },
//   {
//     title: "Add Section",
//     icon: <TbSection size={25} />,
//     onClick: () => {
//       // Define the action for this icon's click event
//     },
//   },
// ];

// const QuestionType = [
//   {
//     label: "Paragraph",
//     icon: <BsTextParagraph color="#6d63fc" />,
//   },
//   {
//     label: "Checkboxes",
//     icon: <ImCheckboxChecked color="#6d63fc" />,
//   },
//   {
//     label: "Multiple Choice",
//     icon: <IoMdRadioButtonOn color="#6d63fc" />,
//   },
// ];

// type FormValues = {
//   form_title: string;
//   form_description: string;
//   question: string;
//   answer_type: string;
//   paragraph_answer: string;
//   isRequired: boolean;
//   checkbox_choices: {
//     choice: string;
//   }[];
//   radio_choices: {
//     choice: string;
//   }[];
// };

// interface CustomTooltipWithIconProps {
//   icon: any;
//   label: string;
//   color: string;
//   onClick?: any;
// }

// function CustomTooltipWithIcon({
//   icon,
//   label,
//   color,
//   onClick,
// }: CustomTooltipWithIconProps) {
//   return (
//     <CutsomTooltip label={label} placement="top" color={color}>
//       <IconButton
//         p={2}
//         _hover={{ bgColor: "#6d63fc", color: "#fff" }}
//         aria-label={label}
//         icon={icon}
//         onClick={onClick}
//       />
//     </CutsomTooltip>
//   );
// }

// export const FormBuilder = () => {
//   const { handleSubmit, control } = useForm<FormValues>({
//     defaultValues: {
//       radio_choices: [{ choice: "Option 1" }],
//       answer_type: "Multiple Choice",
//     },
//     mode: "onBlur",
//   });
//   const { fields, append, remove } = useFieldArray({
//     name: "radio_choices",
//     control,
//   });

//   const [answerType, setAnswerType] = useState("Multiple Choice");
//   const [accordionItems, setAccordionItems] = useState([0]);

//   const bgColor = useColorModeValue("white", "gray.800");
//   const textColor = useColorModeValue("#000", "#fff");
//   const styles = Styles();

//   // Functions for accordion items
//   const addNewAccordionItem = () => {
//     setAccordionItems([...accordionItems, accordionItems.length]);
//   };

//   const duplicateAccordionItem = (index: any) => {
//     const updatedAccordionItems = [...accordionItems];
//     updatedAccordionItems.splice(index + 1, 0, index + 1);
//     setAccordionItems(updatedAccordionItems);
//   };

//   const removeAccordionItem = (index: any) => {
//     const updatedAccordionItems = [...accordionItems];
//     updatedAccordionItems.splice(index, 1);
//     setAccordionItems(updatedAccordionItems);
//   };

//   const onSubmit = handleSubmit((data) => {
//     console.log(data);
//   });

//   // console.log(answerType);

//   return (
//     <Container maxW={"100vw"}>
//       <form onSubmit={onSubmit}>
//         <Stack
//           mt={5}
//           borderTop={"10px solid #6d63fc"}
//           rounded={"2xl"}
//           p={5}
//           w={"50vw"}
//           bg={bgColor}
//           // h={"20vh"}
//         >
//           <InputField
//             name="form_title"
//             control={control}
//             type="text"
//             placeholder="Untitled Form"
//             disable={false}
//             inputHeadingType="Bold"
//             inputHeadingLabel=""
//             rest={{
//               h: "50%",
//               border: "none",
//               color: textColor,
//               defaultValue: "Untitled Document",
//               _focusVisible: { outline: "none", border: "none" },
//               fontWeight: 500,
//               fontSize: "3xl",
//             }}
//           />
//           <TextAreaInput
//             name="paragraph_answer"
//             control={control}
//             placeholder="Untitled Description"
//             size="lg"
//             minRows={1}
//             rest={{
//               h: "50%",
//               border: "none",
//               color: textColor,
//               defaultValue: "Untitled Description",
//               _focusVisible: { outline: "none", border: "none" },
//               fontSize: "xl",
//             }}
//           />
//         </Stack>

//         <Container
//           id="formBuilder-Input-container"
//           w={"full"}
//           maxW={"50vw"}
//           px={0}
//         >
//           <Accordion allowMultiple>
//             {accordionItems.map((itemIndex, index) => (
//               <AccordionItem key={index} w={"full"} border={"none"}>
//                 <Stack mt={5} rounded={"2xl"} bg={bgColor}>
//                   <AccordionButton
//                     p={5}
//                     _hover={{
//                       bgColor: "#dbceff",
//                       borderRadius: "16px 16px 0 0",
//                     }}
//                   >
//                     <Flex pl={5} direction={"column"} flex="1" textAlign="left">
//                       <Box
//                         sx={styles.accordionBoxStyles}
//                         justifyContent={"space-between"}
//                       >
//                         <Text fontSize={"lg"} color={textColor}>
//                           Untitled Question
//                         </Text>
//                         <Tag
//                           size={"md"}
//                           borderRadius="full"
//                           variant="solid"
//                           colorScheme="purple"
//                         >
//                           <TagLabel>Preview</TagLabel>
//                           <TagRightIcon as={AiFillEye} />
//                         </Tag>
//                       </Box>
//                       <Box pt={5}>
//                         <Radio value="1">Option 1</Radio>
//                       </Box>
//                     </Flex>
//                     <AccordionIcon />
//                   </AccordionButton>

//                   <AccordionPanel>
//                     <Stack direction={"column"} px={6}>
//                       <Box sx={styles.accordionBoxStyles}>
//                         <Box w={"60%"} pr={3} alignItems={"end"}>
//                           <InputField
//                             name="question"
//                             control={control}
//                             type="text"
//                             placeholder="Enter your Question*"
//                             disable={false}
//                             inputHeadingType="Bold"
//                             inputHeadingLabel="Question"
//                             required
//                           />
//                         </Box>
//                         <Box
//                           p={"0 0 10px"}
//                           flex={1}
//                           display={"flex"}
//                           alignItems={"end"}
//                         >
//                           <CustomTooltipWithIcon
//                             icon={<HiOutlinePhoto />}
//                             label="Add Image"
//                             color="#fff"
//                           />

//                           <Box flex={1} pl={2}>
//                             <Selector
//                               name="answer_type"
//                               inputHeadingType="Bold"
//                               control={control}
//                               title="Answer Type"
//                               placeHolder="Select Type"
//                               disable={false}
//                               fontSize={14}
//                               defaultLabel="Multiple Choice"
//                               color="#4b4b4b"
//                               data={QuestionType}
//                               required={true}
//                               setOption={setAnswerType}
//                             />
//                           </Box>
//                         </Box>
//                       </Box>
//                       <Divider />
//                       <Stack
//                         id="answer-container"
//                         sx={styles.answerContainerStackStyles}
//                       >
//                         {answerType === "Paragraph" ? (
//                           <TextAreaInput
//                             name="paragraph_answer"
//                             control={control}
//                             placeholder="Enter your answer..."
//                             size="lg"
//                           />
//                         ) : answerType === "Checkboxes" ||
//                           answerType === "Multiple Choice" ? (
//                           <>
//                             {fields.map((field, index) => (
//                               <Box
//                                 key={field.id}
//                                 // sx={styles.accordionBoxStyles}
//                               >
//                                 {answerType === "Checkboxes" ? (
//                                   <Stack
//                                     alignItems="center"
//                                     maxW="full"
//                                     flex={1}
//                                   >
//                                     <Box sx={styles.accordionBoxStyles} gap={2}>
//                                       <Checkbox colorScheme="purple" />
//                                       <InputField
//                                         name={
//                                           `checkbox_choices.${index}.choice` as const
//                                         }
//                                         control={control}
//                                         type="text"
//                                         placeholder={`Option ${index + 1}`}
//                                         disable={false}
//                                         inputHeadingType="Normal"
//                                         inputHeadingLabel=""
//                                       />
//                                       <CustomTooltipWithIcon
//                                         icon={<HiOutlinePhoto />}
//                                         label="Add Image"
//                                         color="#fff"
//                                       />

//                                       <CustomTooltipWithIcon
//                                         icon={<GrFormClose />}
//                                         label="Remove"
//                                         color="#fff"
//                                         onClick={() => remove(index)}
//                                       />
//                                     </Box>
//                                   </Stack>
//                                 ) : (
//                                   <>
//                                     <Grid
//                                       templateRows="repeat(1, 1fr)"
//                                       templateColumns="repeat(7, 1fr)"
//                                       gap={4}
//                                     >
//                                       <GridItem
//                                         colSpan={6}

//                                         display="flex"
//                                         alignItems="center"
//                                         gap={2}
//                                         w={"full"}
//                                       >
//                                         <Radio colorScheme="purple" />
//                                         <InputField
//                                           name={
//                                             `radio_choices.${index}.choice` as const
//                                           }
//                                           control={control}
//                                           type="text"
//                                           placeholder={`Option ${index + 1}`}
//                                           disable={false}
//                                           inputHeadingType="Normal"
//                                           inputHeadingLabel=""
//                                           rest={{ flex: 1,width:"100%" }}
//                                         />
//                                       </GridItem>
//                                       <GridItem display={"flex"}>
//                                         <Box sx={styles.accordionBoxStyles} gap={2}>
//                                           <CustomTooltipWithIcon
//                                             icon={<HiOutlinePhoto />}
//                                             label="Add Image"
//                                             color="#fff"
//                                           />
//                                           <CustomTooltipWithIcon
//                                             icon={<GrFormClose />}
//                                             label="Remove"
//                                             color="#fff"
//                                             onClick={() => remove(index)}
//                                           />
//                                         </Box>
//                                       </GridItem>
//                                     </Grid>
//                                   </>
//                                 )}
//                               </Box>
//                             ))}
//                             {answerType === "Checkboxes" ||
//                             answerType === "Multiple Choice" ? (
//                               <Box pt={3}>
//                                 <Button
//                                   variant="outline"
//                                   colorScheme="purple"
//                                   onClick={() =>
//                                     append({
//                                       choice: `Option ${fields.length + 1}`,
//                                     })
//                                   }
//                                 >
//                                   Add Choice
//                                 </Button>
//                               </Box>
//                             ) : null}
//                           </>
//                         ) : null}
//                       </Stack>

//                       <Divider />
//                       <Stack
//                         id="question-actions"
//                         direction={"row"}
//                         maxW="full"
//                       >
//                         <Box sx={styles.questionActionsStyle}>
//                           <CustomTooltipWithIcon
//                             label="Duplicate"
//                             icon={<MdContentCopy />}
//                             color="#fff"
//                             onClick={() => duplicateAccordionItem(index)}
//                           />

//                           <CustomTooltipWithIcon
//                             label="Delete"
//                             icon={<FaRegTrashAlt />}
//                             onClick={() => removeAccordionItem(index)}
//                             color="#fff"
//                           />

//                           <FormLabel htmlFor="isRequired">Required:</FormLabel>
//                           <Controller
//                             name="isRequired"
//                             control={control}
//                             defaultValue={false}
//                             render={({ field }) => (
//                               <Switch
//                                 id="isRequired"
//                                 colorScheme="purple"
//                                 onChange={(e) => {
//                                   field.onChange(e.target.checked);
//                                 }}
//                               />
//                             )}
//                           />
//                         </Box>
//                       </Stack>
//                     </Stack>
//                   </AccordionPanel>
//                 </Stack>
//               </AccordionItem>
//             ))}

//             <Flex align={"center"} flex={1} justifyContent={"end"} gap={5}>
//               <Button
//                 mt={2}
//                 variant="outline"
//                 colorScheme="purple"
//                 _hover={{ bg: "purple.500" }}
//                 color={"white"}
//                 onClick={addNewAccordionItem}
//               >
//                 Add New Question
//               </Button>
//               <Button mt={2} colorScheme="purple" type="submit">
//                 Create
//               </Button>
//             </Flex>
//           </Accordion>
//         </Container>
//       </form>
//     </Container>
//   );
// };

{
  /* <Stack
  bg={bgColor}
  rounded={"xl"}
  shadow={"2xl"}
  minHeight={"10vh"}
  position={"absolute"}
  right={"20vw"}
  py={1}
>
  {iconData.map((item, index) => (
    <CutsomTooltip
      key={index}
      label={item.title}
      placement="right"
      color={iconHoverColor}
    >
      <Box
        key={index}
        as={Button}
        variant="ghost"
        onClick={item.onClick}
        transition="background-color 0.3s"
        color={useColorModeValue("#6d63fc", "#fff")}
        _hover={{
          color: iconHoverColor,
          bgColor: iconHoverBgColor,
        }}
      >
        {React.cloneElement(item.icon, {
          _hover: { color: iconHoverColor },
        })}
      </Box>
    </CutsomTooltip>
  ))}
</Stack> */
}

/*
 {choices.map((choice, index) => (
                              <Box key={index} sx={styles.accordionBoxStyles}>
                                {answerType === "Checkboxes" ? (
                                  <Stack
                                    alignItems="center"
                                    maxW="full"
                                    flex={1}
                                  >
                                    <Box sx={styles.accordionBoxStyles} gap={2}>
                                      <Checkbox colorScheme="purple" />
                                      <InputField
                                        name="checkbox_choice"
                                        control={control}
                                        type="text"
                                        placeholder="Option"
                                        disable={false}
                                        inputHeadingType="Bold"
                                        inputHeadingLabel=""
                                        // border={"none"}
                                        // color={textColor}
                                        // placeholder="Choice 1"
                                        // defaultValue={"Choice 1"}
                                        // _focusVisible={{
                                        //   bg: "#dbceff",
                                        //   outline: "none",
                                        //   border: "none",
                                        // }}
                                        // value={choice}
                                        // onChange={(e) =>
                                        //   handleChoiceChange(
                                        //     index,
                                        //     e.target.value
                                        //   )
                                        // }
                                      />
                                      <CutsomTooltip
                                        label="Add Image"
                                        placement="top"
                                        color="#fff"
                                      >
                                        <IconButton
                                          _hover={styles.iconButtonStyles}
                                          aria-label="Add Image"
                                          icon={<HiOutlinePhoto />}
                                        />
                                      </CutsomTooltip>
                                      <CutsomTooltip
                                        label="Remove"
                                        placement="top"
                                        color="#fff"
                                      >
                                        <IconButton
                                          p={2}
                                          _hover={styles.iconButtonStyles}
                                          aria-label="Remove"
                                          icon={<GrFormClose />}
                                          onClick={() => removeChoice(index)}
                                        />
                                      </CutsomTooltip>
                                    </Box>
                                  </Stack>
                                ) : (
                                  <Stack
                                    alignItems="center"
                                    maxW="full"
                                    flex={1}
                                  >
                                    <Box sx={styles.accordionBoxStyles} gap={2}>
                                      <Radio
                                        value={choice}
                                        colorScheme="purple"
                                      />
                                      <Input
                                        name="radio_choice"
                                        border={"none"}
                                        color={textColor}
                                        placeholder="Choice 1"
                                        defaultValue={"Choice 1"}
                                        _focusVisible={{
                                          bg: "#dbceff",
                                          outline: "none",
                                          border: "none",
                                        }}
                                        value={choice}
                                        onChange={(e) =>
                                          handleChoiceChange(
                                            index,
                                            e.target.value
                                          )
                                        }
                                      />
                                      <CutsomTooltip
                                        label="Add Image"
                                        placement="top"
                                        color="#fff"
                                      >
                                        <IconButton
                                          p={2}
                                          _hover={styles.iconButtonStyles}
                                          aria-label="Add Image"
                                          icon={<HiOutlinePhoto />}
                                        />
                                      </CutsomTooltip>
                                      <CutsomTooltip
                                        label="Remove"
                                        placement="top"
                                        color="#fff"
                                      >
                                        <IconButton
                                          p={2}


                                       _hover={styles.iconButtonStyles}
                                          aria-label="Remove"
                                          icon={<GrFormClose />}
                                          onClick={() => removeChoice(index)}
                                        />
                                      </CutsomTooltip>
                                    </Box>
                                  </Stack>
                                )}
                              </Box>
                            ))}
*/

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormLabel,
  Grid,
  GridItem,
  IconButton,
  Radio,
  Stack,
  Switch,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlinePhoto } from "react-icons/hi2";
import { MdContentCopy } from "react-icons/md";

import { AiFillEye } from "react-icons/ai";
import { BsTextParagraph } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { ImCheckboxChecked } from "react-icons/im";
import { IoMdRadioButtonOn } from "react-icons/io";

import { CutsomTooltip, Selector } from "@modules/common";
import { InputField } from "@modules/common/Form";
import { TextAreaInput } from "@modules/common/Form/textAreaInput";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Styles } from "./index.styles";
// import { GoVideo } from "react-icons/go";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { HiOutlinePhoto } from "react-icons/hi2";
// import { MdContentCopy, MdTitle } from "react-icons/md";

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
}

function CustomTooltipWithIcon({
  icon,
  label,
  color,
  onClick,
}: CustomTooltipWithIconProps) {
  return (
    <CutsomTooltip label={label} placement="top" color={color}>
      <IconButton
        p={2}
        _hover={{ bgColor: "#6d63fc", color: "#fff" }}
        aria-label={label}
        icon={icon}
        onClick={onClick}
      />
    </CutsomTooltip>
  );
}

type FormValues = {
  form_title: string;
  form_description: string;
  questions: {
    questionText: string;
    answerType: string;
    paragraphAnswer?: string;
    isRequired: boolean;
    choices: {
      choiceText: string;
    }[];
  }[];
};

export const FormBuilder = () => {
  const { handleSubmit, control, setValue } = useForm<FormValues>({
    defaultValues: {
      form_title: "Untitled Document",
      form_description: "Untitled Description",
      questions: [
        {
          questionText: "Untitled Question 1",
          answerType: "Multiple Choice",
          isRequired: false,
          choices: [{ choiceText: "Option 1" }],
        },
      ],
    },
    mode: "onBlur",
  });

  const { fields, append, remove, update } = useFieldArray({
    name: "questions",
    control,
  });

  const [answerType, setAnswerType] = useState("Multiple Choice");
  const [accordionItems, setAccordionItems] = useState([0]);

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("#000", "#fff");
  const styles = Styles();

  const addNewAccordionItem = () => {
    setAccordionItems([...accordionItems, accordionItems.length]);
  };

  const duplicateAccordionItem = (index: number) => {
    const updatedAccordionItems = [...accordionItems];
    updatedAccordionItems.splice(index + 1, 0, index + 1);
    setAccordionItems(updatedAccordionItems);
  };

  // removeAccordionItems function with the fields array
  const removeAccordionItem = (qIndex: number, cIndex: number) => {
    const updatedFields = fields[qIndex].choices.splice(cIndex, 1);
    console.log(qIndex, cIndex, updatedFields);
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Container maxW={"100vw"}>
      <form onSubmit={onSubmit}>
        <Stack
          mt={5}
          borderTop={"10px solid #6d63fc"}
          rounded={"2xl"}
          p={5}
          w={"50vw"}
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
              defaultValue: "Untitled Document",
              _focusVisible: { outline: "none", border: "none" },
              fontWeight: 500,
              fontSize: "3xl",
            }}
          />
          <TextAreaInput
            name="paragraph_answer"
            control={control}
            placeholder="Untitled Description"
            size="lg"
            minRows={1}
            rest={{
              h: "50%",
              border: "none",
              color: textColor,
              defaultValue: "Untitled Description",
              _focusVisible: { outline: "none", border: "none" },
              fontSize: "xl",
            }}
          />
        </Stack>

        <Container
          id="formBuilder-Input-container"
          w={"full"}
          maxW={"50vw"}
          px={0}
        >
          <Accordion allowToggle allowMultiple>
            {fields.map((question, questionIndex) => (
              <AccordionItem key={question.id}>
                <Stack mt={5} rounded={"2xl"} bg={bgColor}>
                  <AccordionButton
                    p={5}
                    _hover={{
                      bgColor: "#dbceff",
                      borderRadius: "16px 16px 0 0",
                    }}
                  >
                    <Flex pl={5} direction={"column"} flex="1" textAlign="left">
                      <Box
                        sx={styles.accordionBoxStyles}
                        justifyContent={"space-between"}
                      >
                        <Text fontSize={"lg"} color={textColor}>
                          {question.questionText}
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
                      <Box pt={5}>
                        <Radio value="1">Option 1</Radio>
                      </Box>
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel>
                    <Stack direction={"column"} px={6}>
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
                        <Box
                          p={"0 0 10px"}
                          flex={1}
                          display={"flex"}
                          alignItems={"end"}
                        >
                          <CustomTooltipWithIcon
                            icon={<HiOutlinePhoto />}
                            label="Add Image"
                            color="#fff"
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
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Divider />
                      <Stack
                        id="answer-container"
                        sx={styles.answerContainerStackStyles}
                      >
                        {answerType === "Paragraph" ? (
                          <TextAreaInput
                            name={`questions[${questionIndex}].paragraphAnswer`}
                            control={control}
                            placeholder="Enter your answer..."
                            size="lg"
                          />
                        ) : answerType === "Checkboxes" ||
                          answerType === "Multiple Choice" ? (
                          <>
                            {question.choices.map((choice, choiceIndex) => (
                              <Box key={choiceIndex}>
                                {answerType === "Checkboxes" ? (
                                  // Checkbox choices here
                                  <Stack
                                    alignItems="center"
                                    maxW="full"
                                    flex={1}
                                  >
                                    <Box sx={styles.accordionBoxStyles} gap={2}>
                                      <Checkbox colorScheme="purple" />
                                      <InputField
                                        name={`questions[${questionIndex}].choices[${choiceIndex}].choiceText`}
                                        control={control}
                                        type="text"
                                        placeholder={`Option ${
                                          choiceIndex + 1
                                        }`}
                                        disable={false}
                                        inputHeadingType="Normal"
                                        inputHeadingLabel=""
                                      />
                                      <CustomTooltipWithIcon
                                        icon={<HiOutlinePhoto />}
                                        label="Add Image"
                                        color="#fff"
                                      />
                                      <CustomTooltipWithIcon
                                        icon={<GrFormClose />}
                                        label="Remove"
                                        color="#fff"
                                        onClick={() =>
                                          remove(
                                            parseInt(
                                              `question.choices[${choiceIndex}]`
                                            )
                                          )
                                        }
                                      />
                                    </Box>
                                  </Stack>
                                ) : (
                                  // Radio choices here
                                  <Grid
                                    templateRows="repeat(1, 1fr)"
                                    templateColumns="repeat(7, 1fr)"
                                    gap={4}
                                  >
                                    <GridItem
                                      colSpan={6}
                                      display="flex"
                                      alignItems="center"
                                      gap={2}
                                      w={"full"}
                                    >
                                      <Radio colorScheme="purple" />
                                      <InputField
                                        name={`questions[${questionIndex}].choices[${choiceIndex}].choiceText`}
                                        control={control}
                                        type="text"
                                        placeholder={`Option ${
                                          choiceIndex + 1
                                        }`}
                                        disable={false}
                                        inputHeadingType="Normal"
                                        inputHeadingLabel=""
                                        rest={{ flex: 1, width: "100%" }}
                                      />
                                    </GridItem>
                                    <GridItem display={"flex"}>
                                      <Box
                                        sx={styles.accordionBoxStyles}
                                        gap={2}
                                      >
                                        <CustomTooltipWithIcon
                                          icon={<HiOutlinePhoto />}
                                          label="Add Image"
                                          color="#fff"
                                        />
                                        <CustomTooltipWithIcon
                                          icon={<GrFormClose />}
                                          label="Remove"
                                          color="#fff"
                                        />
                                      </Box>
                                    </GridItem>
                                  </Grid>
                                )}
                              </Box>
                            ))}
                            {answerType === "Checkboxes" ||
                            answerType === "Multiple Choice" ? (
                              <Box pt={3}>
                                <Button
                                  variant="outline"
                                  colorScheme="purple"
                                  // onClick={() => {
                                  //   append(
                                  //     `questions[${questionIndex}].choices`
                                  //     // ,
                                  //     // {
                                  //     //   choiceText: `Option ${
                                  //     //     questions[questionIndex].choices
                                  //     //       .length + 1
                                  //     //   }`,
                                  //     // }
                                  //   );
                                  // }}
                                >
                                  Add Choice
                                </Button>
                              </Box>
                            ) : null}
                          </>
                        ) : null}
                      </Stack>
                      <Divider />
                      <Stack
                        id="question-actions"
                        direction={"row"}
                        maxW="full"
                      >
                        <Box sx={styles.questionActionsStyle}>
                          <CustomTooltipWithIcon
                            label="Duplicate"
                            icon={<MdContentCopy />}
                            color="#fff"
                            onClick={() =>
                              append({
                                questionText: `Untitled Question ${
                                  fields.length + 1
                                }`,
                                answerType: "Multiple Choice",
                                isRequired: false,
                                choices: [{ choiceText: "Option 1" }],
                              })
                            }
                          />
                          <CustomTooltipWithIcon
                            label="Delete"
                            icon={<FaRegTrashAlt />}
                            onClick={() => remove(questionIndex)}
                            color="#fff"
                          />
                          <FormLabel
                            htmlFor={`questions[${questionIndex}].isRequired`}
                          >
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
            ))}
            <Flex align={"center"} flex={1} justifyContent={"end"} gap={5}>
              <Button
                mt={2}
                variant="outline"
                colorScheme="purple"
                _hover={{ bg: "purple.500" }}
                color={"white"}
                onClick={() =>
                  append({
                    questionText: `Untitled Question ${fields.length + 1}`,
                    answerType: "Multiple Choice",
                    paragraphAnswer: "",
                    isRequired: false,
                    choices: [{ choiceText: "Option 1" }],
                  })
                }
              >
                Add New Question
              </Button>
              <Button mt={2} colorScheme="purple" type="submit">
                Create
              </Button>
            </Flex>
          </Accordion>
        </Container>
      </form>
    </Container>
  );
};



// / import {
//   Accordion,
//   AccordionButton,
//   AccordionIcon,
//   AccordionItem,
//   AccordionPanel,
//   Box,
//   Button,
//   Checkbox,
//   Container,
//   Divider,
//   Flex,
//   FormLabel,
//   Grid,
//   GridItem,
//   IconButton,
//   Radio,
//   Stack,
//   Switch,
//   Tag,
//   TagLabel,
//   TagRightIcon,
//   Text,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { CutsomTooltip, Selector } from "@modules/common";
// import { InputField } from "@modules/common/Form";
// import { TextAreaInput } from "@modules/common/Form/textAreaInput";
// import { useState } from "react";
// import { Controller, useFieldArray, useForm } from "react-hook-form";
// import {
//   AiFillEye,
//   AiOutlineImport,
//   AiOutlinePlusCircle,
// } from "react-icons/ai";
// import { BsImage, BsTextParagraph } from "react-icons/bs";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { GoVideo } from "react-icons/go";
// import { GrFormClose } from "react-icons/gr";
// import { HiOutlinePhoto } from "react-icons/hi2";
// import { ImCheckboxChecked } from "react-icons/im";
// import { IoMdRadioButtonOn } from "react-icons/io";
// import { MdContentCopy, MdTitle } from "react-icons/md";
// import { TbSection } from "react-icons/tb";
// import { Styles } from "./index.styles";

// const iconData = [
//   {
//     title: "Add Question",
//     icon: <AiOutlinePlusCircle size={25} />,
//     onClick: () => {
//       // Define the action for this icon's click event
//     },
//   },
//   {
//     title: "Import Questions",
//     icon: <AiOutlineImport size={25} />,
//     onClick: () => {
//       // Define the action for this icon's click event
//     },
//   },
//   {
//     title: "Add Title",
//     icon: <MdTitle size={25} />,
//     onClick: () => {
//       // Define the action for this icon's click event
//     },
//   },
//   {
//     title: "Add Image",
//     icon: <BsImage size={25} />,
//     onClick: () => {
//       // Define the action for this icon's click event
//     },
//   },
//   {
//     title: "Add Video",
//     icon: <GoVideo size={25} />,
//     onClick: () => {
//       // Define the action for this icon's click event
//     },
//   },
//   {
//     title: "Add Section",
//     icon: <TbSection size={25} />,
//     onClick: () => {
//       // Define the action for this icon's click event
//     },
//   },
// ];

{
  /* <Stack
  bg={bgColor}
  rounded={"xl"}
  shadow={"2xl"}
  minHeight={"10vh"}
  position={"absolute"}
  right={"20vw"}
  py={1}
>
  {iconData.map((item, index) => (
    <CutsomTooltip
      key={index}
      label={item.title}
      placement="right"
      color={iconHoverColor}
    >
      <Box
        key={index}
        as={Button}
        variant="ghost"
        onClick={item.onClick}
        transition="background-color 0.3s"
        color={useColorModeValue("#6d63fc", "#fff")}
        _hover={{
          color: iconHoverColor,
          bgColor: iconHoverBgColor,
        }}
      >
        {React.cloneElement(item.icon, {
          _hover: { color: iconHoverColor },
        })}
      </Box>
    </CutsomTooltip>
  ))}
</Stack> */
}

// {
//   fields.map((question, questionIndex) => (
//     <AccordionItem key={question.id} border="none">
//       <Stack mt={5} rounded={"2xl"} bg={bgColor}>
//         <AccordionButton
//           id="question_preview"
//           p={5}
//           _hover={{
//             bgColor: "#dbceff",
//             borderRadius: "16px 16px 0 0",
//             border: "none",
//           }}
//         >
//           <Flex pl={5} direction={"column"} flex="1" textAlign="left">
//             <Box
//               sx={styles.accordionBoxStyles}
//               justifyContent={"space-between"}
//             >
//               <Text id="question" fontSize={"lg"} color={textColor}>
//                 {watchAllFields.questions[questionIndex].questionText}
//               </Text>
//               <Tag
//                 size={"md"}
//                 borderRadius="full"
//                 variant="solid"
//                 colorScheme="purple"
//               >
//                 <TagLabel>Preview</TagLabel>
//                 <TagRightIcon as={AiFillEye} />
//               </Tag>
//             </Box>
//             <Stack pt={5} id="question_choices" display={"block"}>
//               {watchAllFields.questions[questionIndex].choices.map(
//                 (choice, choiceIndex) =>
//                   watchAllFields.questions[questionIndex].answerType ===
//                   "Multiple Choice" ? (
//                     <Radio
//                       key={choiceIndex}
//                       value={choice.choiceText}
//                       colorScheme="purple"
//                       isDisabled
//                     >
//                       {choice.choiceText}
//                     </Radio>
//                   ) : watchAllFields.questions[questionIndex].answerType ===
//                     "Checkboxes" ? (
//                     <Checkbox isDisabled key={choiceIndex} colorScheme="purple">
//                       {choice.choiceText}
//                     </Checkbox>
//                   ) : (
//                     <Textarea
//                       key={choiceIndex}
//                       placeholder="Enter your answer..."
//                       size="lg"
//                       isDisabled
//                     />
//                   )
//               )}
//             </Stack>
//           </Flex>
//           <AccordionIcon />
//         </AccordionButton>
//         <Divider />
//         <AccordionPanel>
//           <Stack direction={"column"} px={6}>
//             <Box sx={styles.accordionBoxStyles}>
//               <Box w={"60%"} pr={3} alignItems={"end"}>
//                 <InputField
//                   name={`questions[${questionIndex}].questionText`}
//                   control={control}
//                   type="text"
//                   placeholder="Enter your Question*"
//                   disable={false}
//                   inputHeadingType="Bold"
//                   inputHeadingLabel="Question"
//                   required
//                 />
//               </Box>
//               <Box p={"0 0 10px"} flex={1} display={"flex"} alignItems={"end"}>
//                 <CustomTooltipWithIcon
//                   icon={<HiOutlinePhoto />}
//                   label="Add Image"
//                   color="#fff"
//                 />
//                 <Box flex={1} pl={2}>
//                   <Selector
//                     name={`questions[${questionIndex}].answerType`}
//                     inputHeadingType="Bold"
//                     control={control}
//                     title="Answer Type"
//                     placeHolder="Select Type"
//                     disable={false}
//                     fontSize={14}
//                     defaultLabel="Multiple Choice"
//                     color="#4b4b4b"
//                     required={true}
//                     data={QuestionType}
//                     setOption={setAnswerType}
//                   />
//                 </Box>
//               </Box>
//             </Box>
//             <Divider />

//             {/* Choice Form is separated to make the nested Choice array and return to react hook form */}
//             <ChoicesForm
//               control={control}
//               questionIndex={questionIndex}
//               answerType={answerType}
//             />

//             <Divider />
//             <Stack id="question-actions" direction={"row"} maxW="full">
//               <Box sx={styles.questionActionsStyle}>
//                 <CustomTooltipWithIcon
//                   label="Duplicate"
//                   icon={<MdContentCopy />}
//                   color="#fff"
//                   onClick={() =>
//                     append({
//                       questionText: question.questionText,
//                       answerType: question.answerType,
//                       isRequired: question.isRequired,
//                       choices: question.choices,
//                     })
//                   }
//                 />
//                 <CustomTooltipWithIcon
//                   label="Delete"
//                   icon={<FaRegTrashAlt />}
//                   onClick={() => remove(questionIndex)}
//                   color="#fff"
//                 />
//                 <FormLabel htmlFor={`questions[${questionIndex}].isRequired`}>
//                   Required:
//                 </FormLabel>
//                 <Controller
//                   name={`questions.${questionIndex}.isRequired`}
//                   control={control}
//                   defaultValue={false}
//                   render={({ field }) => (
//                     <Switch
//                       id={`questions[${questionIndex}].isRequired`}
//                       colorScheme="purple"
//                       onChange={(e) => {
//                         field.onChange(e.target.checked);
//                       }}
//                     />
//                   )}
//                 />
//               </Box>
//             </Stack>
//           </Stack>
//         </AccordionPanel>
//       </Stack>
//     </AccordionItem>
//   ));
// }
