import React from "react";
import {
  Button,
  Flex,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
// import { useAuth } from "../../Authentication/AuthProvider";
import { Field, Form, Formik } from "formik";
import { useSignUp } from "../../hooks/useSignUp";


const RegistrationPage = () => {
  const { signup, isLoading, error } = useSignUp()
  const handleSubmitEvent = async (email: string, username:string, password: string) => {
    if (email !== "" && username !=="" && password !== "") await signup(email, username, password);
    else alert("please provide a valid input");
    }
    

  return (
    <Flex alignContent={"center"} justifyContent={"center"} width={"100%"}>
      <Flex justifyContent={"center"} width={"50%"}>
        <Flex direction={"column"}>
          <Flex justifyContent={"center"}>
            <Text fontSize={"50px"} fontWeight="bold">
              Sign Up
            </Text>
          </Flex>
          <Flex>
            <Formik
              initialValues={{
                email: "",
                password: "",
                username: ""
              }}
              onSubmit={(values) => {
                handleSubmitEvent(values.email, values.username, values.password);
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
                  <FormLabel htmlFor="email">Username</FormLabel>
                  <Field
                    as={Input}
                    id="username"
                    name="username"
                    type="username"
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
                </Flex>
                <Flex direction="column" mb={3}>
                  <FormLabel htmlFor="password">Re-enter Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                  />
                  <FormErrorMessage></FormErrorMessage>
                </Flex>
                <Flex justifyContent={'center'} mt={4}>
                  <Button
                    colorScheme="white"
                    background="#22bb33"
                    type="submit"
                  >
                    SignUp
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

export default RegistrationPage;
