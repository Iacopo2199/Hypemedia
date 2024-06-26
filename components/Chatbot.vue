<template>
  <div>
    <button class="chatbot-button" @click="toggleChatbot">Chat</button>
    <div v-if="isChatOpen" class="chatbot-popup">
      <div class="chat-header">
        <h2>BestBot</h2>
        <button @click="toggleChatbot">X</button>
      </div>
      <div class="chat-window">
        <div v-for="(message, index) in messages" :key="index" class="message" :class="message.sender">
          <div class="message-content">{{ message.text }}</div>
        </div>
      </div>
      <div class="input-area">
        <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Type your message here..." />
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import { sendMessageToOpenAI } from '../openai.js'; // Adjust the path based on your directory structure

export default {
  data() {
    return {
      isChatOpen: false,
      messages: [],
      userInput: ''
    };
  },
  methods: {
    toggleChatbot() {
      this.isChatOpen = !this.isChatOpen;
      console.log('Chatbot visibility toggled:', this.isChatOpen); // Debugging log
    },
    async sendMessage() {
      if (this.userInput.trim() === '') return;

      const userMessage = {
        text: this.userInput,
        sender: 'user'
      };

      this.messages.push(userMessage);
      this.userInput = '';

      try {
        const botResponse = await sendMessageToOpenAI(userMessage.text);
        this.messages.push({
          text: botResponse,
          sender: 'bot'
        });
      } catch (error) {
        console.error('Error sending message to OpenAI:', error);
        let errorMessage = 'Sorry, there was an error processing your request.';

        if (error.response) {
          // Handle specific HTTP error responses
          if (error.response.status === 401) {
            errorMessage = 'Unauthorized request. Check your API key.';
          } else if (error.response.status === 429) {
            errorMessage = 'Rate limit exceeded. Please try again later.';
          } else {
            errorMessage = `Error: ${error.response.data.message}`;
          }
        }

        this.messages.push({
          text: errorMessage,
          sender: 'bot'
        });
      }

    }
  }
};
</script>

<style scoped>
.chatbot-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Ensure it's on top */
}

.chatbot-popup {
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 300px;
  height: 400px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000; /* Ensure it's on top */
}

.chat-header {
  background-color: #007bff;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-window {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
}

.message {
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
}

.message.user {
  background-color: #f1f1f1;
  align-self: flex-end;
}

.message.bot {
  background-color: #e0e0e0;
  align-self: flex-start;
}

.input-area {
  display: flex;
  padding: 10px;
  border-top: 1px solid #ddd;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
}

button {
  margin-left: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
</style>
