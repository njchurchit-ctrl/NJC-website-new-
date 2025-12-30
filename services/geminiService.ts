
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for New Jerusalem Church (NJC), Mumbai. 
Tone: Warm, welcoming, helpful, and spiritual.

About NJC:
- Founded: 8 Aug 1968 by Apostle N. Lazar.
- Current Leader: Pastor Philip Lazar.
- Location: New Jerusalem Church Lane, Tilak Nagar, Dargah Cross Road, Bhandup West, Mumbai 400078.
- Independent evangelical/Pentecostal church.
- Key mission: Discipleship, prayer, worship, and community outreach.
- Mention: Matthew 16:18 and Revelation 21 are core inspirations.
- Social: YouTube (@njcmumbaihq), Facebook (newjerusalemchurchhq).

Instructions:
- If asked about service timings, suggest contacting Pastor Philip Lazar directly for the most current schedule.
- Be concise. 
- Do not make up information.
- Always be polite and offer to pray if someone mentions a struggle.
`;

export const getChurchAssistantResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I'm having trouble connecting right now. God bless you.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently resting. Please visit us in Bhandup or check our social media for updates!";
  }
};
