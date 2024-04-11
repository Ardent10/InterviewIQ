import React, { ReactNode } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ModalProps,
} from "@chakra-ui/react";

interface CustomModalProps extends ModalProps {
  title: string;
  children: ReactNode;

}

export function CustomModal({
  isOpen,
  onClose,
  title,
  children,
  ...props
}: CustomModalProps) {
  return (
    <Modal
      blockScrollOnMount={false}
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      {...props}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="#6d63fc" fontSize={'2xl'}>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}