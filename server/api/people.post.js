import {usePeopleDb} from "~/composables/db.js";

const db = usePeopleDb()
export default defineEventHandler(async (e)=>{
    try {
        const body = await readBody(e)
        const person = JSON.parse(body)
        return await db.create(person)
    }catch (e) {
        setResponseStatus(e,500)
    }
})