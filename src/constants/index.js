const navLinks = [
  {
    name: "About Me",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];



const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "HTML",
    modelPath: "/models/newHTML.glb",
    scale: 6.5,
    rotation: [0, -Math.PI / 8, 0],
  },
  {
    name: "Tailwind CSS",
    modelPath: "/models/tailwind.glb",
    scale: 1.4,
    rotation: [0, 0, 0],
  },
  {
    name: "React JS",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node JS",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Three JS",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Figma",
    modelPath: "/models/figma.glb",
    scale: 2,
    rotation: [0, Math.PI / 10, 0],
  },

  {
    name: "Firebase",
    modelPath: "/models/firebase.glb",
    scale: 1.8,
    rotation: [0, 0, 0],
  },
  {
    name: "GitHub",
    modelPath: "/models/github.glb",
    scale: 2,
    rotation: [0, 0, 0],
  },

];

const expCards = [
  {
    review: "Studying at IIUC has been an enriching experience, helping me strengthen my foundations in computer science while exploring research and practical projects that align with my passion for technology.",
    logoPath: "/images/university.png",
    title: "International Islamic University Chittagong",
    date: "2023 - Present",
    responsibilities: [
      "Pursuing a Bachelor's degree in Computer Science & Engineering.",
      "Engaging in coursework focused on software engineering, data structures, and algorithms.",
      "Participating in research and projects to apply classroom knowledge to real-world problems.",
    ],
  },
  {
    review: "During my Higher Secondary studies in the Science stream, I developed a strong academic foundation and achieved excellent results. These years shaped my analytical and problem-solving abilities.",
    logoPath: "/images/college.jpg",
    title: "Hajera Taju Degree College",
    date: "2019 - 2021",
    responsibilities: [
      "Studied Science under the National Curriculum with a focus on Physics, Chemistry, Biology, and Mathematics.",
      "Achieved GPA 5.00 in HSC (Higher Secondary Certificate).",
    ],
  },
  {
    review: "My school years at CDA Public School and College built the foundation of my academic journey. Alongside excelling in Science, I actively participated in sports and co-curricular activities, shaping both discipline and teamwork skills.",
    logoPath: "/images/school.png",
    title: "CDA Public School and College",
    date: "2017 - 2019",
    responsibilities: [
      "Studied Science at the secondary level with a strong focus on core subjects like Physics, Chemistry, and Mathematics.",
      "Achieved GPA 4.94 in SSC (Secondary School Certificate).",
      "Actively participated in sports and school events, developing discipline and teamwork abilities.",
    ],
  },

];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};