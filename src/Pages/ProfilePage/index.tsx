import React from "react";
import {
  Button,
  Flex,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

const ProfilePage = () => {

  const user = JSON.parse(localStorage.getItem('user') || '[]')

  return (
    <Flex alignContent={"center"} justifyContent={"center"} width={"100%"}>
      <Flex justifyContent={"center"} width={"50%"}>
        <Flex direction={"column"}>
          <Flex justifyContent={"center"}>
            <Text fontSize={"50px"} fontWeight="bold">
              Profile
            </Text>
          </Flex>
          <Flex>
            <Formik
              initialValues={{
                email: user.email,
                username: user.username
              }}
              onSubmit={(values) => {
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
                <Flex mt={4}>
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

export default ProfilePage;
