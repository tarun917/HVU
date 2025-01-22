// src/pages/Help.jsx
import { useState } from "react";

export default function Help() {
  // कुछ डेमो FAQ
  const initialFAQ = [
    {
      id: 1,
      question: "How do I join a 3D virtual class?",
      answer:
        "Go to Active Classes, click on a 'Live' class, then 'Join 3D Class'. Make sure you have a stable internet and VR/WebXR-compatible browser if available.",
    },
    {
      id: 2,
      question: "How do I purchase HVU Coins?",
      answer:
        "Open 'Your Wallet', click 'Buy with INR' or deposit USDT to swap. Then you can use HVU Coin across the campus.",
    },
    {
      id: 3,
      question: "I forgot my password. What should I do?",
      answer:
        "Use the 'Forgot Password' option on the login page. Check your email (and spam folder) for the reset link. Contact support if needed.",
    },
    {
      id: 4,
      question: "Can I customize my 3D avatar?",
      answer:
        "Yes! Go to your User Profile (Dashboard) and click 'Change Avatar'. Upload or create your own real-like 3D avatar.",
    },
  ];

  const [faq] = useState(initialFAQ);

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // AI Chatbot (demo)
  const [chatInput, setChatInput] = useState("");
  const [botResponse, setBotResponse] = useState("");

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return;
    // डेमो: असल में OpenAI/Dialogflow API कॉल होगा
    const reply = `AI-Bot (demo) says: Sorry, I can't process real queries yet. You asked: "${chatInput}"`;
    setBotResponse(reply);
    setChatInput("");
  };

  // Filtered FAQ
  const filteredFAQ = faq.filter((item) => {
    const q = item.question.toLowerCase();
    const a = item.answer.toLowerCase();
    const term = searchTerm.toLowerCase();
    return q.includes(term) || a.includes(term);
  });

  // Accordion open/close
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-black to-gray-900 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-6 neon-text">
          Need Help?
        </h1>
        <p className="text-center mb-8 text-gray-300">
          Find answers to common questions or reach out for support in our
          futuristic campus help center.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full max-w-md p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {filteredFAQ.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full text-left px-4 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:to-gray-500 focus:outline-none flex justify-between items-center"
              >
                <span className="font-semibold text-white">{item.question}</span>
                <span className="text-sm text-gray-300">
                  {openFAQ === item.id ? "–" : "+"}
                </span>
              </button>
              {openFAQ === item.id && (
                <div className="px-4 py-3 text-gray-200 bg-gray-700">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* AI Chatbot Demo */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-12">
          <h2 className="text-xl font-bold mb-2 neon-text">Ask AI-Bot</h2>
          <p className="text-sm text-gray-400 mb-3">
            Type your question and get an instant response (demo).
          </p>
          <div className="flex space-x-2 mb-3">
            <input
              type="text"
              placeholder="Ask anything..."
              className="flex-1 p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
            />
            <button
              onClick={handleChatSubmit}
              className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition"
            >
              Send
            </button>
          </div>
          {botResponse && (
            <div className="bg-gray-700 p-3 rounded text-sm text-gray-100">
              {botResponse}
            </div>
          )}
        </div>

        {/* Contact Support Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-12 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          {/* Icon / Graphic (demo) */}
          <div className="bg-gray-700 w-32 h-32 rounded-full flex items-center justify-center text-4xl text-gray-300">
            ?
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Still need help?</h3>
            <p className="text-gray-300 mb-4">
              Our support team is available 24/7 to assist with any queries.
            </p>
            <button
              onClick={() => alert("Contacting Support (demo).")}
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              Contact Support
            </button>
          </div>
        </div>

        {/* Quick Links / Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h4 className="text-md font-semibold mb-3">Important Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#!"
                  className="text-purple-400 hover:underline"
                  onClick={(e) => e.preventDefault()}
                >
                  User Guide PDF
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-purple-400 hover:underline"
                  onClick={(e) => e.preventDefault()}
                >
                  Community Forums
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-purple-400 hover:underline"
                  onClick={(e) => e.preventDefault()}
                >
                  Troubleshooting Steps
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h4 className="text-md font-semibold mb-3">Other Resources</h4>
            <p className="text-gray-300 mb-2">
              - <strong>Video Tutorials:</strong> Step-by-step on setting up
              VR/AR classes, avatar creation, etc.
            </p>
            <p className="text-gray-300">
              - <strong>Discord Channel:</strong> Join real-time chat with
              mentors & staff (<span className="text-purple-400">discord.gg/hvu</span>).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}