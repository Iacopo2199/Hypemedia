<script setup lang="">
import { usePeopleStore } from '~/stores/people';
import { filename } from 'pathe/utils'

const store = usePeopleStore()
const person = store.people

const imagesUrl =  import.meta.glob("~/assets/img/people/*.png", {eager: true });
const images = Object.fromEntries(
  Object.entries(imagesUrl).map(([key, value]) => [filename(key), value.default])
)

</script>

<template>
    <div>
      <h1>Our people</h1>
      <h4>This is the list of our people</h4>
    </div>

    <ul>
      <li v-for="p in person">           <!-- QUI VA MESSO p.name MA NN SO COME FARE -->
      {{ p.name }} , {{ p.activity}}  <img :src="images[`sonia`]"> 
      </li>
    </ul>
  
</template>

<style scoped>

img {
width: auto;
height: 150px;
}

</style>