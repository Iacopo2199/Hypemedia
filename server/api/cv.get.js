import {useCvDb} from "~/composables/db.js";


const db = useCvDb()
export default defineEventHandler(async (e)=>{ 
    const query = getQuery(e)
    return await db.findAll({
        where:{
            personName: query.name
        }
    })
})