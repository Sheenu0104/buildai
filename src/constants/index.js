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
} from "../assets";






export const navLinks = [
  {
    id: "about",
    title: "Features",
  },
  {
    id: "work",
    title: "How it works ",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "contact",
    title: "API",
  },
  {
    id: "contact",
    title: "Price",
  },
  {
    id: "contact",
    title: "Roadmap",
  },
];

const services = [
  {
    title: "AI-Powered Writing",
    icon: web,
  },
  {
    title: "Custom Genres",
    icon: mobile,
  },
  {
    title: "Instant Download",
    icon: backend,
  },
  {
    title: "Multilingual",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    title: "Choose Your Genre",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
     " Select from a wide range of genres or create a custom blend.",
    ],
  },
  {
    title: "Provide Key Details",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Input main characters, plot points, or themes to guide the AI",
    ],
  },
  {
    title: "AI Generation",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "Our advanced AI creates your book based on your inputs.",
    ],
  },
  {
    title: "Review and Download",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Review your generated book and download in your preferred format.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "BookAI revolutionized my writing process. I completed my debut novel in just two weeks!",
    name: "- Sarah J.,",
    designation: "Author",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "The AI-generated ideas helped me overcome writer's block. It's like having a co-author at your fingertips.",
    name: "- Mark T.",
    designation: "Aspiring Writer",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
 
];

const projects = [
  {
    name: "Science Fiction",
    description:
      "As Dr. Elara stepped through the shimmering portal, she knew there was no turning back. The fate of two universes now rested in her hands...",
    tags: [
      
      {
        name: "learn more",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mystery",
    description:
      "The old lighthouse stood silent, its beacon long extinguished. But on foggy nights, some swore they could still see its ghostly light...",
      tags: [
      
        {
          name: "learn more",
          color: "pink-text-gradient",
        },
      ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fantasy",
    description:
      "The ancient prophecy spoke of a child born with starlight in their eyes. As the comet blazed overhead, the kingdom held its breath...",
     tags: [
      
        {
          name: "learn more",
          color: "pink-text-gradient",
        },
      ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
