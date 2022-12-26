import Head from 'next/head';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skill } from '../components/Skill';
import { Contect } from '../components/Contect';
import { Project } from '../components/Project';

export default function Home() {
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
          property="twitter:image "
          content="https://media.discordapp.net/attachments/960919309075509278/1056276424404770826/Screenshot_56.png?width=586&height=585" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className='overflow-x-hidden'>
        <Hero />
        <About />
        <Skill />
        <Project />
        <Contect />  
      </main>
    </>
  )
}