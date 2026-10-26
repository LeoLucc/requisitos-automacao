# 05 — Backlog, Roadmap, Indicadores, Premissas, Riscos e Decisões — SENTINELA

> Convênio Fundepes nº 042/2026 · PTA v1.0 (aprovado em 20/02/2026) · Vigência original 01/03/2026 a 28/02/2027 · R$ 600.000,00
> **Retrato em 08/07/2026 (Mês 5 = julho/2026), antes da apresentação da exigência da Veltra Motors na reunião mensal de acompanhamento.** Linha de base: PTA v1.0 + Requisitos v1.0 (24/04/2026).
> Responsável: Leonardo Lucca (PO) · Validação: Prof. Dr. Leandro Dias (Coordenador).

**Calendário de sprints (quinzenais, segunda a sexta da 2ª semana).** S1 começou em 02/03/2026. Em 08/07/2026 o projeto está na **Sprint 10 (06/07–17/07)**. A vigência original comporta 26 sprints (S26 termina em 26/02/2027).

| Sprint | Período | Sprint | Período | Sprint | Período |
|---|---|---|---|---|---|
| S1 | 02/03–13/03 | S10 | 06/07–17/07 | S19 | 09/11–20/11 |
| S2 | 16/03–27/03 | S11 | 20/07–31/07 | S20 | 23/11–04/12 |
| S3 | 30/03–10/04 | S12 | 03/08–14/08 | S21 | 07/12–18/12 |
| S4 | 13/04–24/04 | S13 | 17/08–28/08 | S22 | 21/12–01/01/2027 (capacidade reduzida, recesso) |
| S5 | 27/04–08/05 | S14 | 31/08–11/09 | S23 | 04/01–15/01 |
| S6 | 11/05–22/05 | S15 | 14/09–25/09 | S24 | 18/01–29/01 |
| S7 | 25/05–05/06 | S16 | 28/09–09/10 | S25 | 01/02–12/02 |
| S8 | 08/06–19/06 | S17 | 12/10–23/10 | S26 | 15/02–26/02 |
| S9 | 22/06–03/07 | S18 | 26/10–06/11 | | |

---

## 1. Épicos

| Épico | Título | Meta | Objetivo | ENT cobertos | Status em 08/07/2026 |
|---|---|---|---|---|---|
| EP-01 | Aquisição de dados OPC UA na borda (MP-Edge) | META-1 | OBJ-01 | ENT-1.1, ENT-1.2, ENT-1.3, ENT-1.4 | **Concluído** — META-1 aceita em 29/05/2026 |
| EP-02 | Plataforma de monitoramento de OEE | META-2 | OBJ-02 | ENT-2.1, ENT-2.2, ENT-2.3, ENT-2.4 | Em andamento (ENT-2.1 aceito em 19/06/2026) |
| EP-03 | Detecção de anomalias e manutenção preditiva embarcada | META-3 | OBJ-03 | ENT-3.1, ENT-3.2, ENT-3.3, ENT-3.4 | Iniciando (preparação de dados do ENT-3.1; histórias a partir do S11) |
| EP-04 | Validação piloto na CEL-04 e transferência de tecnologia | META-4 | OBJ-04 | ENT-4.1, ENT-4.2, ENT-4.3, ENT-4.4 | A fazer (início no S18) |

Não existe épico de rastreabilidade por peça, integração MES ou protocolo Modbus: esses temas estão em FE-01 a FE-04 e não têm item no backlog.

---

## 2. Backlog de histórias

Pontos em escala de Fibonacci. "Sprint" é a sprint de conclusão (realizada ou planejada). Uma história só conta pontos quando atende à Definição de Pronto (critérios de aceite CA-RFxxx-n do documento 03 atendidos e demonstrados em review).

### EP-01 — Aquisição de dados OPC UA (META-1)

