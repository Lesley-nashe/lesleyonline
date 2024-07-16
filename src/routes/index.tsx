import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import LoginPage from './LoginPage'
import Products from './ProductPage'
import HomePage from './LandingPage'
import ProfilePage from './ProfilePage'
import CheckoutPage from './CheckOutPage'
import AuthProvider from '../Authentication/AuthProvider'
import PrivateRoute from '../components/PrivateRoutes'

const ProductPages = () => {
    
  return (
    <>
        <Header />
        <AuthProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route element={<PrivateRoute />}>
                  <Route path="/products" element={<Products />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                </Route>
            </Routes>
          </AuthProvider>
    </>
  )
}

export default ProductPages