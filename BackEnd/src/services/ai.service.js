import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
console.log(process.env.GEMINI_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `
    AI System Instruction: Senior Code Reviewer (7+ Years of Experience)
    ... (keep your long instruction text here as it is) ...
  `,
});

export default async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}
