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
        <div className="text-white mt-36">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image alt="About me image" src="/images/placeholder.png" width={1000} height={1000} className="rounded-2xl"></Image>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 id="AboutMe Header" className="text-4xl font-bold text-white mb-4">
                        About Me

                    </h2>
                    <div className="bio-container h-[200px]">

                        <ProfessionalButton
                            isChecked={isChecked}
                            handleCheckboxChange={handleCheckboxChange}
                        ></ProfessionalButton>

                        {isChecked ? (
                            <p className="text-lg text-[#ADB7BE] py-3 justify-start">
                                {/* THIS IS WHERE I WOULD PUT PERSONAL BIO */}
                                TO:DO - WRITE MY PERSONAL BIO - CONSIDER HAVING IMAGE ON THE SIDE FLIP TO A PERSONAL IMAGE OF ME AND SMOL DOG
                            </p>

                        ) : (
                            <>
                                <p className="text-lg text-[#ADB7BE] py-3">
                                    {/* THIS IS WHERE I WOULD PUT PROFESSIONAL BIO */}
                                    TO:DO - WRITE MY PROFESSIONAL BIO
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