import React, { useMemo, useState } from "react";
import { CartItem, ProductItem } from "../../helpers";
import { Flex, Heading, Input, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import { getProducts } from "../../Apis/products/request";
import useApiResult from "../../Apis/products/apiResult";
import ProductCard from "../../components/Product";

const HomePage = () => {
  const toast = useToast();
  const request = useMemo(() => getProducts(), []);
  const results = useApiResult(request) as unknown as [];
  const data: ProductItem[] = results.map((item: any) => {
    return item;
  });

  const finalProductList: CartItem[] = data.map((item) => {
    const newItem = {
      name: item.name,
      description: item.description,
      price: item.price,
      count: item.inventoryCount,
    };
    return newItem;
  });

  const [value, setValue] = useState("");
  const handleChange = (event: any) => setValue(event.target.value);
  const filteredData = finalProductList.filter((item: any) => {
    const searchText = value.toLowerCase();
    const nameSearch = item.name.toLowerCase();
    const descriptionSearch = item.description.toLowerCase();
    return nameSearch.includes(searchText) || descriptionSearch.includes(searchText)
  });

  return (
    <Flex justifyContent={"center"} width={"100%"}>
      <Flex justifyContent={"center"} width={"100%"}>
        <Flex width={'100%'} px={'4%'} direction={'column'} justifyContent={"center"}>
          <Flex my={3} justifyContent={"center"}>
          <Heading>Home page</Heading>
          </Flex>
          <Flex my={2} justifyContent="flex-end">
            <Input
              value={value}
              onChange={handleChange}
              width="250px"
              placeholder="Search"
            />
          </Flex>
          <SimpleGrid columns={1} spacing={10}>
            {filteredData.map((product) => (
              <ProductCard
                name={product.name}
                description={product.description}
                price={product.price}
                inventoryCount={product.count}
              />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomePage;
