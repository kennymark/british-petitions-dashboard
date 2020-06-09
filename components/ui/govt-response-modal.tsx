import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/core";
import React from 'react';

function GovtResponseModal({ body }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} _focus={{ outline: 'none' }} variant='ghost' textAlign='center' color='green.700' variantColor='green' size='sm' _hover={{ fontWeight: 'bold', color: 'green:900', bg: 'green.200' }}>
        View Response
      </Button>


      <Modal onClose={onClose} isOpen={isOpen} preserveScrollBarGap size='xl' closeOnOverlayClick scrollBehavior='inside' >
        <ModalOverlay />
        <ModalContent pb={5} >
          <ModalHeader textAlign='center'>Official Govt Response</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as='p' color='gray.600' lineHeight={1.6} fontSize={18}>{body}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>


    </>
  );
}

export default GovtResponseModal