import ProjectCard from "../components/ProjetCard";

const projects = [
  {
    title: "Project One",
    description: "A brief description of your first project.",
    image: "/project-one.jpg", // Add an image to the `public` folder
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Two",
    description: "A brief description of your second project.",
    image: "/project-two.jpg", // Add an image to the `public` folder
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard imageUrl={""} tags={[]} key={index} {...project} />
        ))}
      </div>
    </div>
  );
}