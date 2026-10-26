# 06 — Solicitação de Mudança SM-01 — SENTINELA

> Convênio Fundepes nº 042/2026 · PTA v1.0 (aprovado em 20/02/2026) · Linha de base: PTA v1.0 + Requisitos v1.0 (24/04/2026)
> Formulário conforme PTA §13, itens 2 a 7. Registro e custódia: Leonardo Lucca (PO).

---

## 1. Identificação

| Campo | Valor |
|---|---|
| **Nº da SM** | **SM-01** |
| **Data de registro** | **10/07/2026** (sexta-feira, Mês 5, Sprint S10) — 2 dias úteis após a reunião de 08/07/2026, dentro do prazo da regra de comunicação (doc. 01 §5) |
| **Título** | Inclusão de rastreabilidade por número de série (DataMatrix), coleta Modbus TCP da estação de inspeção e integração com o MES VeltraTrace |
| **Solicitante** | Eng. Juliana Mendes Prado — Gerente de P&D, MetalPrime Automação Industrial Ltda. (STK-06 / PREM-06) |
| **Origem da demanda** | Veltra Motors (STK-10), exigência de fornecimento comunicada à MetalPrime em **30/06/2026** e apresentada ao projeto na reunião mensal de acompanhamento de **08/07/2026** |
| **Registrada por** | Leonardo Lucca (PO, STK-03) |
| **Responsável pela análise de impacto** | PO + equipe técnica (Felipe Andrade Rocha, Thiago Melo Cavalcante, Dra. Aline Souza Medeiros, Lucas Henrique Barros) |
| **Prazo da análise (PTA §13, item 3)** | Até 10 dias úteis → limite 24/07/2026; **meta interna: 17/07/2026** |
| **Situação atual** | Encerrada — **Aprovada (alternativa D)**, formalizada no termo aditivo nº 01 (ver §11) |

---

## 2. Descrição da mudança solicitada

A partir de 2027, toda peça soldada fornecida à Veltra Motors deve ter **rastreabilidade por número de série**. Para cada peça produzida na CEL-04 (Autopeças Ferraz, Betim/MG), o sistema deve:

1. Identificar a peça pelo **código DataMatrix** gravado nela;
2. Vincular a esse número de série os **parâmetros de solda do ciclo** (corrente, tensão, velocidade de arame), o **operador**, a **célula**, a **data/hora** e o **resultado de inspeção**;
3. Obter o resultado de inspeção da **estação de inspeção da CEL-04**, cujo CLP (de outro fabricante) **só expõe Modbus TCP**;
4. Enviar o registro completo ao **MES da Veltra ("VeltraTrace", API REST)** em **até 5 minutos** após o fim do ciclo.

A solicitante propõe tratar o tema como nova meta: **META-5 — Rastreabilidade por peça e integração com MES de cliente**.

---

## 3. Justificativa de negócio (apresentada pela solicitante e consolidada pelo PO)

| Aspecto | Descrição |
|---|---|
| Motivação externa | Auditoria de cliente alinhada à **IATF 16949**: a Veltra passa a exigir genealogia por peça de todos os fornecedores Tier 1 de peças soldadas a partir de 2027 |
| Impacto se não atendida | Fornecedores Tier 1 que usam células MetalPrime (a começar pela Ferraz) ficam impedidos de fornecer à Veltra; a MetalPrime **perde competitividade dos gateways MP-Edge no segmento automotivo** |
| Oportunidade | O MP-Edge passa a ser também gateway de rastreabilidade e integração com MES de montadora — capacidade inexistente na linha hoje e diferencial frente a concorrentes importados (doc. 01 §2.1, dor 4) |
| Alinhamento com a Lei de Informática | Nova capacidade tecnológica no produto habilitado, com incertezas técnicas próprias (a avaliar na análise de impacto, PTA §3) |
| Prazo de negócio | A Veltra exige a capacidade "a partir de 2027"; a MetalPrime precisa de validação em ambiente produtivo para ofertar a solução aos Tier 1 em 2027 |

---

## 4. Classificação

