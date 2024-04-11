import { Container, Text, IconButton, Box } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useForms } from "@modules/forms/hooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";

export const ResponseTab = () => {
  const { id } = useParams();
  const [formResponses, setFormResponses] = useState([]);

  const { getAllformsResponsesById, loading } = useForms();
  useEffect(() => {
    const formsResponsesById = async () => {
      if (id) {
        const responseData = await getAllformsResponsesById(id);
        setFormResponses(responseData);
      }
    };
    formsResponsesById();
  }, [id]);

  const handleOpenResponse = (response: any) => {
    console.log("response", response);
    window.open(
      `${window.location.origin}/forms/forms-response/view/${response?.formId}/${response?._id}`,
      "_blank"
    );
  }

  return (
    <Container maxW={"2xl"} py={5}>
      <TableContainer rounded={"xl"} shadow={"2xl"}>
        <Table variant="striped" colorScheme="purple" bg={"#fff"}>
          {/* <TableCaption>{new Date().getFullYear()} MercForms.</TableCaption> */}
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Responses</Th>
            </Tr>
          </Thead>
          <Tbody>
            {formResponses?.length > 0 ? (
              formResponses?.map((response: any) => (
                <Tr>
                  <Td>{response?.userFullName}</Td>
                  <Td>{response?.email}</Td>
                  <Td isNumeric>
                    <IconButton
                      aria-label="View Responses"
                      icon={<BiLinkExternal />}
                      onClick={() => handleOpenResponse(response)}
                    />
                  </Td>
                </Tr>
              ))
            ) : (
              <Box p={5}>
                <Text textAlign={"center"}>No Responses Available</Text>
              </Box>
            )}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th isNumeric>Total Responses: {formResponses?.length || 0}</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Container>
  );
};
