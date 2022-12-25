import Link from 'next/link'
import { Alfa, changa } from './Fonts/Fonts'
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs'
export const Contect = () => {
    return (
        <div className='text-gray-200 my-8 pt-8 pb-1 flex-col bg-zinc-900 mx-6 rounded-xl filter shadow-md shadow-gray-300'>
            <div className="container px-6 mx-auto">
                <section className="mb-32 text-white">
                    <div className="flex flex-wrap">
                        <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                            <h2 data-aos="fade-down" className={`bg-gradient-to-r from-green-500 to-teal-400 text-transparent bg-clip-text font-bold text-2xl text-center mb-6 ${Alfa.className}`}>Contact</h2>
                            <p data-aos="fade-left" data-aos-duration="2500" className={`text-gray-200 mb-6 ${changa.className}`}>
                                I believes that every single minute of the life is precious so without wasting it let&apos;s make it meaningfull with joy, Are you passionate about it? Do you love Software developing as much as I do? let&apos;s talk togather and have a coffee togather!
                            </p>
                            <div className="flex justify-center text-2xl">
                                <div data-aos="fade-down" className='m-4'><Link href={'https://github.com/vinitparekh17'}><BsGithub /></Link></div>
                                <div data-aos="fade-up" className='m-4 text-blue-600'><Link href={'https://www.linkedin.com/in/vinit-parekh-475154221'}><BsLinkedin /></Link></div>
                                <div data-aos="fade-down" className='m-4 text-sky-400'><Link href={'https://twitter.com/Vinitparekh17?s=09'}><BsTwitter /></Link></div>
                                <div data-aos="fade-up" className='m-4 text-purple-400'><Link href={'https://www.instagram.com/mr.parekh_17'}><BsInstagram /></Link></div>
                            </div>
                        </div>
                        <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                            <form data-aos="fade-up" data-aos-duration="2000">
                                <div className="form-group mb-6 mt-10">
                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal sm:text-md focus:ring-blue-500 bg-gray-600 border-gray-600 placeholder-gray-200 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border rounded transition ease-in-out m-0 focus:text-gray-50 focus:bg-gray-500 focus:border-blue-600 focus:outline-none" placeholder="Name" />
                                </div>
                                <div className="form-group mb-6">
                                    <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal border sm:text-md focus:ring-blue-500 bg-gray-700 border-gray-600 placeholder-gray-200 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded transition ease-in-out m-0 focus:text-gray-50 focus:bg-gray-500 focus:border-blue-600 focus:outline-none" placeholder="Email address" />
                                </div>
                                <div className="form-group mb-6">
                                    <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal rounded-lg border sm:text-md focus:ring-blue-500 bg-gray-700 border-gray-600 placeholder-gray-200 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition ease-in-out m-0 focus:text-gray-50 focus:bg-gray-500 focus:border-blue-600 focus:outline-none" rows="3" placeholder="Message"></textarea>
                                </div>
                                <button type="submit" className="w-full px-6 py-2.5 bg-gradient-to-r from-green-500 to-teal-400 text-white  font-medium text-xs leading-tight uppercase rounded shadow-md shadow-green-600 hover:shadow-none transition duration-150 ease-in-out">Send</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}