import { useParams } from "react-router-dom";
import { projects } from "../constants";
import Button_2 from "../components/Button_2";

const ProjectPage = () => {
  const { projectId } = useParams();

  return (
    <>
      {projects
        .filter((project) => project.id === projectId)
        .map((filteredProject) => (
          <div
            key={filteredProject.id}
            className="min-h-screen container bg-[#111111] text-white grid grid-cols-2 items-center justify-center p-8 gap-8"
          >
            <div className="flex flex-col items-start justify-center ">
              <h1 className="text-5xl font-bold mb-4">
                {filteredProject.title}
              </h1>
              <div className="flex flex-wrap gap-2 transition mb-6">
                {filteredProject.techstack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 text-sm rounded-full
                 border border-white/30
                 bg-white/5
                 backdrop-blur-md
                 hover:bg-white/10
                 transition cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mb-6">{filteredProject.description}</p>
              <a
                href={filteredProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button_2 className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
                  View Project
                </Button_2>
              </a>
            </div>
            <img
              src={filteredProject.image}
              alt={filteredProject.title}
              className="max-w-full md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
            />
          </div>
        ))}
      {/* <div className="min-h-screen bg-black text-white flex items-center justify-center text-4xl">
        Project ID: {projectId}
      </div> */}
    </>
  );
};

export default ProjectPage;
