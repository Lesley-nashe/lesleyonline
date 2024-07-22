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

const Products = () => {
  const { id } = useParams();
  const request = useMemo(() => getProduct(id || ''), []);
  const results = useApiResult(request);
  const {inventoryCount, name, description, price } = results

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
                name: name as String,
                desciption: description as String,
                price: price as Number,
                inventoryCount: inventoryCount as Number,
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <Flex width={"500px"} direction="column" mb={3}>
                  <FormLabel htmlFor="email">Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="name"
                    variant="filled"
                  />
                </Flex>
                <Flex direction="column" mb={3}>
                  <FormLabel htmlFor="email">Description</FormLabel>
                  <Field
                    as={Input}
                    id="description"
                    name="description"
                    type="desciption"
                    variant="filled"
                  />
                </Flex>
                <Flex direction="column" mb={3}>
                  <FormLabel htmlFor="password">Price</FormLabel>
                  <Field
                    as={Input}
                    id="price"
                    name="price"
                    type='price'
                    variant="filled"
                  />
                </Flex>
                <Flex direction="column" mb={3}>
                  <FormLabel htmlFor="password">inventoryCount</FormLabel>
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
                  >
                    Edit
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
