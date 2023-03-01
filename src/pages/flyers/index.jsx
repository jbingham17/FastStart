import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }) {
    return (
        <article className="md:grid md:grid-cols-4 md:items-baseline">
            <Card className="md:col-span-3">
                <Card.Title href={`/flyers/${article.slug}`}>
                    {article.title}
                </Card.Title>
                <Card.Eyebrow
                    as="time"
                    dateTime={article.date}
                    className="md:hidden"
                >
                    <ul>
                        <li>{formatDate(article.date)}</li>
                        <li>Title: <em>{article.contentTitle}</em></li>
                        <li>Author(s): {article.contentAuthor}</li>
                        <li>Medium: {article.contentType}</li>
                    </ul>
                </Card.Eyebrow>
                <Card.Description>{article.description}</Card.Description>
                <Card.Cta>Read article</Card.Cta>
            </Card>
            <Card.Eyebrow
                as="time"
                dateTime={article.date}
                className="mt-1 hidden md:block"
            >
                <ul>
                    <li>{formatDate(article.date)}</li>
                    <li>Title: <em>{article.contentTitle}</em></li>
                    <li>Author(s): {article.contentAuthor}</li>
                    <li>Medium: {article.contentType}</li>
                </ul>
            </Card.Eyebrow>
        </article>
    )
}

export default function ArticlesIndex({ articles }) {
    return (
        <>
            <Head>
                <title>Flyers</title>
                <meta
                    name="description"
                    content='flyers'
                />
            </Head>
            <SimpleLayout
                title="Flyers"
                intro="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea laboriosam quas quis provident veritatis illo ad molestiae officia, laudantium molestias maxime odio temporibus consequatur atque nesciunt, aperiam architecto, pariatur deleniti."
            >
                <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                    <div className="flex max-w-3xl flex-col space-y-16">
                        {articles.map((article) => (
                            <Article key={article.slug} article={article} />
                        ))}
                    </div>
                </div>
            </SimpleLayout>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
        },
    }
}
