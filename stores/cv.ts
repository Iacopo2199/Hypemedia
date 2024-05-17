import {useFetch} from "#app";
import { defineStore, createPinia, setActivePinia } from "pinia";

const pinia = createPinia();
setActivePinia(pinia);

interface Cv {
    cv_code:number,
    personName:string,
    cv_image:string,
    cv_link:string
}

export const useCvStore = defineStore('cv',()=>{
    const cv = reactive([] as Cv[])
    
    async function get_cv(person: any) {
        const data = await $fetch<any[]>('/api/cv',
            {
                query: {name: person}
            }
        )
        const list = data
        if(list!=null) {
            cv.splice(0,cv.length)  //Clear the list
            cv.push(...list)
        }
    }

    return {cv, get_cv}
})

