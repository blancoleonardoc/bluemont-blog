import Link from 'next/link'
import { PostMeta, formatDate } from '@/lib/posts'

export default function ArticleCard({ post }: { post: PostMeta }) {
  return (
    <article className="group border-b border-zinc-800 py-8 last:border-0">
      <Link href={`/${post.slug}`} className="block">
        <div className="flex items-center gap-3 mb-3 text-xs text-zinc-500">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors leading-snug">
          {post.title}
        </h2>
        <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {post.description}
        </p>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400"
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
