import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useSignUp } from "../../hooks/useSignUp";
import { SignupSchema } from "../../helpers";
import FormInput from "../../components/FormComponents/FormInput";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const { signup } = useSignUp();
  const navigate = useNavigate();

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
                username: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) =>
                signup(values.email, values.username, values.password)
              }
            >
              <Form>
                <Flex width={"500px"} direction="column" mb={3}>
                  <FormInput
                    labelColor={"black"}
                    width={"500px"}
                    name="email"
                    title="Email :"
                    my={2}
                    inputColor="#bbbbbb"
                  />
                  <FormInput
                    labelColor={"black"}
                    width={"500px"}
                    name="username"
                    title="Usernme :"
                    my={2}
                    inputColor="#bbbbbb"
                  />
                  <FormInput
                    labelColor={"black"}
                    width={"500px"}
                    name="password"
                    title="Password :"
                    type="password"
                    my={2}
                    inputColor="#bbbbbb"
                  />
                </Flex>
                <Flex direction={"row"} justifyContent={"center"} mt={4}>
                  <Button
                    colorScheme="white"
                    background="#22bb33"
                    type="submit"
                  >
                    SignUp
                  </Button>
                  <Button
                    colorScheme="white"
                    background="#3457D5"
                    mx={2}
                    onClick={() => navigate("/login")}
                  >
                    Login
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
