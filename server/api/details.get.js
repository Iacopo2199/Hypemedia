import {useDetailsDb} from "~/composables/db.js";


const db = useDetailsDb()
export default defineEventHandler(async (e)=>{ 
    const query = getQuery(e)
    return await db.findAll({
        where:{
            project_name: query.project_name
        }
    })
})