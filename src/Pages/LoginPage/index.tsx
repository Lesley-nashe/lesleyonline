import React, { useEffect } from "react";
import { Button, Card, Flex, Spinner, Text } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { loginSchema } from "../../helpers";
import FormInput from "../../components/FormComponents/FormInput";

const LoginPage = () => {
  const { login, isLoading, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = () => {
      if (isAuthenticated) {
        navigate("/");
      } else {
        navigate("/login");
      }
    };

    redirect();
  }, [isAuthenticated, navigate]);

  return (
    <Flex
      py={2}
      alignContent={"center"}
      h="100vh"
      justifyContent={"center"}
      width={"100%"}
    >
      <Flex height={"70%"} pt={8} justifyContent={"center"} width={"50%"}>
        <Card borderRadius={28} background={"#dddddd"} p={8}>
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
                onSubmit={(values) => login(values.email, values.password)}
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
                      {isLoading ? <Spinner color="white" /> : "Login"}
                    </Button>
                    <Button
                      colorScheme="white"
                      background="#3457D5"
                      mx={2}
                      onClick={() => navigate("/signup")}
                    >
                      {isLoading ? <Spinner color="white" /> : "Sign Up"}
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
