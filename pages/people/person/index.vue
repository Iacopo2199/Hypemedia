import type cvGet from "~/server/api/cv.get";
<script setup>
import { usePeopleStore } from '~/stores/people';
import { useProjectStore } from "~/stores/project";
import {useCvStore} from '~/stores/cv';
import { useServiceStore } from "~/stores/service";


const store_proj = useProjectStore()
const store_serv = useServiceStore()
const proj = store_proj.proj_person
const serv = store_serv.serv_person
const store = usePeopleStore()
const person = store.pers
const cv = useCvStore()


useHead({
    title: 'Person page',
    meta: [
      {
        name: 'person page',
        content: 'This is the person page of the website and here you can see all the info of the related person' 
      },
    ],
  });

</script>

<template>


    <NavBarComponent class="navbar">
      <li><a href="#activity">Activity</a></li>
    </NavBarComponent>
    
      <li v-for="p in person">

      <b><h1 class="w3-container w3-center w3-padding-32">{{ p.name }}</h1></b>

      <b><img :src="p.picture"></b>

      <b><h1 id="activity" class="w3-container w3-center w3-padding-32">Activity: {{ p.activity }}</h1>
        <div>{{ p.role }}</div>
      </b>
      <br><br>




      <div class="container">
        <ul class="list">
      <button @click="store_proj.get_project_person(p.name)">Click here to see related projects</button>
      <p id="par1" v-if="!proj.length" hidden>No projects are managed by {{ p.name }}</p>
      <p v-else v-for="pr in proj" ><button @click="store_proj.get_project(pr.project_name)" class="button-73"><NuxtLink to="/activities/project">{{ pr.project_name }}</NuxtLink></button>
      </p>
        </ul>
      <br>
      
      <ul class="list">
      <button @click="store_serv.get_service_person(p.name)">Click here to see related services</button>
      <p id="par2" v-if="!serv.length" hidden>No services are managed by {{ p.name }}</p>
      <p v-else v-for="sr in serv" ><button @click="store_serv.get_service(sr.service_name)" class="button-73"><NuxtLink to="/activities/service">{{ sr.service_name }}</NuxtLink></button>
      </p>
      </ul>
      </div>




      <br>
      <br>
      <button @click="cv.get_cv(p.name)" class="button-73"><NuxtLink to="/people/person/CV">See CV</NuxtLink></button>
      <br><br>
      </li>

</template>

<style scoped>

li{
  text-align: center;
  list-style-type: none;
}

img {
width: auto;
height: 300px;
}

.container {
    display: flex;
    justify-content: space-between; /* Optional: Adds space between the lists */
    gap: 20px; /* Optional: Adds space between the lists */
}

.list {
    list-style-type: none; /* Optional: Removes default list bullets */
    padding: 0;
    margin: 0;
    width: 45%; /* Adjust width as needed */
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

div{
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    font-size: 20px;
}

.navbar {

h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif;
    font-size: 50px;              
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

</style>