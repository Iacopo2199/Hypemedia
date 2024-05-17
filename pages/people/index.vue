import type { NuxtLink } from "#build/components";
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
      <NuxtLink to="/people/person">
        <button @click="store.get_person(p.name)" class="div">
          {{ p.name }} , {{ p.activity}}  <img :src="p.picture"> 
        </button>
      </NuxtLink>
      </li>
    </ul>
    
  
</template>

<style scoped>

img {
width: auto;
height: 150px;
}

.div {
  background-color: lightgrey;
  width: 700px;
  border: 20px solid orange;
  padding: 50px;
  margin: 50px;
}

</style>