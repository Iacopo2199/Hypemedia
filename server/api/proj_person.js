import {useProjectDb} from "~/composables/db.js";


const db = useProjectDb()
export default defineEventHandler(async (e)=>{ 
    const query = getQuery(e)
    return await db.findAll({
        where:{
            personName: query.personName
        }
    })
})