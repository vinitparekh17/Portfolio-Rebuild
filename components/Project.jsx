import projects from '../Data/Projects.json'
import Image from 'next/image'
import Link from 'next/link'
import { Alfa, roboto } from './Fonts/Fonts'
export const Project = () => {
    return (
        <div className='text-gray-200 mt-8 py-6 px-8 flex-col bg-zinc-900 mx-6 rounded-xl filter shadow-sm shadow-gray-300'>
            <h2 data-aos="fade-down" className={`pb-3 text-xl font-bold bg-gradient-to-r from-green-500 to-teal-400 text-transparent bg-clip-text text-center ${Alfa.className}`}>Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {projects.map((project, index) => (
                    <div key={index} data-aos={`fade-${ index === 0 ? 'right' : index === 1 ? 'up' : index === 2 ? 'down' : 'left'}`} data-aos-duration={index === 0 ? 1000 : index === 1 ? 1500 : index === 2 ? 2000 : 2500} className="rounded-lg hover:shadow-lg bg-[#080808] shadow-gray-300 shadow-md hover:-translate-y-4 hover:transition-transform hover:shadow-emerald-300 max-w-sm">
                        <Image src={project.path} loading="lazy" className="rounded-t-lg" width={640} height={360} alt="alt" />
                        <div className="p-6">
                            <h5 className={`text-white text-xl mb-1 font-bold ${roboto.className}`}>{project.title}</h5>
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