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

const Project = db.define('project', {
    project_name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    personName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    short_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    createdAt: false,
    updatedAt: false,
    tableName: 'project',
})

const Details = db.define('details', {
    project_name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    target_people: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false
    },
    partners: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    createdAt: false,
    updatedAt: false,
    tableName: 'details',
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
            mission: 'Prevention of domestic violence through the protection end empowerment of the victim, rehabilitation of family members; challenge systems and institutions so that they respond more effectively to the needs of battered women and their children; promote social change; and educate the community on gender equality and domestic violence and its consequences.',
            history: 'Established in 2010, Better Future is a full-service center led by a small group of feminist activists and community leaders dedicated to the mission of combating domestic abuse through the protection, rehabilitation, and empowerment of survivors and changing the legal, educational, and social conditions that contribute to a culture of silence surrounding DV. We uphold a zero tolerance policy for violence against women and seek to create an environment where women and girls are protected, defended, and nurtured.',
            location: 'Casa di Accoglienza delle Donne Maltrattate Odv, Via Piacenza 14, Milan',
            opening_hours: 'Monday - Friday: 8.30-18, Saturday: 10-18',
            practical_info: 'Operators will be active in the opening hours of the center listed above, in the other hours the online voice mail will be active to take care of your requests.',
        }
    ])
           

await Project.sync() 
if(await Project.count()===0)
    await Project.bulkCreate([
        {
            project_name: 'Project 1',
            personName: 'Iacopo Ferrario',
            short_description: 'aaaa',
            description: 'aaaaaaaaaaaa',
            picture: 'bb',
        },
        {
            project_name: 'Project 2',
            personName: 'Matteo Huang',
            short_description: 'aaa',
            description: 'aaaaa',
            picture: 'bbb',
        },
        {
            project_name: 'Project 3',
            personName: 'Anastasia Favero',
            short_description: 'aaaa',
            description: 'aaaaa',
            picture: 'cccc',
        },
    ])
           

await Details.sync() 
if(await Details.count()===0)
    await Details.bulkCreate([
        {
            project_name: 'Project 1',
            target_people: 'aba',
            location: 'bb',
            duration: 'bb',
            partners: 'aaa'
        },
        {
            project_name: 'Project 2',
            target_people: 'aaaa',
            location: 'aaaaaabbbaaaaaa',
            duration: 'bb',
            partners: 'aaa'
        },{
            project_name: 'Project 3',
            target_people: 'aaaa',
            location: 'aaaaabbbbaaaaaaa',
            duration: 'bb',
            partners: 'aaa'
        },
    ])
           
 
    
export function usePeopleDb(){
    return People
}

export function useCenterDb(){
    return Center
}

export function useProjectDb(){
    return Project
}

export function useDetailsDb(){
    return Details
}