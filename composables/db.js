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
    },
    goals: {
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

const Api = db.define('api',{
    key: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
},{
    createdAt: false,
    updatedAt: false,
    tableName: 'api'
})

await Api.sync()
if(await Api.count()===0)
    await Api.bulkCreate([
        {
            key: 'sk-proj-vV5Z90Uy1XryfmXgCwwnT3BlbkFJwT7Wh2ilRTU583nhSU2e',
        }
    ])


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
            service_name: 'HerLegalAid',
            personName: 'Olivia Carter',
            short_description: 'Offering legal consultations, resources, and pro bono services to support women in legal matters.',
            description: 'Our dedicated legal aid services provide essential support for women facing legal challenges. We offer free or affordable initial consultations with experienced legal professionals who specialize in areas such as domestic violence, workplace discrimination, and family law.' +
                'Our extensive online resource library includes guides and articles to help women understand their legal rights and navigate the complexities of the legal system.' +
                'Additionally, we partner with law firms to provide pro bono legal services, ensuring that women who cannot afford representation still have access to justice.' +
                'Through educational seminars, we inform women about their rights and the legal processes involved, empowering them to take informed actions. Our goal is to ensure that every woman has the legal support she needs to protect her rights and achieve fair outcomes.',
            benefits: 'Expert Legal Consultations, Comprehensive Resources, Pro Bono Services, Educational Seminars, Affordable Initial Consultations',
            picture: '/_nuxt/assets/img/women/w6.jpeg',
            testimonials: 'Maria G.: "HerLegalAid gave me the confidence to stand up against workplace discrimination. Their support was invaluable."' +
                'Lena P.: "The pro bono services provided through HerLegalAid helped me navigate a difficult divorce without financial burden."' +
                'Aisha K.: "The online resources were incredibly helpful in understanding my rights and the legal steps I needed to take."' +
                'Carla M.: "Attending their educational seminars empowered me to take control of my legal situation and seek justice."'
        },
        {
            service_name: 'LaVitaèBella',
            personName: 'Amelia Phillips',
            short_description: 'Providing access to counseling, support groups, and wellness resources to promote mental well-being.',
            description: 'Our comprehensive mental health support service is designed to address the unique challenges women face. We offer individual and group counseling sessions with licensed therapists, providing a safe space for women to discuss issues such as anxiety, depression, and trauma.' +
                'Additionally, we facilitate online support groups where women can share experiences and receive peer support for challenges like postpartum depression and anxiety.' +
                'Our wellness resources include articles, videos, and workshops focused on stress management, mindfulness, and self-care techniques, empowering women to take control of their mental health and well-being.' +
                'Through these services, we aim to foster a supportive community that encourages healing and personal growth.',
            benefits: 'Licensed Therapy Sessions, Peer Support Groups, Wellness Resources, Safe and Confidential, Holistic Approach',
            picture: '/_nuxt/assets/img/women/w7.png',
            testimonials: 'Jessica L.: "The counseling sessions through LaVitaèBella helped me manage my anxiety and gave me tools to cope."' +
                'Sophia D.: "The online support group was a lifeline during my postpartum depression. Knowing I wasn’t alone made all the difference."' +
                'Maya S.: "Their wellness workshops on mindfulness and self-care transformed my approach to handling stress."' +
                'Rachel H.: "Being part of this supportive community has been empowering and healing for my mental health journey."'
        },
        {
            service_name: 'Work4Women',
            personName: 'Emily Wang',
            short_description: 'Enhancing women’s professional growth through training, mentorship, and networking opportunities.',
            description: 'Our career development programs are designed to empower women by providing the tools and resources they need to advance professionally.We offer a variety of skills workshops and courses on leadership, communication, digital literacy, and more, aimed at enhancing job readiness and competitiveness in the workforce.' +
                'Through our mentorship programs, women are paired with experienced professionals in their fields who provide guidance, support, and valuable industry insights. Additionally, we organize networking events that create opportunities for women to connect with industry leaders and peers, fostering professional relationships and career opportunities.' +
                'We also offer specialized resources for aspiring entrepreneurs, including business planning assistance and access to startup grants. Our comprehensive approach ensures that women have the support they need to achieve their career goals and attain financial independence.',
            benefits: 'Professional Skills Development, Mentorship Programs, Networking Opportunities, Entrepreneurial Support, Career Advancement',
            picture: '/_nuxt/assets/img/women/w8.jpeg',
            testimonials: 'Lisa T.: "The mentorship program with Work4Women gave me the guidance I needed to navigate my career path successfully."' +
                'Nina R.: "The skills workshops helped me improve my communication and leadership abilities, making me more competitive in the job market."' +
                'Tara M.: "Networking events organized by Work4Women connected me with key industry players, leading to new career opportunities."' +
                'Alisha K.: "The entrepreneurial resources provided me with the confidence and support to launch my own business."'
        },
        {
            service_name: 'HappyHousehold',
            personName: 'Sonia Kade',
            short_description: 'Offering guidance, resources, and support for women in their parenting journey.',
            description: 'Our parenting and family support services are designed to assist women in managing the demands of motherhood. We provide access to parenting classes, covering topics such as child development, discipline strategies, and effective communication. Support groups offer a space for mothers to share experiences and gain advice from peers.' +
                'Additionally, we offer resources on balancing work and family life, including tips for managing time and stress. For single mothers or those facing unique challenges, our services include connections to childcare options, educational resources for children, and assistance with family-related legal matters.' +
                'Our goal is to support women in creating healthy, nurturing environments for their families.',
            benefits: 'Parenting Classes, Support Groups, Work-Life Balance Resources, Childcare and Educational Resources, Family Legal Assistance',
            picture: '/_nuxt/assets/img/women/w9.webp',
            testimonials: 'Anna J.: "HappyHousehold\'s parenting classes were a game-changer for me. I learned so much about effective discipline and communication."' +
                'Briana S.: "The support group gave me a safe space to share my experiences and connect with other moms who understand my challenges."' +
                'Dana M.: "Their resources on balancing work and family life helped me manage my time better and reduce stress."' +
                'Elena P.: "As a single mother, the childcare and educational resources provided by HappyHousehold were invaluable. They made a huge difference in my family\'s life."'
        },
        {
            service_name: 'SheWellness',
            personName: 'Sophia Bennett',
            short_description: 'Promoting physical and mental well-being through health programs and community building.',
            description: 'Our health and wellness programs are tailored to support women’s overall well-being. We offer a range of virtual fitness classes, including yoga, pilates, and strength training, suitable for all fitness levels. Nutrition counseling services help women develop healthy eating habits and create personalized diet plans.' +
                'Additionally, we provide resources on women\'s health issues, preventive care, and maintaining a balanced lifestyle. SheWellness focus on stress management, mindfulness, and self-care techniques. By promoting a holistic approach to health, we aim to help women lead healthier, more fulfilling lives.' +
                'To foster a sense of community and mutual support, we facilitate online wellness forums and discussion groups where women can share their health journeys, tips, and encouragement. Regular health-focused events and social activities, both online and in-person, create opportunities for women to connect, support each other, and build lasting relationships.',
            benefits: 'Virtual Fitness Classes, Nutrition Counseling, Health Resources, Stress Management and Self-Care, Community Building',
            picture: '/_nuxt/assets/img/women/w10.jpeg',
            testimonials: 'Grace W.: "The virtual fitness classes with SheWellness have transformed my routine and improved my physical health immensely."' +
                'Ava C.: "Their nutrition counseling helped me develop a personalized diet plan that works perfectly for my lifestyle."' +
                'Rachel B.: "The resources on stress management and self-care have been incredibly beneficial for my mental well-being."' +
                'Mia K.: "I love the community aspect of SheWellness. The online forums and events have connected me with amazing, supportive women."'
        },

    ])
    
