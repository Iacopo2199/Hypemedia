<script setup>

useHead({
    title: 'Home page',
    meta: [
      {
        name: 'home page',
        content: 'This is the home page of the website and the starting point of the application' 
      },
    ],
  });

</script>

<template>

<b><h1 class="w3-container w3-center w3-padding-32">Welcome to our center Better Future</h1></b>
    <img src="~/assets/img/logo.png" class="center">

<b><h2 class="w3-container w3-center w3-padding-32">This is the home page </h2></b>

  <div id="app">
    <Chatbot />
  </div>

</template>

<script>
import Chatbot from '../components/Chatbot.vue';

export default {
  name: 'App',
  components: {
    Chatbot
  }
};
</script>

<style scoped>


h1 {font-family: "Raleway", sans-serif;
font-size: 50px;              
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 28%;
}

div{
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    font-size: 20px;
}

</style>