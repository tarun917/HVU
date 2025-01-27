// src/chatbot/hooks/useChatbot.js

import { useContext } from "react";
import { ChatbotContext } from "../context/ChatbotContext";

/**
 * Context उपयोग को आसान बनाने के लिए कस्टम हुक
 */
export function useChatbot() {
  return useContext(ChatbotContext);
}
