import React, { useEffect, useState } from "react";
import TableComponent from "../../components/Table";
import {
  addToCart,
  CartItem,
  column,
  removeItem,
} from "../../helpers";
import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import CheckOutModal from "../../components/Modal";

const CheckoutPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cartList, setCartList] = useState<CartItem[]>([]);
  const userCart = JSON.parse(localStorage.getItem("cart") || "[]");
  const [change, setHaschanged] = useState(0);

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
      fieled: "orderCount",
    },
    {
      title: "",
      fieled: "action",
    },
  ] as column[];

  const cartAddition = (item: CartItem) => {
    setHaschanged(change + 1);
    addToCart(item);
  };

  const cartSubtraction = (item: CartItem) => {
    setHaschanged(change - 1);
    removeItem(item);
  };

  useEffect(() => {
    if (!userCart) return;

    const shoppingCart: CartItem[] = userCart as unknown as CartItem[];

    setCartList(shoppingCart);
  }, [change, userCart]);

  const finalShoppingCart: CartItem[] = cartList.map((item) => {
    const newItem = {
      name: item.name,
      description: item.description,
      price: item.orderCount * item.price,
      inventoryCount: item.inventoryCount,
      orderCount: item.orderCount,
      _id: item._id
    };
    return {
      ...newItem,
      action: (
        <>
          <Button onClick={() => cartAddition(item)} mx={2}>
            +
          </Button>{" "}
          <Button onClick={() => cartSubtraction(item)}>-</Button>
        </>
      )
    } 
  });

  return (
    <Flex justifyContent={"center"} width={"100%"}>
      <Flex justifyContent={"center"} width={"100%"}>
        <Flex width={"100%"} direction={"column"}>
          <TableComponent header="Cart" columns={columns} Data={finalShoppingCart} />
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
