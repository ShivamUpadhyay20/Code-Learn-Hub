import React, { useState } from 'react';

const ChatComponent = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div>
      {/* Logo to toggle chat container */}
      <div id="logo">
        <img src="logo.png" onClick={toggleChat} />
      </div>
      {/* Conditionally render iframe based on showChat state */}
      {showChat && (
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/xJO5JjEG9LuDkK4RidX_2"
          title="Chatbot"
          width="100%"
          style={{ height: '100%', minHeight: '700px' }}
          frameBorder="0"
        ></iframe>
      )}
    </div>
  );
};

export default ChatComponent;
