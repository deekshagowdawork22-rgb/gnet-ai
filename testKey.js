const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

async function runTest() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  const model = genAI.getGenerativeModel({
    model: "gemini-pro"
  });

  const result = await model.generateContent("Hello");
  const response = await result.response;

  console.log("RESPONSE:");
  console.log(response.text());
}

runTest();