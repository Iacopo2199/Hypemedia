import { defineStore, createPinia, setActivePinia } from "pinia";

const pinia = createPinia();
setActivePinia(pinia);

interface Practical_info {
    service_name:string,
    availability:string,
    logistical_info:string,
    duration:string,
    location:string,
}


export const usePracticalInfoStore = defineStore('practical_info',()=>{
    const practical_info = reactive([] as Practical_info[])
    
    async function init(m: any) {
        const data = await $fetch<any[]>('/api/practical_info',
            {
                query: {service_name: m}
            }
        )
        const list = data
        if(list!=null) {
            practical_info.splice(0,practical_info.length)  //Clear the list
            practical_info.push(...list)
        }
    }
    return {practical_info, init}
})

