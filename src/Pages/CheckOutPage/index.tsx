import React, { useEffect, useState } from "react";
import TableComponent from "../../components/Table";
import {
  addToCart,
  CartItem,
  column,
  ProductItem,
  removeItem,
} from "../../helpers";
import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import CheckOutModal from "../../components/Modal";

const CheckoutPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cartList, setCartList] = useState<ProductItem[]>([]);
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
      fieled: "inventoryCount",
    },
    {
      title: "",
      fieled: "action",
    },
  ] as column[];

  const cartAddition = (item: ProductItem) => {
    setHaschanged(change + 1);
    addToCart(item);
  };

  const cartSubtraction = (item: ProductItem) => {
    setHaschanged(change - 1);
    removeItem(item);
  };

  useEffect(() => {
    if (!userCart) return;

    const shoppingCart: ProductItem[] = userCart as unknown as ProductItem[];

    const finalShoppingCart = shoppingCart.map((item) => {
      const newItem = {
        name: item.name,
        description: item.description,
        price: item.inventoryCount * item.price,
        inventoryCount: item.inventoryCount,
        _id: item._id
      };
      return newItem;
    });

    const finalPurchaseList: ProductItem[] = finalShoppingCart.map((item) => {
      return {
        ...item,
        action: (
          <>
            <Button onClick={() => cartAddition(item)} mx={2}>
              +
            </Button>{" "}
            <Button onClick={() => cartSubtraction(item)}>-</Button>
          </>
        ),
      };
    });

    setCartList(finalPurchaseList);
  }, [change]);

  return (
    <Flex justifyContent={"center"} width={"100%"}>
      <Flex justifyContent={"center"} width={"100%"}>
        <Flex width={"100%"} direction={"column"}>
          <TableComponent header="Cart" columns={columns} Data={cartList} />
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
