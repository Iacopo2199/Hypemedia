import {useServiceDb} from "~/composables/db.js";

const db = useServiceDb()
export default defineEventHandler(async (e)=>{
    return await db.findAll()
})