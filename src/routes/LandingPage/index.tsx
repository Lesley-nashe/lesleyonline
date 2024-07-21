import React, { useMemo } from "react";
import TableComponent from "../../components/Table";
import { addToCart, CartItem, column, ProductItem } from "../../helpers";
import { Button, useToast } from "@chakra-ui/react";
import { getProducts } from "../../Apis/products/request";
import useApiResult from "../../Apis/products/apiResult";
import { useAuthContext } from "../../hooks/useAuthContext";


const HomePage = () => {
  const toast = useToast()
  const request = useMemo(() => getProducts(), []);
  const results = useApiResult(request) as unknown as [];
  const data: ProductItem[] = results.map((item: any) =>{
    return item
  })

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
    title: "count",
    fieled: "count"
  },{
  title: "",
  fieled: "action"
}
  ] as column[]

  const finalProductList: CartItem[] = data.map((item) => {
    const newItem = {
      name: item.name,
      description: item.description,
      price: item.price,
      count: item.inventoryCount,
    }
    return{ 
      ...newItem,
      action: <> <Button onClick={() => { addToCart(newItem)
        toast({
          title: 'Item Added To Cart',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }} mx={2}>Add to Cart</Button> </>}; // Ensure to return the modified item
  })

  return (
    <TableComponent header={"Home Page"} columns={columns} Data={finalProductList} />
  );
};

export default HomePage;
