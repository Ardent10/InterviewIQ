import {FiUpload} from 'react-icons/fi'
import { Box, Text } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { Controller } from "react-hook-form";

interface props {
  setDragAndDropFiles: any;
  name: string;
  control: any;
}

export function Dropzone({
  setDragAndDropFiles,
  name,
  control,
}: props) {
  const onDrop = (acceptedFiles: { name: string }[]) => {
    setDragAndDropFiles(acceptedFiles);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { isTouched, isDirty, error },
        formState: { isValid },
      }) => {
        return (
          <Box
            border="2px solid #8a89fa"
            borderRadius="8px"
            sx={{
              borderStyle: "dashed",
              cursor: "pointer",
            }}
            p={5}
            {...getRootProps({ className: "dropzone-fileupload row" })}
          >
            <input
              {...getInputProps()}
              type="file"
              accept="png jpg jpeg gif bmp webp"
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
            />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              color="#8a89fa"
            >
              <FiUpload size={35} />
              <Text fontWeight={500} color="#8a89fa">
                {isDragActive
                  ? "Drop the files here..."
                  : "Choose or Drag & drop files here"}
              </Text>
            </Box>
          </Box>
        );
      }}
    />
  );
}