| ID | História | Vínculo | Pts | Sprint | Status |
|---|---|---|---|---|---|
| US-001 | Como **coordenador**, quero uma linha de base de visão, stakeholders e requisitos aprovada, para que o escopo do convênio seja verificável e rastreável | ENT-1.1; RF-001..RF-028, RNF-001..RNF-014 | 13 | S4 | Concluída (aprovada em 24/04/2026) |
| US-002 | Como **engenheira de produto da MetalPrime**, quero a arquitetura de borda documentada (coleta, buffer, processamento, publicação), para avaliar a compatibilidade com o MP-Edge | ENT-1.2; RNF-003, RNF-004, RNF-006 | 13 | S4 | Concluída |
| US-003 | Como **administrador da plataforma**, quero que o coletor se conecte a vários servidores OPC UA com segurança Sign/SignAndEncrypt, para ler robôs e CLPs da célula com segurança | RF-001; RNF-006 | 8 | S1 | Concluída |
| US-004 | Como **administrador da plataforma**, quero navegar no espaço de endereços OPC UA e selecionar tags por arquivo versionado, para configurar a coleta sem reprogramar o gateway | RF-002 | 8 | S2 | Concluída |
| US-005 | Como **cientista de dados**, quero coleta por assinatura com amostragem configurável e carimbo de tempo/qualidade em cada amostra, para confiar na série temporal coletada | RF-003, RF-004; RNF-002 | 13 | S3 | Concluída |
| US-006 | Como **técnico de manutenção**, quero que o gateway guarde os dados localmente e os reenvie quando a rede voltar, para não perder histórico em quedas de conectividade | RF-005; RNF-004 | 13 | S5 | Concluída |
| US-007 | Como **engenheira de produto da MetalPrime**, quero agregação dos sinais de solda na borda (mín., máx., média, desvio, RMS), para reduzir o volume enviado sem saturar o MP-Edge | RF-006; RNF-003 | 13 | S5 | Concluída |
| US-008 | Como **administrador da plataforma**, quero publicação MQTT/TLS ao backend e métricas de saúde do gateway, para acompanhar dados e estado do MP-Edge em tempo quase real | RF-007, RF-008; RNF-001, RNF-006 | 13 | S6 | Concluída |
| US-009 | Como **coordenador**, quero um relatório de experimentos de latência, volume e consumo de recursos com dados brutos, para evidenciar a incerteza IT-1 como P&D | ENT-1.4; RNF-001, RNF-002, RNF-003 | 13 | S6 | Concluída |

### EP-02 — Plataforma de OEE (META-2)

| ID | História | Vínculo | Pts | Sprint | Status |
|---|---|---|---|---|---|
| US-010 | Como **gestor de produção**, quero o modelo de OEE especificado (estados, fórmulas, turnos), para que o cálculo seja aceito pela MetalPrime e pela Ferraz | ENT-2.1; RN-01..RN-10 | 8 | S7 | Concluída (aceite 19/06/2026) |
| US-011 | Como **administrador da plataforma**, quero cadastrar células, equipamentos, turnos, paradas planejadas e ciclo ideal, para parametrizar o cálculo de OEE | RF-010; RN-03, RN-06 | 8 | S7 | Concluída |
| US-012 | Como **líder de turno**, quero que o estado de cada equipamento seja inferido automaticamente, para não depender de apontamento manual | RF-009; RN-02, RN-08 | 13 | S8 | Concluída |
| US-013 | Como **gestor de produção**, quero OEE (D × P × Q) por célula, turno e equipamento, para comparar turnos com base confiável | RF-011; RN-01, RN-04, RN-07 | 13 | S9 | Concluída |
| US-014 | Como **administrador da plataforma**, quero autenticação e perfis de acesso (RBAC), para que cada usuário veja e altere só o que lhe cabe | RF-019; RNF-008 | 8 | S9 | Concluída |
| US-015 | Como **líder de turno**, quero o OEE parcial do turno atualizado em até 1 min, para reagir a perdas durante o turno | RF-012; RNF-001 | 8 | S10 | Em andamento |
| US-016 | Como **líder de turno**, quero que as paradas sejam registradas automaticamente e que eu as classifique em poucos cliques, para explicar as perdas do turno | RF-013; RN-05; RNF-011 | 8 | S10 | Em andamento |
| US-017 | Como **engenheira de produto da MetalPrime**, quero uma API REST documentada (OpenAPI) de OEE, estados, paradas e alertas, para integrar o SENTINELA às ferramentas próprias do MP-Edge | RF-017 | 8 | S10 | Em andamento |
| US-018 | Como **líder de turno**, quero um dashboard web responsivo com OEE, componentes e estado atual dos equipamentos, para acompanhar a célula no chão de fábrica | RF-014; RNF-011 | 13 | S12 | A fazer |
| US-019 | Como **gestor de produção**, quero histórico, comparativo entre turnos e Pareto de motivos de parada, para priorizar ações de melhoria | RF-015 | 8 | S12 | A fazer |
| US-020 | Como **engenheiro de manutenção**, quero MTTR e MTBF por equipamento e componente, para medir o efeito da manutenção | RF-016 | 5 | S13 | A fazer |
| US-021 | Como **coordenador**, quero exportação CSV e um relatório comparando o OEE calculado com a apuração de referência, para comprovar desvio ≤ 5 p.p. | RF-018; RN-10; ENT-2.4 | 8 | S15 | A fazer |
| US-022 | Como **engenheira de produto da MetalPrime**, quero teste de carga com ≥ 10 gateways simulados e cobertura de testes ≥ 70%, para saber que o backend escala e é mantível | RNF-012, RNF-014; ENT-2.2 | 5 | S13 | A fazer |
| US-023 | Como **coordenador**, quero teste de intrusão independente com vulnerabilidades críticas/altas corrigidas, para liberar o piloto com segurança | RNF-007 | 5 | S16 | A fazer |

