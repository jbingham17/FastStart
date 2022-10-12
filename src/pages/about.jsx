import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - John Bingham</title>
        <meta
          name="description"
          content="I’m John Bingham. Welcome to my virtual crib."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m John Bingham. Welcome to my virtual crib.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I grew up on (yes, on) Long Island but attended Regis High School in Manhattan.
                After high school I attended the University of Notre Dame in South Bend,
                Indiana. I entered college unsure of what I wanted to do in life.
              </p>
              <p>
                In Notre Dame&apos;s engineering program the first programming language we learned
                was MatLab of all things. Despite the fact that arrays began at 1 I fell in love
                with it. I became a Computer Science major and loved the majority of my coursework.
                The best class I took at Notre Dame was Cryptography with Professor Taeho Jung.
                In the class we learned about encryption, hashing algorithms, and the math behind
                Bitcoin. A comprehensive understanding of Bitcoin got me very interested in crypto
                and specifically Ethereum, which I have a deep understanding of.
              </p>
              <p>
                After taking a couple of summer courses I realized that I had the opportunity
                to graduate a semester early and take only 3 classes my senior year. I decided
                to pursue this opportunity, and began to learn about the AWS cloud in my free
                time to keep myself sharp. Then, luckily, a friend reached out with an
                opportunity to help design a website for a charity bike race: The Journey of
                Awesomeness. I jumped at the chance to do something to help other people using my
                skillset. I built the website on AWS and raised over $250,000 in donations through
                the website that I built from scratch.
              </p>
              <p>
                Unfortunately Notre Dame&apos;s Computer Science Department tends to funnel graduates into 
                consulting. I became one of ~60% of my graduating class that ended up in some
                form of consulting, taking a job at PwC. When given the chance to pick my group
                I chose the Cloud Computing group, thinking I would be able to expand my skills in AWS.
                While I did continue to expand my skills in AWS by earning more and more advanced certifications
                on the side, it did not help in my role. Initially I was just making PowerPoint slide
                decks about IT infrastructure, which did not interest me at all. I was able to transition
                to a slightly more technical role where I built automations using SQL and Tableau, but
                I grew frustrated with the beauracracy and antiquated technology being used within our client
                as well as the lack of interpersonal connection I was getting from a totally virtual project.
              </p>
              <p>
                I found myself far more interested in side projects than I was in my actual job. I built
                a cool Wordle Solver while Wordle was just growing big. I recruited some friends to join
                me in participating in an Ethereum hackathon called Hack Money. We built a new token, LavaPool that
                would allow one to diversify their risk of investing in a single liquid Ethereum staking
                token. Eventually I realized that I would be far more productive, learn much more, and be able to work on
                projects that interested me more if I left PwC. I decided to leave in late June 2022.
              </p>
              <p>
                The main project that I worked on after leaving PwC was Trivki. As a big geography and trivia 
                buff I was frustrated that there were no Trivia websites that updated their quizzes automatically.
                The existing websites, Sporcle and JetPunk, work well for static quizzes like Countries of the World
                but not for dyanmic quizzes like the New York Mets Roster today. I decided to create my own and pull
                all the data from Wikipedia, which has plethora of free data.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://github.com/jbingham17" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/john-bingham7/" icon={LinkedInIcon} className="mt-4">
                Connect on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:johnjbingham1@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                johnjbingham1@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
