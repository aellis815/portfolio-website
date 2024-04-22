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
                                    I've spent my career in tech, blending my knack for sales with a strong technical understanding to improve business results. Working at top tech companies, I’ve always been at my best when using my technical skills to create solutions that help my team succeed.
                                    <br></br>
                                    <br></br>
                                    Recently, I shifted gears to focus more on software development, diving into the latest front-end technologies. I’ve put together a few projects that showcase my growing skills. I'm really excited about learning more and taking on new challenges in this area.
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