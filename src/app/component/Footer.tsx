import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className=" footer border border-t-[#191919] border-b-transparent border-l-transparent border-r-transparent text-white">
            <div className="container p-12 grid grid-cols-3 items-center">
                <div></div>
                <div className="socials flex flex-row gap-5 justify-center">
                    <Link
                        href="https://github.com/aellis815"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <FaGithub className="h-10 w-10 group-hover:text-gray-500" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/alex-ellis-976ba091/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <FaLinkedin className="h-10 w-10 group-hover:text-gray-500" />
                    </Link>
                </div>
                <p className="text-slate-400 text-right">All Rights Reserved</p>
                
            </div>

        </footer >
    );
};

export default Footer