import { Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { ErrorMessage, Field } from "formik";

const FormInput = (props: any) => {
  const { children, labelColor, inputColor, title, id, name, type, ...rest } = props;
  return (
    <Flex {...rest} direction={'column'}>
      <FormLabel color={labelColor} htmlFor={name}>{title}</FormLabel>
      <Field
        as={Input}
        id={id}
        name={name}
        type={type}
        variant='white'
        background={inputColor}
      />
      <ErrorMessage name={name}>
        {(errorMessage) => <Text color='red'>{errorMessage}</Text>}
      </ErrorMessage>
    </Flex>
  );
};

export default FormInput
