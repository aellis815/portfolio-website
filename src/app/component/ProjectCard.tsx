import { FaGithub } from "react-icons/fa"
import { HiOutlineLink } from "react-icons/hi";
import Link from "next/link"

interface ProjectCardProps {
    title: string,
    description: string,
    imgUrl: string,
    websiteUrl: string,
    githubUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgUrl, websiteUrl, githubUrl }) => {
    return (
        <div>
            <div
                className="h-52 md:h-72 rounded-t-xl relative group"
                style={{
                    background: `url(${imgUrl})`,
                    backgroundSize: "cover"
                }}>
                <div className="overlay rounded-t-xl items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                    <Link 
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="h-14 w-14 mr-2 border-2 relative rounded-full border-slate-600 hover:border-white group/link" >
                        <FaGithub className="h-10 w-10 text-slate-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white absolute"/>
                    </Link>
                    <Link 
                        href={websiteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="h-14 w-14 ml-2 border-2 relative rounded-full border-slate-600 hover:border-white group/link" >
                        <HiOutlineLink className="h-10 w-10 text-slate-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white absolute"/>
                    </Link>
                </div>
            </div>
            {/* Container for title & description */}
            <div className="text-slate-200 rounded-b-xl mt-1 bg-[#000000] py-6 px-4">
                {/* Indivudal styling for title & description */}
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-slate-300">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard


