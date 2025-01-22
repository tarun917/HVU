import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  // Function to fetch user data
  const fetchUserData = async (token) => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/auth/user/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data); // Set the user data
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };

  // Login function
  const login = async (username, password) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
        username,
        password,
      });

      const token = response.data.access; // Access token
      setAccessToken(token); // Set access token in state
      localStorage.setItem('accessToken', token); // Save token in localStorage
      await fetchUserData(token); // Fetch user data after login
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  // Register function
  const registerUser = async (username, email, password) => {
    try {
      await axios.post('http://127.0.0.1:8000/api/auth/register/', {
        username,
        email,
        password,
      });
      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setAccessToken(null);
    setUser(null);
    localStorage.removeItem('accessToken'); // Remove token from localStorage
  };

  // Load user data on app load if token is present
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setAccessToken(token);
      fetchUserData(token); // Fetch user data on initial load
    }
  }, []);

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
  );
}