### EP-03 — Anomalias e manutenção preditiva (META-3)

| ID | História | Vínculo | Pts | Sprint | Status |
|---|---|---|---|---|---|
| US-024 | Como **cientista de dados**, quero extrair datasets versionados (com hash e dicionário) por período e equipamento, para treinar modelos de forma reprodutível | RF-020; RNF-009, RNF-010 | 8 | S11 | A fazer |
| US-025 | Como **cientista de dados**, quero a base histórica de falhas curada, rotulada e analisada, para conhecer o desbalanceamento antes de modelar | ENT-3.1; PREM-03 | 13 | S15 | A fazer |
| US-026 | Como **engenheiro de manutenção**, quero modelos de anomalia para tocha, alimentador e servo comparados em ≥ 3 técnicas, para escolher a abordagem com melhor precisão/recall | RF-021; ENT-3.2 | 21 | S19 | A fazer |
| US-027 | Como **engenheira de produto da MetalPrime**, quero os modelos rodando no MP-Edge dentro dos limites de recursos, com versionamento e reversão, para alertar mesmo sem backend | RF-022, RF-025; RNF-003, RNF-004 | 21 | S23 | A fazer |
| US-028 | Como **técnico de manutenção**, quero alertas preditivos com componente, severidade e antecedência, para planejar a troca antes da falha | RF-023; RN-09 | 13 | S23 | A fazer |
| US-029 | Como **técnico de manutenção**, quero reconhecer alertas e marcá-los como verdadeiro/falso positivo, para melhorar os modelos com retreino | RF-024 | 8 | S24 | A fazer |
| US-030 | Como **coordenador**, quero um relatório técnico-científico das incertezas IT-1 a IT-4, para comprovar a natureza P&D e gerar publicação | ENT-3.4 | 8 | S24 | A fazer |

### EP-04 — Piloto e transferência (META-4)

| ID | História | Vínculo | Pts | Sprint | Status |
|---|---|---|---|---|---|
| US-031 | Como **gestor de produção da Ferraz**, quero um plano de validação piloto com protocolo, critérios e janelas de teste, para autorizar a operação assistida sem afetar a produção | ENT-4.1; PREM-05 | 5 | S20 | A fazer |
| US-032 | Como **coordenador**, quero log contínuo de eventos de operação do piloto, para compor as evidências do relatório de validação | RF-026; RNF-005 | 5 | S21 | A fazer |
| US-033 | Como **engenheira de produto da MetalPrime**, quero pacote de instalação reprodutível e trilha de auditoria de configuração, para instalar e manter o SENTINELA sem o LASIN | RF-027, RF-028; RNF-013 | 13 | S25 | A fazer |
| US-034 | Como **gerente de P&D da MetalPrime**, quero o relatório de ≥ 4 semanas de operação assistida na CEL-04 e o relatório técnico final, para comprovar o resultado do investimento | ENT-4.2, ENT-4.4; CS-04 | 13 | S26 | A fazer |
| US-035 | Como **engenheira de produto da MetalPrime**, quero treinamento técnico de ≥ 16 h e documentação completa, para receber formalmente a tecnologia | ENT-4.3; CS-05 | 8 | S26 | A fazer |

