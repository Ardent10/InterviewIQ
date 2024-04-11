import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Dropzone } from "@modules/common";
import PdfPreview from "@modules/common/Dropzone/pdfPreview";
import { useRef, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";

interface props {
  control: any;
  name: string;
  setOpenModal: any;
  setValue: any;
  dropzoneText?: string;
}

function ConvertImageToBase64(file: any) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

export function UploadImage({
  control,
  name,
  setOpenModal,
  setValue,
  dropzoneText,
}: props) {
  const [selectedFilePath, setSelectedFilePath] = useState<string[]>([]);
  const [fileSizeErrorMsg, setFileSizeErrorMsg] = useState<string>("");
  const [fileTaken, setFile] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();

  const handleChange = (files: FileList | null) => {
    if (fileSizeErrorMsg !== "") setFileSizeErrorMsg("");

    if (files !== null && files.length !== 0) {
      const file = files[0];
      if (file?.size > 4000000) {
        setFileSizeErrorMsg("Image size should be less than 4MB.");
      }
      setFile((oldArray) => {
        return oldArray.includes(file) ? [...oldArray] : [...oldArray, file];
      });
      const filePath = URL.createObjectURL(file);
      setSelectedFilePath((oldArray) => {
        return oldArray.includes(filePath)
          ? [...oldArray]
          : [...oldArray, filePath];
      });
    } else {
      URL.revokeObjectURL(selectedFilePath[0]);
      setFileSizeErrorMsg("");
      setSelectedFilePath([]);
      setFile([]);
    }
  };

  const editFile = (index: number) => {
    if (fileInputRef.current !== null) {
      fileInputRef.current.click();
    }
    setFile((file) => [
      ...file.slice(0, index),
      ...file.slice(index + 1, file.length),
    ]);
    setSelectedFilePath((paths) => [
      ...paths.slice(0, index),
      ...paths.slice(index + 1, paths.length),
    ]);
  };

  const removeImage = (index: number) => {
    URL.revokeObjectURL(selectedFilePath[index]);
    setFile((file) => [
      ...file.slice(0, index),
      ...file.slice(index + 1, file.length),
    ]);
    setSelectedFilePath((paths) => [
      ...paths.slice(0, index),
      ...paths.slice(index + 1, paths.length),
    ]);
  };

  const handleUpload = async () => {
    setIsLoading(true);
    if (fileTaken.length !== 0) {
      const base64 = await ConvertImageToBase64(fileTaken[0]);
      setValue(name, base64);

      setOpenModal(false);

      toast({
        title: "Upload Success",
        description: "Your image has been uploaded.",
        position: "bottom-left",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "No File Selected",
        description: "Please select a file to upload.",
        position: "bottom-left",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setIsLoading(false);
  };
  console.log(fileTaken);
  return (
    <Grid templateColumns="1fr" gap={4}>
      <Divider />
      <Box>
        {fileSizeErrorMsg && (
          <Box color="red">
            <Text>{fileSizeErrorMsg}</Text>
          </Box>
        )}
        <form>
          <Box display="flex" h={"full"} flexDirection="column" p={3}>
            {selectedFilePath[0] === undefined && (
              <Grid rowGap={2} p={3}>
                <Dropzone
                  dropzoneText={dropzoneText}
                  control={control}
                  name={name}
                  setDragAndDropFiles={(files: any) => {
                    handleChange(files);
                  }}
                />
              </Grid>
            )}

            {selectedFilePath?.length !== 0 &&
            fileTaken[0]?.type === "application/pdf" ? (
              <Grid w={"full"} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <PdfPreview
                  file={fileTaken[0]}
                  handleRemoveFile={() => setFile([])}
                />
              </Grid>
            ) : (
              <Grid w={"full"}>
                {fileTaken.map((file, index) => (
                  <Box
                    p={3}
                    width={"full"}
                    bg={"#dbceff"}
                    display="flex"
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <Box
                      key={index}
                      display="flex"
                      alignItems="center"
                      justifyContent={"space-between"}
                    >
                      <Box display={"flex"} flex={1}>
                        <Text
                          fontSize="16px"
                          fontWeight="bold"
                          color="blue.500"
                        >
                          {file.name.length > 20
                            ? file.name.slice(0, 20) + "..."
                            : file.name}
                        </Text>
                        <Text ml={2}>{Math.floor(file.size / 1000)} KB</Text>
                      </Box>
                    </Box>
                    <Box display={"flex"} gap={3}>
                      <img
                        src={selectedFilePath[0]}
                        alt="preview"
                        width={"200px"}
                      />
                      <Box display={"flex"} gap={3} flexDirection={"column"}>
                        <IconButton
                          mr={1}
                          size={"sm"}
                          onClick={() => {
                            editFile(index);
                          }}
                          colorScheme="purple"
                          aria-label="Edit"
                          icon={<FiEdit2 />}
                        />
                        <IconButton
                          size={"sm"}
                          onClick={() => {
                            removeImage(index);
                          }}
                          aria-label="Remove"
                          icon={<GrFormClose />}
                        />
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Grid>
            )}

            <Grid p={2} display="flex" justifyContent="flex-end">
              <Grid>
                <Button
                  h={35}
                  w="full"
                  rounded={"xl"}
                  shadow={"2xl"}
                  bgGradient={"linear-gradient(to right, #8172fd, #c0afff)"}
                  color={"#fff"}
                  _hover={{
                    border: "1px solid #6d63fc",
                    bg: "#fff",
                    transform: "translateY(-0.05em)",
                    color: "#000",
                  }}
                  isLoading={isLoading}
                  loadingText="Please Wait..."
                  isDisabled={selectedFilePath.length === 0}
                  onClick={handleUpload}
                >
                  Upload
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Box>
    </Grid>
  );
}
