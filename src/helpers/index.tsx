import * as Yup from "yup";

export type column = {
  title: String;
  fieled: String;
};

export type checkoutItem = {
  name: String;
  description: String;
  price: number;
  count: number;
};

export type ProductItem = {
  name: String;
  description: String;
  price: number;
  inventoryCount: number;
  _id: String;
};

export type CartItem = {
  name: String;
  description: String;
  price: number;
  inventoryCount: number;
  orderCount: number;
  _id: String;
};

export type User = {
  Id: String;
  email: String;
  username: String;
};

export const addToCart = (product: CartItem) => {
  const cart: ProductItem[] = [];
  const localStorageCart = localStorage.getItem("cart");
  if (!localStorageCart) {
    const initCartItem: CartItem = {
      name: product.name,
      description: product.description,
      _id: product._id,
      price: product.price,
      inventoryCount: product.inventoryCount,
      orderCount: 1,
    };
    cart.push(initCartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    const userCart = JSON.parse(String(localStorage.getItem("cart")));

    let shoppingCart: CartItem[] = userCart as unknown as CartItem[];

    let cartItem = shoppingCart.find((item) => item.name === product?.name);

    if (cartItem) {
      const countIncrease = cartItem?.orderCount + 1;
      cartItem.orderCount = countIncrease;
      let finalshoppingCart = shoppingCart?.map((item) =>
        item.name !== product.name ? item : cartItem
      );
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(finalshoppingCart));
    } else {
      const initCartItem = {
        name: product.name,
        description: product.description,
        price: product.price,
        _id: product._id,
        inventoryCount: product.inventoryCount,
        orderCount: 1,
      } as CartItem;
      shoppingCart.push(initCartItem);
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(shoppingCart));
    }
  }
};

export const removeItem = (product: CartItem) => {
  const userCart = JSON.parse(String(localStorage.getItem("cart")));
  const shoppingCart = userCart as unknown as CartItem[];
  let foundItem = shoppingCart.find((item) => item.name === product.name);
  if (foundItem) {
    foundItem.orderCount--;
    if (foundItem.orderCount <= 0) {
      const finalshoppingCart = shoppingCart?.filter(
        (item) => item.name !== product.name
      );
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(finalshoppingCart));
    } else {
      const finalshoppingCart = shoppingCart?.map((item) =>
        item.name !== product.name ? item : foundItem
      );
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(finalshoppingCart));
    }
  } else {
    return;
  }
};

export const arraysAreEqual = (arr1: CartItem[], arr2: CartItem[]) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (
      arr1[i].name !== arr2[i].name ||
      arr1[i].description !== arr2[i].description ||
      arr1[i].price !== arr2[i].price ||
      arr1[i].inventoryCount !== arr2[i].inventoryCount
    ) {
      return false;
    }
  }

  return true;
};

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("User Email is Required"),
  password: Yup.string()
    .min(4, "Passord must not be too short!")
    .max(50, "Passowrd is too Long!")
    .required("Password is Required"),
});

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("User Email is Required"),
  password: Yup.string()
    .min(4, "Passord must not be too short!")
    .max(50, "Passowrd is too Long!")
    .required("Password is Required"),
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export const EditSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number()
    .typeError("Please enter a price. The field cannot be left blank.")
    .positive("Must be a positive number."),
  inventoryCount: Yup.number()
    .typeError(
      "Please enter an inventory count. The field cannot be left blank."
    )
    .positive("Must be a positive number."),
});

export const CreateSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number()
    .typeError("Please enter a price. The field cannot be left blank.")
    .positive("Must be a positive number."),
  inventoryCount: Yup.number()
    .typeError(
      "Please enter an inventory count. The field cannot be left blank."
    )
    .positive("Must be a positive number."),
});
