import React, { FC, useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import TableComponent from "../../components/Table";
import { column } from "../../helpers";

const HomePage = ({}) => {

  const columns = [{
    title: "name",
    fieled: "name"
  },
  {
    title: "description",
    fieled: "description"
  },
  {
    title: "price",
    fieled: "price"
  },
  {
    title: "inventoryCount",
    fieled: "inventoryCount"
  }] as column[]

  const products = [
    {
      name: "Bread",
      description: "Baked product for eating",
      price: 11.45,
      inventoryCount: 1000,
    },
    {
      name: "Table",
      description: "Office and home furniture to place things",
      price: 1400.89,
      inventoryCount: 17,
    },
    {
      name: "Milk",
      description: "Dairy beverage product",
      price: 20.0,
      inventoryCount: 899,
    },
    {
      name: "Television",
      description: "Home and ofiice furniture for entertainment",
      price: 6700.89,
      inventoryCount: 32,
    },
    {
      name: "Screwdriver",
      description: "Tool used for building and repairing objects",
      price: 45.9,
      inventoryCount: 10,
    },
  ];


  return (
    <TableComponent header={"Home Page"} columns={columns} Data={products} />
  );
};

export default HomePage;
