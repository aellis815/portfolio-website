//Needs to be client side due to type animation
'use client';
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

export default function HeroArea() {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12 mt-24">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary-500">Hey, I&apos;m{" "}
                        </span>
                        {/* Using Type Animation from react-type animation to animate intro text */}
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Alex",
                                1000,
                                "a front-end developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={13}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        I love building things for the web. I specialize in creating fast, responsive, and accessible websites.
                    </p>

                    <div>
                        <button className="
                            px-6 
                            py-3 
                            w-full 
                            sm:w-fit 
                            rounded-full 
                            mt-3 
                            bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-white text-white mr-4">
                            Contact Me
                        </button>
                        {/* <button className="px-1 py-1 w-full sm:w-fit rounded-full mt-3 bg-gradient-to-br from-[#97FEED] via-[#0B666A] to-#35A29F hover:bg-slate-800 text-white">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </button> */}
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0 ml-6">
                    <div className="rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative m-5">
                        <Image
                            src="/images/circle_headshot.png"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="my face"
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

