const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// TEST ROUTE (VERY IMPORTANT FOR DEBUG)
app.get("/", (req, res) => {
  res.send("GNET AI is running 🚀");
});

app.post("/chat", (req, res) => {
  const message = req.body.message;

  if (!message) {
    return res.status(400).json({ reply: "Message required" });
  }

  return res.json({
    reply: "Hello! Welcome to GNET. How can I assist you today?"
  });
});

// FORCE PORT (RAILWAY SAFE)
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("🚀 Server started successfully on port:", PORT);
});