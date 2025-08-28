import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

export default function LoginModal(props) {

  return (
    <>
      <Modal placement={'center'} backdrop='blur' isOpen={props.isOpen} onOpenChange={props.onOpenChange} className="bg-gray-800 py-10">
        <ModalContent>
            <ModalBody>
              {props.children}
            </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}