### Resumo do backlog em 08/07/2026

| Situação | Histórias | Pontos |
|---|---|---|
| Concluídas (S1–S9) | 14 | 157 |
| Em andamento (S10) | 3 | 24 |
| A fazer (S11–S26) | 18 | 180 |
| **Total da linha de base** | **35** | **361** |

---

## 3. Roadmap por mês e sprint (vigência original)

| Mês | Período | Sprints | Meta(s) em execução | Marcos de ENT (previsto → realizado) | Desembolso |
|---|---|---|---|---|---|
| 1 | mar/2026 | S1–S2 | META-1 | Kick-off 02/03; gateways recebidos (PREM-02) | 1ª parcela R$ 180.000 em 01/03 ✔ |
| 2 | abr/2026 | S3–S4 | META-1 | **ENT-1.1** e **ENT-1.2**: previstos M2 → aprovados em 24/04 ✔ | — |
| 3 | mai/2026 | S5–S7 | META-1, início META-2 | **ENT-1.3** e **ENT-1.4**: previstos M3 → entregues 22/05, aceitos 29/05 ✔; **termo de aceite da META-1 em 29/05** ✔ | — |
| 4 | jun/2026 | S7–S9 | META-2 | **ENT-2.1**: previsto M4 → entregue 05/06, aceito 19/06 ✔ | 2ª parcela R$ 150.000 em 01/06 ✔ |
| **5** | **jul/2026** | **S10–S11** | **META-2** | ENT-2.2 em construção (API, paradas, tempo quase real) — **hoje: 08/07** | — |
| 6 | ago/2026 | S12–S13 | META-2 | **ENT-2.2** previsto 28/08 (review S13); demonstração do **ENT-2.3** antecipada para 28/08 (DEC-07) | — |
| 7 | set/2026 | S14–S15 | META-2, META-3 | **ENT-2.3** e **ENT-2.4** previstos 25/09; **ENT-3.1** previsto 25/09; aceite da META-2 | 3ª parcela R$ 150.000 em 01/09 (aceite ENT-2.2 e ENT-2.3) |
| 8 | out/2026 | S16–S17 | META-3 | Pentest concluído (RNF-007); experimentos ENT-3.2 | — |
| 9 | nov/2026 | S18–S19 | META-3, preparação META-4 | **ENT-3.2** previsto 20/11 | — |
| 10 | dez/2026 | S20–S21 | META-3, META-4 | **ENT-4.1** previsto 04/12; início da operação assistida | 4ª parcela R$ 120.000 em 01/12 (aceite ENT-3.1 e ENT-3.2) |
| 11 | jan/2027 | S22–S24 | META-3, META-4 | **ENT-3.3** e **ENT-3.4** previstos 29/01; aceite da META-3 | — |
| 12 | fev/2027 | S25–S26 | META-4 | **ENT-4.2**, **ENT-4.3**, **ENT-4.4** previstos 26/02; aceite da META-4 e encerramento | — |

---

## 4. Indicadores de acompanhamento (até 08/07/2026)

### 4.1 Velocidade por sprint

| Sprint | S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10 (em curso) |
|---|---|---|---|---|---|---|---|---|---|---|
| Pontos concluídos | 8 | 8 | 13 | 26 | 26 | 26 | 16 | 13 | 21 | 24 comprometidos |

