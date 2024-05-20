import {useFetch} from "#app";
import { defineStore, createPinia, setActivePinia } from "pinia";

const pinia = createPinia();
setActivePinia(pinia);


interface Service {
    service_name:string,
    personName:string,
    short_description:string,
    description:string,
    benefits:string,
    picture:string,
    testimonials:string
}

const serv_person = reactive([] as Service[])


export function empty_serv() {
    serv_person.splice(0,serv_person.length)  //Clear the list
}

export const useServiceStore = defineStore('service',()=>{
    const service = reactive([] as Service[])
    const serv = reactive([] as Service[])
    
    async function init() {
        const {data} = await useFetch<any[]>('/api/service')
        const list = data.value
        if(list!=null) {
            service.splice(0,service.length)  //Clear the list
            service.push(...list)
        }
    }

    async function get_service(m: any) {
        const data = await $fetch<any[]>('/api/serv',
            {
                query: {service_name: m}
            }
        )
        const list = data
        if(list!=null) {
            serv.splice(0,serv.length)  //Clear the list
            serv.push(...list)
        }
    }

    async function get_service_person(m: any) {
        const data = await $fetch<any[]>('/api/serv_person',
            {
                query: {personName: m}
            }
        )
        const list = data
        if(list!=null) {
            serv_person.splice(0,serv_person.length)  //Clear the list
            serv_person.push(...list)
        }

        /*
        let element = document.getElementById("par2")
        if (element) {
            // Set the `hidden` property to `true`
            (element as HTMLElement).hidden = false;
        } else {
            console.error('Element not found');
        }*/
    }

    

    init()

    return {service, get_service, serv, serv_person, get_service_person}
})

