import { title } from "framer-motion/client";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";
import { SiNumpy, SiTailwindcss } from "react-icons/si";
import { VscBlank } from "react-icons/vsc";
import festment from "../assets/projects_ss/festment.png";
import bloomify from "../assets/projects_ss/bloomify.png";
// import fusion from "../assets/projects_ss/fusion.png";
// import sentinel from "../assets/projects_ss/sentinel.png";
// import nike from "../assets/projects_ss/nike.png";
// import weatherly from "../assets/projects_ss/weatherly.png";
import movie from "../assets/projects_ss/movie.png";

export const techstack = [
  { id: "0", Icon: FaPython, tech: "Python" },
  { id: "1", Icon: SiNumpy, tech: "NumPy" },
  { id: "2", Icon: FaHtml5, tech: "HTML" },
  { id: "3", Icon: FaCss3Alt, tech: "CSS" },
  { id: "4", Icon: FaReact, tech: "React" },
  { id: "5", Icon: SiTailwindcss, tech: "Tailwind CSS" },
  { id: "6", Icon: FaJs, tech: "JavaScript" },
  { id: "7", Icon: FaNodeJs, tech: "Node.js" },
  { id: "8", Icon: VscBlank, tech: "Locked" },
  { id: "8", Icon: VscBlank, tech: "Locked" },
  { id: "8", Icon: VscBlank, tech: "Locked" },
  { id: "8", Icon: VscBlank, tech: "Locked" },
  { id: "8", Icon: VscBlank, tech: "Locked" },
  { id: "8", Icon: VscBlank, tech: "Locked" },
  { id: "8", Icon: VscBlank, tech: "Locked" },
  { id: "8", Icon: VscBlank, tech: "Locked" },
  { id: "8", Icon: VscBlank, tech: "Locked" },
  { id: "8", Icon: VscBlank, tech: "Locked" },
  { id: "8", Icon: VscBlank, tech: "Locked" },
  { id: "8", Icon: VscBlank, tech: "Locked" },
];

export const socials = [
  {
    id: "0",
    site: "",
    logo: "",
    url: "#",
  },
];

export const projects = [
  {
    id: "0",
    title: "Festment",
    techstack: "React.js, Tailwind CSS",
    image: festment,
    description:
      "FestMent is an innovative online platform designed to enhance the college experience by providing students with easy access to a wide range of events happening in and around their campuses.",
    link: "https://notarkade.github.io/FestMent/",      
  },
  {
    id: "1",
    title: "The Movie Project",
    techstack: "React.js, Tailwind CSS",
    image: movie,
    description: "A sleek and responsive movie search webpage built with React.js and Tailwind CSS. It fetches real-time data using APIs to display the latest trending and top-searched movies. Users can explore trending movies effortlessly.",
    link: "https://notarkade.github.io/TheMovieProject/",    
  },
  {
    id: "2",
    title: "Weatherly",
    techstack: "React.js, Tailwind CSS",
    image: "",
    description: "A responsive weather app I built with JavaScript, HTML, and CSS. It provides real-time weather updates, including temperature, humidity, and wind speed, based on user's city search.",
    link: "https://notarkade.github.io/Project-1/",    
  },
  {
    id: "3",
    title: "The Nike Website",
    techstack: "React.js, Tailwind CSS",
    image: "",
    description: "A visually stunning frontend replica of the Nike website, built using React.js and Tailwind CSS. Designed for a seamless and responsive user experience, it showcases product listings, and modern UI elements, offering an authentic feel of the original site.",
    link: "",    
  },
  {
    id: "4",
    title: "Sentinel",
    techstack: "React.js, Tailwind CSS",
    image: "",
    description: "A Machine Learning-Based NIDS for Cybersecurity Threat Detection.",
    link: "",    
  },
  {
    id: "5",
    title: "Bloomify",
    techstack: "React.js, Tailwind CSS",
    image: bloomify,
    description: "Bloomify is your go-to platform for effortless and delightful flower buying and selling. Whether you want to brighten someone's day or expand your floral business, we make it simple and seamless.",
    link: "",    
  },
  {
    id: "6",
    title: "Fusion",
    techstack: "React.js, Tailwind CSS",
    image: "",
    description: "AI-powered content creation studio for social media creators. Fusion was created to empower content creators with AI-driven insights and tools. It helps creators to generate content ideas, optimize their posts, and analyze their performance.",
    link: "https://neutron-oregano.vercel.app/",    
  },
];