- Média S1–S9: **17,4 pts/sprint**; média das 3 últimas (S7–S9): **16,7 pts/sprint**.
- Queda em S7–S8: feriado de Corpus Christi (04/06), visita técnica à Ferraz e revisão do ENT-2.1 com a MetalPrime.
- Horas extras acumuladas: 2,1% da carga planejada (CS-09 ≤ 5%).

### 4.2 Burnup

| Fim da sprint | S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 |
|---|---|---|---|---|---|---|---|---|---|
| Concluído acumulado (pts) | 8 | 16 | 29 | 55 | 81 | 107 | 123 | 136 | 157 |
| Escopo total (pts) | 340 | 340 | 340 | 361 | 361 | 361 | 361 | 361 | 361 |

- Escopo estabilizado em **361 pts** desde a linha de base de 24/04/2026; **nenhuma inclusão de escopo desde então**.
- Concluído: **43,5%** dos pontos com 9 de 26 sprints (34,6% do tempo).
- Projeção: restam 204 pts (24 em curso + 180) para 17 sprints (S10–S26). À velocidade média de 17,4, a capacidade é de ~296 pts, com folga de ~30% para a incerteza de P&D da META-3.

### 4.3 Entregáveis

| Indicador | Valor |
|---|---|
| ENT aceitos | **5 de 16 (31,3%)**: ENT-1.1, ENT-1.2, ENT-1.3, ENT-1.4, ENT-2.1 |
| ENT previstos até o mês 5 pelo PTA | 5 (todos aceitos no prazo) |
| Metas concluídas | 1 de 4 (META-1, termo de aceite 29/05/2026) |
| ENT em andamento | ENT-2.2, ENT-2.3, ENT-2.4 |

### 4.4 Execução financeira aproximada (posição em 30/06/2026, relatório financeiro mensal)

| Rubrica | Orçado (R$) | Planejado até jun/26 (R$) | Executado até 30/06/26 (R$) | % do orçado |
|---|---|---|---|---|
| Pessoal | 438.000,00 | 146.000,00 | 146.000,00 | 33,3% |
| Equipamentos e material permanente | 42.000,00 | 42.000,00 | 42.000,00 | 100,0% |
| Material de consumo | 12.000,00 | 4.000,00 | 3.200,00 | 26,7% |
| Serviços de terceiros (PJ) | 30.000,00 | 4.700,00 | 4.700,00 | 15,7% |
| Diárias e passagens | 18.000,00 | 6.000,00 | 6.000,00 | 33,3% |
| DOA Fundepes (10% das parcelas recebidas) | 60.000,00 | 33.000,00 | 33.000,00 | 55,0% |
| **Total** | **600.000,00** | **235.700,00** | **234.900,00** | **39,2%** |

- Recebido: R$ 330.000,00 (R$ 180.000 em 01/03 + R$ 150.000 em 01/06). Executado = 71,2% do recebido; **saldo em conta R$ 95.100,00**.
- Execução vs. planejado: **99,7%**. Pessoal a R$ 36.500/mês (4 meses). Equipamentos (workstation GPU, 2 notebooks, switch + kit OPC UA) adquiridos em março–abril. Diárias: 2 missões Maceió–Betim (abril e junho). Serviços: nuvem de homologação (4 meses).

---

## 5. Registro de premissas

| ID | Premissa | Responsável | Status em 08/07/2026 | Nota |
|---|---|---|---|---|
| PREM-01 | Todos os CLPs e robôs da CEL-04 expõem OPC UA | MetalPrime / Ferraz | **Em verificação** | Robôs de solda e CLP principal da célula confirmados com OPC UA no inventário do ENT-1.2. **A estação de inspeção da CEL-04 ainda não foi mapeada** (não estava disponível na visita de maio). Mapeamento previsto para a visita técnica de julho. Vinculado a RSK-01 |
| PREM-02 | MetalPrime fornece 2 gateways MP-Edge (comodato) e acesso à CEL-04 | MetalPrime | Confirmada | 2 gateways recebidos em 09/03/2026; acesso concedido com integração de segurança (RST-06) |
| PREM-03 | 6 meses de histórico de falhas disponíveis até o mês 4 | MetalPrime / Ferraz | Parcialmente cumprida | 4 meses recebidos em 22/06/2026; os 2 meses restantes prometidos para 31/07/2026. Vinculado a RSK-03 |
| PREM-04 | Documentação técnica do MP-Edge até o mês 1 | MetalPrime | Confirmada | SDK e limites de hardware recebidos em 16/03/2026 |
| PREM-05 | Ferraz autoriza visitas e operação assistida nos meses 10–12 | MetalPrime / Ferraz | A confirmar | Confirmação formal depende do ENT-4.1 (dez/2026) |
| PREM-06 | Interlocutor técnico da MetalPrime disponível | MetalPrime | Confirmada | Eng. Juliana Mendes Prado; presente em todas as reuniões mensais |

