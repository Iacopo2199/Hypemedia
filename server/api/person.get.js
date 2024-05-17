import {usePeopleDb} from "~/composables/db.js";


const db = usePeopleDb()
export default defineEventHandler(async (e)=>{ 
    const query = getQuery(e)
    return await db.findAll({
        where:{
            name: query.name
        }
    })
})