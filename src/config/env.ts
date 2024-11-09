export const config = {
  // Use environment variables in production
  apiKey: import.meta.env.VITE_API_KEY || '',
  apiEndpoint: 'https://api.x.ai/v1/chat/completions'
};