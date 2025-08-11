import React, { useEffect, useState, useRef } from "react";

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const fileInputRef = useRef();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("rmgs_messages") || "[]");
    setMessages(stored);
  }, []);

  const compressImage = (file, callback) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const maxWidth = 1920; // reduce large images to fit size
        const scale = Math.min(maxWidth / img.width, 1);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.85); // compression quality
        callback(compressedDataUrl);
      };
    };
    reader.readAsDataURL(file);
  };

  const handleAddPhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file size (allow up to ~12MB before compression)
    if (file.size > 12 * 1024 * 1024) {
      alert("File too large. Please select an image under 12MB.");
      return;
    }

    compressImage(file, (compressedBase64) => {
      const photos = JSON.parse(localStorage.getItem("rmgs_gallery") || "[]");

      // Avoid duplicate entries
      if (!photos.includes(compressedBase64)) {
        photos.push(compressedBase64);
        localStorage.setItem("rmgs_gallery", JSON.stringify(photos));
        alert("Photo added successfully!");
      } else {
        alert("This photo is already in the gallery.");
      }
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2 align="center">Contact Messages</h2>

      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "2rem" }}>
        <button
          onClick={() => fileInputRef.current.click()}
          style={{
            backgroundColor: "#f1f737",
            color: "red",
            padding: "0.7rem 1.2rem",
            fontSize: "1rem",
            fontWeight: "bold",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Add Photo
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleAddPhoto}
        />
      </div>

      <div style={{ overflowX: "auto", maxWidth: "100%" }}>
        <table
          border="1"
          cellPadding="8"
          style={{
            width: "100%",
            minWidth: "300px",
            background: "#fff",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
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
    </div>
  );
};

export default Dashboard;
