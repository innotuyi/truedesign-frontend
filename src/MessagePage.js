import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);

  // Assume your API endpoint for fetching messages is /api/getMessages
  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/getMessages');
      const data = await response.json();
      setMessages(data); // Assuming the API returns an array of message items
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    // Fetch messages when the component mounts
    fetchMessages();
  }, []);

  return (
    <>
    <Sidebar/>
    <div className="col-md-9 statistics">
      <div className="card m-4 border-0 shadow">
        <div className="card-body">
          <h3 className="mb-4">Messages</h3>
          <ul className="list-group">
            {messages.map((message, index) => (
              <li key={index} className="list-group-item mb-3">
                <h5 className="mb-2">{message.name}</h5>
                <p className="mb-2">Email: {message.email}</p>
                <p className="mb-2">Subject: {message.subject}</p>
                <p>{message.message}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default MessagesPage;
