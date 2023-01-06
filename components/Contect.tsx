import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Alfa, changa } from './Fonts/Fonts';
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';
export const Contect = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        msg: ''
    });
    const [response, setResponse] = useState(null);

    const handleChange = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.post('/api/email', data)
            .then(res => {
                setResponse(res.data.success);
            })
            .catch(err => {
                console.log(err);
            })
        setData({
            name: '',
            email: '',
            msg: ''
        });

        setTimeout(() => {
            if (response) {
                setResponse(null);
            }
        }, 3000);
    }

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
                            <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-duration="2000">
                                <div className="mb-6 mt-10">
                                    <input type="text" name='name' onChange={handleChange} value={data.name} className="form-control block w-full px-3 py-1.5 text-base font-normal sm:text-md focus:ring-blue-500 bg-gray-600 border-gray-600 placeholder-gray-200 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border rounded transition ease-in-out m-0 focus:text-gray-50 focus:bg-gray-500 focus:border-blue-600 focus:outline-none" required placeholder="Name" />
                                </div>
                                <div className="mb-6">
                                    <input type="email" name='email' onChange={handleChange} value={data.email} className="block w-full px-3 py-1.5 text-base font-normal border sm:text-md focus:ring-blue-500 bg-gray-700 border-gray-600 placeholder-gray-200 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded transition ease-in-out m-0 focus:text-gray-50 focus:bg-gray-500 focus:border-blue-600 focus:outline-none" required placeholder="Email address" />
                                </div>
                                <div className="mb-6">
                                    <textarea value={data.msg} name="msg" onChange={handleChange} className="block w-full px-3 py-1.5 text-base font-normal rounded-lg border sm:text-md focus:ring-blue-500 bg-gray-700 border-gray-600 placeholder-gray-200 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition ease-in-out m-0 focus:text-gray-50 focus:bg-gray-500 focus:border-blue-600 focus:outline-none" rows={3} required placeholder="Message"></textarea>
                                    <div className={response === null ? 'hidden' : 'block'}>{
                                        response ? <p className={`mt-1 text-xs text-green-500`}>Form has been submitted successfully</p> : <p className={`mb-3 text-xs text-red-500`}>Something went wrong!</p>}
                                    </div>
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