---

## 6. Registro de riscos

Escala: Probabilidade (P) e Impacto (I) de 1 (muito baixo) a 5 (muito alto). Exposição = P × I (≥ 12 alta; 6–11 média; ≤ 5 baixa).

| ID | Risco | P | I | Exp. | Resposta | Dono | Status |
|---|---|---|---|---|---|---|---|
| RSK-01 | **Equipamento da CEL-04 com protocolo não-OPC UA** (ex.: Modbus TCP, PROFINET), especialmente na estação de inspeção ainda não mapeada, invalidando PREM-01 | 3 | 4 | 12 | Mitigar: mapear a estação na visita de julho. Se confirmado, o PTA prevê conversor fornecido pela MetalPrime/planta (FE-03) ou abertura de SM pelo PTA §13. A coleta nativa de outro protocolo não entra sem SM | Thiago Melo Cavalcante | Aberto — monitorado |
| RSK-02 | **Solicitação de escopo vinda do cliente final (Veltra Motors)**, via MetalPrime ou Ferraz, sobre requisitos de fornecimento (ex.: qualidade/rastreabilidade), pressionando a equipe a absorver trabalho fora da linha de base | 3 | 5 | 15 | Mitigar: **processo de Solicitação de Mudança do PTA §13** — registro como SM-xx em até 2 dias úteis, análise de impacto em até 10 dias úteis, CCB e termo aditivo quando afetar meta, valor ou prazo; FE-01 a FE-05 como fronteira explícita; STK-10 monitorado | Leonardo Lucca (PO) | Aberto — monitorado |
| RSK-03 | Atraso ou insuficiência do histórico de falhas (PREM-03), comprometendo ENT-3.1 e ENT-3.2 | 4 | 4 | 16 | Mitigar: cobrar os 2 meses restantes até 31/07; usar dados coletados desde maio e técnicas não supervisionadas; escalar na reunião mensal | Dra. Aline Souza Medeiros | Aberto — em tratamento |
| RSK-04 | Modelos não atingem CS-03 (≥ 70% de detecção com ≥ 4 h; precisão ≥ 80%) por dados desbalanceados (IT-2) | 3 | 4 | 12 | Aceitar/mitigar: protocolo com ≥ 3 técnicas; resultado negativo documentado é aceito (PTA §14, item 5); alinhar expectativa com a Ferraz | Dra. Aline Souza Medeiros | Aberto |
| RSK-05 | Inferência embarcada excede limites do MP-Edge (RNF-003, RST-03) | 3 | 4 | 12 | Mitigar: quantização e poda; perfil de carga de ENT-1.4 como referência (pico de CPU de 41% na coleta) | Felipe Andrade Rocha | Aberto |
| RSK-06 | Aceite de ENT-2.3 após 01/09, atrasando a 3ª parcela (R$ 150.000) | 3 | 3 | 9 | Mitigar: demonstração do ENT-2.3 antecipada para a review do S13 em 28/08 (DEC-07); saldo de R$ 95.100 cobre ~2,5 meses de pessoal | Leonardo Lucca (PO) | Aberto |
| RSK-07 | Janelas de acesso à CEL-04 insuficientes (produção, normas de segurança RST-06) | 2 | 4 | 8 | Mitigar: agenda trimestral de visitas acordada com a Ferraz; uso do kit de bancada OPC UA | Thiago Melo Cavalcante | Aberto |
| RSK-08 | Desvio do OEE > 5 p.p. por baixa qualidade da apuração de referência (ENT-2.4) | 2 | 3 | 6 | Mitigar: apontamento manual assistido e auditado por amostragem (RN-10, DEC-06) | Lucas Henrique Barros | Aberto |
| RSK-09 | Vulnerabilidade crítica/alta no teste de intrusão atrasando o piloto (RNF-007) | 2 | 4 | 8 | Mitigar: pentest no mês 8, com 2 meses de folga antes do ENT-4.1; revisão de segurança OPC UA em cada review | Felipe Andrade Rocha | Aberto |
| RSK-10 | Saída de membro da equipe (bolsistas ou pessoa-chave) | 2 | 3 | 6 | Mitigar: carga sustentável (CS-09), pareamento, documentação contínua no repositório | Prof. Dr. Leandro Dias | Aberto |
| RSK-11 | Conectividade intermitente na planta degradando a coleta e o dashboard | 3 | 2 | 6 | Mitigar: store-and-forward e buffer ≥ 72 h (RF-005, RNF-004) já entregues e testados | Felipe Andrade Rocha | Mitigado parcialmente |
| RSK-12 | Glosa ou questionamento do enquadramento P&D por despesa ou atividade não P&D | 1 | 5 | 5 | Evitar: rastreabilidade requisito → ENT → META (matriz 04); revisão trimestral com STK-08; nada executado fora do PTA (CS-07) | Leonardo Lucca (PO) | Aberto |

