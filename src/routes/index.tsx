import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import LoginPage from "../Pages/LoginPage";
import Products from "../Pages/ProductPage/EditProduct";
import HomePage from "../Pages/LandingPage";
import ProfilePage from "../Pages/ProfilePage";
import CheckoutPage from "../Pages/CheckOutPage";
import AuthProvider from "../Authentication/AuthProvider";
import PrivateRoute from "../components/PrivateRoutes";
import RegistrationPage from "../Pages/RegisterPage";
import CreateProduct from "../Pages/ProductPage/CreateProduct";
import { Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";

const AppRoutes = () => {
  return (
    <Flex width={"100%"} direction={"column"} background={"#eeeeee"}>
      <AuthProvider>
      <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegistrationPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/product" element={<CreateProduct />} />
          </Route>
        </Routes>
      </AuthProvider>
      <Flex zIndex={1000}position="sticky" bottom={0} >
      <Footer />
      </Flex>
    </Flex>
  );
};

export default AppRoutes;
