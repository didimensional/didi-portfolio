import React from "react";
import { ExternalLink, Github } from "lucide-react";
import milLeches from "../assets/milLeches.png";
import milLechesVideo from "../assets/milLechesVideo.webm";
import MovieMinder from "../assets/MovieMinder.png";
import MovieMinderVideo from "../assets/MovieMinderVideo.webm";
import todos from "../assets/Todos.png";
import todosVideo from "../assets/todosVideo.webm";
import Guanxe from "../assets/Guanxe.png";
import guanxeVideo from "../assets/guanxeVideo.webm"
import CholasFighter from "../assets/CholasFighter.png";
import Rebootnator from "../assets/Rebootnator.png";


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Mil Leches",
      description:
        "Petsitting website with owner and client roles, authentication, profile sections, forms...",
      liveUrl: milLechesVideo,
      technologies: "NODE JS - REACT - JAVASCRIPT - MYSQL",
      githubUrl: "https://github.com/Gyomiel/mil-leches-web",
      image: milLeches,
    },
    {
      id: 2,
      title: "MovieMinder",
      description:
        "Movie tracker website with authentication, profile, search bar, movie sections...",
      technologies: "PHP - SYMFONY - TAILWIND CSS - MYSQL",
      liveUrl: MovieMinderVideo,
      githubUrl: "https://github.com/markcrh/E-Commerce-Symfony-Project",
      image: MovieMinder,
    },
    {
      id: 3,
      title: "Users and Todos",
      description:
        "Bootcamp project to practise the interaction with DB models, controllers, routing views...",
      technologies: "PHP - SYMFONY - TAILWIND CSS - MYSQL",
      liveUrl: todosVideo,
      githubUrl:
        "https://github.com/didimensional/LAB-SYMFONY-6-Doctrine-ORM-Databases-and-Models",
      image: todos,
    },
    {
      id: 4,
      title: "Guanxe",
      description:
        "Prestashop project with personalized styling and a custom made module.",
      technologies: "PHP - PRESTASHOP",
      liveUrl: guanxeVideo,
      githubUrl: "https://github.com/CobaltHeron/guanxe-project",
      image: Guanxe,
    },
    {
      id: 5,
      title: "Cholas Fighter",
      description:
        "Street fighter style game with different screens and scenarios.",
      technologies: "HTML - CSS - JAVASCRIPT",
      liveUrl: "https://karen-rms.github.io/Cholas-Fighter/",
      githubUrl: "https://github.com/karen-rms/Cholas-Fighter",
      image: CholasFighter,
    },
    {
      id: 6,
      title: "Rebootnator",
      description: "Galaga style game purely made with HTML, CSS and JS.",
      technologies: "HTML - CSS - JAVASCRIPT",
      liveUrl: "https://didimensional.github.io/Rebootnator/",
      githubUrl: "https://github.com/didimensional/Rebootnator",
      image: Rebootnator,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-60">
      <div className="text-left mb-12">
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#F9F9F9] via-[#14B8A6] to-[#456D8F] bg-clip-text text-transparent mb-4 font-modo">
          Portfolio
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border-2 border-[#BABABA] rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto  p-4"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-teal-400">
                {project.title}
              </h3>
              <p className="text-white mt-2 font-medium">
                {project.description}
              </p>
              <p className="text-[#5D9FD8] font-bold mt-2">
                {project.technologies}
              </p>
              <div className="mt-4 flex justify-center gap-8">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-400 text-white font-bold hover:text-teal-600 flex items-center p-4 rounded-lg w-1/3"
                >
                  <ExternalLink className="mr-2" />
                 Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border-2 p-4 rounded-lg font-bold  hover:text-teal-400 flex items-center w-1/3"
                >
                  <Github className="mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
