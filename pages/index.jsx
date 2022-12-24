import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import datas from '../Data/data.json'
import { Bootstrap, Bash, JavaScript, React, Redis, HTML, Express, Tailewind, Typescript, Css, Docker, Git, Linux, Nextjs, Nodejs } from '../components/Svgs'
import { Navbar } from '../components/Navbar'
import { Contect } from '../components/Contect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio of Vinit Parekh" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
          <div className='flex justify-center flex-col lg:flex-row items-center'>
            <div className='md:w-1/2 w-full mt-6'>
              <Image src={'/images/vinit nobg2.png'} alt={'Vinit Parekh'} layout='responsive' width={50} height={50} />
            </div>
            <div className='mx-2 my-6 text-white'>
              <h1 className='font-extrabold text-md md:text-3xl'>I&apos;m <span className='bg-gradient-to-r from-green-500 to-teal-400 text-transparent bg-clip-text '>Vinit Parekh</span></h1>
              <center>
                <p className='text-gray-200'>A Web Developer from India</p>
              </center>
            </div>
          </div>
          <div className='h-fit text-gray-200'>
            <div className='bg-zinc-900 mx-6 p-2 rounded-xl filter drop-shadow-white'>
          <h2 className='pb-1 mx-6 py-6 text-xl font-bold bg-gradient-to-r text-cee from-green-500 to-teal-400 text-transparent bg-clip-text text-center'>About</h2>
            <div className='flex justify-center items-center md:flex-row flex-col'>
              <div className='md:w-[25%] w-[96%] mx-[2%] my-3 rounded-md'>
                <Image src={'/images/Vinit modrn.png'} alt={'Vinit Parekh'} layout='responsive' width={5} height={5} />
              </div>
              <div className='md:w-[48%] w-full px-2 text-base md:text-xl m-[1%] h-auto leading-7'>
                <p>
                  I&apos;m Vinit Parekh from India. I live in Surat city. I like to travel and feel the beauty of nature. I believes in simplicity. I&apos;m unique minded person who likes to think beyond others.
                </p>
                <p className='mt-4'>
                  I am passionate undergraduate Software developer. Learnt basics of programming at the age of 17. I have made more then 14 small projects and 2 major projects in 7 months of my experience. This is what I&apos;m doing.
                </p>
                <table className='mt-4 table-auto'>
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
                    <td className='md:text-base text-sm'><Link href={'mailto:vinitparekh1742@gmail.com'}>vinitparekh1742@gmail.com</Link></td>
                  </tr>
                </table>
              </div>
            </div>
            </div>
          </div>
          <div className='text-white mt-8 py-6 px-8 flex-col bg-zinc-900 mx-6 rounded-xl filter drop-shadow-white'>
            <h2 className='pb-1 text-xl font-bold bg-gradient-to-r from-green-500 to-teal-400 text-transparent bg-clip-text text-center'>Skills</h2>
            <center>
              <div className='mt-10 grid grid-cols-3 md:grid-cols-5 gap-6'>
                {datas.map((data, index) => {
                  return (
                    <div key={index} className={`flex flex-col items-center drop-shadow-${data.color}`}>
                      {data.item === 'Bootstrap' ? <Bootstrap /> : data.item === 'Bash' ? <Bash /> : data.item === 'JavaScript' ? <JavaScript /> : data.item === 'React' ? <React /> : data.item === 'Redis' ? <Redis /> : data.item === 'HTML' ? <HTML /> : data.item === 'Express' ? <Express /> : data.item === 'Tailewind' ? <Tailewind /> : data.item === 'Typescript' ? <Typescript /> : data.item === 'Css' ? <Css /> : data.item === 'Docker' ? <Docker /> : data.item === 'Git' ? <Git /> : data.item === 'Linux' ? <Linux /> : data.item === 'Nextjs' ? <Nextjs /> : data.item === 'Nodejs' ? <Nodejs /> : ''}
                      <p className='text-sm mt-1'>{data.item}</p>
                    </div>
                  )
                })}
              </div>
            </center>
          </div>
          <div className='text-white my-8 py-2 flex-col bg-zinc-900 mx-6 rounded-xl filter drop-shadow-white'>
            <Contect />
            </div>
        </main>
    </>
  )
}
