import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData";



const ProjectSection = () => {
    return (
        <div className="mt-36">
            <h2 className="text-white flex text-center text-4xl font-bold mb-4 h-14">
                My Projects
            </h2>
            <div className={`grid ${ProjectData.length > 2 ? 'md:grid-cols-3 gap-8 md:gap-12' : 'md:grid-cols-2 gap-8 md:gap-12'}`}>
                {ProjectData.map((project) =>
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        githubUrl={project.githubUrl}
                        websiteUrl={project.websiteUrl}
                        tags={project.tags}
                    />
                )}
            </div>
           
        </div>
    )
}

export default ProjectSection;

