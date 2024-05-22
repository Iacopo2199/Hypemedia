<script setup>
import { useDetailsStore } from '~/stores/details';
import NavBarComponent from '~/components/NavBarComponent.vue';
const store = useDetailsStore()
const details = store.details
</script>


<template>

<NavBarComponent class="navbar">
  <li><a href="#target">Target people</a></li>
  <li><a href="#location">Location</a></li>
  <li><a href="#duration">Duration</a></li>
  <li><a href="#partners">Partners</a></li>
</NavBarComponent>


    <ul>
      <span v-for="d in details">
        <b><h1 class="w3-container w3-center w3-padding-32">{{ d.project_name }}</h1></b>

        <b><h1 id="target" class="w3-container w3-center w3-padding-32">Target people</h1></b>
        <div>{{ d.target_people }}</div>

        <b><h1 id="location" class="w3-container w3-center w3-padding-32">Project location</h1></b>
        <div>{{ d.location}}</div>

        <b><h1 id="duration" class="w3-container w3-center w3-padding-32">Project duration</h1></b>
        <div>{{ d.duration}}</div>

        <b><h1 id="partners" class="w3-container w3-center w3-padding-32">Project partners</h1></b>
        <div>{{ d.partners}}</div>

      </span>
    </ul>

</template>

<style scoped>
span{
  text-align: center;
}

.navbar {

  h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif;
    font-size: 50px;
  }
  div{
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    font-size: 20px;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: red;
  }
}

</style>