import {useCenterDb} from "~/composables/db.js";

const db = useCenterDb()
export default defineEventHandler(async (e)=>{
    return await db.findAll()
})