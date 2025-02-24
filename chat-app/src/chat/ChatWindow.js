import React, { useEffect, useRef } from 'react';

function ChatWindow({ messages }) {
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const windowStyle = {
    height: '300px',
    overflowY: 'auto',
    padding: '10px',
    backgroundColor: '#f8f9fa',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '15px'
  };

  const messageStyle = {
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#e9ecef',
    borderRadius: '5px'
  };

  const timestampStyle = {
    fontSize: '12px',
    color: '#6c757d',
    marginTop: '5px'
  };

  return (
    <div style={windowStyle}>
      {messages.map((msg, index) => (
        <div key={index} style={messageStyle}>
          <strong>User:</strong> {msg.text}
          <div style={timestampStyle}>{msg.timestamp.toLocaleTimeString()}</div>
        </div>
      ))}
      <div ref={messageEndRef} />
    </div>
  );
}

export default ChatWindow;
