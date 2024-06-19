<script setup>
import { usePracticalInfoStore } from '~/stores/practical_info';
const store = usePracticalInfoStore()
const info = store.practical_info

useHead({
    title: 'Practical info page',
    meta: [
      {
        name: 'practical info page',
        content: 'This is the practical info page of the website and here you can see the information of the related service' 
      },
    ],
  });

</script>


<template>

<NavBarComponent class="navbar">
      <li><a href="#ava">Availability</a></li>
      <li><a href="#log">Logistical info</a></li>
      <li><a href="#duration">Duration</a></li>
      <li><a href="#location">Location</a></li>
</NavBarComponent>

    <ul>
      <span v-for="i in info">
        <b><h1 class="w3-container w3-center w3-padding-32">{{ i.service_name }}</h1></b>

        <b><h1 id="ava" class="w3-container w3-center w3-padding-32">Availability</h1></b>
        <div>{{ i.availability }}</div>

        <b><h1 id="log" class="w3-container w3-center w3-padding-32">Logistical info</h1></b>
        <div>{{ i.logistical_info}}</div>

        <b><h1 id="duration" class="w3-container w3-center w3-padding-32">Service duration</h1></b>
        <div>{{ i.duration}}</div>

        <b><h1 id="location" class="w3-container w3-center w3-padding-32">Service location</h1></b>
        <div>{{ i.location}}</div>

      </span>
    </ul>

</template>

<style scoped>
div{
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    font-size: 20px;
}

span{
  text-align: center;
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