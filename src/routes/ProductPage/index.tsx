import React, { useMemo } from 'react'
import { addToCart, CartItem, column, ProductItem } from '../../helpers';
import { getProducts } from '../../Apis/products/request';
import { Button, useToast } from '@chakra-ui/react';
import useApiResult from '../../Apis/products/apiResult';
import TableComponent from '../../components/Table';

const Products = () => {
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
    <TableComponent header={"Product Page"} columns={columns} Data={finalProductList} />
  );
}

export default Products
