import { config } from '../config/env';

export async function analyzeContent(content: string) {
  try {
    const response = await fetch(config.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content: "You are a content analysis assistant."
          },
          {
            role: "user",
            content: content
          }
        ],
        model: "grok-beta",
        stream: false,
        temperature: 0
      })
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}