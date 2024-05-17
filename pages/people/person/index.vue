import type cvGet from "~/server/api/cv.get";

<script setup lang="">
import { usePeopleStore } from '~/stores/people';
import {useCvStore} from '~/stores/cv';

const store = usePeopleStore()
const person = store.pers
const cv = useCvStore()
</script>

<template>
    
    <ul>
      <li v-for="p in person">
      {{ p.name }} , {{ p.activity }} <img :src="p.picture">
      <button @click="cv.get_cv(p.name)"><NuxtLink to="/people/person/CV">See CV</NuxtLink></button>
      </li>
    </ul>
  
</template>

<style scoped>

img {
width: auto;
height: 150px;
}

</style>