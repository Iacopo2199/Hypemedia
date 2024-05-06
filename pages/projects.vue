<script setup lang="ts">
import { useDetailsStore } from '~/stores/details';
import { useProjectStore } from '~/stores/project';


const details = useDetailsStore()
const store = useProjectStore()
const project = store.project
</script>

<template>
    <div>
      <h1>Our projects</h1>
      <h4>This is the list of our projects</h4>
    </div>

    <ul>
      <li v-for="p in project">
      {{ p.project_name }} , {{ p.short_description}} ,  <button @click="details.init(p.project_name)"><NuxtLink to="/projects/details">Click here to see details</NuxtLink></button>
      </li>
    </ul>

</template>

<style scoped>

</style>