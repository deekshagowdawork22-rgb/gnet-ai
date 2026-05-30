const express = require("express");
const cors = require("cors");

const app = express();

// ======================
// Middleware
// ======================
app.use(cors());
app.use(express.json());

// ======================
// Home route
// ======================
app.get("/", (req, res) => {
  res.send("GNET AI Server Running 🚀");
});

// ======================
// CHAT ROUTE (FIXED RESPONSE)
// ======================
app.post("/chat", (req, res) => {
  const { message } = req.body;

  console.log("User message:", message);

  return res.json({
    reply: "Hello! Welcome to GNET. How can I assist you today?"
  });
});

// ======================
// Start Server
// ======================
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});