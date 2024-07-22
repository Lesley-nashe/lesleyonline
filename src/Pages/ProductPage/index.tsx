import React, { useMemo } from "react";
import {
  Button,
  Flex,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { getProduct } from "../../Apis/product/request";
import { useApiResult } from "../../Apis/product/apiResult";

type Product = {
  name: String,
  inventoryCount: String,
  description: String,
  price: Number,
  _id: Number
}

const Products = () => {
  const { id } = useParams();
  const request = useMemo(() => getProduct(id || ''), []);
  const results = useApiResult(request) as Product;
  console.log(results)

  return (
    <Flex alignContent={"center"} justifyContent={"center"} width={"100%"}>
      <Flex justifyContent={"center"} width={"50%"}>
        <Flex direction={"column"}>
          <Flex justifyContent={"center"}>
            <Text fontSize={"50px"} fontWeight="bold">
              Edit Product
            </Text>
          </Flex>
          <Flex>
            <Formik
              initialValues={{
                name: results.name,
                description: results.description,
                price: results.price,
                inventoryCount: results.inventoryCount
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <Flex width={"500px"} direction="column" mb={3}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="name"
                    variant="filled"
                  />
                </Flex>
                <Flex direction="column" mb={3}>
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <Field
                    as={Input}
                    id="description"
                    name="description"
                    type="desciption"
                    variant="filled"
                  />
                </Flex>
                <Flex direction="column" mb={3}>
                  <FormLabel htmlFor="price">Price</FormLabel>
                  <Field
                    as={Input}
                    id="price"
                    name="price"
                    type='price'
                    variant="filled"
                  />
                </Flex>
                <Flex direction="column" mb={3}>
                  <FormLabel htmlFor="inventoryCount">inventoryCount</FormLabel>
                  <Field
                    as={Input}
                    id="inventoryCount"
                    name="inventoryCount"
                    type="inventoryCount"
                    variant="filled"
                  />
                  <FormErrorMessage></FormErrorMessage>
                </Flex>
                <Flex justifyContent={"center"} mt={4}>
                  <Button
                    colorScheme="white"
                    background="#22bb33"
                    type="submit"
                    mx={2}
                  >
                    Edit
                  </Button>
                  <Button
                    colorScheme="white"
                    background="red"
                    type="submit"
                    ml={5}
                  >
                    Delete
                  </Button>
                </Flex>
              </Form>
            </Formik>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Products;
