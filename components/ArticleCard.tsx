'use client'

import Link from 'next/link'
import { PostMeta, formatDate } from '@/lib/types'
import { useState } from 'react'

export default function ArticleCard({ post }: { post: PostMeta }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article style={{
      borderBottom: '1px solid #142035',
      padding: '2rem 0',
    }}>
      <Link
        href={`/${post.slug}`}
        style={{ display: 'block' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          marginBottom: '0.9rem',
          fontSize: '0.68rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#3a5068',
        }}>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>

        <h2 style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: 1.3,
          marginBottom: '0.7rem',
          color: hovered ? '#00d4e8' : '#e8e8e8',
          transition: 'color 0.2s',
        }}>
          {post.title}
        </h2>

        <p style={{
          fontSize: '0.9rem',
          color: '#7a90a8',
          lineHeight: 1.75,
          marginBottom: '1rem',
        }}>
          {post.description}
        </p>

        {post.tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {post.tags.map(tag => (
              <span
                key={tag}
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '0.2rem 0.6rem',
                  border: '1px solid #142035',
                  color: '#3a5068',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  )
}
