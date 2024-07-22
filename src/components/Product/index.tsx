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
import { addToCart, CartItem, ProductItem } from "../../helpers";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  name: String;
  description: String;
  price: number;
  inventoryCount: number;
  id: String
}

const ProductCard: FC<ProductProps> = ({
  name,
  description,
  price,
  inventoryCount,
  id
}) => {
  const toast = useToast();
  const navigate = useNavigate();
  const newItem: ProductItem = {
    name: name,
    description: description,
    price: price,
    inventoryCount: inventoryCount,
    _id: id
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
            <Flex direction={'row'}>
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

            <Button
              variant='solid' colorScheme='green' my={3}
              onClick={() => navigate(`/products/${newItem._id}`)}
              ml={2}
            >
              Edit Product
            </Button>
            </Flex>
            </CardBody>
        </Stack>
      </Card>
    </Flex>
  );
};

export default ProductCard;
