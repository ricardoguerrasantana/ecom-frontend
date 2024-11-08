// src/pages/Account.js
import React from "react"
import { useAuth } from "../contexts/AuthContext"
import "./Account.css"

const Account = () => {
  const { user, logout } = useAuth()

  return (
    <div className="account-container">
      <div className="account-card">
        <h2>My Account</h2>
        <div className="user-info">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
        <div className="account-sections">
          <div className="section">
            <h3>Order History</h3>
            <p>No orders yet</p>
          </div>
          <div className="section">
            <h3>Settings</h3>
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
