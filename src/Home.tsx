import { Link } from 'react-router-dom'
import { docs } from './docs'

const comPO = [
  ['30/06', 'Veltra Motors exige rastreabilidade por peça dos fornecedores'],
  ['08/07', 'MetalPrime leva a exigência à reunião mensal'],
  ['10/07', 'Solicitação de mudança SM-01 registrada (2 dias úteis)'],
  ['17/07', 'Análise de impacto pronta: ~2.150 h, 4 alternativas'],
  ['31/07', 'MetalPrime aprova a alternativa de aditivo completo'],
  ['05/08', 'Justificativa técnica submetida à Fundepes'],
  ['02/09', 'Termo aditivo nº 01 assinado: +R$ 180 mil, +4 meses'],
]
const semPO = [
  ['30/06', 'A mesma exigência chega à MetalPrime'],
  ['10/07', 'Começa uma troca de e-mails sobre "se isso já estava incluso"'],
  ['17/08', 'Sem como provar o contrário, o coordenador aceita encaixar a demanda'],
  ['28/08', 'Demonstração do dashboard sai incompleta; parcela atrasa'],
  ['nov/26', 'Horas extras acima de 10%; uma bolsista deixa o projeto'],
  ['jan/27', 'Pedido tardio de prorrogação só de prazo, sem recurso novo'],
]
const prova = [
  ['Vínculo de dados ao número de série da peça', 'FE-01', 'Rastreabilidade individual de peças'],
  ['Envio ao MES da montadora (VeltraTrace)', 'FE-02', 'Integração com MES/ERP de terceiros'],
  ['CLP da estação de inspeção só fala Modbus TCP', 'FE-03', 'Protocolos além de OPC UA'],
  ['Leitura do DataMatrix gravado na peça', 'FE-04', 'Leitura de códigos e identificação de peças'],
]

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">Estudo de caso · P&D Lei de Informática · Fundepes</p>
          <h1>O aditivo de <em>R$ 180 mil</em> que dependia de uma frase no plano de trabalho.</h1>
          <p className="lede">
            Um projeto de monitoramento industrial recebe, no quinto mês, uma exigência nova do cliente final.
            Com uma pessoa de produto desde o início, a mudança vira um termo aditivo em 56 dias.
            Sem ela, vira trabalho não remunerado e atraso.
          </p>
          <div className="stats">
            <div><b>+R$ 180 mil</b><span>captados no aditivo</span></div>
            <div><b>+4 meses</b><span>de vigência</span></div>
            <div><b>~2.150 h</b><span>que seriam absorvidas de graça</span></div>
            <div><b>56 dias</b><span>da reunião à assinatura</span></div>
          </div>
        </div>
      </section>

      <section id="caso" className="wrap block">
        <h2><span className="num">01</span>O caso</h2>
        <div className="cols3">
          <div className="card"><h3>As partes</h3><p><b>LASIN</b> executa a pesquisa. <b>MetalPrime</b>, fabricante de gateways industriais habilitada na Lei de Informática, financia. A <b>Fundepes</b> faz a gestão do convênio.</p></div>
          <div className="card"><h3>O projeto</h3><p>SENTINELA: OEE e manutenção preditiva de células robotizadas de solda, embarcados no gateway MP-Edge. 12 meses, R$ 600 mil, 8 pessoas.</p></div>
          <div className="card"><h3>A virada</h3><p>A montadora Veltra Motors passa a exigir rastreabilidade de cada peça soldada, enviada ao seu MES em até 5 minutos, para auditoria IATF 16949.</p></div>
        </div>
      </section>

      <section id="cenarios" className="block band">
        <div className="wrap">
          <h2><span className="num">02</span>A mesma exigência, dois desfechos</h2>
          <div className="scenarios">
            <div className="scen bad">
              <h3>Sem pessoa de produto</h3>
              <ol className="tl">{semPO.map(([d, t]) => <li key={d + t}><time>{d}</time><p>{t}</p></li>)}</ol>
              <p className="result">Resultado: R$ 0 a mais, META-3 com ~4 meses de atraso e risco de glosa.</p>
            </div>
            <div className="scen good">
              <h3>Com pessoa de produto</h3>
              <ol className="tl">{comPO.map(([d, t]) => <li key={d + t}><time>{d}</time><p>{t}</p></li>)}</ol>
              <p className="result">Resultado: nova meta financiada, cronograma replanejado e equipe preservada.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="prova" className="wrap block">
        <h2><span className="num">03</span>A prova que sustentou o aditivo</h2>
        <p className="intro">Cada elemento da exigência nova corresponde a uma exclusão expressa da seção 7 do PTA, assinada antes do início do projeto. É isso que transforma "achamos que não estava incluso" em "está escrito que não estava".</p>
        <div className="tablewrap">
          <table className="proof">
            <thead><tr><th>O que a Veltra passou a exigir</th><th>Cláusula do PTA v1.0</th><th>Texto da exclusão</th></tr></thead>
            <tbody>{prova.map(([a, b, c]) => <tr key={b}><td>{a}</td><td><code>{b}</code></td><td>{c}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="note">Na matriz de rastreabilidade, nenhum dos 42 requisitos da linha de base cobre esses itens.</p>
      </section>

      <section id="documentos" className="block band">
        <div className="wrap">
          <h2><span className="num">04</span>Os documentos</h2>
          <p className="intro">O conjunto completo que uma pessoa de produto produz ao longo do projeto. Cada um decidiu um momento da história.</p>
          <div className="docgrid">
            {docs.map(d => (
              <Link key={d.slug} to={`/documentos/${d.slug}`} className="doccard">
                <span className="dn">{d.num}</span>
                <span className="phase">{d.phase}</span>
                <h3>{d.title}</h3>
                <p>{d.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="proposta" className="wrap block">
        <h2><span className="num">05</span>O que propomos ao laboratório</h2>
        <div className="cols3">
          <div className="card step"><span>Fase 1</span><h3>Pré-proposta</h3><p>PO participa da escrita do PTA: objetivos, metas verificáveis e, principalmente, uma seção de fora de escopo.</p></div>
          <div className="card step"><span>Fase 2</span><h3>Linha de base</h3><p>Requisitos com critérios de aceite aprovados em ata e matriz de rastreabilidade meta → requisito → entrega.</p></div>
          <div className="card step"><span>Fase 3</span><h3>Gestão de mudanças</h3><p>Toda demanda nova vira solicitação de mudança, com análise de impacto e, quando cabe, termo aditivo.</p></div>
        </div>
        <div className="cost">
          <div><b>R$ 78 mil</b><span>custo do PO em 12 meses, já pago pelo orçamento do convênio</span></div>
          <div className="vs">×</div>
          <div><b>R$ 180 mil</b><span>captados só neste aditivo, cerca de 2,3 vezes o custo</span></div>
        </div>
      </section>
    </main>
  )
}
