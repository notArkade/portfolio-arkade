import { title } from "framer-motion/client";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaNodeJs,
  FaBootstrap,

} from "react-icons/fa";
import { SiPandas } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiNumpy, SiTailwindcss } from "react-icons/si";
import { VscBlank } from "react-icons/vsc";
import festment from "../assets/projects_ss/festment.png";
import bloomify from "../assets/projects_ss/bloomify.png";
import curiko from "../assets/projects_ss/curiko.png";
import sentinel from "../assets/projects_ss/sentinel.png";
import nike from "../assets/projects_ss/nike.png";
import weatherly from "../assets/projects_ss/weatherly.png";
import movie from "../assets/projects_ss/movie.png";
import xora from "../assets/projects_ss/xora.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import pokemon from "../assets/projects_ss/pokemon.png";

export const techstack = [
  { id: "0", Icon: FaPython, tech: "Python" },
  { id: "1", Icon: SiNumpy, tech: "NumPy" },
  { id: "22", Icon: SiPandas, tech: "Pandas" },
  { id: "2", Icon: FaHtml5, tech: "HTML" },
  { id: "3", Icon: FaCss3Alt, tech: "CSS" },
  { id: "5", Icon: SiTailwindcss, tech: "Tailwind CSS" },
  { id: "8", Icon: FaBootstrap, tech: "Bootstrap" },
  { id: "6", Icon: FaJs, tech: "JavaScript" },
  { id: "7", Icon: FaNodeJs, tech: "Node.js" },
  { id: "4", Icon: FaReact, tech: "React" },
  { id: "9", Icon: RiNextjsFill, tech: "Next.js" },
  { id: "20", Icon: SiMysql, tech: "MySQL" },
  { id: "10", Icon: FaPython, tech: "Python" },
  { id: "11", Icon: SiNumpy, tech: "NumPy" },
  { id: "23", Icon: SiPandas, tech: "Pandas" },
  { id: "12", Icon: FaHtml5, tech: "HTML" },
  { id: "13", Icon: FaCss3Alt, tech: "CSS" },
  { id: "15", Icon: SiTailwindcss, tech: "Tailwind CSS" },
  { id: "18", Icon: FaBootstrap, tech: "Bootstrap" },
  { id: "16", Icon: FaJs, tech: "JavaScript" },
  { id: "17", Icon: FaNodeJs, tech: "Node.js" },
  { id: "14", Icon: FaReact, tech: "React" },
  { id: "19", Icon: RiNextjsFill, tech: "Next.js" },
  { id: "21", Icon: SiMysql, tech: "MySQL" },
];

export const socials = [
  {
    id: "0",
    site: "GitHub",
    Icon: FaGithub,
    url: "https://github.com/notArkade",
  },
  {
    id: "1",
    site: "LinkedIn",
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/arkadip-das-628a02278/",
  },
  // {
  //   id: "2",
  //   site: "Discord",
  //   Icon: FaDiscord,
  //   url: "",
  // },
  {
    id: "3",
    site: "Instagram",
    Icon: FaInstagram,
    url: "https://www.instagram.com/",
  },
];

export const projects = [
  {
    id: "1",
    title: "Curiko",
    techstack: "Next.js, Tailwind CSS, Gemini AI",
    image: curiko,
    description: "Your personal AI-powered mental health companion.",
    link: "https://curiko.vercel.app/",    
  },
  {
    id: "0",
    title: "Bloomify",
    techstack: "React.js, Tailwind CSS",
    image: bloomify,
    description: "Bloomify is your go-to platform for effortless and delightful flower buying and selling. Whether you want to brighten someone's day or expand your floral business, we make it simple and seamless.",
    link: "https://bloomify-lac.vercel.app/",    
  },
  {
    id: "5",
    title: "XORA",
    techstack: "React.js, Tailwind CSS",
    image: xora,
    description: "A visually stunning frontend replica of the Nike website, built using React.js and Tailwind CSS. Designed for a seamless and responsive user experience, it showcases product listings, and modern UI elements, offering an authentic feel of the original site.",
    link: "https://xora-bay.vercel.app/",    
  },
  {
    id: "2",
    title: "The Movie Project",
    techstack: "React.js, Tailwind CSS, Appwrite",
    image: movie,
    description: "A sleek and responsive movie search webpage built with React.js and Tailwind CSS. It fetches real-time data using APIs to display the latest trending and top-searched movies. Users can explore trending movies effortlessly.",
    link: "https://notarkade.github.io/TheMovieProject/",    
  },
  {
    id: "3",
    title: "Sentinel",
    techstack: "React.js, Tailwind CSS, Python",
    image: sentinel,
    description: "A Machine Learning-Based NIDS for Cybersecurity Threat Detection.",
    link: "https://sentinel-pearl.vercel.app/",    
  },
  {
    id: "4",
    title: "Festment",
    techstack: "HTML, Tailwind CSS",
    image: festment,
    description:
    "FestMent is an innovative online platform designed to enhance the college experience by providing students with easy access to a wide range of events happening in and around their campuses.",
    link: "https://notarkade.github.io/FestMent/",      
  },
  {
    id: "6",
    title: "The Nike Website",
    techstack: "React.js, Tailwind CSS",
    image: nike,
    description: "A visually stunning frontend replica of the Nike website, built using React.js and Tailwind CSS. Designed for a seamless and responsive user experience, it showcases product listings, and modern UI elements, offering an authentic feel of the original site.",
    link: "https://la-nike-sitio-web.vercel.app/",    
  },
  {
    id: "7",
    title: "Pokédex",
    techstack: "React.js, Tailwind CSS, PokeAPI",
    image: pokemon,
    description: "A Pokédex featuring Pokémon",
    link: "/",    
  },
];
