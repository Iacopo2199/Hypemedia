<script setup lang="ts">
defineProps(['center_name', 'mission', 'history', 'location', 'opening_hours', 'practical_info'])
</script>

<template>
  

  <NavBarComponent>
  <li><a href="#mission">Mission</a></li>
  <li><a href="#history">History</a></li>
  <li><a href="#location">Location</a></li>
  <li><a href="#opening">Opening hours</a></li>
  <li><a href="#info">Practical info</a></li>
  </NavBarComponent>

    <b><h1 class="w3-container w3-center w3-padding-32">Welcome to our center {{ center_name }}</h1></b>
    <img src="~/assets/img/logo.png" class="center">

    <b><h1 id="mission" class="w3-container w3-center w3-padding-32">Our mission</h1></b>
    <div>{{ mission }}</div>

    <b><h1 id="history" class="w3-container w3-center w3-padding-32">Our history</h1></b>
    <div>{{ history }}</div>

    <b><h1 id="location" class="w3-container w3-center w3-padding-32">Location</h1></b>
    <div>{{ location }}</div>

    <b><h1 id="opening" class="w3-container w3-center w3-padding-32">Opening hours</h1></b>
    <div>{{ opening_hours }}</div>

    <b><h1 id="info"  class="w3-container w3-center w3-padding-32">Practical info</h1></b>
    <div>{{ practical_info }}</div>


</template>

<style scoped>



h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif;
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