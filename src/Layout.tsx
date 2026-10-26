import { Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function Layout() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return (
    <>
      <header className="topbar">
        <Link to="/" className="brand"><span className="brand-mark" />SENTINELA</Link>
        <nav>
          <Link to="/#caso">O caso</Link>
          <Link to="/#cenarios">Cenários</Link>
          <Link to="/#prova">A prova</Link>
          <Link to="/#documentos">Documentos</Link>
          <Link to="/#proposta">Proposta</Link>
        </nav>
      </header>
      <Outlet />
      <footer className="footer">
        <span>Projeto SENTINELA · Convênio Fundepes nº 042/2026 · LASIN</span>
        <span>Coordenação: Prof. Dr. Leandro Dias · Produto: Leonardo Lucca</span>
      </footer>
    </>
  )
}
