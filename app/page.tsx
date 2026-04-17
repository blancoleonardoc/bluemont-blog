import { getAllPosts } from '@/lib/posts'
import ArticleCard from '@/components/ArticleCard'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div style={{
      maxWidth: '80vw',
      margin: '0 auto',
      padding: '0 clamp(1.5rem, 4vw, 3rem)',
      flex: 1,
    }}>
      {/* Hero */}
      <section className="fade-in" style={{
        padding: 'clamp(4rem, 10vw, 7rem) 0 clamp(2.5rem, 6vw, 4rem)',
        borderBottom: '1px solid #142035',
      }}>
        <p style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#00d4e8',
          marginBottom: '1.5rem',
        }}>
          educação financeira
        </p>
        <h1 style={{
          fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          marginBottom: '1.2rem',
        }}>
          Investir bem<br />começa com entender.
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
          color: '#7a90a8',
          fontStyle: 'italic',
          lineHeight: 1.7,
          maxWidth: '560px',
        }}>
          Artigos sobre investimentos, planejamento financeiro e mercado de capitais — escritos para quem quer entender, não apenas seguir.
        </p>
      </section>

      {/* Articles */}
      <section style={{ paddingBottom: '4rem' }}>
        {posts.length === 0 ? (
          <p style={{ color: '#3a5068', padding: '3rem 0', fontSize: '0.9rem' }}>
            Nenhum artigo publicado ainda.
          </p>
        ) : (
          posts.map(post => (
            <ArticleCard key={post.slug} post={post} />
          ))
        )}
      </section>
    </div>
  )
}
