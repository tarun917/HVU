// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ChatbotProvider } from "./chatbot";
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // आप चाहें तो StrictMode लगाएँ:
  <React.StrictMode>
    <ChatbotProvider>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
    </ChatbotProvider>
  </React.StrictMode>
)