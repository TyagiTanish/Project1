import React, { useState, useEffect } from "react";
import io from "socket.io-client";


const socket = io("http://localhost:8000", {transports: ['websocket', 'polling', 'flashsocket']});

const Client= () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = () => {
    if (message) {
      socket.emit("chat message", message);
      setMessage("");
    }
  };

  return (
    <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Client;
