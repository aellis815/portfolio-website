"use client";
import { skillsData } from "./SkillsData";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};


const Skills: React.FC = () => {
    return (
        <section className="mb-28 scroll-mt-28 text-center sm:mb-40 mx-auto max-w-screen-lg">
            <div className="font-bold text-4xl text-white justify-center grid xl:gap-16 mb-14">My Skills</div>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-white ">
                {
                    skillsData.map((skill, index) => (
                        <motion.li
                            className="border border-secondary-500 bg-slate-900 px-3 py-1 tracking-wider rounded-3xl m-1"
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ 
                                once: true 
                            }}
                            custom={index}
                            >
                                {skill}
                            
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Skills;