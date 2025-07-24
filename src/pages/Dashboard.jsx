import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("rmgs_messages") || "[]");
    setMessages(stored);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Contact Messages</h2>
      <table border="1" cellPadding="8" style={{ width: "100%", background: "#fff" }}>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Message</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((m, i) => (
            <tr key={i}>
              <td>{m.name}</td>
              <td>{m.email}</td>
              <td>{m.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;