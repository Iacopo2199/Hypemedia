<script setup>
import { useServiceStore } from '~/stores/service';

const store = useServiceStore()
const service = store.service

useHead({
    title: 'Services page',
    meta: [
      {
        name: 'service page',
        content: 'This is the service page of the website and here you see all the available services' 
      },
    ],
  });

</script>

<template>
    
    <ul>
      <li v-for="s in service"> 
        <button @click="store.get_service(s.service_name)" class="button-73"><NuxtLink to="/activities/service">{{ s.service_name }} - {{ s.short_description}}</NuxtLink></button>
      <p></p>
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
  background-color: #0BC3A9;
  box-shadow: #04443b 0 -6px 8px inset;
  transform: scale(1.125);
}

.button-73:active {
  transform: scale(1.025);
}

@media (min-width: 768px) {
  .button-73 {
    font-size: 20px;
    padding: .60rem 2rem;
  }
}


</style>