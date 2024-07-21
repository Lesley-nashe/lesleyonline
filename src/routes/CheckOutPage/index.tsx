import React from "react";
import TableComponent from "../../components/Table";
import { addToCart, CartItem, column } from "../../helpers";
import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import CheckOutModal from "../../components/Modal";

const CheckoutPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const columns = [
    {
      title: "name",
      fieled: "name",
    },
    {
      title: "description",
      fieled: "description",
    },
    {
      title: "price",
      fieled: "price",
    },
    {
      title: "count",
      fieled: "count",
    },
    {
      title: "",
      fieled: "action",
    },
  ] as column[];

  const userCart = JSON.parse(localStorage.getItem('cart') || '[]');

  const shoppingCart: CartItem[] =  userCart as unknown as CartItem[]

  const finalShoppingCart = shoppingCart.map((item) => {
    const newItem = {
      name: item.name,
      description: item.description,
      price: item.count * item.price,
      count: item.count
    }
    return newItem
  })

  const finalPurchaseList: CartItem[] = finalShoppingCart.map((item) => {
    return {
      ...item,
      action: (
        <>
          <Button onClick={() => addToCart(item)} mx={2}>+</Button> <Button>-</Button>
        </>
      )
    };
  });

  return (
    <Flex justifyContent={"center"} width={"100%"}>
      <Flex justifyContent={"center"} width={"100%"}>
        <Flex width={'100%'} direction={'column'}>
        <TableComponent
          header="Cart"
          columns={columns}
          Data={finalPurchaseList}
        />
        <Flex mb={5} mr={10} justifyContent="flex-end">
          <Button onClick={onOpen} colorScheme="white" background="#22bb33">
            Checkout
          </Button>
          <CheckOutModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CheckoutPage;