---

## 7. Registro de decisões

| ID | Data | Decisão | Fórum / aprovadores | Referência |
|---|---|---|---|---|
| DEC-01 | 02/03/2026 | Adotar Scrum com sprints quinzenais (S1 em 02/03), refinamento semanal e review com a Engenharia de Produto da MetalPrime | Kick-off — Coordenador, PO, equipe | Doc. 01 §5 |
| DEC-02 | 24/04/2026 | Publicação borda → backend por MQTT sobre TLS 1.2+, com buffer local persistente (store-and-forward) | Revisão técnica do ENT-1.2 — Coordenador, Eng. Juliana Mendes Prado | RF-005, RF-007, RNF-006 |
| DEC-03 | 24/04/2026 | Aprovar Requisitos v1.0 como linha de base (RF-001..RF-028, RNF-001..RNF-014, RN-01..RN-10); faixa RF-101+/RNF-101+ reservada para mudanças via SM | Ata da reunião de 24/04/2026 | Doc. 03 §7; PTA §13 |
| DEC-04 | 24/04/2026 | Qualidade do OEE calculada por contadores agregados OK/refugo da célula, sem identificação de peças | Aprovação da linha de base | RN-01, RN-04; FE-01 |
| DEC-05 | 13/05/2026 | Agregar os sinais de solda na borda em janelas de 1 s, sem envio contínuo do sinal bruto (redução de volume medida de 87%) | Alinhamento de coordenação após experimentos do ENT-1.4 | RF-006; IT-1 |
| DEC-06 | 19/06/2026 | Referência do ENT-2.4 = apontamento manual assistido junto ao líder de turno, auditado por amostragem | Aceite do ENT-2.1 — MetalPrime, Ferraz | RN-10 |
| DEC-07 | 01/07/2026 | Antecipar a demonstração do ENT-2.3 para a review do S13 (28/08), para viabilizar a condição da 3ª parcela (01/09) | Alinhamento de coordenação | PTA §12; RSK-06 |

---

## 8. Log de mudanças

Linha de base vigente: PTA v1.0 (20/02/2026) + Requisitos v1.0 (24/04/2026). **Até 08/07/2026 não houve nenhuma Solicitação de Mudança**: o escopo segue integralmente a linha de base.

| SM | Data de registro | Origem | Descrição | Impacto | Decisão | Situação |
|---|---|---|---|---|---|---|
| — | — | — | (nenhuma até 08/07/2026) | — | — | — |
| SM-01 | 10/07/2026 | (próximo item) | Aberta em 10/07/2026 — ver Solicitação de Mudança SM-01 | A analisar (PTA §13, até 10 dias úteis) | Pendente (CCB) | Próximo item |
