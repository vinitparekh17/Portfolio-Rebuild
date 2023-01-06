import React from 'react';
import Image from "next/image";
import { Alfa, roboto } from './Fonts/Fonts';
export const Hero = () => {
    return (
        <div className="flex justify-center items-center">
        <div className="w-3/4">
                <div className='flex justify-center flex-col lg:flex-row items-center'>
                    <Image data-aos="fade-up" data-aos-duration="1000" src={'/images/vinit nobg2.png'} className={'w-2/3 h-fit'} alt={'Vinit Parekh'} width={600} height={600} priority />
                <div data-aos="fade-left" data-aos-duration="3000" className='my-6 text-white text-center'>
                    <h1 className={`text-2xl md:text-3xl 2xl:text-4xl ${roboto.className} `}>I&apos;m <span className={`bg-gradient-to-r font-extrabold from-green-500 to-teal-400 text-transparent bg-clip-text ${Alfa.className}`}>Vinit Parekh</span></h1>
                        <p className='text-gray-200 font-sans text-sm md:text-lg text-center'>A Web Developer from India</p>
                </div>
            </div>
            </div>
        </div>
    )
}