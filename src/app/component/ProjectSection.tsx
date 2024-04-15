import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData";



const ProjectSection = () => {
    return (
        <>
            <h2 className="text-white flex text-center h-14">
                My Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {ProjectData.map((project) =>
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        githubUrl={project.githubUrl}
                        websiteUrl={project.websiteUrl}
                    />
                )}
            </div>
        </>
    )
}

export default ProjectSection;