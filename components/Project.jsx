import projects from '../Data/Projects.json'
import Image from 'next/image'
import Link from 'next/link'
import { Alfa } from './Fonts/Fonts'
export const Project = () => {
    return (
        <div className='text-gray-200 mt-8 py-6 px-8 flex-col bg-zinc-900 mx-6 rounded-xl filter shadow-sm shadow-gray-300'>
            <h2 data-aos="fade-down" className={`pb-3 text-xl font-bold bg-gradient-to-r from-green-500 to-teal-400 text-transparent bg-clip-text text-center ${Alfa.className}`}>Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {projects.map((project, index) => (
                    <div key={index} data-aos={`fade-${ index === 1 ? 'right' : index === 2 ? 'up' : index === 3 ? 'down' : 'left'}`} data-aos-duration={index === 1 ? 500 : index === 2 ? 1000 : index === 3 ? 1500 : 2000} className="rounded-lg hover:shadow-lg bg-[#343333] shadow-gray-300 shadow-md hover:-translate-y-4 hover:transition-transform hover:shadow-emerald-300 max-w-sm">
                        <Image src={project.path} className="rounded-t-lg" width={640} height={360} alt="alt" />
                        <div className="p-6">
                            <h5 className="text-white text-xl font-medium mb-1">{project.title}</h5>
                                <p className="text-gray-400 text-xs mb-2">{project.date}</p >
                                
                            <div>
                                {project.link !== undefined ? <p className="w-full text-blue-500"><Link href={project.link}>Live Preview</Link></p> : null}
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}