| Critério | Classificação |
|---|---|
| Tipo | **Mudança de escopo — inclusão de meta** (nova META-5, novo objetivo OBJ-05) |
| Natureza | Externa (exigência de cliente final) **combinada com premissa não confirmada** (PREM-01) |
| Afeta meta? | **Sim** — inclusão de META-5 e deslocamento da META-4 |
| Afeta valor? | **Sim** (provável) — exige equipamentos não previstos (CLP de bancada Modbus, leitor DataMatrix industrial) e esforço de pessoal adicional |
| Afeta prazo? | **Sim** (provável) — validação piloto passa a incluir rastreabilidade |
| Enquadramento PTA §13, item 5 | **Com alteração de meta, valor ou prazo → termo aditivo obrigatório**, com PTA v2.0, assinado **antes** da execução do novo escopo |
| Proibição de absorção informal (PTA §13, item 6) | **Aplicável**: nenhum trabalho de META-5 entra no backlog até aprovação e assinatura do aditivo |

---

## 5. Itens da linha de base afetados

### 5.1 Fora de escopo (PTA v1.0 §7) — a exigência cruza quatro fronteiras explícitas

| Item | Texto da linha de base | Elemento da exigência que o cruza |
|---|---|---|
| **FE-01** | Rastreabilidade individual de peças (genealogia por número de série) | Vínculo de parâmetros, operador, célula, data/hora e inspeção ao número de série |
| **FE-02** | Integração com sistemas MES/ERP de terceiros | Envio ao VeltraTrace (API REST) em ≤ 5 min |
| **FE-03** | Protocolos além de OPC UA (ex.: Modbus TCP) | Leitura do resultado de inspeção no CLP Modbus TCP da estação de inspeção |
| **FE-04** | Leitura de códigos (DataMatrix/QR) e identificação de peças | Leitura do DataMatrix e leitor industrial correspondente |
| FE-05 | Operação 24x7 com SLA | **Não é solicitada** e permanece fora de escopo; registrado para evitar ambiguidade |

Matriz reversa de referência: Matriz de Rastreabilidade, tabela A.5 — "Requisito existente que cobre?" = **Nenhum** para FE-01..FE-04.

### 5.2 Premissas

| Item | Situação |
|---|---|
| **PREM-01** — Todos os CLPs e robôs da CEL-04 expõem OPC UA | **Não confirmada** para a estação de inspeção: o CLP só expõe Modbus TCP. A premissa estava "em verificação" em 08/07 (Registro de Backlog e Riscos §5). Pela regra do PTA §8.1, o fato é comunicado formalmente por esta SM. Observação: para a coleta de OEE, o PTA previa conversor fornecido pela MetalPrime/planta; para a rastreabilidade, a leitura do resultado de inspeção por peça é parte do novo escopo |

### 5.3 Riscos

| Item | Situação |
|---|---|
| **RSK-01** — Equipamento da CEL-04 com protocolo não-OPC UA | **Materializado** (estação de inspeção em Modbus TCP). Resposta prevista no registro: abertura de SM pelo PTA §13 → cumprida por esta SM-01 |
| **RSK-02** — Solicitação de escopo vinda do cliente final (Veltra) | **Materializado**. Resposta prevista: registro como SM-xx em até 2 dias úteis, análise em até 10 dias úteis, CCB e termo aditivo → em execução por esta SM-01 |

### 5.4 Regras de negócio e requisitos

| Item | Impacto preliminar |
|---|---|
| **RN-04** — Granularidade mínima do OEE = equipamento × turno; não existe registro por peça (FE-01) | A exigência cria um registro por peça. Proposta preliminar: **manter RN-04 para o OEE** e tratar a rastreabilidade como registro paralelo, com novos requisitos na faixa reservada RF-101+/RNF-101+ (DEC-03) |
| RN-01 / DEC-04 — Qualidade por contadores agregados | Sem alteração proposta (a análise deverá confirmar) |
| RF-006 / DEC-05 — Agregação de sinais na borda em janelas de 1 s | Pode exigir agregação adicional **por ciclo de solda** para compor o registro por peça (a analisar) |
| RF-017 — "Não há envio ativo a sistemas de terceiros (FE-02)" | Texto deixaria de ser verdadeiro para o VeltraTrace (a analisar) |
| RNF-003 / RST-03 — Limites de CPU e memória do MP-Edge | Coleta adicional (Modbus TCP + DataMatrix + fila de envio) disputa recursos com OEE e inferência embarcada (a analisar) |

### 5.5 Metas, entregáveis, cronograma e orçamento potencialmente afetados

- **META-4** (meses 10–12): validação piloto teria de incluir rastreabilidade → candidata a deslocamento.
- **META-3** (meses 6–11): concorrência por pessoas (cientista de dados, engenheiro sênior) no pico de ENT-3.2/ENT-3.3.
- **Orçamento (PTA §11):** rubrica de equipamentos 100% executada em 30/06/2026 (Registro de Backlog e Riscos §4.4); não há previsão de CLP Modbus nem leitor DataMatrix.
- **Desembolso (PTA §12):** 3ª e 4ª parcelas dependem de ENT-2.2/2.3 e ENT-3.1/3.2, que não podem ser comprometidos.

