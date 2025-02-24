import React from 'react';

const Sidebar = ({ onSelectApp, activeApp }) => {
  const sidebarStyle = {
    width: '250px',
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column'
  };

  const buttonStyle = (isActive) => ({
    padding: '10px 15px',
    margin: '10px 0',
    backgroundColor: isActive ? '#34495e' : 'transparent',
    border: 'none',
    color: '#ecf0f1',
    cursor: 'pointer',
    borderRadius: '5px',
    textAlign: 'left'
  });

  return (
    <div style={sidebarStyle}>
      <h2 style={{ marginBottom: '20px' }}>Micro-Frontend Hub</h2>
      <button style={buttonStyle(activeApp === 'chat')} onClick={() => onSelectApp('chat')}>
        Chat App
      </button>
      <button style={buttonStyle(activeApp === 'email')} onClick={() => onSelectApp('email')}>
        Email App
      </button>
    </div>
  );
};

export default Sidebar;
