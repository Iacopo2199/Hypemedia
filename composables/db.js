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

const Service = db.define('service', {
    service_name: {
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
    benefits: {
        type: DataTypes.STRING,
        allowNull: false
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: false
    },
    testimonials: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    createdAt: false,
    updatedAt: false,
    tableName: 'service',
})

const Practical_info = db.define('practical_info', {
    service_name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    availability: {
        type: DataTypes.STRING,
        allowNull: false
    },
    logistical_information: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    createdAt: false,
    updatedAt: false,
    tableName: 'practical_info',
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
    activity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true
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
    personName: {
        type: DataTypes.STRING
    },
    cv_image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cv_link: {
        type: DataTypes.STRING,
        allowNull: true
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
            name: 'Emma Rock',
            activity: 'Business manager',
            picture: '/_nuxt/assets/img/people/emma.png',
            role: "A business manager plays a critical role in ensuring the smooth operation and success of an organization. Developing and defining the company's short-term and long-term goals. Conducting research to understand market trends, customer needs, and competitor strategies. Identifying new business opportunities and partnerships to drive growth. Creating and managing budgets to ensure financial health and operational efficiency. Reviewing financial statements, monitoring cash flow, and assessing financial performance. Implementing measures to reduce costs and improve profitability."
        },
        {
            name: 'Jeff Blake',
            activity: 'Developer',
            picture: '/_nuxt/assets/img/people/jeff.png',
            role: "Collaborating with stakeholders to understand requirements and planning the project. Creating system architecture and detailed design specifications. Writing clean, efficient code, performing unit tests, and managing code versions using tools like Git. Conducting integration and system testing to identify and fix bugs. Preparing and automating the deployment process, and managing configurations for different environments. Monitoring software performance, resolving incidents, and deploying updates and patches. Participating in team meetings, code reviews, and writing documentation."
        },
        {
            name: 'Sonia Kade',
            activity: 'Human Resource manager',
            picture: '/_nuxt/assets/img/people/sonia.png',
            role: "A Human Resource (HR) Manager plays a critical role in managing an organization's most valuable asset: its people. Their responsibilities encompass a wide range of activities aimed at maximizing employee performance and ensuring organizational effectiveness. Analyzing and forecasting staffing needs to ensure the organization has the right number of employees with the right skills. Creating job descriptions, posting job ads, and utilizing various recruitment channels. Reviewing applications, conducting interviews, and selecting suitable candidates. Facilitating the integration of new hires into the organization, ensuring they understand their roles and company culture."
        },
        {
            name: 'Sophia Bennett',
            activity: 'Counselor',
            picture: '/_nuxt/assets/img/people/sophia.png',
            role: "A counselor plays a vital role in providing support, guidance, and therapeutic interventions to individuals, groups, and communities facing various emotional, psychological, and social challenges. Conducting interviews and assessments to understand clients' issues, history, and needs. Administering and interpreting psychological tests and assessments as needed. Identifying mental health conditions based on assessments and diagnostic criteria. Providing one-on-one sessions to help clients address personal issues and develop coping strategies. Facilitating group sessions to support individuals with shared experiences or challenges."
        },
        {
            name: 'Liam Harper',
            activity: 'Financial Advisor',
            picture: '/_nuxt/assets/img/people/liam.png',
            role: "A financial advisor plays a crucial role in helping individuals and organizations manage their finances and achieve their financial goals. Their responsibilities span a range of activities, from financial planning and investment management to client education and regulatory compliance. Helping clients identify and articulate their short-term and long-term financial goals. Assisting clients in creating and maintaining a budget to manage their income, expenses, and savings effectively. Advising clients on strategies to reduce and manage debt, including consolidation and repayment plans."
        },
        {
            name: 'Ava Reed',
            activity: 'Program Coordinator',
            picture: '/_nuxt/assets/img/people/ava.png',
            role: "A program coordinator plays a vital role in managing and overseeing the implementation of programs within an organization. Their responsibilities span from planning and organizing to monitoring and evaluating program activities. Conducting assessments to identify the needs and objectives of the program. Developing detailed plans, including goals, objectives, timelines, and resources needed for program implementation. Creating and managing the program budget, ensuring funds are allocated appropriately and efficiently. Securing and managing resources such as staff, materials, and facilities needed for program activities."
        },
        {
            name: 'Mason Hayes',
            activity: 'Website Specialist',
            picture: '/_nuxt/assets/img/people/mason.png',
            role: "A website specialist plays a crucial role in designing, developing, maintaining, and optimizing websites to ensure they meet user needs and organizational goals. Creating visually appealing and user-friendly website designs that align with brand identity. Writing and editing code for the front end of the website using HTML, CSS, JavaScript, and other web technologies. Managing server-side operations, databases, and application logic to ensure website functionality. Collaborating with content creators to produce high-quality content that meets SEO and user engagement standards."
        },
        {
            name: 'Olivia Carter',
            activity: 'Legal Advisor',
            picture: '/_nuxt/assets/img/people/olivia.png',
            role: "A legal advisor plays a critical role in providing legal guidance and support to individuals, businesses, and organizations to ensure compliance with laws and regulations, mitigate risks, and navigate legal challenges. Providing expert legal advice to clients on a wide range of legal issues, including contracts, property, employment, corporate law, and more. Evaluating potential legal risks associated with business decisions and advising on risk mitigation strategies. Preparing and presenting formal legal opinions on complex legal matters to guide client decisions."
        },
        {
            name: 'Noelle Brooks',
            activity: 'Community Liaison',
            picture: '/_nuxt/assets/img/people/noelle.png',
            role: "A community liaison serves as a bridge between an organization and the community it serves, fostering communication, collaboration, and understanding. Their role is crucial in ensuring that the needs and concerns of the community are addressed while promoting the organization's initiatives. Building and maintaining relationships with community members, leaders, and organizations. Sharing information about the organization's programs, services, and events with the community. Gathering feedback from the community to understand their needs, concerns, and suggestions."
        },
        {
            name: 'Isabella Morgan',
            activity: 'Business Manager',
            picture: '/_nuxt/assets/img/people/isabella.png',
            role: "A business manager plays a critical role in the planning, organization, and supervision of various business activities to ensure an organization’s operational efficiency and financial performance. They are responsible for overseeing daily operations, managing resources, and leading teams to achieve strategic goals. Establishing short-term and long-term goals aligned with the organization's strategic vision. Developing and implementing business strategies to achieve organizational objectives. Tracking progress towards goals and making adjustments to strategies as needed."
        },
        {
            name: 'Lucas Foster',
            activity: 'Website Specialist',
            picture: '/_nuxt/assets/img/people/lucas.png',
            role: "A website specialist plays a crucial role in designing, developing, maintaining, and optimizing websites to ensure they meet user needs and organizational goals. Creating visually appealing and user-friendly website designs that align with brand identity. Writing and editing code for the front end of the website using HTML, CSS, JavaScript, and other web technologies. Managing server-side operations, databases, and application logic to ensure website functionality. Collaborating with content creators to produce high-quality content that meets SEO and user engagement standards."
        },
        {
            name: 'Mia Coleman',
            activity: 'Crisis Intervention Specialist',
            picture: '/_nuxt/assets/img/people/mia.png',
            role: "A Crisis Intervention Specialist plays a critical role in providing immediate support and intervention to individuals experiencing acute emotional, mental, or psychological distress. Their responsibilities involve assessing the situation, offering support, implementing intervention strategies, and connecting individuals with necessary resources and services. Quickly assessing the severity of the crisis and the immediate needs of the individual. Providing immediate support to help stabilize the individual emotionally and mentally."
        },
        {
            name: 'Lily Perry',
            activity: 'Public Relations Manager',
            picture: '/_nuxt/assets/img/people/lily.png',
            role: "A Public Relations (PR) Manager plays a pivotal role in shaping and maintaining the public image of an organization. They are responsible for managing communication strategies, media relations, and public perception to build a positive reputation and foster strong relationships with various stakeholders. Developing and implementing comprehensive PR strategies and communication plans to enhance the organization's image. Crafting clear, consistent, and compelling messages that align with the organization's goals and values."
        },
        {
            name: 'Charlotte Lee',
            activity: 'Volunteer Coordinator',
            picture: '/_nuxt/assets/img/people/charlotte.png',
            role: "A Volunteer Coordinator plays a crucial role in managing and organizing volunteer programs within an organization. They are responsible for recruiting, training, and supervising volunteers to ensure effective and efficient support of the organization’s mission and activities. Developing and implementing strategies to attract and recruit volunteers through various channels such as social media, community events, and partnerships with local organizations. Engaging with community groups, schools, businesses, and other potential sources of volunteers to raise awareness about volunteer opportunities."
        },
        {
            name: 'James Bennett',
            activity: 'Case Manager',
            picture: '/_nuxt/assets/img/people/james.png',
            role: "A Case Manager plays a crucial role in providing comprehensive support and advocacy for individuals or families in need of assistance. They work closely with clients to assess their needs, develop personalized plans, and coordinate services to help them achieve their goals and improve their quality of life. Conducting comprehensive assessments to identify the strengths, needs, and goals of clients. Collaborating with clients to establish realistic and achievable goals based on their individual circumstances."
        },
        {
            name: 'Amelia Phillips',
            activity: 'Healthcare Advisor',
            picture: '/_nuxt/assets/img/people/amelia.png',
            role: "A Healthcare Advisor plays a vital role in providing guidance, support, and information to individuals and organizations within the healthcare sector. They help clients navigate the complex healthcare landscape, make informed decisions, and optimize healthcare outcomes. Providing clients with accurate and up-to-date information about health conditions, treatment options, preventive measures, and healthy lifestyle choices. Educating clients on strategies for preventing common health problems, such as promoting vaccinations, healthy eating habits, exercise, and stress management."
        },
        {
            name: 'Emily Wang',
            activity: 'Job Training Specialist',
            picture: '/_nuxt/assets/img/people/emily.png',
            role: "A Job Training Specialist, also known as a Training Coordinator or Employment Training Specialist, plays a crucial role in facilitating job training programs and initiatives to help individuals develop the skills and knowledge needed to succeed in the workforce. Assessing the skills, knowledge, and training needs of individuals or target groups to identify areas for improvement. Designing and developing training materials, lesson plans, and curricula tailored to the specific needs of participants and the requirements of the job market."
        },
        {
            name: 'Evelyn Mitchell',
            activity: 'Website Specialist',
            picture: '/_nuxt/assets/img/people/evelyn.png',
            role: "A website specialist plays a crucial role in designing, developing, maintaining, and optimizing websites to ensure they meet user needs and organizational goals. Creating visually appealing and user-friendly website designs that align with brand identity. Writing and editing code for the front end of the website using HTML, CSS, JavaScript, and other web technologies. Managing server-side operations, databases, and application logic to ensure website functionality. Collaborating with content creators to produce high-quality content that meets SEO and user engagement standards."
        },
        {
            name: 'Elijah Anderson',
            activity: 'Fundraising Coordinator',
            picture: '/_nuxt/assets/img/people/elijah.png',
            role: "A Fundraising Coordinator is responsible for planning, implementing, and overseeing fundraising initiatives for an organization or cause. They play a crucial role in generating financial support to sustain programs, projects, and operations. Developing comprehensive fundraising strategies aligned with the organization’s goals, mission, and financial needs. Establishing fundraising targets and objectives, both short-term and long-term, to guide fundraising efforts. Identifying and exploring various fundraising methods and sources, including individual donors, corporate sponsorships, grants, events, and online campaigns."
        },
        {
            name: 'Steven Hu',
            activity: 'Policy Advocate',
            picture: '/_nuxt/assets/img/people/steven.png',
            role: "A Policy Advocate serves as a champion for social change by influencing public policy decisions and advocating for the rights and interests of specific populations or causes. Conducting in-depth research on legislative proposals, regulations, and policy issues relevant to the advocacy agenda. Analyzing data, statistics, and evidence to understand the impact of existing policies and identify areas for improvement or reform. Identifying emerging trends, challenges, and disparities affecting the target population or issue area, and assessing their policy implications. Developing policy recommendations and solutions based on research findings, best practices, and stakeholder input."
        }
    ])
    
  
await Cv.sync() 
if(await Cv.count()===0)
    await Cv.bulkCreate([
        {
            cv_code: 1,
            personName: 'Emma Rock',
            cv_image: '/_nuxt/assets/cv/emma/emma_cv.png',
            cv_link: '/_nuxt/assets/cv/emma/emmaCv.pdf'
        },
        {
            cv_code: 2,
            personName: 'Amelia Phillips',
            cv_image: '/_nuxt/assets/cv/amelia/amelia_cv.png',
            cv_link: '/_nuxt/assets/cv/amelia/ameliaCv.pdf'
        },
        {
            cv_code: 3,
            personName: 'Charlotte Lee',
            cv_image: '/_nuxt/assets/cv/charlotte/charlotte_cv.png',
            cv_link: '/_nuxt/assets/cv/charlotte/charlotteCv.pdf'
        },
        {
            cv_code: 4,
            personName: 'Elijah Anderson',
            cv_image: '/_nuxt/assets/cv/elijah/elijah_cv.png',
            cv_link: '/_nuxt/assets/cv/elijah/elijahCv.pdf'
        },
        {
            cv_code: 5,
            personName: 'Ava Reed',
            cv_image: '/_nuxt/assets/cv/ava/ava_cv.png',
            cv_link: '/_nuxt/assets/cv/ava/avaCv.pdf'
        },
        {
            cv_code: 6,
            personName: 'Emily Wang',
            cv_image: '/_nuxt/assets/cv/emily/emily_cv.png',
            cv_link: '/_nuxt/assets/cv/emily/emilyCv.pdf'
        },
        {
            cv_code: 7,
            personName: 'Evelyn Mitchell',
            cv_image: '/_nuxt/assets/cv/evelyn/evelyn_cv.png',
            cv_link: '/_nuxt/assets/cv/evelyn/evelynCv.pdf'
        },
        {
            cv_code: 8,
            personName: 'Isabella Morgan',
            cv_image: '/_nuxt/assets/cv/isabella/isabella_cv.png',
            cv_link: '/_nuxt/assets/cv/isabella/isabellaCv.pdf'
        },
        {
            cv_code: 9,
            personName: 'James Bennett',
            cv_image: '/_nuxt/assets/cv/james/james_cv.png',
            cv_link: '/_nuxt/assets/cv/james/jamesCv.pdf'
        },
        {
            cv_code: 10,
            personName: 'Jeff Blake',
            cv_image: '/_nuxt/assets/cv/jeff/jeff_cv.png',
            cv_link: '/_nuxt/assets/cv/jeff/jeffCv.pdf'
        },
        {
            cv_code: 11,
            personName: 'Liam Harper',
            cv_image: '/_nuxt/assets/cv/liam/liam_cv.png',
            cv_link: '/_nuxt/assets/cv/liam/liamCv.pdf'
        },
        {
            cv_code: 12,
            personName: 'Lily Perry',
            cv_image: '/_nuxt/assets/cv/lily/lily_cv.png',
            cv_link: '/_nuxt/assets/cv/lily/lilyCv.pdf'
        },
        {
            cv_code: 13,
            personName: 'Lucas Foster',
            cv_image: '/_nuxt/assets/cv/lucas/lucas_cv.png',
            cv_link: '/_nuxt/assets/cv/lucas/lucasCv.pdf'
        },
        {
            cv_code: 14,
            personName: 'Mason Hayes',
            cv_image: '/_nuxt/assets/cv/mason/mason_cv.png',
            cv_link: '/_nuxt/assets/cv/mason/masonCv.pdf'
        },
        {
            cv_code: 15,
            personName: 'Mia Coleman',
            cv_image: '/_nuxt/assets/cv/mia/mia_cv.png',
            cv_link: '/_nuxt/assets/cv/mia/miaCv.pdf'
        },
        {
            cv_code: 16,
            personName: 'Noelle Brooks',
            cv_image: '/_nuxt/assets/cv/noelle/noelle_cv.png',
            cv_link: '/_nuxt/assets/cv/noelle/noelleCv.pdf'
        },
        {
            cv_code: 17,
            personName: 'Olivia Carter',
            cv_image: '/_nuxt/assets/cv/olivia/olivia_cv.png',
            cv_link: '/_nuxt/assets/cv/olivia/oliviaCv.pdf'
        },
        {
            cv_code: 18,
            personName: 'Sonia Kade',
            cv_image: '/_nuxt/assets/cv/sonia/sonia_cv.png',
            cv_link: '/_nuxt/assets/cv/sonia/soniaCv.pdf'
        },
        {
            cv_code: 19,
            personName: 'Sophia Bennett',
            cv_image: '/_nuxt/assets/cv/sophia/sophia_cv.png',
            cv_link: '/_nuxt/assets/cv/sophia/sophiaCv.pdf'
        },
        {
            cv_code: 20,
            personName: 'Steven Hu',
            cv_image: '/_nuxt/assets/cv/steven/steven_cv.png',
            cv_link: '/_nuxt/assets/cv/steven/stevenCV.pdf'
        },
    ])


await Service.sync() 
if(await Service.count()===0)
    await Service.bulkCreate([
        {
            service_name: 'Service name1',
            personName: 'Emma Rock',
            short_description: 'short desc1',
            description: 'description1',
            benefits: 'benefits1',
            picture: 'picture1',
            testimonials: 'testimonials1'
        }
    ])
    
await Practical_info.sync() 
if(await Practical_info.count()===0)
    await Practical_info.bulkCreate([
        {
            service_name: 'Service name1',
            availability: 'avail1',
            logistical_information: 'log_info1',
            duration: 'duration1',
            location: 'location1',
        }
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
            project_name: 'NewHorizonForMoms',
            personName: 'Emma Rock',
            short_description: 'To provide comprehensive support to new and single mothers, equipping them with the resources, knowledge, and community connections necessary for effective parenting and personal well-being.',
            description: 'NewHorizonForMoms is a holistic program dedicated to supporting new and single mothers through various stages of motherhood. Our mission is to empower these women by offering parenting tips, childcare options, and access to support groups, ensuring they have the tools and confidence needed to thrive both as individuals and as parents.\n'+
                'The main objectives are:\n' +
                '1)Parenting tips and education:\n' +
                'Workshops and Seminars: Regular sessions covering essential parenting topics such as newborn care, child development milestones, positive discipline techniques, and health and nutrition for children.\n'+
                'Online Resources: A comprehensive library of articles, videos, and e-books available on our website, covering a wide range of parenting topics.\n'+
                'One-on-One Coaching: Personalized sessions with parenting coaches to address specific challenges and questions that mothers might have.\n'+
                '2)Childcare Options:\n' +
                'Daycare Services: Affordable and high-quality daycare facilities to ensure children are cared for in a safe and stimulating environment while mothers work or attend school.\n'+
                'Babysitting Network: A vetted network of babysitters available for temporary and emergency childcare needs.\n'+
                'Parent Co-Ops: Community-driven childcare options where mothers can take turns looking after each other’s children, fostering a sense of community and mutual support.\n' +
                '3)Support Groups:\n' +
                'Peer Support Groups: Regularly scheduled group meetings where mothers can share experiences, challenges, and advice in a supportive and non-judgmental environment.\n'+
                'Specialized Support: Groups focusing on specific issues such as postpartum depression, single parenting, and managing work-life balance.\n'+
                'Online Forums: Virtual support groups and forums for mothers who may not be able to attend in person, providing a platform for connection and advice sharing.\n'+
                'NewHorizonForMoms is committed to building a strong community of support. We encourage participation from local businesses, healthcare providers, and volunteers to enhance our services and create a network of support for the mothers in our program.\n' +
                'For more information or to get involved, please contact us at 1234567890.',
            picture: 'pic 1',
        },
        {
            project_name: 'NewSafeShelter',
            personName: 'Matteo Huang',
            short_description: 'To provide safe, supportive, and transitional housing for mothers who are victims of domestic violence, helping them to rebuild their lives in a secure and stable environment.',
            description: 'NewSafeShelter is a dedicated initiative aimed at assisting mothers who have experienced domestic violence and are seeking new, safe homes. Our mission is to offer a comprehensive range of services that ensure safety, promote healing, and foster independence. We provide temporary housing solutions while supporting these women in finding permanent, violence-free homes.\n'+
                'The main objectives are:\n' +
                '1)Safe Housing Solutions:\n' +
                'Emergency Shelters: Immediate, short-term housing options for mothers and their children escaping violent situations. These shelters provide a secure environment where they can find respite and begin the recovery process.\n'+
                'Transitional Housing: Medium-term housing that supports mothers as they work towards long-term stability and independence. This housing includes fully furnished apartments and shared living spaces.\n'+
                'Housing Search and moving Assistance: Help in finding and securing permanent housing, including guidance on affordable housing options and support with applications and moving.'+
                '2)Counseling and Psychological Support:\n'+
                'Individual Counseling: One-on-one therapy sessions with licensed counselors to address trauma, anxiety, depression, and other mental health issues stemming from domestic violence.\n' +
                'Support Groups: Facilitated group sessions where mothers can share experiences and support each other in a safe, non-judgmental space.\n' +
                'Child Therapy: Specialized counseling for children who have witnessed or been affected by domestic violence, helping them to process their experiences and emotions.\n' +
                '3)Legal and Financial Assistance:\n' +
                'Legal Aid: Access to legal services for issues related to domestic violence, including restraining orders, custody battles, and divorce proceedings.\n' +
                'Financial Counseling: Guidance on budgeting, financial planning, and accessing financial aid programs to help mothers achieve economic independence.\n' +
                'NewSafeShelter actively engages with local communities, businesses, and volunteers to create a robust network of support. We collaborate with local housing authorities, healthcare providers, and educational institutions to extend our services and resources.\n' +
                'For more information or to get involved, please contact us at 1234567890.',
            picture: 'pic 2',
        },
        {
            project_name: 'SheWellness Network',
            personName: 'Anastasia Favero',
            short_description: 'To create a supportive online community focused on enhancing women’s physical and mental health through virtual fitness classes, mental health resources, and discussion forums.',
            description: 'SheWellnessNetwork is a comprehensive online platform dedicated to fostering women\'s physical and mental well-being. Our mission is to provide women with accessible health resources, opportunities for virtual fitness, and a supportive community to share experiences and advice. By leveraging technology, we aim to make wellness resources available to women everywhere, ensuring they can lead healthy, balanced lives.'+
                'The main objectives are:\n' +
                '1)Virtual Fitness Classes:\n' +
                'Live and On-Demand Workouts: Access a variety of fitness classes including yoga, Pilates, strength training, cardio, and dance, available both live and on-demand to fit different schedules.\n'+
                'Expert Instructors: Classes led by certified fitness instructors who provide guidance, motivation, and modifications for all fitness levels.\n' +
                'Specialized Programs: Tailored fitness programs for specific needs such as prenatal and postnatal workouts, stress relief exercises, and beginner-friendly routines.\n' +
                '2)Mental Health Resources:\n' +
                'Counseling and Therapy Sessions: Virtual sessions with licensed mental health professionals offering individual and group therapy.\n' +
                'Workshops and Webinars: Educational sessions on topics such as stress management, mindfulness, coping strategies, and building resilience.\n' +
                'Resource Library: An extensive collection of articles, videos, and guides on various mental health topics, providing valuable information and self-help tools.\n' +
                '3)Discussion Forums and Community support:\n' +
                'Online Forums: Safe and moderated spaces where women can discuss a wide range of topics including health, fitness, mental wellness, parenting, relationships, and career challenges.\n' +
                'Support Groups: Virtual support groups focusing on specific issues such as anxiety, depression, postpartum challenges, and chronic illness.\n' +
                'Peer Mentorship: Opportunities for women to connect with mentors and peers who can offer guidance, support, and encouragement.\n' +
                'SheWellnessNetwork encourages participation and contributions from health professionals, fitness experts, and mental health advocates to enrich the platform’s offerings. We also collaborate with wellness influencers and community leaders to host special events and awareness campaigns.\n' +
                'For more information or to get involved, please contact us at 1234567890.',
            picture: 'pic 3',
        },
        {
            project_name: 'HerLegalAid',
            personName: 'Emma Rock',
            short_description: 'To provide comprehensive legal support services to women, offering resources and access to legal professionals for issues such as workplace discrimination, domestic violence, and family law.',
            description: 'HerLegalAid is a dedicated legal support service designed to assist women facing legal challenges. Our mission is to ensure that women have access to the legal resources and professional assistance they need to navigate complex legal issues effectively. By focusing on areas such as workplace discrimination, domestic violence, and family law, we aim to empower women to assert their rights and achieve justice.\n' +
                'The main objectives are:\n' +
                '1)Legal resources:\n' +
                'Information Hub: A comprehensive online library with articles, guides, and FAQs on various legal topics, including workplace rights, domestic violence laws, and family law.\n' +
                'Resource Database: A curated list of organizations, shelters, and support services available for women in need of legal and emotional support.\n' +
                '2)Access to Legal Professionals:\n' +
                'Consultations: Free or low-cost initial consultations with experienced lawyers specializing in relevant fields.\n' +
                'Pro Bono Services: Partnerships with legal firms and professionals who offer pro bono (free) legal services for women unable to afford legal representation.\n' +
                'Referral Network: A network of trusted legal professionals who can provide specialized support and representation in court.\n' +
                'HerLegalAid collaborates with local organizations, shelters, and advocacy groups to extend our reach and impact. We work closely with community leaders to raise awareness about legal rights and available support services.\n' +
                'For more information or to get involved, please contact us at 1234567890.',
            picture: 'pic 1',
        },
        {
            project_name: 'SheRaiseFund',
            personName: 'Emma Rock',
            short_description: 'To empower young women by providing financial support through a fundraising campaign focused on career development programs.',
            description: 'SheRaise Fund is a dedicated fundraising initiative aimed at enhancing young women’s professional growth and career advancement. Our mission is to raise funds that will be directly invested in programs and services designed to support women\'s career development. By providing access to professional training, mentorship, and entrepreneurial resources, we aim to create a pathway for women to achieve their career goals and attain financial independence.' +
                'The main objectives are:\n' +
                '1)Professional Training\n' +
                'Skills Workshops: Offering workshops in key areas such as leadership, communication, project management, and digital literacy to enhance professional skills and job readiness.\n' +
                'Certification Programs: Funding for women to obtain certifications in various fields, increasing their qualifications and competitiveness in the job market.\n' +
                'Industry-Specific Training: Specialized training programs tailored to high-demand industries such as technology, healthcare, finance, and creative arts.\n' +
                '2)Mentorship and Networking\n' +
                'Mentorship Programs: Pairing women with experienced mentors in their desired fields to provide guidance, support, and professional insights.\n' +
                'Networking Events: Organizing events and seminars that facilitate networking opportunities with industry leaders and peers, fostering professional connections and career opportunities.\n' +
                'Online Communities: Creating online platforms where women can connect, share resources, and support each other’s career development journeys.\n' +
                '3)Entrepreneurship Support\n' +
                'Business Planning Assistance: Providing resources and workshops on business planning, market analysis, and financial management for aspiring women entrepreneurs.\n' +
                'Startup Grants: Offering grants to women starting their own businesses, helping them to cover initial costs and grow their ventures.\n' +
                'Business Incubators: Partnering with business incubators to provide women entrepreneurs with workspace, mentorship, and access to funding opportunities.\n' +
                'SheRaise Fund collaborates with local businesses, professional organizations, and community groups to maximize the impact of our fundraising efforts. We also engage volunteers and advocates to participate in fundraising events, mentorship programs, and advocacy initiatives.\n' +
                'For more information or to get involved, please contact us at 1234567890.',
            picture: 'pic 1',
        }
    ])
           

