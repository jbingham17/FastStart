import Head from 'next/head'
import Image from 'next/future/image'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'
import docker from '@/images/skills/docker.webp'
import css from '@/images/skills/css.svg'
import tailwind from '@/images/skills/tailwind.svg'
import html from '@/images/skills/html.svg'
import linux from '@/images/skills/linux.png'
import c from '@/images/skills/c++.png'
import solidity from '@/images/skills/solidity.png'
import git from '@/images/skills/git.webp'
import javascript from '@/images/skills/javascript.png'
import sql from '@/images/skills/sql.webp'
import aws from '@/images/skills/aws.svg'
import python from '@/images/skills/python.webp'


export function Breaker({ title, children }) {
    return (
        <Container className="mt-16 sm:mt-32" id={title}>
            <header className="max-w-2xl">
                <h4 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                    {title}
                </h4>
            </header>
            <hr className="border-zinc-200 dark:border-zinc-700/40"></hr>
            <div className="mt-16 sm:mt-20">{children}</div>
        </Container>
    )
}

function Sk2({ title, description, yoe, logo }) {
    return (
        <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg text-center border border-zinc-200 dark:border-zinc-700/40">
            <div className="flex flex-1 flex-col p-8">
                <Image className="mx-auto h-32 w-32 flex-shrink-0" src={logo} alt="" unoptimized />
                <h2 className="mt-6 text-lg font-bold text-zinc-900 dark:text-zinc-100">{title}</h2>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dt className="sr-only">{title}</dt>
                    <dd className="text-sm text-zinc-600 dark:text-zinc-400">{description}</dd>
                    <dd className="mt-3">
                        <span className="rounded-full bg-zinc-500 px-2 py-1 text-xs font-medium text-zinc-100 dark:bg-zinc-700 dark:text-zinc-100">{yoe} years experience</span>
                    </dd>
                </dl>
            </div>
        </li>
    )
}

export default function Skills() {
    return (
        <>
            <Head>
                <title>Skills - John Bingham</title>
                <meta
                    name="description"
                    content="Get to know my skills on a deeper level."
                />
            </Head>
            <SimpleLayout
                title="Get to know my skills on a deeper level."
                intro=""
            >
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <Sk2
                        title="Python"
                        description="Extremely proficient in functional & object oriented programming, data scraping, machine learning, data analysis, and much more in Python."
                        yoe="6"
                        logo={python}
                    />
                    <Sk2
                        title="AWS"
                        description="Highly proficient in all things AWS. Have passed 4 certifications including DevOps Professional. Have built entire applications using CloudFormation"
                        yoe="3"
                        logo={aws}
                    />
                    <Sk2
                        title="SQL"
                        description="Deeply technical with complex queries in SQL. Have experience with different databases including Postgres, MySQL, and more."
                        yoe="2"
                        logo={sql}
                    />
                    <Sk2
                        title="JavaScript"
                        description="Have built 3 different production websites in JavaScript, including this one."
                        yoe="3"
                        logo={javascript}
                    />
                    <Sk2
                        title="Git"
                        description="Have used git on nearly every project I've worked on for version control to work safely and collaboratively."
                        yoe="6"
                        logo={git}
                    />
                    <Sk2
                        title="Solidity"
                        description="Learned Solidity through the LavaPool project where my team developed a token on the Ethereum Blockchain"
                        yoe="1"
                        logo={solidity}
                    />
                    <Sk2
                        title="C++"
                        description="Skilled in object oriented programming, data structures, minimization of time complexity."
                        yoe="2"
                        logo={c}
                    />
                    <Sk2
                        title="Unix/Linux"
                        description="Knowledge of linux terminal with command lines and scripting languages such as bash, shell, and zshell"
                        yoe="4"
                        logo={linux}
                    />
                    <Sk2
                        title="HTML"
                        description="Used the latest version of HTML, HTML5 to build this website in conjunction with JSX."
                        yoe="4"
                        logo={html}
                    />
                    <Sk2
                        title="Tailwind"
                        description="Used TailwindCSS and TailwindUI to design this website"
                        yoe="4"
                        logo={tailwind}
                    />
                    <Sk2
                        title="CSS"
                        description="Deep understanding of CSS fundamentals"
                        yoe="4"
                        logo={css}
                    />
                    <Sk2
                        title="Docker"
                        description="Experience using docker containers to simplify app deployment"
                        yoe="1"
                        logo={docker}
                    />
                </ul>
            </SimpleLayout>
        </>
    )
}
