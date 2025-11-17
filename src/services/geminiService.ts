import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePhotoshootIdea = async (theme: string): Promise<string> => {
  try {
    const prompt = `
      You are a world-class creative director for a high-end photography company called "LuminaLens".
      A client has provided a theme and wants a unique and inspiring photoshoot concept.

      Theme: "${theme}"

      Generate a creative and descriptive photoshoot concept. Structure your response into a single, flowing paragraph.
      Evocatively describe the location, the mood and vibe, potential props, and wardrobe suggestions that fit the theme.
      The tone should be professional, imaginative, and exciting. Do not use markdown or lists.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating photoshoot idea:", error);
    if (error instanceof Error) {
        return `An error occurred while generating the idea: ${error.message}. Please try again.`;
    }
    return "An unknown error occurred while generating the idea. Please try again.";
  }
};
