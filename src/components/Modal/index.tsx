import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";

interface CheckoutModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const CheckOutModal: FC<CheckoutModalProps> = ({ isOpen, onOpen, onClose }) => {
  return (
    <Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Purchase Total</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Purchase
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default CheckOutModal;
