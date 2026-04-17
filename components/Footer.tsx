import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-20">
      <div className="mx-auto max-w-3xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} bluemont. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <Link href="https://bluemont.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
            bluemont.com.br
          </Link>
          <Link href="https://bluemont.com.br/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
            privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}
