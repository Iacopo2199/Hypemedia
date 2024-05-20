import {usePractical_infoDb} from "~/composables/db.js";


const db = usePractical_infoDb()
export default defineEventHandler(async (e)=>{ 
    const query = getQuery(e)
    return await db.findAll({
        where:{
            service_name: query.service_name
        }
    })
})