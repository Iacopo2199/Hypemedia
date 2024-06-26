// server/api/openai.js
import { defineEventHandler, readBody } from 'h3';
import axios from 'axios';

export default defineEventHandler(async (event) => {
    const body = await readBody(event); // Parse the incoming request body
    const { message } = body;

    // Use the API key from runtimeConfig, not exposed to the client
    const apiKey = useRuntimeConfig().openaiApiKey;

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: message }],
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
        });

        return { message: response.data.choices[0].message.content.trim() };
    } catch (error) {
        console.error('Error sending message to OpenAI:', error);
        throw new Error('Error processing request');
    }
});

