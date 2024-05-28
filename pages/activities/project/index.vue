<script setup>
import { useProjectStore } from '~/stores/project';
import { useDetailsStore } from '~/stores/details';
import { usePeopleStore } from '~/stores/people';

const store_people = usePeopleStore()

const details = useDetailsStore()
const store = useProjectStore()
const project = store.proj

useHead({
    title: 'Project page',
    meta: [
      {
        name: 'project page',
        content: 'This is the project page of the website and here you can see all the info of the related project' 
      },
    ],
  });

</script>

<template>
    

    <NavBarComponent class="navbar">
      <li><a href="#description">Description</a></li>
    </NavBarComponent>


    <span v-for="p in project">
      <b><h1 class="w3-container w3-center w3-padding-32">{{ p.project_name }}</h1></b>

      <b><h1 class="w3-container w3-center w3-padding-32">{{ p.picture }}</h1></b>

      <b><h1 class="w3-container w3-center w3-padding-32">Person in charge: <NuxtLink to="/people/person">
        <button @click="store_people.get_person(p.personName)" class="button-73">
          {{ p.personName }}
        </button>
      </NuxtLink></h1></b>

      <b><h1 id="description" class="w3-container w3-center w3-padding-32">Description and info</h1></b>
    <div>{{ p.description }}</div>
    
    <br>
      <div>
       <button @click="details.init(p.project_name)" class="button-73"><NuxtLink to="/activities/project/details">Click here to see details</NuxtLink></button>
      </div>
    <br> 
  </span>

    

</template>

<style scoped>
span{
    text-align: center;
}

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