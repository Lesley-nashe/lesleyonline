import { useMemo } from "react";
import {
  Button,
  Flex,
  FormLabel,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useUpdateProduct } from "../../../hooks/useUpdateProduct";
import { useDeleteProduct } from "../../../hooks/useDeleteProduct";
import { getProduct } from "../../../hooks/product/request";
import { useApiResult } from "../../../hooks/product/apiResult";
import * as Yup from "yup";

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

  const EditSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    description: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    price: Yup.number()
      .typeError("Please enter a price. The field cannot be left blank.")
      .positive("Must be a positive number."),
    inventoryCount: Yup.number()
      .typeError(
        "Please enter an inventory count. The field cannot be left blank."
      )
      .positive("Must be a positive number."),
  });

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
                      <FormLabel htmlFor="inventoryCount">
                        inventoryCount
                      </FormLabel>
                      <Field
                        as={Input}
                        id="inventoryCount"
                        name="inventoryCount"
                        type="inventoryCount"
                        variant="filled"
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
