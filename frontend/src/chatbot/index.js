// src/chatbot/index.js

export { default as ChatbotProvider } from "./ChatbotProvider";
export { ChatbotContext } from "./context/ChatbotContext";
export { default as ChatbotWidget } from "./components/ChatbotWidget";
export { default as FloatingButton } from "./components/FloatingButton";
export { useChatbot } from "./hooks/useChatbot";
export { getFaqAnswer } from "./services/faqService";
export { faqData } from "./data/faqData";
