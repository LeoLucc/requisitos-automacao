# 01 — Visão do Produto e Mapa de Stakeholders — SENTINELA

> Convênio Fundepes nº 042/2026 · PTA v1.0 (aprovado em 20/02/2026) · Vigência original 01/03/2026 a 28/02/2027 · R$ 600.000,00
> Versão do documento: v1.0 — 25/02/2026 (linha de base). Revisão v1.1 — 10/09/2026 (atualização pós-termo aditivo nº 01, ver §7).

---

## 1. Declaração de visão do produto

**Para** fabricantes e integradores de células robotizadas de solda, a começar pela MetalPrime Automação Industrial e seus clientes Tier 1 do setor automotivo,
**que** hoje não têm visibilidade confiável e em tempo real do desempenho das células (OEE) nem conseguem antecipar falhas de tochas, alimentadores de arame e servos,
**o** SENTINELA **é** uma plataforma de monitoramento de OEE e manutenção preditiva embarcada no gateway industrial MP-Edge,
**que** coleta dados de robôs e CLPs via OPC UA na borda, calcula OEE por célula e turno e detecta anomalias antes que se tornem paradas não planejadas.
**Diferentemente** de soluções SCADA/MES genéricas instaladas em servidores na nuvem ou na TI da planta, que exigem integração cara e não tratam a física do processo de solda,
**nosso produto** roda no próprio gateway habilitado à Lei de Informática, agregando valor tecnológico nacional ao MP-Edge e transformando-o de "concentrador de dados" em equipamento inteligente.

**Fronteira de escopo (PTA v1.0):** o SENTINELA monitora **células e equipamentos**, não **peças**. Rastreabilidade por número de série, integração MES/ERP de terceiros, protocolos além de OPC UA, leitura de DataMatrix/QR e operação 24x7 com SLA estão explicitamente fora de escopo (FE-01 a FE-05).

---

## 2. Problema e oportunidade

### 2.1 Situação atual (linha de base na CEL-04, Autopeças Ferraz, Betim/MG)

Levantamento de diagnóstico feito pelo PO com a engenharia de manutenção da Ferraz e a engenharia de produto da MetalPrime (registros manuais de turno, set/2025 a jan/2026):

| Indicador | Valor medido | Referência de mercado (solda robotizada automotiva) |
|---|---|---|
| OEE médio da CEL-04 | **61%** (Disp. 78% × Perf. 83% × Qual. 94%) | 75–85% (classe mundial) |
| Paradas não planejadas | **14,5 h/mês** em média (~29 eventos/mês) | < 6 h/mês |
| Participação das paradas por componente | Tocha/bico de contato 41% · Alimentador de arame 27% · Servos/eixos 18% · Outros 14% | — |
| Tempo médio para reparo (MTTR) | 30 min | — |
| Forma de apuração do OEE | Planilha preenchida pelo líder de turno, com 2 a 5 dias de atraso | Automática, por turno |
| Custo estimado de parada não planejada | ~R$ 4.200/h (linha cliente parada + horas extras + frete expresso) | — |

**Dores principais**
1. **OEE não confiável:** apurado manualmente, subestima microparadas e não é comparável entre turnos.
2. **Manutenção reativa:** a troca de bicos e liners é feita por calendário ou após falha; não há sinal antecipado.
3. **Dados presos na célula:** robôs e CLPs têm os dados, mas não há camada de borda para coletá-los e tratá-los.
4. **MP-Edge subutilizado:** o gateway da MetalPrime é vendido como hardware de conectividade, com margem pressionada por concorrentes importados.

### 2.2 Oportunidade

- **Ferraz:** levar a CEL-04 de 61% para ≥ 70% de OEE e reduzir em ≥ 30% as horas de parada não planejada representa ~R$ 22 mil/mês evitados (4,35 h × R$ 4.200 + ganho de capacidade).
- **MetalPrime:** embarcar analytics no MP-Edge diferencia o produto, viabiliza oferta de software/serviço sobre a base instalada e cumpre a obrigação de investimento em P&D da Lei de Informática com resultado aproveitável comercialmente.
- **LASIN:** linha de pesquisa em detecção de anomalias em séries temporais industriais e arquitetura de borda, com produção científica e formação de bolsistas.

### 2.3 Incerteza técnica (natureza P&D)

| Frente | Incerteza |
|---|---|
| Latência na borda | Processar amostragem de corrente/tensão de solda no MP-Edge sem perder ciclos nem saturar CPU/memória |
| Volume de dados | Estratégia de agregação/compressão local vs. envio, com conectividade intermitente na planta |
| Modelos preditivos | Poucos eventos de falha rotulados (PREM-03); risco de falso positivo alto inviabilizar a adoção pela manutenção |

---

## 3. Mapa de stakeholders

Escala: Interesse e Influência em Alto (A), Médio (M), Baixo (B).

