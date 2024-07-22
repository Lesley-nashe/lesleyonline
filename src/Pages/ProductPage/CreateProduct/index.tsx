import { useMemo } from "react";
import {
  Button,
  Flex,
  FormErrorMessage,
  FormLabel,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useCreateProduct } from "../../../hooks/useProductCreate";

const CreateProduct = () => {
  const { createProduct } = useCreateProduct();
  const handleSubmit = async (
    name: String,
    description: String,
    price: Number,
    inventoryCount: Number
  ) => {
    await createProduct(name, description, price, inventoryCount);
  };

  return (
    <Flex alignContent={"center"} justifyContent={"center"} width={"100%"}>
      <Flex justifyContent={"center"} width={"50%"}>
        <Flex direction={"column"}>
          <Flex justifyContent={"center"}>
            <Text fontSize={"50px"} fontWeight="bold">
              Create Product
            </Text>
          </Flex>
          <Flex>
            <Formik
              initialValues={{
                name: "",
                description: "",
                price: 0,
                inventoryCount: 0,
              }}
              onSubmit={(values) => {
                handleSubmit(
                  values.name,
                  values.description,
                  values.price,
                  values.inventoryCount
                );
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
                    type="price"
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
                    Create
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

export default CreateProduct;
