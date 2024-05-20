import {useFetch} from "#app";
import { defineStore, createPinia, setActivePinia } from "pinia";

const pinia = createPinia();
setActivePinia(pinia);


interface Project {
    project_name:string,
    personName:string,
    short_description:string,
    description:string,
    picture:string
}

const proj_person = reactive([] as Project[])

export function empty_proj(){
    proj_person.splice(0,proj_person.length)  //Clear the list
}

export const useProjectStore = defineStore('project',()=>{
    const project = reactive([] as Project[])
    const proj = reactive([] as Project[])
    
    async function init() {
        const {data} = await useFetch<any[]>('/api/project')
        const list = data.value
        if(list!=null) {
            project.splice(0,project.length)  //Clear the list
            project.push(...list)
        }
    }

    async function get_project(m: any) {
        const data = await $fetch<any[]>('/api/proj',
            {
                query: {project_name: m}
            }
        )
        const list = data
        if(list!=null) {
            proj.splice(0,proj.length)  //Clear the list
            proj.push(...list)
        }
    }

    async function get_project_person(m: any) {
        const data = await $fetch<any[]>('/api/proj_person',
            {
                query: {personName: m}
            }
        )
        const list = data
        if(list!=null) {
            proj_person.splice(0,proj_person.length)  //Clear the list
            proj_person.push(...list)
        }

        
        if(!proj_person.length){
        let element = document.getElementById("par1")
        if (element) {
            // Set the `hidden` property to `true`
            (element as HTMLElement).hidden = false;
        } else {
            console.error('Element not found');
        }
        }
    }

    init()

    return {project, get_project, proj, proj_person, get_project_person}
})