---

## 6. Urgência

| Campo | Valor |
|---|---|
| Nível | **Alta** |
| Justificativa | Prazo do cliente final ("a partir de 2027"); necessidade de validação piloto antes da oferta comercial; e o novo escopo só pode começar **após** a assinatura do aditivo (PTA §13, itens 5 e 6). Cada semana de trâmite reduz a janela de execução |
| Data-limite desejada para decisão | 31/07/2026 (aprovação MetalPrime), para permitir submissão à Fundepes no início de agosto |
| Ação imediata | Nenhuma execução. Apenas análise de impacto e, em paralelo, mapeamento técnico da estação de inspeção (atividade já prevista em RSK-01, sem custo adicional) |

---

## 7. Evidências anexas

| Anexo | Documento | Data | Conteúdo relevante |
|---|---|---|---|
| A-01 | **Ofício Veltra Motors VM-SQF-0412/2026**, "Requisitos de rastreabilidade de peças soldadas — fornecedores Tier 1", dirigido aos fornecedores e encaminhado pela MetalPrime | 30/06/2026 | Exigência de genealogia por número de série a partir de 2027; campos obrigatórios; envio ao VeltraTrace em ≤ 5 min; referência à IATF 16949 |
| A-02 | **Ata da reunião mensal de acompanhamento nº 05/2026** (LASIN/MetalPrime) | 08/07/2026 | Apresentação da exigência por Juliana Prado; informação de que a estação de inspeção da CEL-04 só expõe Modbus TCP; encaminhamento: "PO registra SM em até 2 dias úteis; nenhuma atividade antes do CCB" |
| A-03 | E-mail de encaminhamento da MetalPrime com a especificação preliminar da API VeltraTrace (versão de rascunho, sem ambiente de homologação ainda liberado) | 09/07/2026 | Estrutura do payload; autenticação; códigos de resposta |
| A-04 | Extrato da matriz de rastreabilidade v1.0 (tabela A.5) e do PTA v1.0 §7 | 10/07/2026 | Prova de que FE-01..FE-04 estavam excluídos e aprovados em 20/02/2026 e 24/04/2026 |
| A-05 | Inventário de equipamentos da CEL-04 (ENT-1.2) | 24/04/2026 | Estação de inspeção listada como "não mapeada" |

---

## 8. Parecer preliminar do PO (10/07/2026)

1. **Procedência:** a demanda é legítima e estrategicamente relevante para a financiadora; não há indício de que estivesse contratada. A linha de base exclui expressamente cada elemento da exigência (FE-01, FE-02, FE-03, FE-04), e essa fronteira foi aprovada pela MetalPrime no PTA (20/02/2026) e em ata (24/04/2026), **antes** da exigência da Veltra (30/06/2026).
2. **Natureza:** trata-se de **inclusão de meta**, não de ajuste de requisito. Não cabe versão v1.x; aplica-se PTA §13, item 5 (termo aditivo).
3. **Capacidade:** com META-2 em andamento, META-3 começando, velocidade média de 17,4 pts/sprint e folga reservada para a incerteza de P&D da META-3, a equipe **não tem capacidade ociosa** para absorver o trabalho sem afetar metas contratadas. A quantificação fica para a análise de impacto.
4. **Recursos materiais:** a rubrica de equipamentos está integralmente executada; CLP de bancada Modbus e leitor DataMatrix exigem recurso novo.
5. **Enquadramento P&D:** há indícios de incerteza técnica nova (sincronização e vínculo peça–ciclo–inspeção sob restrição de recursos de borda; entrega garantida em ≤ 5 min com conectividade intermitente). A análise deverá caracterizá-las formalmente.
6. **Recomendação preliminar:** admitir a SM para análise de impacto completa, com alternativas, a ser entregue até **17/07/2026**; manter a proibição de execução informal (PTA §13, item 6).

Assinatura: Leonardo Lucca (PO) — 10/07/2026.

---

## 9. Fluxo de aprovação (CCB e formalização)

