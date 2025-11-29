// src/components/AIAssistant.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hi! I'm Karyam AI 🤖 I can help you find workers, services, or answer questions about our platform. Ask me anything!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
  const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Real Gemini API call
  const callGeminiAPI = async (userMessage) => {
    try {
      setIsLoading(true);
      
      // System prompt with context about your platform
      const systemPrompt = `You are Karyam AI, a helpful assistant for a local services platform in Raipur, India. 
      
Available workers:
- Ram V. (🧑‍🔧): Plumber & Electrician, Sejbahar, 5+ years, BIS Certified
- Pooja S. (👷‍♀️): Cleaner & Cook, Datarenga, Verified Talent  
- Aman K. (🪚): Carpenter, Mana Camp, 8+ years, BIS Certified
- Anita P. (👩‍🍳): Home Cook, Amleshwar, 7+ years
- Suresh D. (❄️): AC Mechanic, Raipur City, 10+ years, BIS Certified
- Jyoti T. (👶): Babysitter, Saddu, Certified Childcare, BIS Certified

Services: House Cleaning, Plumbing, Carpentry, Painting, Pest Control, Cooking, AC Repair, Childcare.

Platform flow: Browse categories → View profiles → Contact workers → Book services.

Be helpful, concise, and use emojis. Suggest specific workers when relevant. End with calls-to-action like "View Profile" or "Browse Categories".`;

      const response = await fetch(GEMINI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: systemPrompt + "\n\nUser: " + userMessage + "\n\nKaryam AI:",
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 200,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Gemini API request failed");
      }

      const data = await response.json();
      const aiResponse = data.candidates[0].content.parts[0].text;

      return aiResponse.trim();
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Sorry, I'm having trouble connecting right now. Try asking about specific workers like 'plumber' or 'cleaner'! 😅";
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const tempInput = inputValue;
    setInputValue("");
    setIsTyping(true);

    // Get real AI response from Gemini
    const aiResponse = await callGeminiAPI(tempInput);
    
    setIsTyping(false);
    setIsLoading(false);

    const aiMessage = {
      id: (Date.now() + 1).toString(),
      text: aiResponse,
      isUser: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, aiMessage]);
  };

  return (
    <>
      {/* Floating AI Button */}
      <motion.button
        className="
          fixed bottom-6 right-6 
          w-16 h-16 sm:w-20 sm:h-20 
          bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 
          rounded-full shadow-2xl border-4 border-white/80
          flex items-center justify-center text-2xl drop-shadow-2xl
          hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-110 active:scale-95
          z-50 cursor-pointer transition-all duration-300
          lg:bottom-8 lg:right-8
        "
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          rotate: isOpen ? 180 : 0,
          scale: isOpen ? 1.15 : 1
        }}
        transition={{ rotate: { duration: 0.4 } }}
      >
        {isOpen ? "✕" : "🤖"}
      </motion.button>

      {/* AI Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="
              fixed bottom-24 right-6 sm:right-8 lg:right-12 w-80 sm:w-96 lg:w-[420px] 
              max-h-[500px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border 
              border-gray-200/50 overflow-hidden z-50
              lg:bottom-28 
            "
            initial={{ 
              opacity: 0, 
              scale: 0.8, 
              y: 20,
              rotateX: 10 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotateX: 0 
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 20,
              rotateX: -10,
              transition: { duration: 0.2 }
            }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            {/* Header */}
            <div className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-4 text-white">
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-lg"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-lg">🤖</span>
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg">Karyam AI</h3>
                  <p className="text-sm opacity-90">
                    Powered by Google Gemini • Real-time responses
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 sm:h-[360px] overflow-y-auto p-4 sm:p-6 space-y-3 bg-linear-to-b from-gray-50/70 to-white/70 scrollbar-thin scrollbar-thumb-gray-300">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`
                      max-w-[85%] p-3 sm:p-4 rounded-2xl shadow-lg
                      ${message.isUser 
                        ? 'bg-linear-to-r from-teal-500 to-emerald-500 text-white rounded-br-sm' 
                        : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm rounded-bl-sm'
                      }
                    `}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    <p className="text-xs opacity-75 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="bg-white/80 border border-gray-200/50 rounded-2xl p-4 shadow-lg flex items-center gap-2 backdrop-blur-sm">
                    <div className="flex gap-1">
                      <motion.div className="w-2.5 h-2.5 bg-blue-400 rounded-full" 
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 1.4, repeat: Infinity }} 
                      />
                      <motion.div className="w-2.5 h-2.5 bg-blue-400 rounded-full" 
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 1.4, repeat: Infinity, delay: 0.2 }} 
                      />
                      <motion.div className="w-2.5 h-2.5 bg-blue-400 rounded-full" 
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 1.4, repeat: Infinity, delay: 0.4 }} 
                      />
                    </div>
                    <span className="text-xs text-gray-600 font-medium">Karyam AI is thinking...</span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 sm:p-6 border-t border-gray-200/50 bg-white/70 backdrop-blur-sm">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !isLoading && sendMessage()}
                  placeholder={isLoading ? "AI is responding..." : "Ask about workers, services, pricing..."}
                  className="
                    flex-1 px-4 py-3 border-2 border-gray-200/50 
                    rounded-2xl focus:border-blue-400 focus:outline-none 
                    bg-white/60 backdrop-blur-sm text-sm placeholder-gray-500
                    hover:border-gray-300 transition-all duration-200 disabled:cursor-not-allowed
                  "
                  disabled={isLoading}
                />
                <motion.button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="
                    w-12 h-12 bg-linear-to-r from-blue-500 to-purple-500 
                    text-white rounded-2xl shadow-lg hover:shadow-blue-500/50
                    flex items-center justify-center text-xl disabled:opacity-50 disabled:cursor-not-allowed
                  "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLoading ? "⏳" : "➤"}
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-2 opacity-75">
                Powered by Google Gemini AI • Real-time responses
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
