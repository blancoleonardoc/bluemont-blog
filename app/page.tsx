import { getAllPosts } from '@/lib/posts'
import ArticleCard from '@/components/ArticleCard'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-14">
        <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-3">educação financeira</p>
        <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Blog bluemont</h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
          Artigos sobre investimentos, planejamento financeiro e mercado de capitais — escritos para quem quer entender, não apenas seguir.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-zinc-500">Nenhum artigo publicado ainda.</p>
      ) : (
        <div>
          {posts.map(post => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
