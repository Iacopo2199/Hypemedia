<script setup>
import { usePeopleStore } from '~/stores/people';

const store = usePeopleStore()
const person = store.people

useHead({
    title: 'People page',
    meta: [
      {
        name: 'people page',
        content: 'This is the people page of the website and here you can see all the people working in our centre' 
      },
    ],
  });

</script>

<template>
  

    <span style="text-align: center;">
    <div>
      <h1>Our people</h1>
      <h4>This is the list of our people</h4>
    </div>
    
    <ul>
      <li v-for="p in person">
      <NuxtLink to="/people/person">
        <button @click="store.get_person(p.name)" class="button-73">
          {{ p.name }} - {{ p.activity}}  <img :src="p.picture"> 
        </button>
      </NuxtLink>
      </li>
    </ul>
    
  </span>
</template>

<style scoped>

img {
width: auto;
height: 200px;
border-radius: 50%;
}

div{
  text-align: center;
}

li{
  display: inline;
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
    font-size: 1.5rem;
    padding: .75rem 2rem;
  }
}

</style>