await Practical_info.sync() 
if(await Practical_info.count()===0)
    await Practical_info.bulkCreate([
        {
            service_name: 'HerLegalAid',
            availability: 'Monday to Friday, 9 to 17.',
            logistical_information: 'Online consultations available nationwide. In-person consultations available only in Lombardia\n' +
                'Contact Information: Email: support@betterfuture.org | Phone: 0444123456\n' +
                'Resource Library: Accessible 24/7 on our website.\n' +
                'Seminar Schedule: Monthly seminars held online; in-person seminars available quarterly in major cities in Lombardia.\n' +
                'Appointment Booking: Appointments can be booked through our website or by calling our office during business hours.',
            duration: '01/01/2020 to 31/12/2029',
            location: 'Italy',
        },
        {
            service_name: 'LaVitaèBella',
            availability: 'Monday to Friday, 8 to 18; Saturday, 10 to 16.',
            logistical_information: 'Virtual sessions available nationwide. In-person sessions available at at centers in Lombardia.' +
                'Contact Information: Email: support@betterfuture.org | Phone: 0444123456\n' +
                'Resource Library: Accessible 24/7 on our website.\n' +
                'Workshop Schedule: Monthly workshops held online; quarterly in-person workshops in various locations in Lombardia.\n' +
                'Appointment Booking: Appointments can be booked through our website or by calling our office during business hours.',
            duration: '01/01/2023 to 31/12/2032',
            location: 'Italy',
        },
        {
            service_name: 'Work4Women',
            availability: 'Monday to Friday, 9 to 18; Saturday, 10 to 14.',
            logistical_information: 'Online courses available globally. In-person workshops available in major cities in Lombardia.' +
                'Contact Information: Email: support@betterfuture.org | Phone: 0444123456\n' +
                'Mentorship Program: Ongoing enrollment with virtual and in-person meetings.\n' +
                'Networking Events: Quarterly events held both online and in various locations.\n' +
                'Resource Library: Accessible 24/7 on our website.\n' +
                'Course Schedule: Detailed schedule available on our website with options for weekday and weekend sessions.\n' +
                'Enrollment: Sign up for programs and events through our website or contact our office during business hours.',
            duration: '01/01/2016 to 31/12/2025',
            location: 'Italy',
        },
        {
            service_name: 'HappyHousehold',
            availability: 'Monday to Friday, 9 to 7; Saturday, 10 to 15.',
            logistical_information: ' Online classes and support groups available nationwide. In-person sessions available in Milano, Bergamo and Brescia.' +
                'Contact Information: Email: support@betterfuture.org | Phone: 0444123456\n' +
                'Support Groups: Weekly online and in-person meetings.\n' +
                'Resource Library: Accessible 24/7 on our website.\n' +
                'Class Schedule: Detailed schedule available on our website with weekday and weekend options.\n' +
                'Enrollment: Sign up for classes and support groups through our website or contact our office during business hours.',
            duration: '01/01/2020 to 31/12/2029',
            location: 'Italy',
        },
        {
            service_name: 'SheWellness',
            availability: 'Monday to Friday, 6 to 20; Saturday, 8 to 16; Sunday, 10 to 14',
            logistical_information: 'Virtual classes and events available globally. In-person activities available in Milan, Bergamo and Brescia.' +
                'Contact Information: Email: support@betterfuture.org | Phone: 0444123456\n' +
                'Discussion Groups: Ongoing online forums and bi-weekly discussion group meetings.\n' +
                'Resource Library: Accessible 24/7 on our website.\n' +
                'Event Schedule: Regular events and activities scheduled monthly; detailed schedule available on our website.\n' +
                'Enrollment: Sign up for programs and events through our website or contact our office during business hours.',
            duration: '01/01/2021 to 31/12/2030',
            location: 'Italy',
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
            personName: 'Isabella Morgan',
            short_description: 'To provide resources, knowledge, and community connections necessary for effective parenting to new and single mothers.',
            description: 'NewHorizonsForMoms is an innovative project designed to assist 30 single and new mothers in overcoming the challenges they face.' +
                'Participating mothers will benefit from personalized parenting workshops that cover essential topics such as child development, nutrition, and effective communication.' +
                'We also facilitate access to affordable childcare services, allowing mothers to pursue education or employment opportunities.' +
                'Financial literacy workshops and direct financial aid help mitigate the pressures of economic instability, providing a foundation for long-term financial health.' +
                'Our job assistance program includes career counseling, resume building, and job placement services, ensuring that each mother has the opportunity to achieve professional success.' +
                'By fostering a supportive network and leveraging community resources, NewHorizonsForMoms is committed to helping mothers achieve independence and security.' +
                'For more information or to get involved, please contact us at 1234567890.',
            goals: 'Enhance the parenting skills and confidence of 20 single and new mothers.\n' +
                'Ensure that participating mothers have access to reliable and affordable childcare.\n' +
                'Alleviate the economic stress experienced by single and new mothers.\n' +
                'Support mothers in finding and securing stable employment.\n' +
                'Foster a supportive community among participating mothers.',
            picture: '/_nuxt/assets/img/women/w1.jpeg',
        },
        {
            project_name: 'NewSafeShelter',
            personName: 'Emma Rock',
            short_description: 'To provide safe, supportive, and transitional housing for mothers who are victims of domestic violence, helping them to rebuild their lives.',
            description: 'NewSafeShelter is a project designed to assist 10 mothers escaping domestic violence in rebuilding their lives. We offer safe and stable housing for a period of two years, ensuring that women and their children have a secure place to live as they recover and regain their independence.' +
                'The project provides comprehensive counseling and psychological support services to address the trauma experienced by both the mothers and their children.' +
                'In addition to housing and psychological support, NewSafeShelter aims to empower mothers through various resources and programs that foster personal and professional growth.' +
                'We offer workshops on life skills, financial literacy, and job readiness, helping mothers to build the skills necessary for long-term self-sufficiency. By creating a safe, supportive environment, NewSafeShelter enables mothers to heal, rebuild their confidence, and create a stable future for themselves and their children.' +
                'For more information or to get involved, please contact us at 1234567890.',
            goals: 'Provide a secure and stable living environment for mothers and their children escaping domestic violence.\n' +
                'Address the psychological and emotional needs of mothers and their children who have experienced domestic violence.\n' +
                'Empower mothers with the skills needed for independence and self-sufficiency.\n' +
                'Foster a supportive community where mothers can share experiences and support each other.',
            picture: '/_nuxt/assets/img/women/w2.jpeg',
        },
        {
            project_name: 'HerIntegration',
            personName: 'Noelle Brooks',
            short_description: 'To facilitate the integration of foreign mothers and their family into the community and promote their independence and well-being.',
            description: 'HerIntegration is a comprehensive project designed to assist 20 foreign women and their children in successfully integrating into their new community.' +
                'Recognizing the challenges faced by immigrants, we provide tailored language education programs that cater to different proficiency levels, ensuring that participants can effectively communicate and navigate their new environment. The program includes language classes that focus on practical communication skills, cultural nuances, and essential vocabulary for daily life for both the mother and the children' +
                'Our job placement services are aimed at helping women find suitable employment opportunities that match their skills and experiences and consist of career counseling, resume building, interview preparation, and connections with local employers. Additionally, we offer assistance in securing safe and affordable housing, ensuring that families have a stable living environment.',
            goals: 'Ensure that participants gain proficiency in the local language for effective communication and integration.\n' +
                'Assist women in finding employment that matches their skills and experiences.\n' +
                'Help participants secure safe and affordable housing.\n' +
                'Foster a sense of belonging and community among participants.',
            picture: '/_nuxt/assets/img/women/w3.jpeg',
        },
        {
            project_name: 'SheWorks',
            personName: 'Emily Wang',
            short_description: 'To empower maltreated women by providing internships, job opportunities, professional courses, and training programs, enabling them to achieve economic independence and career advancement.',
            description: 'SheWorks is an extensive initiative designed to help 200 women overcome the economic consequences of family maltreatment. Recognizing the barriers to employment and fair wages that these women face, the project offers comprehensive support to facilitate their reintegration into the workforce.' +
                'Through internships, job placements, and targeted professional courses, SheWorks aims to enhance their skills, boost their confidence, and provide them with meaningful employment opportunities.' +
                'The project includes structured training programs that cover a wide range of professional skills, from basic computer literacy to advanced vocational training. Participants will have access to mentorship and career counseling services to help them navigate their career paths effectively.' +
                'Additionally, SheWorks collaborates with various industries to create internship and job opportunities tailored to the skills and interests of the women involved.' +
                'For more information or to get involved, please contact us at 1234567890.',
            goals: 'Provide real-world work experience and job opportunities for women.\n' +
                'Enhance the professional skills and employability of participants.\n' +
                'Enable participants to achieve economic independence and fair wages.',
            picture: '/_nuxt/assets/img/women/w4.jpeg',
        },
        {
            project_name: 'Girls&Growth',
            personName: 'Sonia Kade',
            short_description: 'To provide comprehensive assistance to young women with family problems in order to ensure their education through high school and university.',
            description: 'Girls&Growth is an impactful project designed to help 20 girls with challenging family backgrounds to achieve their educational goals. Recognizing the barriers these young women face, the project offers financial assistance to cover tuition fees, school supplies, books, and other educational expenses.' +
                'This support extends through high school and into university, ensuring that financial constraints do not hinder their academic progress. In addition to financial aid, SheRaise provides access to tutors who offer personalized lessons and academic support.' +
                'These tutors help the girls excel in their studies, offering guidance on subjects they find challenging and preparing them for exams. The project also addresses practical needs related to education, such as providing food tickets for meals near schools, assistance with transportation and affordable housing' +
                'For more information or to get involved, please contact us at 1234567890.',
            goals: 'Ensure that financial barriers do not impede the educational progress of the girls.\n' +
                'Enhance the academic performance and confidence of the participants.\n' +
                'Support the overall well-being of the participants, ensuring a balanced and conducive environment for learning.',
            picture: '/_nuxt/assets/img/women/w5.png',
        }
    ])
           

