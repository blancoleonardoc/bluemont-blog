import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug, formatDate } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://blog.bluemont.com.br'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${BASE_URL}/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['bluemont'],
      url: `${BASE_URL}/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default function ArticlePage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'bluemont',
      url: 'https://bluemont.com.br',
    },
    publisher: {
      '@type': 'Organization',
      name: 'bluemont',
      url: 'https://bluemont.com.br',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/${post.slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article style={{
        maxWidth: '80vw',
        margin: '0 auto',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)',
      }}>

        <Link href="/" className="link-meta" style={{ marginBottom: '3rem', display: 'inline-flex' }}>
          ← todos os artigos
        </Link>

        <header style={{ borderBottom: '1px solid #142035', paddingBottom: '2rem', marginTop: '2rem', marginBottom: '3rem' }}>
          {post.tags.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.2rem' }}>
              {post.tags.map(tag => (
                <span key={tag} style={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '0.2rem 0.6rem',
                  border: '1px solid #142035',
                  color: '#00d4e8',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            {post.title}
          </h1>

          <p style={{
            fontSize: '1rem',
            color: '#7a90a8',
            fontStyle: 'italic',
            lineHeight: 1.7,
            marginBottom: '1.5rem',
          }}>
            {post.description}
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontSize: '0.68rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#3a5068',
          }}>
            <span>bluemont</span>
            <span>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <div className="prose" style={{ maxWidth: '680px' }}>
          <MDXRemote source={post.content} />
        </div>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #142035' }}>
          <Link href="/" className="link-meta">← todos os artigos</Link>
        </div>
      </article>
    </>
  )
}
