// src/chatbot/ChatbotProvider.jsx

import { useState } from "react";
import { ChatbotContext } from "./context/ChatbotContext";
import { getFaqAnswer } from "./services/faqService";
// import { askChatGPT } from "./services/aiService"; // अगर ChatGPT भी लगाना चाहें

export default function ChatbotProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  const sendMessage = (userText) => {
    // 1) पहले यूज़र का मैसेज सेव करें
    setMessages((prev) => [...prev, { role: "user", text: userText }]);

    // 2) FAQ चेक करें
    const faqReply = getFaqAnswer(userText);

    if (faqReply) {
      // मिल गया तो वही जवाब
      setMessages((prev) => [...prev, { role: "bot", text: faqReply }]);
    } else {
      // नहीं मिला, तो डेमो जवाब (या चैटGPT)
      // const botReply = await askChatGPT(userText);
      const botReply = "Sorry, I don't have info on that. (Demo reply)";
      setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
    }
  };

  const value = {
    isOpen,
    toggleChatbot,
    messages,
    sendMessage,
  };

  return (
    <ChatbotContext.Provider value={value}>
      {children}
    </ChatbotContext.Provider>
  );
}
