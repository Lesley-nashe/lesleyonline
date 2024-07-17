import React from "react";
import TableComponent from "../../components/Table";
import { column, ProductItem } from "../../helpers";
import { Button } from "@chakra-ui/react";

const HomePage = () => {

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
  },{
  title: "",
  fieled: "action"
}
] as column[]

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
  ] as ProductItem[];

  const finalProductList: ProductItem[] = products.map((item) => {
    return{ 
      ...item,
      action: <> <Button mx={2}>Add to Cart</Button> </>}; // Ensure to return the modified item
  })

  return (
    <TableComponent header={"Home Page"} columns={columns} Data={finalProductList} />
  );
};

export default HomePage;
