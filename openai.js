import axios from 'axios';

const api = 'sk-proj-vV5Z90Uy1XryfmXgCwwnT3BlbkFJwT7Wh2ilRTU583nhSU2e'

console.log('aaa')
console.log(api)

const apiClient = axios.create({
    baseURL: 'https://api.openai.com/v1',
    headers: {
        'Authorization': `Bearer ` + api,
        'Content-Type': 'application/json',
    },
});

export const sendMessageToOpenAI = async (message) => {
    const payload = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
    };

    try {
        const response = await apiClient.post('/chat/completions', payload);
        return response.data.choices[0].message.content.trim();
    } catch (error) {
        // Log detailed error information
        if (error.response) {
            console.error('Error response from OpenAI API:', error.response.data);
            console.error('Status code:', error.response.status);
        } else if (error.request) {
            console.error('No response received from OpenAI API:', error.request);
        } else {
            console.error('Error in setting up request to OpenAI API:', error.message);
        }
        throw error; // Re-throw the error for the caller to handle
    }
};
