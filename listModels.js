const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

async function listModels() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  const result = await genAI.listModels();

  console.log("AVAILABLE MODELS:");
  console.log(result);
}

listModels();