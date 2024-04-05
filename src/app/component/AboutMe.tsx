'use client';
import { useTransition, useState } from 'react';
import QualificationData from './qualificationData';
import { QualButton, ProfessionalButton } from './Buttons';
import Image from 'next/image';



const AboutMe = () => {
    const [qualData, setQualData] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    };

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setQualData(id);
        });
    };
    return (
        <div id="about me" className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/placeHolder.png" width={500} height={500}></Image>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 id="AboutMe Header" className="text-4xl font-bold text-white mb-4">
                        Alex

                    </h2>
                    <div className="bio-container h-[200px]">
                        <ProfessionalButton
                            isChecked={isChecked}
                            handleCheckboxChange={handleCheckboxChange}
                        ></ProfessionalButton>
                        {isChecked ? (
                            <p className="text-lg text-[#ADB7BE] py-3 justify-start">
                                {/* THIS IS WHERE I WOULD PUT PERSONAL BIO */}
                                I am a guy that does stuff on occasion.
                            </p>

                        ) : (
                            <>
                                <p className="text-lg text-[#ADB7BE] py-3">
                                    {/* THIS IS WHERE I WOULD PUT PROFESSIONAL BIO */}
                                    I love building things for the web. I specialize in creating fast, responsive, and accessible websites.
                                </p>
                                <div className="flex flex-row justify-start mt-8">
                                    <QualButton
                                        active={qualData === "skills"}
                                        selectTab={() => handleTabChange("skills")}
                                    >
                                        Skills
                                    </QualButton>
                                    <QualButton
                                        active={qualData === "certifications"}
                                        selectTab={() => handleTabChange("certifications")}
                                    >
                                        Certifications
                                    </QualButton>
                                </div>
                                <div className="mt-8">
                                    {QualificationData.find((t) => t.id === qualData)?.content}
                                </div>

                            </>
                        )}
                    </div>
                </div>

            </div>
            <div className="xl:gap-16 xl:py-16 sm:py-16 py-8 px-4 items center md:grid md:grid-cols-2 gap-8">

            </div>

        </div>
    )
}


export default AboutMe;