| ID | Stakeholder | Papel no projeto | Interesse | Influência | Expectativa principal | Forma de engajamento |
|---|---|---|---|---|---|---|
| STK-01 | LASIN (direção do laboratório) | Instituição executora | M | A | Projeto entregue sem glosa, gerando publicações, reputação e novos convênios | Relatório mensal de status; participação no Comitê de Acompanhamento trimestral |
| STK-02 | Coordenador do projeto (docente LASIN) | Responsável técnico-científico e signatário perante Fundepes e MetalPrime | A | A | Cumprir metas do PTA, proteger a equipe de sobrecarga, preservar o enquadramento P&D | Reunião semanal com o PO; aprova linha de base, SMs e relatórios |
| STK-03 | Product Owner / Analista de Requisitos | Dono do backlog, da linha de base de requisitos e da rastreabilidade PTA → requisito → entrega | A | A | Escopo claro, decisões registradas, mudanças tratadas por processo formal | Conduz ritos (seção 5); mantém artefatos 01 a 08 |
| STK-04 | Equipe técnica (eng. sênior backend/edge, full stack, cientista de dados, eng. automação, 2 bolsistas) | Execução | A | M | Requisitos estáveis, carga sustentável, acesso à célula e a dados | Sprints quinzenais (planning, daily, review, retro); refinamento semanal |
| STK-05 | Fundepes | Gestão administrativo-financeira do convênio | M | A | Execução aderente ao plano de trabalho e às rubricas; prestação de contas sem pendência; aditivos bem instruídos | Relatório financeiro mensal; comunicação formal via coordenador; dossiê de aditivo quando houver |
| STK-06 | MetalPrime — Diretoria de P&D | Patrocinador e financiador | A | A | Tecnologia transferida e incorporável ao MP-Edge; competitividade no automotivo; retorno do investimento obrigatório | Comitê de Acompanhamento trimestral; reunião mensal de acompanhamento; aprova SMs com impacto em valor/prazo |
| STK-07 | MetalPrime — Engenharia de Produto (linha MP-Edge) | Cliente técnico e receptor da transferência de tecnologia | A | M | Software compatível com hardware/firmware do MP-Edge; documentação para industrializar | Sprint review quinzenal; validação de requisitos técnicos (RNF); acesso a backlog |
| STK-08 | MetalPrime — Área Fiscal / Lei de Informática | Responsável pela comprovação do investimento em P&D ao MCTI | M | A | Atividades enquadráveis como P&D, evidências e dispêndios rastreáveis para o relatório anual (RDA) | Reunião trimestral; recebe matriz de rastreabilidade e relatório técnico de metas |
| STK-09 | Autopeças Ferraz S.A. (manutenção e produção da CEL-04) | Planta piloto, usuário final do dashboard e dos alertas | A | M | Ganho de OEE sem atrapalhar a produção; alertas úteis, com poucos falsos positivos | Visita técnica mensal; janela de testes acordada; entrevistas com líderes de turno e manutenção |
| STK-10 | Veltra Motors | Stakeholder indireto: cliente final da MetalPrime/Ferraz | B (no início) → A (após 30/06/2026) | M (indireta, via requisitos de fornecimento) | Fornecedores com qualidade e, a partir de 2027, rastreabilidade por peça (IATF 16949) | Sem contato direto do LASIN; requisitos chegam via MetalPrime (STK-06) e são formalizados em SM |

**Observação de governança:** STK-10 é monitorado pelo PO como **fonte potencial de mudança** desde a linha de base. O registro de STK-10 com expectativa sobre qualidade de fornecimento é o que permitiu, em julho/2026, tratar a exigência de rastreabilidade como fato novo externo (SM-01), e não como "detalhe esquecido" do escopo.

---

## 4. Matriz poder × interesse

```
                        INTERESSE
                 Baixo/Médio              Alto
          +-------------------------+-------------------------------+
   Alto   |  MANTER SATISFEITO      |  GERENCIAR DE PERTO           |
          |  STK-01 LASIN (direção) |  STK-02 Coordenador           |
 P        |  STK-05 Fundepes        |  STK-03 PO                    |
 O        |  STK-08 MetalPrime      |  STK-06 MetalPrime Dir. P&D   |
 D        |         Fiscal/LI       |                               |
 E        +-------------------------+-------------------------------+
 R  Médio/|  MONITORAR              |  MANTER INFORMADO             |
   Baixo  |  STK-10 Veltra Motors   |  STK-04 Equipe técnica        |
          |  (até 30/06/2026)       |  STK-07 MetalPrime Eng. Prod. |
          |                         |  STK-09 Autopeças Ferraz      |
          +-------------------------+-------------------------------+
```

**Movimento registrado:** em 08/07/2026, STK-10 passa de "Monitorar" para influência efetiva relevante sobre o escopo (via STK-06), disparando SM-01 e o reposicionamento de STK-09 (a CEL-04 passa a abrigar também a estação de inspeção Modbus TCP).

---

## 5. Plano de comunicação