| # | Etapa | Responsável | Data | Resultado |
|---|---|---|---|---|
| 1 | Apresentação da exigência na reunião mensal | Juliana Prado (MetalPrime) | 08/07/2026 | Encaminhada para registro de SM (ata nº 05/2026) |
| 2 | **Registro da SM-01** | PO | **10/07/2026** | Registrada; log de mudanças atualizado (Registro de Backlog e Riscos §8) |
| 3 | CCB — admissibilidade | Coordenador, PO, Juliana Prado | 14/07/2026 | SM admitida; análise de impacto autorizada; confirmada a não execução até decisão |
| 4 | Visita técnica à CEL-04 (já planejada para julho, RSK-01) | Thiago Melo Cavalcante, PO | 15/07/2026 | Confirmado: CLP da estação de inspeção só expõe Modbus TCP; leitura de DataMatrix inexistente na célula |
| 5 | **Análise de impacto concluída** (Análise de Impacto da SM-01) | PO + equipe técnica | **17/07/2026** | Entregue em 5 dias úteis (prazo: 10 dias úteis) |
| 6 | CCB — deliberação técnica | Coordenador, PO, Juliana Prado | 21/07/2026 | Recomendação da alternativa D encaminhada à Diretoria da MetalPrime |
| 7 | **Aprovação MetalPrime** (Diretoria Industrial + P&D) | Roberto Siqueira Campos; Eng. Juliana Mendes Prado | **31/07/2026** | Aprovada a alternativa D: META-5 + R$ 180.000,00 + 4 meses |
| 8 | **Submissão à Fundepes** (ofício + dossiê: justificativa, PTA v2.0, plano de aplicação) | Prof. Dr. Leandro Dias | **05/08/2026** | Protocolada; análise por Adm. Carla Beatriz Lins |
| 9 | **Assinatura do termo aditivo nº 01** | LASIN/Universidade, Fundepes, MetalPrime | **02/09/2026** | Vigência até 30/06/2027; valor total R$ 780.000,00 |
| 10 | Atualização da linha de base (PTA v2.0, requisitos com RF-101..RF-110 e RNF-101..RNF-105, matriz v1.1) e abertura do backlog da META-5 | PO | Após 02/09/2026 | Execução da META-5 a partir do mês 9 |

---

## 10. Decisão do CCB / aprovadores

| Campo | Registro |
|---|---|
| Alternativas analisadas | A — rejeitar; B — absorver sem aditivo; C — aditivo só de prazo; **D — aditivo de meta + valor + prazo** |
| **Decisão** | **APROVADA — Alternativa D** |
| Data da decisão (MetalPrime) | 31/07/2026 |
| Conteúdo aprovado | Inclusão de **META-5** (meses 9–16) e OBJ-05; deslocamento da **META-4** para os meses 14–16; **+4 meses** (vigência até 30/06/2027, 16 meses); **+R$ 180.000,00** (total R$ 780.000,00); esforço adicional de **~2.150 horas-pessoa** |
| Rubricas do aditivo | Pessoal R$ 128.000,00 · Equipamentos (CLP de bancada Modbus + leitor DataMatrix industrial) R$ 22.000,00 · Serviços de terceiros R$ 8.000,00 · Diárias e passagens R$ 4.000,00 · DOA Fundepes (10%) R$ 18.000,00 · **Total R$ 180.000,00** |
| Condicionantes | (i) Nenhuma atividade de META-5 antes da assinatura do aditivo; (ii) FE-02 convertido apenas para o VeltraTrace; FE-03 apenas para Modbus TCP da estação de inspeção da CEL-04; FE-05 permanece fora; (iii) RN-04 mantida para o OEE; (iv) MetalPrime viabiliza junto à Veltra o acesso ao ambiente de homologação do VeltraTrace até o mês 9 |
| Formalização | Termo aditivo nº 01 ao Convênio Fundepes nº 042/2026, assinado em **02/09/2026** |

**Assinaturas (CCB):** Prof. Dr. Leandro Dias (Coordenador) · Leonardo Lucca (PO) · Eng. Juliana Mendes Prado (MetalPrime) · Roberto Siqueira Campos (MetalPrime, aprovação de valor e prazo).

---

## 11. Histórico do registro

| Data | Evento |
|---|---|
| 10/07/2026 | SM-01 registrada (status: Aberta — em análise) |
| 14/07/2026 | Admitida pelo CCB |
| 17/07/2026 | Análise de impacto anexada |
| 31/07/2026 | Aprovada pela MetalPrime (alternativa D) |
| 05/08/2026 | Submetida à Fundepes |
| 02/09/2026 | Termo aditivo nº 01 assinado — SM-01 encerrada como **Aprovada e formalizada** |
