const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route (important for deployment)
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "GNET AI Server is running 🚀"
  });
});

// Simple chat route (you can upgrade this later with Gemini/OpenAI)
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage) {
      return res.status(400).json({
        reply: "Message is required"
      });
    }

    // TEMP RESPONSE (replace with AI later if needed)
    return res.json({
      reply: "Hello! Welcome to GNET. How can I assist you today?"
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      reply: "Server error occurred"
    });
  }
});

// IMPORTANT: Railway uses dynamic port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});