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
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { CartItem } from "../../helpers";
import { useCheckout } from "../../hooks/useCheckout";
import { useAuth } from "../../Authentication/AuthProvider";

interface CheckoutModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const CheckOutModal: FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const userCart = JSON.parse(localStorage.getItem("cart") || "[]");
  const {user} = useAuth();
  const shoppingCart: CartItem[] =  userCart as unknown as CartItem[]
  const {checkout} = useCheckout();

  const finalShoppingCart = shoppingCart.map((item) => {
    const newItem = {
      name: item.name,
      description: item.description,
      price: item.count * item.price,
      count: item.count
    }
    return newItem
  });

  const productInputs = finalShoppingCart.map((item) => {
    const newitem = {
        productName: item.name,
        Quantity: item.count,
    }
    return newitem
  });

  const sum = finalShoppingCart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
  },0);

  return (
    <Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Purchase Total</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UnorderedList >
              {finalShoppingCart.map((item) => (
                  <ListItem><Text>Procduct: {item.name} - Quantity Bought: {item.count} - Price: R{item.price} </Text></ListItem>
              ))}
            </UnorderedList>
            <Text fontWeight='bold' fontSize={'larger'}>Total: R{sum}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={async () => {
              await checkout(sum, user.Id,productInputs)}}>
              Purchase
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default CheckOutModal;
