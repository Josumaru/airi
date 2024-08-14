import { GoogleGenerativeAI } from "@google/generative-ai";
import { PersonalityConstants } from "../constants/PersonalityConstants";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `${PersonalityConstants.kuudere}. Create short response under 50 character in katakana japanese`,
});

export const generateResponse = async (prompt: string) => {
  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  return text.replace(/[A-Za-z]/g, '');
}
