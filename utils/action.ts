import { GoogleGenerativeAI } from "@google/generative-ai";

interface Chat {
    role: "user" | "model";
    parts: string;
}

const genAI = new GoogleGenerativeAI(" AIzaSyBf7FTYGle895hUA_Q0_I3vedaty4Srq0g");

export async function run(prompt: string, history: Chat[]) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    const chat = model.startChat({
        generationConfig: {
            maxOutputTokens: 1000,
        }
    })

    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const output = response.text()

    return output
}