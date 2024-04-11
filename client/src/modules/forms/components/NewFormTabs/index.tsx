import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import { FormBuilder as FormQuestionTab } from "../Form/FormBuilder";
import { ResponseTab } from "../Form/FormResponses/responseTab";


export const NewFormsTabs = () => {
  const tabSelectedColor = useColorModeValue("#6d63fc", "white");
  const tabSelectedBorderColor = useColorModeValue("#6d63fc", "white");

  return (
    <Tabs minW={"full"} align="center" pt={6}>
      <TabList
        mb={5}
        w={"100%"}
        position={"fixed"}
        background={useColorModeValue("white", "gray.800")}
        zIndex={1}
      >
        <Tab
          marginRight={5}
          _selected={{
            color: tabSelectedColor,
            borderBottom: `3px solid ${tabSelectedBorderColor}`,
          }}
        >
          Questions
        </Tab>
        <Tab
          _selected={{
            color: tabSelectedColor,
            borderBottom: `3px solid ${tabSelectedBorderColor}`,
          }}
        >
          Responses
        </Tab>
      </TabList>
      <TabPanels
        bg={useColorModeValue(
          "url(/assets/form/formBuilder-bg.svg)",
          "url(/assets/form/form-dark-bg.svg)"
        )}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        position={"relative"}
        top={"40px"}
      >
        <TabPanel minH={"90vh"}>
          <FormQuestionTab />
        </TabPanel>
        <TabPanel minH={"90vh"}>
          <ResponseTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
