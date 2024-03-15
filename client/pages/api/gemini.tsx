const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize GoogleGenerativeAI with your API key
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Define your API handler function
export default async function handler(req: any, res: any) {
  // Check if the request method is POST
  if (req.method === 'POST') {
    try {
      // Extract the prompt from the request body
      const { prompt } = req.body;

      // Ensure that prompt is provided
      if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required.' });
      }

      // Get the generative model
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

      // Generate content based on the provided prompt
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();

      // Send the generated text as the response
      res.status(200).json({ generatedText: text });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  } else {
    // If the request method is not POST, send an error response
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
