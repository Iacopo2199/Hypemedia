<script setup>
import { useCenterStore } from '~/stores/center';
import NavBarComponent from '~/components/NavBarComponent.vue';

const store = useCenterStore()
const center = store.center

useHead({
    title: 'About us',
    meta: [
      {
        name: 'about us page',
        content: 'This is the about us page of the website... here you can find info about who we are' 
      },
    ],
  });

</script>

<template>

<NavBarComponent class="navbar">
  <li><a href="#mission">Mission</a></li>
  <li><a href="#history">History</a></li>
  <li><a href="#location">Location</a></li>
  <li><a href="#opening">Opening hours</a></li>
  <li><a href="#info">Practical info</a></li>
</NavBarComponent>


    <span v-for="c in center">
    <b><h1 class="w3-container w3-center w3-padding-32">Welcome to our center {{ c.center_name }}</h1></b>
    <img src="~/assets/img/logo.png" class="center">

    <b><h1 id="mission" class="w3-container w3-center w3-padding-32">Our mission</h1></b>
    <div>{{ c.mission }}</div>

    <b><h1 id="history" class="w3-container w3-center w3-padding-32">Our history</h1></b>
    <div>{{ c.history }}</div>

    <b><h1 id="location" class="w3-container w3-center w3-padding-32">Location</h1></b>
    <div>{{ c.location }}</div>

    <b><h1 id="opening" class="w3-container w3-center w3-padding-32">Opening hours</h1></b>
    <div>{{ c.opening_hours }}</div>

    <b><h1 id="info"  class="w3-container w3-center w3-padding-32">Practical info</h1></b>
    <div>{{ c.practical_info }}</div>

    </span>

</template>

<style scoped>

div{
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    font-size: 20px;
}

.center {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 28%;
    }
    
.navbar {

h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif;
    font-size: 50px;              
}

li {
    float: left;
  }
  
  li a {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  li a:hover {
    background-color: #0BC3A9;
  }
}
</style>