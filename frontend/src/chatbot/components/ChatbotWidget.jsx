// src/chatbot/components/ChatbotWidget.jsx

import { useContext, useRef, useEffect } from "react";
import { ChatbotContext } from "../context/ChatbotContext";

export default function ChatbotWidget() {
  const { isOpen, toggleChatbot, messages, sendMessage } = useContext(ChatbotContext);
  
  // रिफरेन्स बनाएं मैसेज कंटेनर के लिए
  const messagesEndRef = useRef(null);

  // स्क्रॉल करने का फ़ंक्शन
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // जब भी मैसेजेज अपडेट हों, स्क्रॉल करें
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      sendMessage(e.target.value.trim());
      e.target.value = "";
    }
  };

  // बंद अवस्था: सिर्फ़ एक गोल बटन
  if (!isOpen) {
    return (
      <button
        onClick={toggleChatbot}
        className="fixed bottom-3 right-4 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white font-bold py-3 px-3 rounded-full shadow-lg z-50 transform transition-transform duration-300 hover:scale-110 animate-pulse-slow flex items-center space-x-0"
>
        {/* आइकॉन जोड़ें (Optional) */}
          <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 animate-bounce"
        fill="none"
        viewBox="0 0 12 24"
        stroke="currentColor"
         >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 10h4l3 10L12 10h9" />
        </svg>
       <span>MVU Ai</span>
      </button>
    );
  }

  // खुली अवस्था: पूरा चैट बॉक्स
  return (
    <div className="fixed bottom-3 right-3 w-80 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-2xl flex flex-col z-50 max-h-[70vh]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-indigo-700 rounded-t-xl">
        <span className="text-white font-semibold text-lg">MilkyWay AI</span>
        <div className="flex items-center space-x-2">
          {/* ChatGPT Button */}
          <a
            href="https://chat.openai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded-full shadow-md transition-colors duration-300"
            title="Go to ChatGPT"
          >
            ChatGPT
          </a>
          {/* Close Button */}
          <button
            onClick={toggleChatbot}
            className="text-white hover:text-gray-300 text-xl font-bold"
            title="Close Chatbot"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Messages list */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
  {messages.map((msg, i) => (
    <div
      key={i}
      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} transition-all duration-300`}
    >
      <div className="flex items-start space-x-1">
        {/* यूज़र के संदेश के लिए आइकॉन */}
        {msg.role === "user" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-green-900 mt-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {/* यूज़र आइकॉन */}
            <path d="M10 2a6 6 0 00-6 6v4a6 6 0 0012 0V8a6 6 0 00-6-6zM5 14v2a2 2 0 002 2h6a2 2 0 002-2v-2H5z" />
          </svg>
        )}
        
        {/* बॉट के संदेश के लिए आइकॉन */}
        {msg.role === "bot" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-yellow-800 mt-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {/* बॉट आइकॉन */}
            <path d="M12 2a2 2 0 00-2 2v2H8a2 2 0 00-2 2v6a2 2 0 002 2h2v2a2 2 0 002 2h4a2 2 0 002-2v-2h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2V4a2 2 0 00-2-2h-2zM8 8h4v2H8V8z" />
          </svg>
        )}

        {/* मेसेज बॉक्स */}
        <div
          className={`max-w-xs px-4 py-2 rounded-full ${
            msg.role === "user" ? "bg-indigo-200 text-indigo-900 text-sm" : "bg-gray-200 text-gray-800 text-sm"
          }`}
        >
          <span className="font-semibold capitalize">{msg.role}:</span> {msg.text}
        </div>
      </div>
    </div>
  ))}
  {/* इस डिव के अंत में एक खाली डिव जोड़ें जिसे हम स्क्रॉल करेंगे */}
  <div ref={messagesEndRef} />
</div>


      {/* Input */}
      <div className="border-t border-indigo-300 p-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-sm">
        <input
          type="text"
          placeholder="Type your question for MVU..."
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-3 rounded-full bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          
        />
      </div>
    </div>
  );
}
