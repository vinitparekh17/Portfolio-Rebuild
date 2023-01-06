import React from 'react';
import { Bootstrap, Bash, JavaScript, ReactIcon, Redis, HTML, Express, Tailewind, Typescript, Css, Docker, Linux, Nextjs, Nodejs, Git } from './Svgs';
import skills from '../Data/Skills.json';
import { Alfa } from './Fonts/Fonts';
export const Skill = () => {
    return (
        <div className='text-gray-200 mt-8 py-6 px-8 flex-col bg-zinc-900 mx-6 rounded-xl filter shadow-sm shadow-gray-300'>
            <h2 data-aos="fade-down" className={`pb-1 text-xl font-bold bg-gradient-to-r from-green-500 to-teal-400 text-transparent bg-clip-text text-center ${Alfa.className}`}>Skills</h2>
            <center>
                <div className='mt-10 grid grid-cols-3 md:grid-cols-5 gap-6'>
                    {skills.map((data, index) => {
                        return (
                            <div key={index} data-aos="zoom-in" data-aos-duration="3000" className={`flex flex-col items-center drop-shadow-${data.color}`}>
                                {data.item === 'Bootstrap' ? <Bootstrap /> : data.item === 'Bash' ? <Bash /> : data.item === 'JavaScript' ? <JavaScript /> : data.item === 'React' ? <ReactIcon /> : data.item === 'Redis' ? <Redis /> : data.item === 'HTML' ? <HTML /> : data.item === 'Express' ? <Express /> : data.item === 'Tailewind' ? <Tailewind /> : data.item === 'Typescript' ? <Typescript /> : data.item === 'Css' ? <Css /> : data.item === 'Docker' ? <Docker /> : data.item === 'Git' ? <Git /> : data.item === 'Linux' ? <Linux /> : data.item === 'Nextjs' ? <Nextjs /> : data.item === 'Nodejs' ? <Nodejs /> : ''}
                                <p className='text-sm mt-1'>{data.item}</p>
                            </div>
                        )
                    })}
                </div>
            </center>
        </div>
    )
}