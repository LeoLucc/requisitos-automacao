const raw = import.meta.glob('../docs/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

export type Doc = { slug: string; num: string; title: string; phase: string; role: string; body: string }

const meta: Record<string, { title: string; phase: string; role: string }> = {
  '01': { title: 'Visão do produto e stakeholders', phase: 'Concepção', role: 'Define quem decide e coloca a Veltra no radar como fonte potencial de mudança desde o início.' },
  '02': { title: 'Plano de Trabalho (PTA)', phase: 'Concepção', role: 'A seção "Fora de escopo" (FE-01 a FE-05) é o que torna o aditivo defensável.' },
  '03': { title: 'Especificação de requisitos', phase: 'Requisitos', role: 'Linha de base aprovada em ata: 28 RF, 14 RNF e 10 regras de negócio com critérios de aceite.' },
  '04': { title: 'Matriz de rastreabilidade', phase: 'Requisitos', role: 'Prova que nenhum requisito contratado cobre rastreabilidade por peça.' },
  '05': { title: 'Backlog, roadmap e riscos', phase: 'Execução', role: 'Mostra a capacidade real da equipe e o risco RSK-02 já mapeado.' },
  '06': { title: 'Solicitação de mudança SM-01', phase: 'Mudança', role: 'Formaliza a demanda em 2 dias úteis, com origem e itens afetados.' },
  '07': { title: 'Análise de impacto', phase: 'Mudança', role: '~2.150 h, alternativas comparadas e o custo de absorver sem aditivo.' },
  '08': { title: 'Justificativa do termo aditivo', phase: 'Mudança', role: 'O documento submetido à Fundepes: +R$ 180 mil e +4 meses.' },
  '09': { title: 'Comparativo sem PO × com PO', phase: 'Fechamento', role: 'Os dois desfechos lado a lado e um plano de adoção para o laboratório.' },
}

export const docs: Doc[] = Object.entries(raw)
  .map(([path, body]) => {
    const file = path.split('/').pop()!.replace('.md', '')
    const num = file.slice(0, 2)
    return { slug: file, num, ...meta[num], body }
  })
  .sort((a, b) => a.num.localeCompare(b.num))
