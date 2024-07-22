import { Box, Flex, Text, Button, Link, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Authentication/AuthProvider";
import { useLogout } from "../../hooks/useLogin";

const MenuItem = (props: any) => {
  const { children, isLast, ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link>{children}</Link>
    </Text>
  );
};

const Header = (props: any) => {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={4}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      {...props}
    >
      <Flex align="center">{<Heading>LesleyOnline!!!!</Heading>}</Flex>

      <Box flexBasis={{ base: "100%", md: "auto" }}>
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          {user.username? (
            <>
              <MenuItem
                onClick={() => navigate("/")}
                fontSize="16px"
                fontWeight="bold"
              >
                Home
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/profile")}
                fontSize="16px"
                fontWeight="bold"
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/checkout")}
                fontSize="16px"
                fontWeight="bold"
              >
                Cart
              </MenuItem>

              <MenuItem>
                <Button
                  size="sm"
                  rounded="md"
                  _hover={{
                    bg: [
                      "primary.100",
                      "primary.100",
                      "primary.600",
                      "primary.600",
                    ],
                  }}
                  onClick={() => logout()}
                >
                  {"LogOut"}
                </Button>
              </MenuItem>
            </>
          ) : (
            <></>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
