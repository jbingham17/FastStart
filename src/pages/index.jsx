import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/Clemson.jpg'
import image2 from '@/images/photos/Laser.jpg'
import image3 from '@/images/photos/Me.jpg'
import image4 from '@/images/photos/KP.jpg'
import image5 from '@/images/photos/Mets.jpg'
import logoTrivki from '@/images/logos/trivki.svg'
import logoPWC from '@/images/logos/PWC-logo.svg'
import logoJOA from '@/images/logos/JOA-logo-reverse.png'
import logoArch from '@/images/logos/arch3.webp'
import logoND from '@/images/logos/nd.webp'
import logoRegis from '@/images/logos/regis.png'
import logoDevOps from '@/images/logos/DevOps.png'
import logoSysOps from '@/images/logos/sysOps.png'
import logoDev from '@/images/logos/dev.png'
import logoSA from '@/images/logos/sa.png'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'

function LinkIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 float-right">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
    </svg>
  )
}


function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function EducationIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path className="stroke-zinc-400 dark:stroke-zinc-500" strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  )
}

function CertificationIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path className="stroke-zinc-400 dark:stroke-zinc-500" strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Trivki',
      title: 'Full Stack AWS Developer',
      logo: logoTrivki,
      start: 'July 2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
      link: 'https://trivki.com',
    },
    {
      company: 'PricewaterhouseCoopers (PwC)',
      title: 'Cloud & Digital Associate',
      logo: logoPWC,
      start: 'June 2021',
      end: 'June 2022',
      link: '',
    },
    {
      company: 'Journey of Awesomeness',
      title: 'Full Stack AWS Developer',
      logo: logoJOA,
      start: 'July 2020',
      end: 'June 2021',
      link: '',
    },
    {
      company: 'PricewaterhouseCoopers (PwC)',
      title: 'Cloud & Digital Intern',
      logo: logoPWC,
      start: 'June 2020',
      end: 'June 2020',
      link: '',
    },
    {
      company: 'Archdiocese of Chicago',
      title: 'IT Summer Intern',
      logo: logoArch,
      start: 'July 2019',
      end: 'August 2019',
      link: '',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (

          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}{role.link.length ? <a href={role.link}><LinkIcon className="h-6 w-6" /></a> : ''}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
                  }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>

        ))}
      </ol>
      <Button variant="secondary" href="https://johnbingham-resume-viewer.s3.amazonaws.com/resume.pdf" target="_blank" className="group mt-6 w-full">
        Open PDF resumé in new tab
        <LinkIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Education() {
  let edu = [
    {
      company: 'University of Notre Dame',
      title: 'BS Computer Science',
      logo: logoND,
      start: 'August 2017',
      end: 'Jan 2021',
    },
    {
      company: 'Regis High School',
      title: '',
      logo: logoRegis,
      start: 'September 2013',
      end: 'June 2017',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <EducationIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Education</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {edu.map((role, roleIndex) => (

          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
                  }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>

        ))}
      </ol>
    </div>
  )
}

function Certs() {
  let cert = [
    {
      company: 'AWS DevOps Engineer',
      title: 'Professional Level',
      logo: logoDevOps,
      start: 'January 2022',
      link: 'https://www.credly.com/badges/b3785005-349c-4bd5-a81d-2f1dd61892df',
    },
    {
      company: 'AWS SysOps Administrator',
      title: 'Associate Level',
      logo: logoSysOps,
      start: 'April 2021',
      link: 'https://www.credly.com/badges/0daa14a1-61a6-4029-86f1-bad1a8e23c36',
    },
    {
      company: 'AWS Developer',
      title: 'Associate Level',
      logo: logoDev,
      start: 'December 2020',
      link: 'https://www.credly.com/badges/f51ed786-c64d-4693-9e1b-03c728f339fa',
    },
    {
      company: 'AWS Solutions Architect',
      title: 'Associate Level',
      logo: logoSA,
      start: 'October 2020',
      link: 'https://www.credly.com/badges/d89d8fd4-4f5f-468f-968e-444b64df289d',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <CertificationIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Certifications</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {cert.map((role, roleIndex) => (

          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}{role.link.length ? <a href={role.link}><LinkIcon className="h-6 w-6" /></a> : ''}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={role.start}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
              </dd>
            </dl>
          </li>

        ))}
      </ol>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', '-rotate-2', 'rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[10/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          John Bingham - Software Developer
        </title>
        <meta
          name="description"
          content="I’m John, a software developer based in New York City. I’m the creator of Trivki, a trivia website that turns Wikipedia pages into quizzes. I'm deeply technical in all things AWS and have experience with full stack website development, web scraping, data analysis, smart contracts, and more."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software developer, cloud devOps engineer, crypto hodler.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m John, a software developer based in New York City. I&apos;m the creator of Trivki, a trivia website that turns Wikipedia pages into quizzes. I&apos;m deeply technical in all things AWS and have experience with full stack website development, databases, web scraping, data analysis, smart contracts, and more.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/jbingham17"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/john-bingham7/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <div>
              <Card as="about">
                <Card.Title href='/about'>
                  About me!
                </Card.Title>
                <Card.Description>A brief introduction to myself and my journey throughout college and life afterwards. Learn about how I became interested in cloud and crypto.</Card.Description>
                <Card.Cta>Learn About me!</Card.Cta>
              </Card>
            </div>
            <div>
              <Card as="projects">
                <Card.Title href='/projects'>
                  My projects
                </Card.Title>
                <Card.Description>Take a look at some of my favorite projects. Checko out the projects themselves or the open source code behind them.</Card.Description>
                <Card.Cta>Check out my projects!</Card.Cta>
              </Card>
            </div>
            <div>
              <Card as="skills">
                <Card.Title href='/skills'>
                  My skills
                </Card.Title>
                <Card.Description>Get a deeper understanding of my skills by understanding how and why I&apos;m skilled in different areas.</Card.Description>
                <Card.Cta>Get to know me!</Card.Cta>
              </Card>
            </div>
            <div>
              <Card as="blog">
                <Card.Title href='/blog'>
                  Bingham&apos;s Blog
                </Card.Title>
                <Card.Description>Read along with me in my book blog. This blog focuses on my reactions to a plethora of different books, article, podcasts, and more.</Card.Description>
                <Card.Cta>See what I&apos;m reading!</Card.Cta>
              </Card>
            </div>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
            <Education />
            <Certs />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
