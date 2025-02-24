import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';

function ChatApp() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    if (newMessage.trim() === '') return;
    setMessages([...messages, { text: newMessage, timestamp: new Date() }]);
  };

  const containerStyle = {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff'
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#007bff'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>React Chat App</h2>
      <ChatWindow messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default ChatApp;