| Rito | Frequência | Participantes | Artefato produzido/atualizado | Responsável |
|---|---|---|---|---|
| Daily | Diária, 15 min | STK-04, STK-03 | Quadro de tarefas | Equipe (facilitação PO) |
| Refinamento de backlog | Semanal | STK-03, STK-04, STK-07 (opcional) | Backlog priorizado, US-xxx com CA | PO |
| Alinhamento coordenação | Semanal, 30 min | STK-02, STK-03 | Registro de decisões; status de riscos RSK-xx | PO |
| Sprint planning / review / retro | Quinzenal | STK-03, STK-04; review com STK-07 e, quando aplicável, STK-09 | Incremento demonstrado; ata de review; aceite de ENT-x.y | PO |
| Reunião mensal de acompanhamento | Mensal (2ª semana) | STK-02, STK-03, STK-06, STK-07 | Relatório de status (metas, entregáveis, riscos, SMs abertas) | Coordenador (conteúdo pelo PO) |
| Visita técnica à planta piloto | Mensal | STK-03, eng. automação, STK-09 | Relatório de visita; janela de testes; feedback de usuários | PO |
| Relatório financeiro | Mensal | STK-02, STK-05 | Execução por rubrica vs. planejado | Coordenador / Fundepes |
| Comitê de Acompanhamento | Trimestral | STK-01, STK-02, STK-03, STK-06, STK-08 | Relatório técnico de metas + matriz de rastreabilidade (evidências P&D) | Coordenador |
| Comitê de Mudanças (CCB) | Sob demanda (até 5 dias úteis após registro de SM) | STK-02, STK-03, STK-06; STK-05 se houver impacto em valor/prazo | SM-xx, análise de impacto, parecer; minuta de aditivo se aplicável | PO |
| Comunicação formal com Fundepes | Por evento (aditivos, remanejamentos) | STK-02, STK-05 | Ofício + dossiê (justificativa, novo plano de trabalho, orçamento) | Coordenador |

**Regras de comunicação**
- Toda demanda de escopo vinda da MetalPrime, da Ferraz ou da Veltra, por qualquer canal (e-mail, reunião, mensagem), é registrada pelo PO como SM-xx em até 2 dias úteis; nada entra no backlog sem passar pelo CCB.
- Decisões só são válidas se registradas em ata ou no registro de decisões.
- Repositório único de artefatos: pasta `caso/` versionada, com acesso de leitura para STK-06, STK-07 e STK-08.

---

## 6. Critérios de sucesso mensuráveis

| ID | Critério | Meta | Medição / evidência | Prazo (vigência original) |
|---|---|---|---|---|
| CS-01 | Coleta de dados OPC UA no MP-Edge | 100% dos robôs/CLPs OPC UA da CEL-04 conectados; perda de amostras < 0,5% | Logs do gateway, 7 dias contínuos | Mês 3 (META-1) |
| CS-02 | OEE automático por célula e turno | Desvio absoluto médio ≤ 5 p.p. vs. apuração de referência auditada; atualização ≤ 1 min | Comparativo de 4 semanas com apuração manual assistida | Mês 7 (META-2) |
| CS-03 | Antecipação de falhas | ≥ 70% das falhas de tocha/alimentador/servo detectadas com ≥ 4 h de antecedência; precisão de alertas ≥ 80% | Backtest em dados históricos + piloto | Mês 11 (META-3) |
| CS-04 | Impacto na CEL-04 | OEE ≥ 70% e redução ≥ 30% das horas de parada não planejada vs. linha de base (14,5 h/mês) | Média de 8 semanas de operação piloto | Mês 12 (META-4) |
| CS-05 | Transferência de tecnologia | Pacote de código, documentação e treinamento (≥ 16 h) aceito formalmente por STK-07 | Termo de aceite de transferência | Mês 12 (META-4) |
| CS-06 | Execução do convênio | 100% das metas com entregáveis aceitos; execução financeira ≥ 95%; zero glosa | Relatório final Fundepes | Fim da vigência |
| CS-07 | Governança de escopo | 100% das mudanças registradas como SM-xx com análise de impacto; 0 itens fora do PTA executados sem cobertura contratual | Registro de SMs × backlog executado | Contínuo |
| CS-08 | Enquadramento Lei de Informática | 100% dos requisitos e entregáveis rastreados a OBJ/META com evidência de incerteza técnica | Matriz de rastreabilidade (04) aceita por STK-08 | Trimestral |
| CS-09 | Sustentabilidade da equipe | Horas extras ≤ 5% da carga planejada; 0 desligamentos por sobrecarga | Apontamento de horas | Contínuo |

---

## 7. Revisão v1.1 (pós-termo aditivo nº 01, assinado em 02/09/2026)

- Vigência passa a 01/03/2026–30/06/2027 (16 meses); valor total R$ 780.000,00.
- Incluída META-5 (meses 9–16); META-4 desloca-se para meses 14–16. Prazos de CS-04 e CS-05 passam ao mês 16.
- Novo critério: **CS-10** — Peças da CEL-04 com registro de rastreabilidade (parâmetros de solda, operador, célula, data/hora, resultado de inspeção vinculados ao DataMatrix) entregues ao VeltraTrace em ≤ 5 min em ≥ 99,5% dos casos, durante a validação piloto (meses 14–16).
- STK-10 reclassificado para interesse Alto; engajamento continua indireto, via STK-06.
