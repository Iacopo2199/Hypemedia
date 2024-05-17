import {useFetch} from "#app";
import { defineStore, createPinia, setActivePinia } from "pinia";

const pinia = createPinia();
setActivePinia(pinia);

interface People {
    name:string,
    activity:string,
    picture:string
}

export const usePeopleStore = defineStore('people',()=>{
    const people = reactive([] as People[])
    const pers = reactive([] as People[])
    
    async function init() {
        const {data} = await useFetch<any[]>('/api/people')
        const list = data.value
        if(list!=null) {
            people.splice(0,people.length)  //Clear the list
            people.push(...list)
        }
    }

    async function get_person(person: any) {
        const data = await $fetch<any[]>('/api/person',
            {
                query: {name: person}
            }
        )
        const list = data
        if(list!=null) {
            pers.splice(0,pers.length)  //Clear the list
            pers.push(...list)
        }
    }

    init()

    return {people, pers , get_person}
})

