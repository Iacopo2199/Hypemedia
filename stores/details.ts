import {useFetch} from "#app";
import { defineStore, createPinia, setActivePinia } from "pinia";

const pinia = createPinia();
setActivePinia(pinia);

interface Details {
    project_name:string,
    target_people:string,
    location:string,
    duration:string,
    partners:string,
}


export const useDetailsStore = defineStore('details',()=>{
    const details = reactive([] as Details[])
    
    async function init(m: any) {
        const data = await $fetch<any[]>('/api/details',
            {
                query: {project_name: m}
            }
        )
        const list = data
        if(list!=null) {
            details.splice(0,details.length)  //Clear the list
            details.push(...list)
        }
    }
    return {details, init}
})

