const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

async function run() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  const models = await genAI.listModels();

  console.log("AVAILABLE MODELS:");
  console.log(models);
}

run();