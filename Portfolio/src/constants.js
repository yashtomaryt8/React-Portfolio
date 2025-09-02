// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import powerBILogo from './assets/tech_logo/powerbi.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import sfrMedicalLogo from './assets/company_logo/sfrmedicallogo.jpg';
import sheryiansLogo from './assets/company_logo/sheryiansLogo.jpg';
import swiggyInstamart from './assets/company_logo/swiggyInstamart.png';

// Education Section Logo's
import sirtLogo from './assets/education_logo/sirtLogo.jpg';
import careLogo from './assets/education_logo/careLogo.jpg';
import christianLogo from './assets/education_logo/christianLogo.jpeg';

// Project Section Logo's
import sageAuraLogo from './assets/work_logo/sageAuraLogo.png';
import vendorPerformanceLogo from './assets/work_logo/vendorPerformanceLogo.png';
import talaWebsiteLogo from './assets/work_logo/talaWebsiteLogo.png';
import musicLogo from './assets/work_logo/musicLogo.png';
import alephBeautyLogo from './assets/work_logo/alephBeautyLogo.png';
import fortuneFundersLogo from './assets/work_logo/fortuneFundersLogo.png';
import clearBankLogo from './assets/work_logo/clearBankLogo.png';
import AmazeLogo from './assets/work_logo/AmazeLogo.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Power BI', logo: powerBILogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: sfrMedicalLogo,
      role: "IT Intern",
      company: "SFR Medical (UK, Remote)",
      date: "Sep 2024 – Nov 2024",
      desc: "Designed and maintained responsive frontend forms for UK Police Department use. Tested the main website and Police Portal to identify and report UI/UX and functional issues. Assisted in building and debugging RESTful APIs using Postman. Supported chatbot improvements by refining queries and enhancing responses. Researched cloud platforms to recommend scalable, cost-effective solutions.",
      skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "Node.js",
          "Express.js",
          "Postman",
          "Git",
          "Cloud Platforms"
      ],
    },
    {
    id: 1,
    img: sheryiansLogo, 
    role: "MERN Stack Intern",
    company: "Sheryians Coding School",
    date: "June 2024 – Aug 2024",
    desc: "Built a full-stack booking platform with secure authentication, payment integration, and email notifications. Developed responsive and dynamic UI using React.js and implemented state management with Redux. Designed RESTful APIs and managed backend logic using Node.js and Express. Implemented MongoDB database schemas, optimized queries, and handled data validation. Integrated Razorpay for secure payment processing and Redis for caching and session management. Tested APIs and frontend workflows using Postman and ensured code quality using Git version control. Collaborated in an agile development environment, focusing on performance optimization and scalability.",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Redux",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Razorpay",
        "Redis",
        "Postman",
        "Git",
        "RESTful APIs",
        "Authentication & Authorization",
        "Responsive Web Design",
        "Agile Development"
    ],

    },
    {
    id: 3,
    img: swiggyInstamart,  
    role: "Internship Trainee",
    company: "Swiggy Instamart",
    date: "Dec 2022 – Mar 2023 * On-Campus",
    desc: "Assisted in resolving customer queries and complaints using CC Connect for chat support. Utilized OneView for accessing customer IDs, order details, product descriptions, and managing refunds. Employed Resolute to determine appropriate actions for customer issues, including processing refunds and replacements. Analyzed customer feedback and ensured compliance with SOPs. Collaborated with team members to enhance overall customer experience and identify trends for improvement.",
    skills: [
      "CC Connect",
      "OneView",
      "Resolute",
      "Customer Support",
      "Problem Solving",
      "Communication",
      "Process Improvement",
    ],

    },
  ];
  
  export const education = [
    {
      id: 0,
      img: sirtLogo, 
      school: "Sagar Institute of Research & Technology, Bhopal",
      date: "2022 - 2026",
      grade: "8.57 CGPA (6th Semester)",
      desc: "Pursuing a Bachelor's degree in Computer Science & Engineering (B.Tech) at Sagar Institute of Research & Technology, Bhopal. Gaining in-depth knowledge in programming, data structures, algorithms, database systems, web development, and software engineering. Actively participating in workshops, coding events, and technical projects to enhance practical skills and professional growth.",
      degree: "Bachelor of Technology - B.Tech, Computer Science & Engineering",

    },
    {
      id: 1,
      img: careLogo, 
      school: "Care English School, Chhatarpur",
      date: "2021",
      grade: "92.5%",
      desc: "Completed Senior Secondary Examination (Class XII) from Care English School, Chhatarpur, under the CBSE board. Focused on core subjects including Physics, Chemistry, Biology, Mathematics, English, and Hindi, achieving excellent academic performance. Actively participated in school activities and science workshops, developing strong analytical, problem-solving, and communication skills. Consistently demonstrated dedication and discipline in academics, preparing a solid foundation for higher studies in science and technology.",
      degree: "CBSE - Class XII",
    },
    {
      id: 2,
      img: christianLogo, 
      school: "Christian English College, Chhatarpur",
      date: "2019",
      grade: "90%",
      desc: "Completed Higher Secondary Examination (Class X) from Christian English College, Chhatarpur, under the ICSE board. Studied a comprehensive curriculum including History, Civics, Geography, Computer Applications, Hindi, Mathematics, Biology, Physics, Chemistry, Hindi Language, Hindi Literature, English Language, and English Literature. Achieved excellent academic performance while actively participating in school projects, quizzes, and extracurricular activities. Developed strong analytical, research, and communication skills, laying a solid foundation for further studies in science and technology.",
      degree: "ICSE - Class X",
    },

  ];
  
  export const projects = [
{
    id: 1,
    title: "SageAura Hotels – MERN Stack Hotel Booking Platform",
    description:
      "A full-stack hotel booking platform that allows users to browse, book, and manage rooms seamlessly. Features secure authentication with Clerk, email notifications via Nodemailer, and online payments through Stripe. Supports image uploads using Cloudinary, webhooks via Svix, and includes an admin dashboard for hotel and booking management. The responsive frontend is built with React.js and Tailwind CSS, ensuring an intuitive user experience.",
    image: sageAuraLogo,
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Clerk", "Stripe", "Nodemailer", "Cloudinary", "Tailwind CSS", "Git"],
    github: "https://github.com/yashtomaryt8/SageAura-Hotels",
    webapp: "https://sage-aura-hotels-sigma.vercel.app/",
  },
    {
  id: 2,
  title: "Vendor Performance Analysis – Data Analytics Project",
  description:
    "An end-to-end data analytics project focused on analyzing vendor performance. The project involves data ingestion using Python and SQLite, SQL-based analysis, and interactive Power BI dashboards to evaluate delivery efficiency, product quality, and cost management. Provides actionable insights for optimizing vendor operations and decision-making.",
  image: vendorPerformanceLogo,
  tags: ["Python", "SQLite", "SQL", "Power BI", "Data Analysis", "ETL"],
  github: "https://github.com/yashtomaryt8/Vendor-Performance-Data-Analytics",
  webapp: "https://drive.google.com/file/d/17d2JYCk8q2A8PfwUu2A7REAnGL2KU_kU/view?usp=sharing",
},

{
  id: 3,
  title: "Tala Website – Fruit & Chips Brand",
  description:
    "A visually engaging and interactive website for Tala, a brand specializing in fruit chips. Built using modern frontend technologies to provide smooth animations, dynamic scrolling effects, and an immersive user experience. Utilizes GSAP for animations and Locomotive Scroll for smooth scrolling interactions, creating a professional and lively website for showcasing products.",
  image: talaWebsiteLogo,
  tags: ["HTML", "CSS", "JavaScript", "GSAP", "Locomotive Scroll", "Responsive Design", "Animations"],
  github: "https://github.com/yashtomaryt8/TALA_Frontend_Project",
  webapp: "https://yashtomaryt8.github.io/TALA_Frontend_Project/",
},

{
  id: 4,
  title: " Music Player",
  description:
    "A fully responsive and interactive music player built with HTML, CSS, and vanilla JavaScript. Features include playlist management, play/pause controls, volume adjustment, track navigation, and real-time progress bars. Designed to work seamlessly across devices, providing an immersive and smooth audio experience for users. The project emphasizes clean UI, accessibility, and efficient DOM manipulation for optimal performance.",
  image: musicLogo,
  tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Audio Player", "DOM Manipulation", "UI/UX"],
  github: "https://github.com/yashtomaryt8/Music-Player",
  webapp: "https://yashtomaryt8.github.io/Music-Player/",
},

{
  id: 5,
  title: "Aleph Beauty – Clean Beauty E-commerce Website",
  description:
    "A visually stunning and responsive e-commerce website for Aleph Beauty, a clean and sustainable makeup brand. The site features a minimalist design with smooth animations, dynamic scrolling effects, and an immersive user experience. Built using modern frontend technologies, the website showcases Aleph Beauty's product range, including multi-use makeup products with skincare benefits, and emphasizes the brand's commitment to ethical ingredients and sustainability.",
  image: alephBeautyLogo,
  tags: ["HTML", "TailwindCSS", "Animations"],
  github: "https://github.com/yashtomaryt8/Aleph-Beauty",
  webapp: "https://yashtomaryt8.github.io/Aleph-Beauty/",
},

{
  id: 6,
  title: "Fortune Funders – Investment & Wealth Management Website",
  description:
    "A modern, responsive website for Fortune Funders, a platform focused on investment and wealth management. The website features interactive UI, smooth scrolling, and dynamic content sections to educate users on investment opportunities and financial planning. Built with HTML, CSS, and JavaScript, the site emphasizes user engagement and clear presentation of financial services to help users grow their wealth and secure their future.",
  image: fortuneFundersLogo,
  tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Animations", "User Experience", "Finance Website"],
  github: "https://github.com/yashtomaryt8/Fortune-Funders",
  webapp: "https://fortunefunder1.com/",
},

{
  id: 8,
  title: "ClearBank – Digital Banking Infrastructure Website",
  description:
    "A sleek, responsive website for ClearBank, a UK-based clearing bank offering real-time payment and clearing services. The site features a modern design with a clean layout, intuitive navigation, and dynamic content sections to showcase ClearBank's services and solutions for fintechs and businesses. Built with HTML, CSS, and JavaScript, the website emphasizes user engagement and clear presentation of financial services.",
  image: clearBankLogo,
  tags: ["HTML", "TailwindCSS", "Animations", "User Experience", "Finance Website"],
  github: "https://github.com/yashtomaryt8/ClearBank",
  webapp: "https://yashtomaryt8.github.io/ClearBank/",
},

{
  id: 9,
  title: "Amaze – Responsive E-commerce Website",
  description:
    "A fully responsive e-commerce website built with HTML, CSS, and JavaScript. The site includes a dynamic product catalog, shopping cart functionality, and an intuitive checkout experience. It is designed with modern UI/UX principles, ensuring seamless navigation across desktop and mobile devices. Animations and interactive features enhance the user experience, making it a professional e-commerce platform prototype.",
  image: AmazeLogo,
  tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX", "E-commerce"],
  github: "https://github.com/yashtomaryt8/AMaze",
  webapp: "https://yashtomaryt8.github.io/AMaze/",
},

    {
      id: 8,
      title: "Image Search Application",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/yashtomaryt8/Image-Search-Application",
      webapp: "https://yashtomaryt8.github.io/Image-Search-Application/",
    },
    {
      id: 9,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/yashtomaryt8/Image-Background-Remover",
      webapp: "https://yashtomaryt8.github.io/Image-Background-Remover/",
    },
  ];  