import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Alfa, changa } from './Fonts/Fonts';

export const About = () => {
    return(
        <div className='bg-zinc-900 mx-6 p-2  text-gray-200 rounded-xl filter shadow-sm shadow-gray-300'>
          <h2 data-aos="fade-down" className={`pb-1 mx-6 py-6 md:text-2xl text-xl font-bold bg-gradient-to-r text-cee from-green-500 to-teal-400 text-transparent bg-clip-text text-center ${Alfa.className}`}>About</h2>
          <div className='flex items-center justify-center md:flex-row flex-col'>
            <div className=' container lg:w-3/5 lg:mx-auto mx-3 w-full my-3 rounded-md'>
              <Image data-aos="fade-up" src={'/images/Vinit modrn.png'} loading="lazy"  alt={'Vinit Parekh'} width={500} height={500}/>
            </div>
            <div className={`container px-4 text-base md:text-xl h-auto leading-7 ${changa.className}`}>
              <p data-aos="fade-left" data-aos-duration="2000">
                I&apos;m Vinit Parekh from India. I live in Surat city. I like to travel and feel the beauty of nature. I believes in simplicity. I&apos;m unique minded person who likes to think beyond others.
              </p>
              <p data-aos="fade-right" data-aos-duration="3000" className={`mt-4`}>
                I am passionate undergraduate Software developer. Learnt basics of programming at the age of 17. I have made more then 14 small projects and 2 major projects in 7 months of my experience. This is what I&apos;m doing.
              </p>
              <table data-aos="fade-up" className='mt-4 table-auto'>
                <tr>
                  <td className='font-semibold'>Profile:</td>
                  <td>Full Stack Developer</td>
                </tr>
                <tr>
                  <td className='font-semibold'>Website:</td>
                  <td><Link href={'https://technetic.co.in'}>https://technetic.co.in</Link></td>
                </tr>
                <tr>
                  <td className='font-semibold'>Email:</td>
                  <td><Link href={'mailto:vinitparekh1742@gmail.com'}>vinitparekh1742@gmail.com</Link></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
    )
}