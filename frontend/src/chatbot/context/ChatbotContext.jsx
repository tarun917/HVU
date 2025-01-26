// src/chatbot/context/ChatbotContext.jsx

import { createContext } from "react";

/**
 * बस एक Context ऑब्जेक्ट बनाता है
 * स्टेट/लॉजिक ChatbotProvider में मैनेज होगा
 */
export const ChatbotContext = createContext(null);
