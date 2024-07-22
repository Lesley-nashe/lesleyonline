import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import LoginPage from '../Pages/LoginPage'
import Products from '../Pages/ProductPage/EditProduct'
import HomePage from '../Pages/LandingPage'
import ProfilePage from '../Pages/ProfilePage'
import CheckoutPage from '../Pages/CheckOutPage'
import AuthProvider from '../Authentication/AuthProvider'
import PrivateRoute from '../components/PrivateRoutes'
import RegistrationPage from '../Pages/RegisterPage'
import CreateProduct from '../Pages/ProductPage/CreateProduct'

const AppRoutes = () => {
    
  return (
    <>
        <Header />
        <AuthProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<RegistrationPage />} />
                <Route element={<PrivateRoute />}>
                  <Route path="/products/:id" element={<Products />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/product" element={<CreateProduct />} />
                </Route>
            </Routes>
          </AuthProvider>
    </>
  )
}

export default AppRoutes