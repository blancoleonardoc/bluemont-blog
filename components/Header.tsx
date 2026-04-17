'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid #142035',
      background: 'rgba(5, 13, 26, 0.85)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    }}>
      <nav style={{
        maxWidth: '80vw',
        margin: '0 auto',
        padding: '1.1rem clamp(1.5rem, 4vw, 3rem)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Link href="/" style={{
          fontFamily: "'Rockwell', 'Rockwell Nova', serif",
          fontWeight: 700,
          fontSize: '1.1rem',
          color: '#e8e8e8',
          letterSpacing: '-0.02em',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          bluemont<span style={{ color: '#00d4e8' }}> blog</span>
        </Link>

        <div style={{ display: 'flex', gap: '1.8rem', alignItems: 'center' }}>
          <Link href="/" style={{
            fontSize: '0.85rem',
            color: '#7a90a8',
            letterSpacing: '0.02em',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#00d4e8')}
          onMouseLeave={e => (e.currentTarget.style.color = '#7a90a8')}
          >
            artigos
          </Link>
          <Link
            href="https://bluemont.com.br"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.85rem',
              color: '#7a90a8',
              letterSpacing: '0.02em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#00d4e8')}
            onMouseLeave={e => (e.currentTarget.style.color = '#7a90a8')}
          >
            bluemont.com.br →
          </Link>
        </div>
      </nav>
    </header>
  )
}
