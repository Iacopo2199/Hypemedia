import {DataTypes, Sequelize} from "sequelize";
import {fileURLToPath} from "url"
import * as path from "path";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname,'database.sqlite')
})

//storage: '/Users/iaco/WebstormProjects/nuxt_app_example/composables/database.sqlite'

await db.authenticate()

const Center = db.define('center', {
    center_name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    mission: {
        type: DataTypes.STRING,
        allowNull: false
    },
    history: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    opening_hours: {
        type: DataTypes.STRING,
        allowNull: false
    },
    practical_info: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    createdAt: false,
    updatedAt: false,
    tableName: 'center',
})

const People = db.define('people',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activity: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    createdAt: false,
    updatedAt: false,

})

const Cv = db.define('cv',{
    cv_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    education: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    personName: {
        type: DataTypes.STRING
    }
},{
    createdAt: false,
    updatedAt: false,
    tableName: 'cv'
})


await People.sync()
if(await People.count()===0)
    await People.bulkCreate([
        {
            name: 'Iacopo Ferrario',
            picture: 'aaa',
            activity: 'Bestemmiatore',
        },
        {
            name: 'Matteo Huang',
            picture: 'aaa',
            activity: 'Gamer',
        },
        {
            name: 'Anastasia Favero',
            picture: 'aaa',
            activity: 'Developer',
        },
    ])
    
  
await Cv.sync() 
if(await Cv.count()===0)
    await Cv.bulkCreate([
        {
            cv_code: 1,
            education: 'Ing',
            personName: 'Iacopo Ferrario'
        },
        {
            cv_code: 2,
            education: 'Ing',
            personName: 'Matteo Huang'
        },
        {
            cv_code: 3,
            education: 'Ing',
            personName: 'Anastasia Favero'
        },
    ])
    
await Center.sync() 
if(await Center.count()===0)
    await Center.bulkCreate([
        {
            center_name: 'Better Future',
            mission: 'AAAAAAAAAAAAAAAAAAA',
            history: 'BBBBBBBBBBBBBBBBB',
            location: 'CCCCCCCCCCCCCCCC',
            opening_hours: 'DDDDDDDDDDDDD',
            practical_info: 'FFFFFFFFFFFFFF',
        }
    ])
           

export function usePeopleDb(){
    return People
}

export function useCenterDb(){
    return Center
}