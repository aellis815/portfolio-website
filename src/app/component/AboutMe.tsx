'use client';
import { useState } from 'react';
import ProfessionalButton from './Buttons';
import Image from 'next/image';
// import { motion } from 'framer-motion';


const AboutMe = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    };


    return (
        <div className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                {isChecked ? (
                    <Image 
                        alt="personal about me" 
                        src="/images/euphie_aboutme.png" 
                        width={600} 
                        height={600}
                        objectFit="cover"
                        objectPosition="center" 
                        className="rounded-2xl"></Image>
                ) : (
                    <Image 
                        alt="professional about me" 
                        src="/images/aboutme.png" 
                        width={600} 
                        height={600}
                        objectFit="cover"
                        objectPosition="center" 
                        className="rounded-2xl"></Image>
                )}
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 id="AboutMe Header" className="text-4xl font-bold text-white mb-4">
                        About Me

                    </h2>
                    <div className="bio-container lg:h-[200px] h-auto">

                        <ProfessionalButton
                            isChecked={isChecked}
                            handleCheckboxChange={handleCheckboxChange}
                        ></ProfessionalButton>

                        {isChecked ? (
                            <p className="text-lg text-[#ADB7BE] py-3 justify-start">
                                {/* THIS IS WHERE I WOULD PUT PERSONAL BIO */}
                                My personal life follows a similar theme as my professional life. I'm always looking to learn and build things. I'm currently in the process of learning how to rebuild a wrecked 2013 Honda CBR 600RR. I've enjoyed the process of learning how to fix and build things with my hands and am looking forward to the day when I can take it out on the road.
                                <br></br>
                                <br></br>
                                When I'm not building things for my home and repairing my motorcycle, I'm usually spending time with my four-legged best friend, Euphie, a 15 pound hypoallergenic bundle of joy.
                            </p>

                        ) : (
                            <>
                                <p className="text-lg text-[#ADB7BE] py-3 justify-start">
                                    {/* THIS IS WHERE I WOULD PUT PROFESSIONAL BIO */}
                                    I've spent the majority of my career in the world of sales at leading tech companies. I've always had a passion for the technical side of the business and have been the most fullfilled when I've been able to use my technical aptitude to help <strong>build</strong> things for my peers.
                                    <br></br>
                                    <br></br>
                                    Last year I decided to take the leap and pursue a career in software development. I've been learning cutting edge front-end technologies and have been building projects to showcase my skills. I'm excited to continue to grow and learn in this field and am looking forward to the next chapter in my career.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AboutMe;