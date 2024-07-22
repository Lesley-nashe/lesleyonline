import React, { useMemo, useState } from "react";
import { CartItem, ProductItem } from "../../helpers";
import { Button, Flex, Heading, Input, SimpleGrid } from "@chakra-ui/react";
import { getProducts } from "../../Apis/products/request";
import ProductCard from "../../components/Product";
import { useApiResult } from "../../Apis/products/apiResult";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const request = useMemo(() => getProducts(), []);
  const results = useApiResult(request) as unknown as [];
  const navigate = useNavigate();
  const data: ProductItem[] = results.map((item: any) => {
    return item;
  });

  const finalProductList: ProductItem[] = data.map((item) => {
    const newItem = {
      name: item.name,
      description: item.description,
      price: item.price,
      inventoryCount: item.inventoryCount,
      _id: item._id,
    };
    return newItem;
  });

  const [value, setValue] = useState("");
  const handleChange = (event: any) => setValue(event.target.value);
  const filteredData = finalProductList.filter((item: any) => {
    const searchText = value.toLowerCase();
    const nameSearch = item.name.toLowerCase();
    const descriptionSearch = item.description.toLowerCase();
    return (
      nameSearch.includes(searchText) || descriptionSearch.includes(searchText)
    );
  });

  return (
    <Flex justifyContent={"center"} width={"100%"}>
      <Flex justifyContent={"center"} width={"100%"}>
        <Flex
          width={"100%"}
          px={"4%"}
          direction={"column"}
          justifyContent={"center"}
        >
          <Flex my={3} justifyContent={"center"}>
            <Heading>Home page</Heading>
          </Flex>
          <Flex my={2} justifyContent="flex-end">
            <Flex direction={'column'}>
            <Input
              value={value}
              onChange={handleChange}
              width="250px"
              placeholder="Search"
            />
            <Flex>
              <Button
                colorScheme="white"
                background="#22bb33"
                onClick={() => navigate("/product")}
                mt={2}
                width="250px"
              >
                Create
              </Button>
            </Flex>
            </Flex>
          </Flex>
          <SimpleGrid columns={1} spacing={10}>
            {filteredData.map((product) => (
              <ProductCard
                name={product.name}
                description={product.description}
                price={product.price}
                inventoryCount={product.inventoryCount}
                id={product._id}
              />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomePage;
