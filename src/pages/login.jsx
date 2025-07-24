import React, { useState } from "react";
import proprietorImg from '../assets/proprietor.jpg';

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  React.useEffect(() => {
    if (localStorage.getItem("rmgs_logged_in") === "true") {
      window.location.href = "/dashboard";
    }
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    if (form.username === "sachinkute" && form.password === "11335555") {
      localStorage.setItem("rmgs_logged_in", "true");
      window.location.href = "/dashboard";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #1a237e 70%, #3949ab 100%)"
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(26,35,126,0.15)",
          padding: "2.5rem 2rem",
          width: "100%",
          maxWidth: "340px",
          display: "flex",
          flexDirection: "column",
          gap: "1.3rem"
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
          <img
                    src={proprietorImg}
                    alt="Proprietor"
                    className="proprietor-img"
                  />
          <h2 style={{ color: "#1a237e", margin: 0 }}>Proprietor Login</h2>
        </div>
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          style={{
            padding: "0.9rem",
            borderRadius: "8px",
            border: "1px solid #bbb",
            fontSize: "1rem"
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={{
            padding: "0.9rem",
            borderRadius: "8px",
            border: "1px solid #bbb",
            fontSize: "1rem"
          }}
        />
        <button
          type="submit"
          style={{
            background: "#1a237e",
            color: "#fff",
            border: "none",
            padding: "1rem",
            borderRadius: "8px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "0.5rem"
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;