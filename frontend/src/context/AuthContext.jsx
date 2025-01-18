// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null) 
  const [accessToken, setAccessToken] = useState(null)

  // Login function
  const login = async (username, password) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
        username,
        password
      })
      setAccessToken(response.data.access)
      // Optional: store in localStorage or HTTP-only cookie
      // then get user info from another endpoint or from token
      // setUser(...) 
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  // Register function
  const registerUser = async (username, email, password) => {
    try {
      await axios.post('http://127.0.0.1:8000/api/auth/register/', {
        username,
        email,
        password
      })
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  // Logout function
  const logout = () => {
    setAccessToken(null)
    setUser(null)
    // localStorage.removeItem('accessToken') etc
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        login,
        logout,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}