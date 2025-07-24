const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/rmgs', { useNewUrlParser: true, useUnifiedTopology: true });

// Schemas
const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', MessageSchema);

const UserSchema = new mongoose.Schema({
  username: String,
  password: String // hashed
});
const User = mongoose.model('User', UserSchema);

// Register (run once to create proprietor)
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await User.create({ username, password: hash });
  res.sendStatus(201);
});

// Login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ username }, 'SECRET_KEY');
  res.json({ token });
});

// Save contact message
app.post('/api/contact', async (req, res) => {
  await Message.create(req.body);
  res.sendStatus(201);
});

// Get all messages (protected)
app.get('/api/messages', async (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.sendStatus(401);
  try {
    jwt.verify(auth.split(' ')[1], 'SECRET_KEY');
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch {
    res.sendStatus(401);
  }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));

const handleSubmit = async e => {
  e.preventDefault();
  const res = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form)
  });
  if (res.ok) {
    const data = await res.json();
    localStorage.setItem("token", data.token);
    window.location.href = "/dashboard";
  } else {
    alert("Invalid credentials");
  }
};