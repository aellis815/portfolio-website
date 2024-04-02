import React from 'react'
import Image from 'next/image'

const HeroArea = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hey, I'm Alex</h1>
                    <p className="text-[#ADB7BE] text-lg lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum
                    </p>
                </div>
                <div>
                    <button className="px-6 py-3 rounded-full mt-3 bg-white hover:bg-slate-200 text-black mr-4">Contact Me</button>
                    <button className="px-6 py-3 rounded-full mt-3 bg-transparent hover:bg-slate-800 text-white border border-white">Download Resume</button>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] h-[400px] relative">
                        <Image
                            src="/images/circle_headshot.png"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="alex's face"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroArea;