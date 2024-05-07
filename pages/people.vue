<script setup lang="">
import { usePeopleStore } from '~/stores/people';

const store = usePeopleStore()
const person = store.people

</script>

<template>
    <div>
      <h1>Our people</h1>
      <h4>This is the list of our people</h4>
    </div>

    <ul>
      <li v-for="p in person">
      {{ p.name }} , {{ p.activity}}  <img :src="p.picture"> 
      </li>
    </ul>
  
</template>

<style scoped>

img {
width: auto;
height: 150px;
}

</style>