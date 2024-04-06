import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData";



const ProjectSection = () => {
    return (
        <>
            <h2 className="text-white flex text-center h-14">
                My Projects
            </h2>
            <div>
                {ProjectData.map((project) =>
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image} />
                )}
            </div>
        </>
    )
}

export default ProjectSection;