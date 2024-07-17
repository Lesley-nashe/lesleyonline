import React from "react";
import TableComponent from "../../components/Table";
import { checkoutItem, column } from "../../helpers";
import { Button, Flex } from "@chakra-ui/react";

const CheckoutPage = () => {
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

  let products = [
    {
      name: "Bread",
      description: "Baked product for eating",
      price: 11.45,
      count: 2,
    },
    {
      name: "Table",
      description: "Office and home furniture to place things",
      price: 1400.89,
      count: 1,
    },
    {
      name: "Milk",
      description: "Dairy beverage product",
      price: 20.0,
      count: 2,
    },
    {
      name: "Television",
      description: "Home and ofiice furniture for entertainment",
      price: 6700.89,
      count: 1,
    },
    {
      name: "Screwdriver",
      description: "Tool used for building and repairing objects",
      price: 45.9,
      count: 1,
    },
    {
      name: "Test",
      description: "test",
      price: 45.9,
      count: 1,
    },
  ] as checkoutItem[];

  const finalPurchaseList: checkoutItem[] = products.map((item) => {
    return {
      ...item,
      action: (
        <>
          <Button mx={2}>+</Button> <Button>-</Button>
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
          <Button colorScheme="white" background="#22bb33">
            Checkout
          </Button>
        </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CheckoutPage;
