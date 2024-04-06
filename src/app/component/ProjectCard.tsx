import { FaGithub } from "react-icons/fa"
import { MdWebAsset } from "react-icons/md"
import Link from "next/link"

interface ProjectCardProps {
    title: string,
    description: string,
    imgUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgUrl }) => {
    return (
        <>
            <div
                className="h-52 md:h-72 rounded-t-3xl relative group"
                style={{
                    background: `url(${imgUrl})`,
                    backgroundSize: "cover"
                }}>
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#000000] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-250">
                    <Link href="/" className="h-14 w-14 border-2 relative rounded-full border-slate-600 hover:border-white group/link" >
                        <FaGithub className="h-10 w-10 text-slate-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white absolute"/>
                    </Link>
                </div>
            </div>
            {/* Container for title & description */}
            <div className="text-slate-200 rounded-b-xl bg-[#000000] py-6 px-4">
                {/* Indivudal styling for title & description */}
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-slate-500">{description}</p>
            </div>
        </>
    );
};

export default ProjectCard


