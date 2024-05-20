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

    init()

    return {project, get_project, proj}
})

