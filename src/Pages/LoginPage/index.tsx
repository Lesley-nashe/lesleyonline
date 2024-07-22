import React from "react";
import {
  Button,
  Flex,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const LoginPage = () => {
  const { login } = useLogin()
  const navigate = useNavigate();
  const handleSubmitEvent = async (email: string, password: string) => {
    if (email !== "" && password !== "") {
      await login( email, password );
      return;
    }
    alert("please provide a valid input");
  };

  return (
    <Flex alignContent={"center"} justifyContent={"center"} width={"100%"}>
      <Flex justifyContent={"center"} width={"50%"}>
        <Flex direction={"column"}>
          <Flex justifyContent={"center"}>
            <Text fontSize={"50px"} fontWeight="bold">
              Log In
            </Text>
          </Flex>
          <Flex>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values) => {
                handleSubmitEvent(values.email, values.password);
              }}
            >
              <Form>
                <Flex width={"500px"} direction="column" mb={3}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="user-email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                </Flex>
                <Flex direction="column" mb={3}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                  />
                  <FormErrorMessage></FormErrorMessage>
                </Flex>
                <Flex direction={'row'} justifyContent={"center"} mt={4}>
                  <Button
                    colorScheme="white"
                    background="#22bb33"
                    type="submit"
                    mx={2}
                  >
                    Login
                  </Button>
                  <Button
                    colorScheme="white"
                    background="#3457D5"
                    mx={2}
                    onClick={() => navigate("/signup")}
                  >
                    Sign Up
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

export default LoginPage;
