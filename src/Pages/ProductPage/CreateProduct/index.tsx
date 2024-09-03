import {
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useCreateProduct } from "../../../hooks/usePostProduct";
import { CreateSchema } from "../../../helpers";
import FormInput from "../../../components/FormComponents/FormInput";

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
              validationSchema={CreateSchema}
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
                  <FormInput
                    labelColor={"black"}
                    width={"500px"}
                    name="name"
                    title="Name :"
                    my={2}
                    inputColor="#bbbbbb"
                  />
                  <FormInput
                    labelColor={"black"}
                    width={"500px"}
                    name="description"
                    title="Description :"
                    my={2}
                    inputColor="#bbbbbb"
                  />
                  <FormInput
                    labelColor={"black"}
                    width={"500px"}
                    name="price"
                    title="Price :"
                    my={2}
                    inputColor="#bbbbbb"
                  />
                  <FormInput
                    labelColor={"black"}
                    width={"500px"}
                    name="inventoryCount"
                    title="inventoryCount :"
                    my={2}
                    inputColor="#bbbbbb"
                  />
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
