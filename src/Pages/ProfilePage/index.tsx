import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useAuth } from "../../Authentication/AuthProvider";
import FormInput from "../../components/FormComponents/FormInput";
import MapLocation from "../../components/LocationMap/MapLocation";

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <Flex alignContent={"center"} justifyContent={"center"} width={"100%"}>
      <Flex justifyContent={"center"} height={'100%'} width={"50%"}>
        <Flex direction={"column"} height={'100%'}>
          <Flex justifyContent={"center"}>
            <Text fontSize={"50px"} fontWeight="bold">
              Profile
            </Text>
          </Flex>
          <Flex>
            <Formik
              initialValues={{
                email: user.email || "",
                username: user.username || "",
              }}
              onSubmit={(values) => {}}
            >
              <Form>
                <Flex width={"500px"} direction="column" mb={3}>
                  <FormInput
                    labelColor={"black"}
                    width={"500px"}
                    name="email"
                    title="Email Address :"
                    my={2}
                    inputColor="#bbbbbb"
                  />
                  <FormInput
                    labelColor={"black"}
                    width={"500px"}
                    name="username"
                    title="Username :"
                    my={2}
                    inputColor="#bbbbbb"
                  />
                </Flex>
                <MapLocation />
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
