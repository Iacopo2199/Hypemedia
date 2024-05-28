<script setup lang="">
import { useCvStore } from '~/stores/cv';

const store = useCvStore()
const cv = store.cv

useHead({
    title: 'Cv page',
    meta: [
      {
        name: 'Cv page',
        content: 'This is the Cv page of the website and here you can read and download the cv of the selected person' 
      },
    ],
  });

</script>

<template>
    
    <ul>
      <div v-for="c in cv">
      <h1>This is the Cv of {{ c.personName }}</h1>
      <img :src="c.cv_image" class="div">
      <br>
      <button class="button-73"><a :href="c.cv_link" download>DOWNLOAD CV</a></button>
      </div>
    </ul>

  
</template>

<style scoped>

img {
width: auto;
height: auto;
}

.div {
  background-color: lightgrey;
  width: 700px;
  border: 20px solid orange;
  padding: 50px;
  margin: 50px;
  text-align: center;
}

div{
    text-align: center;
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