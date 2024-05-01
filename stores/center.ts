import {useFetch} from "#app";
import { defineStore, createPinia, setActivePinia } from "pinia";

const pinia = createPinia();
setActivePinia(pinia);


interface Center {
    center_name:string,
    mission:string,
    history:string,
    location:string,
    opening_hours:string,
    practical_info:string
}

export const useCenterStore = defineStore('center',()=>{
    const center = reactive([] as Center[])
    
    async function init() {
        const {data} = await useFetch<any[]>('/api/center')
        const list = data.value
        if(list!=null) {
            center.splice(0,center.length)  //Clear the list
            center.push(...list)
        }
    }

    init()

    return {center}
})

