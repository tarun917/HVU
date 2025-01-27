// src/chatbot/components/FloatingButton.jsx

import { useContext } from "react";
import { ChatbotContext } from "../context/ChatbotContext";

export default function FloatingButton() {
  const { toggleChatbot } = useContext(ChatbotContext);

  return (
    <button
      onClick={toggleChatbot}
      className="fixed bottom-5 right-5 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-full shadow-lg z-50"
    >
      MilkyWay AI
    </button>
  );
}
