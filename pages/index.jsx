import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Bootstrap, Bash, JavaScript, React, Redis, HTML, Express, Tailewind, Typescript, Css, Docker, Git, Linux, Nextjs, Nodejs } from '../components/Svgs';
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';

export default function Home() {
  const projects = [
    {
        "title": "Music player",
        "link": "https://www.musify.vinitparekh.rocks/",
        "date": "28 March 2022",
        "path": "/images/Project 1.png"
    },
    {
        "title": "Spotify clone",
        "date": "27 April 2022",
        "path": "/images/Project 2.png"
    },
    {
        "title": "Multimedia Platform",
        "date": "5 May 2022",
        "path": "/images/Project 3.png"
    },
    {
        "title": "Technetic Application",
        "link": "https://www.technetic.co.in/",
        "date": "26 Aug 2022",
        "path": "/images/Project 4.png"
    }
]

const skills = [
  {
      "item": "Bootstrap",
      "color": "purple"
  },
  {
      "item": "Bash",
      "color": "white"
  },
  {
      "item": "JavaScript",
      "color": "yellow"
  },
  {
      "item": "React",
      "color": "sky"
  },
  {
      "item": "Redis",
      "color": "red"
  },
  {
      "item": "HTML",
      "color": "red"
  },
  {
      "item": "Express",
      "color": "white"
  },
  {
      "item": "Tailewind",
      "color": "sky"
  },
  {
      "item": "Typescript",
      "color": "blue"
  },
  {
      "item": "Css",
      "color": "sky"
  },
  {
      "item": "Docker",
      "color": "blue"
  },
  {
      "item": "Git",
      "color": "orange"
  },
  {
      "item": "Linux",
      "color": "white"
  },
  {
      "item": "Nextjs",
      "color": "white"
  },
  {
      "item": "Nodejs",
      "color": "green"
  }
]

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio of Vinit Parekh" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
        <meta
          name="title"
          content="Portfolio of Vinit Parekh" />
        <meta
          name="description"
          content="A personal website of Vinit Parekh. Which represents the work and blogs of Vinit Parekh." />
        <meta
          name="copyright"
          content="Vinit PArekh" />

        <meta
          property="og:type"
          content="website" />
        <meta
          property="og:url"
          content="https://developer.technetic.co.in" />
        <meta
          property="og:title"
          content="Portfolio of Vinit Parekh" />
        <meta
          property="og:description"
          content="A personal website of Vinit Parekh. Which represents the work and blogs of Vinit Parekh." />
        <meta
          property="og:image"
          content="https://media.discordapp.net/attachments/960919309075509278/1056276424404770826/Screenshot_56.png?width=586&height=585" />
        <meta
          property="twitter:card"
          content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://developer.technetic.co.in" />
        <meta
          property="twitter:title"
          content="Portfolio of Vinit Parekh" />
        <meta
          property="twitter:description"
          content="A personal website of Vinit Parekh. Which represents the work and blogs of Vinit Parekh." />
        <meta
          property="twitter:image"
          content="https://media.discordapp.net/attachments/960919309075509278/1056276424404770826/Screenshot_56.png?width=586&height=585" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main>
        <div className='flex justify-center flex-col lg:flex-row items-center'>
          <div className='container mt-6 w-1/3'>
            <Image src={'/images/vinit nobg2.png'} alt={'Vinit Parekh'} layout='responsive' width={50} height={50} />
          </div>
          <div className='-mx-6 my-6 text-white text-center container w-1/2'>
            <h1 className='font-extrabold text-md md:text-3xl 2xl:text-4xl'>I&apos;m <span className='bg-gradient-to-r from-green-500 to-teal-400 text-transparent bg-clip-text '>Vinit Parekh</span></h1>
            <center>
              <p className='text-gray-200 text-center'>A Web Developer from India</p>
            </center>
          </div>
        </div>

        <div className='bg-zinc-900 mx-6 p-2 text-gray-200 rounded-xl filter shadow-sm shadow-gray-300'>
          <h2 className='pb-1 mx-6 py-6 text-xl font-bold bg-gradient-to-r text-cee from-green-500 to-teal-400 text-transparent bg-clip-text text-center'>About</h2>
          <div className='flex items-center justify-center md:flex-row flex-col'>
            <div className=' container w-3/5 my-3 rounded-md'>
              <Image src={'/images/Vinit modrn.png'} alt={'Vinit Parekh'} layout='responsive' width={5} height={5} />
            </div>
            <div className='container px-4 text-base md:text-xl h-auto leading-7'>
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

        <div className='text-gray-200 mt-8 py-6 px-8 flex-col bg-zinc-900 mx-6 rounded-xl filter shadow-sm shadow-gray-300'>
          <h2 className='pb-1 text-xl font-bold bg-gradient-to-r from-green-500 to-teal-400 text-transparent bg-clip-text text-center'>Skills</h2>
          <center>
            <div className='mt-10 grid grid-cols-3 md:grid-cols-5 gap-6'>
              {skills.map((data, index) => {
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

        <div className='text-gray-200 mt-8 py-6 px-8 flex-col bg-zinc-900 mx-6 rounded-xl filter shadow-sm shadow-gray-300'>
          <div className="flex justify-center">
            {projects.map((project, index) => (
              <div key={index} className="rounded-lg m-5 shadow-md hover:shadow-lg bg-[#262626] shadow-yellow-600 hover:shadow-gray-400 max-w-sm">
                <Image src={project.path} className="rounded-t-lg" layout="responsive" width={5} height={3} alt="alt" />
                <div className="p-6">
                  <h5 className="text-white text-xl font-medium mb-2">{project.title}</h5>
                  {/* <p className="text-gray-400 text-base mb-4">
                            </p> */}
                  <div>
                    {project.link !== undefined ? <span className="text-blue-500"><Link href={project.link}>Live Preview</Link></span> : <span className="text-gray-500">Unavailable</span>}
                    <span className="text-gray-500 float-right">{project.date}</span>
                  </div>
                </div>
              </div>
            ))
            }
          </div>
        </div>

        <div className='text-gray-200 my-8 pt-8 pb-1 flex-col bg-zinc-900 mx-6 rounded-xl filter shadow-md shadow-gray-300'>
          <div className="container px-6 mx-auto">
            <section className="mb-32 text-white">
              <div className="flex flex-wrap">
                <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                  <h2 className="bg-gradient-to-r from-green-500 to-teal-400 text-transparent bg-clip-text font-bold text-2xl mb-6">Contact</h2>
                  <p className="text-gray-200 mb-6">
                    I believes that every single minute of the life is precious so without wasting it let&apos;s make it meaningfull with joy, Are you passionate about it? Do you love Software developing as much as I do? let&apos;s talk togather and have a coffee togather!
                  </p>
                  <div className="flex justify-center text-2xl">
                    <div className='m-4'><Link href={'https://github.com/vinitparekh17'}><BsGithub /></Link></div>
                    <div className='m-4 text-blue-600'><Link href={'https://www.linkedin.com/in/vinit-parekh-475154221'}><BsLinkedin /></Link></div>
                    <div className='m-4 text-sky-400'><Link href={'https://twitter.com/Vinitparekh17?s=09'}><BsTwitter /></Link></div>
                    <div className='m-4 text-purple-400'><Link href={'https://www.instagram.com/mr.parekh_17'}><BsInstagram /></Link></div>
                  </div>
                </div>
                <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                  <form>
                    <div className="form-group mb-6 mt-10">
                      <input type="text" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              sm:text-md focus:ring-blue-500 bg-gray-600 border-gray-600 placeholder-gray-200 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
              border
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-50 focus:bg-gray-500 focus:border-blue-600 focus:outline-none" id="exampleInput7"
                        placeholder="Name" />
                    </div>
                    <div className="form-group mb-6">
                      <input type="email" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal border sm:text-md focus:ring-blue-500 bg-gray-700 border-gray-600 placeholder-gray-200 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-50 focus:bg-gray-500 focus:border-blue-600 focus:outline-none" id="exampleInput8"
                        placeholder="Email address" />
                    </div>
                    <div className="form-group mb-6">
                      <textarea className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              rounded-lg border sm:text-md focus:ring-blue-500 bg-gray-700 border-gray-600 placeholder-gray-200 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
              transition
              ease-in-out
              m-0
              focus:text-gray-50 focus:bg-gray-500 focus:border-blue-600 focus:outline-none
            " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" className="
            w-full
            px-6
            py-2.5
            bg-gradient-to-r
            from-green-500
            to-teal-400
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            shadow-green-600
            hover:shadow-none
            transition
            duration-150
            ease-in-out">Send</button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}