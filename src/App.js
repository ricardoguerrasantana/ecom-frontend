import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// import Account from "./pages/Account"
// import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Login from "./pages/Login"
// import Shop from "./pages/Shop"

// import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./components/Navbar"

import { AuthProvider } from "./contexts/AuthContext"
import { CartProvider } from "./contexts/CartContext"

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route
              path="account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            /> */}
            <Route path="/login" element={<Login />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            {/* <Route path="/shop" element={<Shop />} /> */}
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
