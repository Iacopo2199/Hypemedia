import { defineEventHandler, readBody } from 'h3';
import axios from 'axios';

export default defineEventHandler(async (event) => {
    const body = await readBody(event); // Parse the incoming request body
    const { message } = body;

    // Use the API key from runtimeConfig, not exposed to the client
    const apiKey = useRuntimeConfig().openaiApiKey;

    const initialPrompt = 'You are a chatbot tailored for a website whose purpose is to help women facing various difficulties.  \n' +
        'Rules: \n' +
        '1.You have to provide empathetic (implicitly) and informative responses to inquiries related to topics such as domestic violence, mental health support, and legal assistance. \n' +
        '2. Only provide users the links of the services and projects you find in the documents provided. \n' +
        '3. Provide links of service and projects to people having related problem. \n' +
        '4. Offer encouragement and empowerment messages. \n' +
        '5. Respect user privacy and confidentiality. \n' +
        '6. Try to question the user about her problem and understand it before giving detailed assistance. \n' +
        '7. Be concisive and flexible, try to also avoid being repetitive. \n' +
        ' \n' +
        'Files: You are provided with a BetterFuture-summary.txt which provides the activity name, the url and a description for each activity \n' +
        ' \n' +
        'Process: Always look at the BetterFuture-summary.txt and no other file'

    const fileContext = 'Activities include both services and projects\n' +
        '\n' +
        'Project name: NewHorizonForMoms\n' +
        'URL: www.newhorizon.it\n' +
        'Description: NewHorizonsForMoms is an innovative project designed to assist 30 single and new mothers in overcoming the challenges they face. Participating mothers will benefit from \n' +
        'personalized parenting workshops that cover essential topics such as child development, nutrition, and effective communication. We also facilitate access to affordable childcare services, \n' +
        'allowing mothers to pursue education or employment opportunities. Financial literacy workshops and direct financial aid help mitigate the pressures of economic instability, \n' +
        'providing a foundation for long-term financial health.\n' +
        '---\n' +
        'Project name: NewSafeShelter\n' +
        'URL: www.newsafeshelter.it\n' +
        'Description: NewSafeShelter is a project designed to assist 10 mothers escaping domestic violence in rebuilding their lives. We offer safe and stable housing for a period of two years, \n' +
        'ensuring that women and their children have a secure place to live as they recover and regain their independence.\n' +
        'The project provides comprehensive counseling and psychological support services to address the trauma experienced by both the mothers and their children.\n' +
        'We offer workshops on life skills, financial literacy, and job readiness, helping mothers to build the skills necessary for long-term self-sufficiency.\n' +
        '---\n' +
        'Project name: HerIntegration\n' +
        'URL: www.herintegration.it\n' +
        'Description: HerIntegration is a comprehensive project designed to assist 20 foreign women and their children in successfully integrating into their new community.\n' +
        'Recognizing the challenges faced by immigrants, we provide tailored language education programs that cater to different proficiency levels, ensuring that participants can effectively \n' +
        'communicate and navigate their new environment. The program includes language classes that focus on practical communication skills, cultural nuances, and essential vocabulary for daily \n' +
        'life for both the mother and the children.\n' +
        'Our job placement services are aimed at helping women find suitable employment opportunities that match their skills and experiences and consist of career counseling, resume building, \n' +
        'interview preparation, and connections with local employers. Additionally, we offer assistance in securing safe and affordable housing, ensuring that families have a stable living \n' +
        'environment.\n' +
        '---\n' +
        'Project name: SheWorks\n' +
        'URL: www.sheworks.it\n' +
        'Description: SheWorks is an extensive initiative designed to help 200 women overcome the economic consequences of family maltreatment. Recognizing the barriers to employment and fair \n' +
        'wages that these women face, the project offers comprehensive support to facilitate their reintegration into the workforce. Through internships, job placements, and targeted professional \n' +
        'courses, SheWorks aims to enhance their skills, boost their confidence, and provide them with meaningful employment opportunities. The project includes structured training programs that \n' +
        'cover a wide range of professional skills, from basic computer literacy to advanced vocational training. Participants will have access to mentorship and career counseling services to help \n' +
        'them navigate their career paths effectively. \n' +
        '---\n' +
        'Project name: Girls&Growth\n' +
        'URL: www.girlandgrowth.it\n' +
        'Description: Girls&Growth is an impactful project designed to help 20 girls with challenging family backgrounds to achieve their educational goals. Recognizing the barriers these young \n' +
        'women face, the project offers financial assistance to cover tuition fees, school supplies, books, and other educational expenses.\n' +
        'This support extends through high school and into university, ensuring that financial constraints do not hinder their academic progress. In addition to financial aid, SheRaise provides \n' +
        'access to tutors who offer personalized lessons and academic support.\n' +
        'These tutors help the girls excel in their studies, offering guidance on subjects they find challenging and preparing them for exams. The project also addresses practical needs related to \n' +
        'education, such as providing food tickets for meals near schools, assistance with transportation and affordable housing\n' +
        '---\n' +
        'Service name: HerLegalAid\n' +
        'URL: www.herlegalaid.it\n' +
        'Description: Our dedicated legal aid services provide essential support for women facing legal challenges. We offer free or affordable initial consultations with experienced legal \n' +
        'professionals who specialize in areas such as domestic violence, workplace discrimination, and family law.\n' +
        'Our extensive online resource library includes guides and articles to help women understand their legal rights and navigate the complexities of the legal system.\n' +
        'Additionally, we partner with law firms to provide pro bono legal services, ensuring that women who cannot afford representation still have access to justice.\n' +
        'Through educational seminars, we inform women about their rights and the legal processes involved, empowering them to take informed actions. Our goal is to ensure that every woman has the \n' +
        'legal support she needs to protect her rights and achieve fair outcomes.\n' +
        '---\n' +
        'Service name: LaVitaèBella\n' +
        'URL: www.lavitaebella.it\n' +
        'Description: Our comprehensive mental health support service is designed to address the unique challenges women face. We offer individual and group counseling sessions with licensed \n' +
        'therapists, providing a safe space for women to discuss issues such as anxiety, depression, and trauma. Additionally, we facilitate online support groups where women can share experiences \n' +
        'and receive peer support for challenges like postpartum depression and anxiety.\n' +
        'Our wellness resources include articles, videos, and workshops focused on stress management, mindfulness, and self-care techniques, empowering women to take control of their mental health \n' +
        'and well-being.\n' +
        '---\n' +
        'Service name: Work4Women\n' +
        'URL: www.work4women.it\n' +
        'Description: Our career development programs are designed to empower women by providing the tools and resources they need to advance professionally.We offer a variety of skills workshops \n' +
        'and courses on leadership, communication, digital literacy, and more, aimed at enhancing job readiness and competitiveness in the workforce.\n' +
        'Through our mentorship programs, women are paired with experienced professionals in their fields who provide guidance, support, and valuable industry insights. Additionally, we organize \n' +
        'networking events that create opportunities for women to connect with industry leaders and peers, fostering professional relationships and career opportunities.\n' +
        'We also offer specialized resources for aspiring entrepreneurs, including business planning assistance and access to startup grants. \n' +
        '---\n' +
        'Service name: HappyHousehold\n' +
        'URL: www.happyhousehold.it\n' +
        'Description: Our parenting and family support services are designed to assist women in managing the demands of motherhood. We provide access to parenting classes, covering topics such as \n' +
        'child development, discipline strategies, and effective communication. Support groups offer a space for mothers to share experiences and gain advice from peers. Additionally, we offer \n' +
        'resources on balancing work and family life, including tips for managing time and stress. For single mothers or those facing unique challenges, our services include connections to \n' +
        'childcare options, educational resources for children, and assistance with family-related legal matters.\n' +
        '---\n' +
        'Service name: SheWellness\n' +
        'URL: www.shewellness.it\n' +
        'Description: Our health and wellness programs are tailored to support women’s overall well-being. We offer a range of virtual fitness classes, including yoga, pilates, and strength \n' +
        'training, suitable for all fitness levels. Nutrition counseling services help women develop healthy eating habits and create personalized diet plans.\n' +
        'Additionally, we provide resources on women\'s health issues, preventive care, and maintaining a balanced lifestyle. SheWellness focus on stress management, mindfulness, and self-care \n' +
        'techniques. By promoting a holistic approach to health, we aim to help women lead healthier, more fulfilling lives.'

    const payload = {
        model: 'gpt-3.5-turbo', // Use the model you set up in Playground
        messages: [
            { role: 'system', content: initialPrompt },
            { role: 'system', content: fileContext },
            { role: 'user', content: message },
        ],
    };

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', payload, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
        });

        return { message: response.data.choices[0].message.content.trim() };
    } catch (error) {
        console.error('Error sending message to OpenAI:', error);
        throw new Error('Error processing request');
    }
});