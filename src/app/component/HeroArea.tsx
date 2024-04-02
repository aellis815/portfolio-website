import React from 'react'
import Image from 'next/image'

const HeroArea = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">I'm Alex</h1>
                    <p className="text-[#ADB7BE] text-lg lg:text-xl">
                        This is some filler text about me
                    </p>
                </div>
                <div className="col-span-5">
                    <Image 
                        src="/images/circle_headshot.png"
                        alt="alex's face"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroArea;