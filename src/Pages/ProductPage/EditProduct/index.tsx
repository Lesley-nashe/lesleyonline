import { useMemo } from "react";
import {
  Button,
  Flex,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useUpdateProduct } from "../../../hooks/useUpdateProduct";
import { useDeleteProduct } from "../../../hooks/useDeleteProduct";
import { getProduct } from "../../../hooks/product/request";
import { useApiResult } from "../../../hooks/product/apiResult";
import FormInput from "../../../components/FormComponents/FormInput";
import { EditSchema } from "../../../helpers";

const Products = () => {
  const { id } = useParams();
  const request = useMemo(() => getProduct(id || ""), [id]);
  const { results, loading } = useApiResult(request);
  const { updateProduct } = useUpdateProduct();
  const { deleteProduct } = useDeleteProduct();
  const handleSubmit = async (price: Number, inventoryCount: Number) => {
    await updateProduct(id || "", price, inventoryCount);
  };

  const handleDelete = async () => {
    await deleteProduct(id || "");
  };

  return (
    <Flex alignContent={"center"} justifyContent={"center"} width={"100%"}>
      <Flex justifyContent={"center"} width={"50%"}>
        <Flex direction={"column"}>
          <Flex justifyContent={"center"}>
            <Text fontSize={"50px"} fontWeight="bold">
              Edit Product
            </Text>
          </Flex>
          {!loading ? (
            <Flex>
              <Formik
                initialValues={{
                  name: results?.name || "",
                  description: results?.description || "",
                  price: results?.price || 0,
                  inventoryCount: results?.inventoryCount || 0,
                }}
                validationSchema={EditSchema}
                onSubmit={(values) => {
                  handleSubmit(values.price, values.inventoryCount);
                }}
              >
                {({ errors }) => (
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
                        Edit
                      </Button>
                      <Button
                        colorScheme="white"
                        background="red"
                        type="submit"
                        ml={5}
                        onClick={handleDelete}
                      >
                        Delete
                      </Button>
                    </Flex>
                  </Form>
                )}
              </Formik>
            </Flex>
          ) : (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Products;
