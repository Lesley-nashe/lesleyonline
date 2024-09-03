import React from "react";
import {
  Button,
  Card,
  Flex,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { loginSchema } from "../../helpers";
import FormInput from "../../components/FormComponents/FormInput";

const LoginPage = () => {
  const { login } = useLogin();
  const navigate = useNavigate();
  const handleSubmitEvent = async (email: string, password: string) => {
    if (email !== "" && password !== "") {
      await login(email, password);
      return;
    }
    alert("please provide a valid input");
  };

  return (
    <Flex py={2} alignContent={"center"} h='100vh' justifyContent={"center"} width={"100%"}>
      <Flex height={'70%'} pt={8} justifyContent={"center"} width={"50%"}>
        <Card borderRadius={28} background={'#dddddd'} p={8}>
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
                validationSchema={loginSchema}
                onSubmit={(values) => {
                  handleSubmitEvent(values.email, values.password);
                }}
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
        </Card>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
