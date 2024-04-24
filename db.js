import { Sequelize, DataTypes } from "sequelize";
import { fileURLToPath } from "url";
import path from "path";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, "DB.sqlite")
})

async function initDB() {
    await db.authenticate();

    //Define tables and parameters
    const People = db.define('people', {
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        age: DataTypes.NUMBER
    }, {
        createdAt: false,
        updatedAt: false,
    })



    await People.sync()
    if (await People.count() === 0)
        await People.bulkCreate([
            {
                name: 'Iaco',
                surname: 'diooo',
                age: "26"
            }
        ])

    return People

}

async function initServer() {
    const model = await initDB();

    app.listen(3000, () => console.log("Listening on port 3000"));
}



initServer();