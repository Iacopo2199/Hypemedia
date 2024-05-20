import {useServiceDb} from "~/composables/db.js";


const db = useServiceDb()
export default defineEventHandler(async (e)=>{ 
    const query = getQuery(e)
    return await db.findAll({
        where:{
            personName: query.personName
        }
    })
})