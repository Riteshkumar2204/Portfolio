// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';



// Education Section Logo's

import jnv from './assets/education_logo/jnv.1.jpg';
import iet from './assets/education_logo/iet.1.jpg';

// Project Section Logo's

import github from './assets/work_logo/git-hub.png';
import courseLogo from './assets/work_logo/course-selling-app.png';
import blogLogo from './assets/work_logo/yt-blog.png';
import scoringLogo from './assets/work_logo/scoring-game.png';
import convoLogo from './assets/work_logo/convo-app.png';
import recipeLogo from './assets/work_logo/food-recipe.png';
import reservationLogo from './assets/work_logo/reservation-restaurant.png';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },  
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },   
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  
  export const education = [
    {
      id: 0,
      img: iet,
      school: "Institute of Engineering & Technology, Lucknow",
      date: "2023 - 2027",
      grade: "7.96 Current CGPA",
      desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering  With AI from IET , Lucknow. Throughout my 2 years of journey, I have built a solid foundation in programming, problem-solving, and core computer science concepts. My coursework includes subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Web Development.",
      degree: "Bachelor of Technology - Computer Science(AI)",
    },
    {
      id: 1,
      img: jnv,
      school: "jawahar navodaya vidyalaya, prayagraj",
      date: "2021 - 2023",
      grade: "78.5%",
      desc: "I completed my Class 12 education from Jawahar Navodaya Vidyalaya, Prayagraj, affiliated with the CBSE board. During this time, I pursued the Science stream with a focus on Physics, Chemistry, and Mathematics (PCM). My academic experience at JNV not only strengthened my analytical and problem-solving abilities but also instilled in me a disciplined and goal-oriented approach to learning.",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 2,
      img: jnv,
      school: "jawahar navodaya vidyalaya, Bijnor",
      date: "2016 - 2021",
      grade: "91%",
      desc: "I completed my Class 10 education from Jawahar Navodaya Vidyalaya, Bijnor, under the CBSE board. During this phase, I studied a broad range of subjects including Mathematics, Science, Social Science, English, and Hindi, which provided me with a strong academic foundation. The well-structured curriculum and supportive learning environment at JNV helped me develop critical thinking skills and a curiosity for learning.",
      degree: "CBSE(X)",
    },
   
  ];
  
  export const projects = [
  
    {
      id: 0,
      title: "Course Selling App",
      description:
        "Developed a full-stack web application for online course selling . The platform allows only admins to create, update, or manage courses, ensuring secure and controlled content management. Users can browse and view available courses, but cannot modify or upload any content. Implemented user authentication, admin authorization, and a clean, responsive UI for seamless user experience.",
      image: courseLogo,
      tags: ["React JS", "Node.js", "API" , "MongoDB", "Express", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Riteshkumar2204/Course-Selling-App",
      webapp: "http://course-selling-app-one-jade.vercel.app",
    },
    {
      id: 1,
      title: "YouTube Blog App",
      description:
        "Designed and built a blogging application focused on  content, allowing admins to publish and manage blogs with dashboard integration. Regular users have read-only access to explore the blogs. Emphasized clean UI, efficient routing, and role-based permissions using the MERN stack.",
      image: blogLogo,
      tags: ["React JS", "API", "Node.js" , "Tailwind CSS" , "JavaScript" , "Express" , "MongoDB" ],
      github: "https://github.com/Riteshkumar2204/YouTube-Blog-App",
      webapp: "http://youtube-blog-app.vercel.app",
    },
    {
      id: 2,
      title: "Restaurant Reservation",
      description:
        "Skip the wait and book your table in seconds! Our easy-to-use reservation system lets you secure a table at your favorite restaurant with your preferred date and time — anytime, anywhere. Whether you're planning a romantic dinner, a family gathering, or a business lunch, just pick your date, choose your time slot, and we’ll take care of the rest.",
      image: reservationLogo,
      tags: ["React JS", "API", "Node.js" , "Tailwind CSS" , "JavaScript" , "Express" , "MongoDB"],
      github: "https://github.com/Riteshkumar2204/Restaurant-Reservation",
      webapp: "https://restaurant-reservation-lyart.vercel.app//",
    },
    
      {
      id: 3,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: github,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Riteshkumar2204/Mini-Projects/tree/main/git%20hub",
      webapp: "https://github-searsh.netlify.app/",
    },
    {
      id: 4,
      title: "Scoring Game",
      description:
        "Scoring Game is a fun and interactive web application where players solve math-based puzzles to earn points and climb the leaderboard. The game tests your arithmetic skills, logical thinking, and speed through a variety of challenges ranging from basic operations to brain-teasing number puzzles.",
      image: scoringLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Riteshkumar2204/Mini-Projects/tree/main/scoring%20game",
      webapp: "https://task-game.netlify.app/",
    },
     {
      id: 5,
      title: "Convo App – Word to PDF Converter",
      description:
        "Convo App is a user-friendly application designed to help users quickly and easily convert text or Word documents into high-quality PDF files. Whether you're working on a report, resume, notes, or any kind of document, Convo App streamlines the conversion process and delivers reliable results in seconds.",
      image: convoLogo,
      tags: ["React JS", "API", "Node.js" , "Tailwind CSS" , "JavaScript" , "Express" , "MongoDB"],
      github: "https://github.com/Riteshkumar2204/convo-app",
      webapp: "https://convo-app-nu.vercel.app/",
    },
    {
      id: 6,
      title: "Food Recipe App",
      description:
        "Welcome to Food Recipe App, your personal kitchen companion! Here, users can log in securely to access and explore a wide variety of tasty, step-by-step recipes. From quick snacks to gourmet meals, every recipe is carefully shared for food lovers like you.",
      image: recipeLogo,
      tags: ["React JS", "API", "Node.js" , "Tailwind CSS" , "JavaScript" , "Express" , "MongoDB"],
      github: "https://github.com/Riteshkumar2204/Food-Recipe-App",
      webapp: "https://github.com/Riteshkumar2204/Food-Recipe-App",
    },
    
  ]