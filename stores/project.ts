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
    
    async function init() {
        const {data} = await useFetch<any[]>('/api/project')
        const list = data.value
        if(list!=null) {
            project.splice(0,project.length)  //Clear the list
            project.push(...list)
        }
    }

    init()

    return {project}
})

