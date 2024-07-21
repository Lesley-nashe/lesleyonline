import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { addToCart, CartItem } from "../../helpers";

interface ProductProps {
  name: String;
  description: String;
  price: number;
  inventoryCount: number;
}

const ProductCard: FC<ProductProps> = ({
  name,
  description,
  price,
  inventoryCount,
}) => {
  const toast = useToast();
  const newItem: CartItem = {
    name: name,
    description: description,
    price: price,
    count: inventoryCount,
  };
  return (
    <Flex>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        width={'900px'}
        height={'170px'}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />
        <Stack>
          <CardBody>
            <Heading size="md">{name}</Heading>
            <Text  py="2">{description}</Text>
            <Text color="blue.600" fontSize="medium">
              R{price}
            </Text>
            <Button
              variant='solid' colorScheme='blue' my={3}
              onClick={() => {
                addToCart(newItem);
                toast({
                  title: "Item Added To Cart",
                  description: "We've created your account for you.",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              }}
            >
              Add to cart
            </Button>
            </CardBody>
        </Stack>
      </Card>
    </Flex>
  );
};

export default ProductCard;
