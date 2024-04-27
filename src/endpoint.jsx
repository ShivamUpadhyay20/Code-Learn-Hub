import React, { useState } from "react";
import { Chat } from "react-chat-popup";
import { endpoints } from "./api/endpoints"; // Assuming you have defined your API endpoints in this file

const ChatBot = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    // Code to send message to backend or handle it locally
    // This is where you would typically make an API call to process the user's message
  };

  return (
    <Chat
      messages={messages}
      onSubmit={handleSendMessage}
      endpoint={endpoints.CHATBOT_API} // Replace CHATBOT_API with the actual endpoint for handling chatbot messages
      user={{
        name: "User",
        avatar: "https://example.com/user-avatar.png", // URL to user's avatar image
      }}
      bot={{
        name: "ChatBot",
        avatar: "https://example.com/chatbot-avatar.png", // URL to chatbot's avatar image
      }}
    />
  );
};

export default ChatBot;
