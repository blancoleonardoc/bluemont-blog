'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #142035',
      padding: '2rem clamp(1.5rem, 4vw, 3rem)',
      textAlign: 'center',
      fontSize: '0.78rem',
      color: '#7a90a8',
      letterSpacing: '0.04em',
      maxWidth: '80vw',
      margin: '0 auto',
      width: '100%',
    }}>
      <p>
        © {new Date().getFullYear()} bluemont &mdash;{' '}
        <Link
          href="https://bluemont.com.br"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#00d4e8')}
          onMouseLeave={e => (e.currentTarget.style.color = '#7a90a8')}
        >
          bluemont.com.br
        </Link>
        {' '}&mdash;{' '}
        <Link
          href="https://bluemont.com.br/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#00d4e8')}
          onMouseLeave={e => (e.currentTarget.style.color = '#7a90a8')}
        >
          privacidade
        </Link>
      </p>
    </footer>
  )
}
