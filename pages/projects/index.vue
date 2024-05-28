<script setup>
import { useProjectStore } from '~/stores/project';

const store = useProjectStore()
const project = store.project

useHead({
    title: 'Projects page',
    meta: [
      {
        name: 'project page',
        content: 'This is the project page of the website and here you see all the available projects' 
      },
    ],
  });

</script>

<template>
    <div>
      <h1>Our projects</h1>
    </div>

    <ul>
      <li v-for="p in project"> 
        <button @click="store.get_project(p.project_name)" class="button-73"><NuxtLink to="/activities/project">{{ p.project_name }} - {{ p.short_description}}</NuxtLink></button>
      </li>
    </ul>

</template>

<style scoped>

li{
  list-style: none;
}

.button-73 {
  appearance: none;
  background-color: #FFFFFF;
  border-radius: 40em;
  border-style: none;
  box-shadow: #ADCFFF 0 -12px 6px inset;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -.24px;
  margin: 0;
  outline: none;
  padding: 1rem 1.3rem;
  quotes: auto;
  text-align: center;
  text-decoration: none;
  transition: all .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-73:hover {
  background-color: #FFC229;
  box-shadow: #FF6314 0 -6px 8px inset;
  transform: scale(1.125);
}

.button-73:active {
  transform: scale(1.025);
}

@media (min-width: 768px) {
  .button-73 {
    font-size: 27px;
    padding: .75rem 2rem;
  }
}


</style>