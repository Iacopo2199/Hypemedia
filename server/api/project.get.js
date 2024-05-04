import {useProjectDb} from "~/composables/db.js";

const db = useProjectDb()
export default defineEventHandler(async (e)=>{
    return await db.findAll()
})