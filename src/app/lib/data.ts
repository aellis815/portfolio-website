type navLinks = {
    title: string;
    path: string;
}

export const navLinks = [
    {title: "Home", path: "#home"},
    {title: "About Me", path: "#aboutme"},
    {title: "Skills", path: "#skills"},
    {title: "Projects", path: "#projects"},
    {title: "Contact", path: "#email"},
] as const;


type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    githubUrl: string;
    websiteUrl: string;
    tags: string[];
}

export const ProjectData: Project[] = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "My portfolio website is intended to in itself be a showcase of my skills and abilities and introduce future projects that I will be working on.",
        image: "/images/websitescreenshot.png",
        githubUrl: "https://github.com/aellis815/portfolio-website",
        websiteUrl: "/",
        tags: ["React", "TailwindCSS", "TypeScript", "Next.js", "Vercel"]
    },

    {
        id: 2,
        title: "Dudecati",
        description: "(WIP) Dudecati is a website that will aggregate listings of Ducati motorcycles for sale -- starting in the Bay Area.",
        image: "/images/dudecati-hero-image.png",
        githubUrl: "/",
        websiteUrl: "/",
        tags: ["Next.js",]
    },
    // add more projects here
    // {
    //     id: 3,
    //     title: "Project 3",
    //     description: "This is a description of project 3",
    //     image: "/images/placeholder2.png",
    //     githubUrl: "/",
    //     websiteUrl: "/",
    //     tags: ["Next.js",]
    
    // },
    // {
    //     id: 4,
    //     title: "Project 4",
    //     description: "This is a description of project 4",
    //     image: "/images/placeholder2.png",
    //     githubUrl: "/",
    //     websiteUrl: "/",
    //     tags: ["Next.js",]
    // },
] as const;