await Details.sync() 
if(await Details.count()===0)
    await Details.bulkCreate([
        {
            project_name: 'NewHorizonForMoms',
            target_people: 'New and single mothers',
            location: 'Milan, Italy',
            duration: '12/01/2022 to 31/12/2025',
            partners: 'Esselunga, a leading supermarket chain, is a key partner in this initiative. They provide funding for the project, contribute to financial support for participants, and offer job opportunities within their company.' +
                'Additionally, Esselunga supplies essential goods and services to participating families, helping to ensure that mothers and their children have access to nutritious food and other necessities.'
        },
        {
            project_name: 'NewSafeShelter',
            target_people: 'Mothers victim of domestic violence',
            location: 'Bergamo, Italy',
            duration: '01/01/2024 to 31/12/2025',
            partners: 'Tecnocasa, a leading real estate network, is a key partner providing safe housing for the project.' +
                'They offer secure accommodations and ensure that the living environment is suitable for the needs of the mothers and their children.' +
                'Humanitas: Humanitas, a renowned organization specializing in mental health support, provides the counseling and psychological services essential for the recovery and well-being of the participants.' +
                'Their professionals offer tailored support to help mothers and children heal from trauma and build a healthy future.'
        },
        {
            project_name: 'HerIntegration',
            target_people: 'Foreign women 18+',
            location: 'Milan, Italy',
            duration: '01/05/2023 to 31/12/2024',
            partners: 'Mazzeschi, a firm specializing in immigration and legal services, is a key partner in this initiative.\n' +
                'They provide expert guidance on immigration matters, legal advice, and support with necessary documentation and processes.\n' +
                'Mazzeschi’s involvement ensures that participants receive comprehensive assistance in navigating legal requirements and accessing resources.\n'
        },
        {
            project_name: 'SheWorks',
            target_people: 'Women 18+',
            location: 'Italy',
            duration: '01/01/2020 to 31/12/2030',
            partners: 'Kering, a global luxury group, is a key partner in the SheWorks initiative. The company supports the project by offering internships and job opportunities within its network of brands.' +
                'Kering also contributes to the professional development programs by providing expertise, resources, and funding for training courses. This partnership leverages Kering’s commitment to social responsibility and women’s empowerment, helping to create a sustainable and impactful program that enables women to rebuild their lives and achieve economic independence.'
        },
        {
            project_name: 'Girls&Growth',
            target_people: 'Women 14-22',
            location: 'Milan',
            duration: '01/06/2024 to 01/06/2028',
            partners: 'Politecnico di Milano, a  prestigious technical university in Italy, is a key partner in the Girls&Growth project. The university provides academic support and resources to enhance the educational experience of the participating girls.' +
                'Politecnico di Milano offers access to its network of educators and tutors who provide personalized lessons and academic assistance, ensuring the girls receive the guidance they need to excel in their studies.' +
                'Additionally, the university supports the project by facilitating workshops and educational programs that promote academic excellence and personal development.'
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

export function useKeyDb(){
    return Api
}