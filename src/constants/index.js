import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Java,
  MYSQL,
  NB,
  CTS
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "MYSQL",
    icon: MYSQL,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "NB Digital",
    icon: NB,
    iconBg: "#383E56",
    date: "June 2019 - Aug 2019",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Java Developer",
    company_name: "Cognizant",
    icon: CTS,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Feb 2022",
    points: [
      "Understanding the business and functional specs of client and developed Web applications using Java and React",
      "Forsee defects that many arise in the target application and provide solution to team",
      "Updating UI screens using JSP,CSS,HTML and Javascript",
      "Assisting the support team to identify root cause for user tickets",
    ],
  },
  {
    title: "Product Specialist - Tech",
    company_name: "Cognizant",
    icon: CTS,
    iconBg: "#383E56",
    date: "Feb 2022 - Present",
    points: [
      "Spearheadig the development and maintenance of dynamic web applications using React.js and cutting-edge technologies.",
      "Fostering seamless collaboration with cross-functional teams, including designers, product managers, and fellow developers, to deliver exceptional and innovative products."
      ,"Implementing responsive design principles, ensuring optimal user experiences across various devices and platforms."
      ,"Actively engaged in code reviews, offering constructive feedback to enhance code quality and promote a cohesive development environment."
    ],
  },
  
];

const testimonials = [
  {
    testimonial:"Manish possesses remarkable frontend abilities! They consistently provide code that is both sleek and visually captivating, while maintaining functionality at its core. Manish is an invaluable addition to any team, demonstrating exceptional attention to detail and an unwavering commitment to enhancing user experience." ,
    name:"Nidhi",
    designation: "Software Engineer",
    company: "NB Digitals",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Manish does.",
    name: "Satyam",
    designation: "Software Engineer",
    company: "Amdocs",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Book Verse",
    description:"Explore, buy, or borrow books effortlessly. Our web-based platform offers a convenient and efficient solution for all your book search needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "Java-SpringBoot",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  }
  
];

export { services, technologies, experiences, testimonials, projects };
