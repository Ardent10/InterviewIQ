import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { Loader } from "../Loader";
import { useState } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

interface PdfPreviewProps {
  file: File;
  handleRemoveFile: () => void;
}

export default function PdfPreview({
  file,
  handleRemoveFile,
}: PdfPreviewProps) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function nextPage() {
    numPages &&
      setPageNumber((prev) => (prev < numPages ? prev + 1 : numPages));
  }

  function prevPage() {
    setPageNumber((prev) => (prev <= 1 ? 1 : prev - 1));
  }
  console.log("pdf=>", file);

  return (
    <Stack
      id="pdf-container"
      width={"full"}
      height={"full"}
      justify-center
      items-center
    >
      <Box
        id="pdf-wrapper1"
        position="relative"
        boxShadow="lg"
        borderRadius="lg"
        padding={3}
        width="auto"
        bg="#fdfdfd"
        cursor="pointer"
        borderWidth="2px"
        borderColor="transparent"
        transition="border-color 0.2s"
        _hover={{ borderColor: "indigo.500" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          id="pdf-wrapper2"
          position="absolute"
          top={0}
          right={0}
          padding="1/2"
          borderRadius="full"
          zIndex={1}
          cursor="pointer"
          _hover={{ transform: "scale(1.1)" }}
          onClick={handleRemoveFile}
        >
          <img src="/assets/close.svg" width="50px" alt="close" />
        </Box>

        <Document
          file={file}
          loading={<Loader />}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            width={350}
            pageNumber={pageNumber}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
        <Text fontWeight={500}>{file?.name}</Text>
      </Box>
      {numPages !== undefined && numPages > 1 && (
        /* PDF Controls */
        <Box
          className="flex flex-col pt-2 cursor-pointer"
          id="control-container"
        >
          <div className="flex justify-between">
            <img
              src="/assets/prev.svg"
              width="20px"
              alt="prev"
              onClick={prevPage}
            />
            <img
              src="/assets/next.svg"
              width="20px"
              alt="next"
              onClick={nextPage}
            />
          </div>
          <Text fontSize="xs">
            Page {pageNumber} of {numPages}
          </Text>
        </Box>
      )}
    </Stack>
  );
}
