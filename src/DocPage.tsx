import { Link, useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { docs } from './docs'

export default function DocPage() {
  const { slug } = useParams()
  const i = docs.findIndex(d => d.slug === slug)
  const doc = docs[i]
  if (!doc) return <main className="wrap"><p>Documento não encontrado. <Link to="/#documentos">Voltar</Link></p></main>
  const prev = docs[i - 1], next = docs[i + 1]
  return (
    <main className="docpage">
      <aside className="docnav">
        <Link to="/#documentos" className="back">← Todos os documentos</Link>
        <ol>
          {docs.map(d => (
            <li key={d.slug} className={d.slug === slug ? 'on' : ''}>
              <Link to={`/documentos/${d.slug}`}><span>{d.num}</span>{d.title}</Link>
            </li>
          ))}
        </ol>
      </aside>
      <article>
        <div className="doc-kicker">{doc.phase} · documento {doc.num}</div>
        <p className="doc-role">{doc.role}</p>
        <div className="md">
          <Markdown remarkPlugins={[remarkGfm]} components={{ table: p => <div className="tablewrap"><table {...p} /></div> }}>
            {doc.body}
          </Markdown>
        </div>
        <div className="pager">
          {prev ? <Link to={`/documentos/${prev.slug}`}>← {prev.num} {prev.title}</Link> : <span />}
          {next ? <Link to={`/documentos/${next.slug}`}>{next.num} {next.title} →</Link> : <span />}
        </div>
      </article>
    </main>
  )
}
