<script setup>
import { usePracticalInfoStore } from '~/stores/practical_info';
const store = usePracticalInfoStore()
const info = store.practical_info
</script>


<template>

<NavBarComponent class="navbar">
      <li><a href="#"></a></li>
</NavBarComponent>

    <div>
      <h1>Practical info</h1>
      <h4></h4>
    </div>

    <ul>
      <li v-for="i in info">
      {{ i.service_name }} , {{ i.availability}}
      </li>
    </ul>

</template>

<style scoped>

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