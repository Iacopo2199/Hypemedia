import {useFetch} from "#app";
import { defineStore } from 'pinia'

interface People {
    name:string,
    picture:string,
    activity:string
}

export const usePeopleStore = defineStore('people',()=>{
    const people = reactive([] as People[])
    
    async function init() {
        const {data} = await useFetch<any[]>('/api/people')
        const list = data.value
        if(list!=null) {
            people.splice(0,people.length)  //Clear the list
            people.push(...list)
        }
    }

    init()

    return {people}
})