await Details.sync() 
if(await Details.count()===0)
    await Details.bulkCreate([
        {
            project_name: 'NewHorizonForMom',
            target_people: 'New and single mothers',
            location: 'Milan',
            duration: '12/01/2022 to 31/12/2025',
            partners: 'Esselunga'
        },
        {
            project_name: 'NewSafeShelter',
            target_people: 'Mothers victim of domestic violence',
            location: 'Italy',
            duration: '12/01/2022 to 31/12/2025',
            partners: 'Microsoft'
        },
        {
            project_name: 'SheWellness Newtwork',
            target_people: 'Women 18+',
            location: 'USA',
            duration: '12/01/2022 to 31/12/2025',
            partners: 'Walmart'
        },
        {
            project_name: 'HerLegalAid',
            target_people: 'Women 18+',
            location: 'Italy',
            duration: '01/01/2020 to 31/12/2030',
            partners: 'Walmart'
        },
        {
            project_name: 'SheRaiseFund',
            target_people: 'Women 18-25',
            location: 'Milan',
            duration: '01/06/2024 to 01/06/2028',
            partners: 'Comune di Milano'
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

export function useCvDb(){
    return Cv
}

export function useServiceDb(){
    return Service
}

export function usePractical_infoDb(){
    return Practical_info
}