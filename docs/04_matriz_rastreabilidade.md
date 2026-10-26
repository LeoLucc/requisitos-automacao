# 04 — Matriz de Rastreabilidade — SENTINELA

> Elaboração e manutenção: Leonardo Lucca (PO). Destinatários: STK-02, STK-06, STK-07 e STK-08 (CS-08).
> **Parte A** — linha de base v1.0 (PTA v1.0 + requisitos v1.0 de 24/04/2026), com status em 08/07/2026 (mês 5).
> **Parte B** — matriz v1.1, após o termo aditivo nº 01 (assinado em 02/09/2026).
> **Parte C** — como usar a matriz numa negociação de escopo.

Legenda de status: ✅ Aceito · 🔄 Em andamento · ⏳ Iniciando · ⬜ Não iniciado (conforme cronograma) · 🚫 Fora de escopo.

---

## PARTE A — Matriz da linha de base v1.0 (abril/2026)

Fontes: PTA v1.0 §4–§7 e §10; Especificação de Requisitos v1.0 v1.0 (RF-001..RF-028, RNF-001..RNF-014, RN-01..RN-10).
Situação de referência: **08/07/2026 (mês 5)**, data da reunião em que a MetalPrime apresentou a exigência da Veltra. META-1 concluída (aceite que liberou a 2ª parcela em 01/06/2026), META-2 em andamento, META-3 iniciando a preparação de dados.

### A.1 OBJ-01 → META-1 — Arquitetura e aquisição de dados OPC UA no MP-Edge (meses 1–3)

| OBJ | META | ENT | RF / RNF / RN | Critério de aceite principal | Evidência de verificação | Status 08/07/2026 |
|---|---|---|---|---|---|---|
| OBJ-01 | META-1 | ENT-1.1 Visão, stakeholders e requisitos | (documento que contém todos os RF/RNF/RN) | Requisitos v1.0 aprovados com rastreabilidade a OBJ/META | Ata de 24/04/2026 (MetalPrime + LASIN); `01_visao_stakeholders.md`, Especificação de Requisitos v1.0 | ✅ Aceito |
| OBJ-01 | META-1 | ENT-1.2 Arquitetura de borda | RF-005, RNF-006 | CA-RF005-1: após 24 h sem link, 100% dos agregados chegam em ≤ 2 h, sem duplicidade | Documento aprovado em revisão técnica com ata | ✅ Aceito |
| OBJ-01 | META-1 | ENT-1.3 Coletor OPC UA embarcado | RF-001 | CA-RF001-1: 3 sessões OPC UA ativas em ≤ 30 s no kit de bancada | Tag de release + demonstração em bancada em ata | ✅ Aceito |
| OBJ-01 | META-1 | ENT-1.3 | RF-002 | CA-RF002-2: novas tags coletadas sem reinício em ≤ 60 s | Release + roteiro de teste | ✅ Aceito |
| OBJ-01 | META-1 | ENT-1.3, ENT-1.4 | RF-003, RNF-002 | CA-RF003-1: perda de amostras < 0,5% (1 h a 100 ms); RNF-002 em 7 dias contínuos (CS-01) | Logs do gateway + relatório de experimentos | ✅ Aceito |
| OBJ-01 | META-1 | ENT-1.3 | RF-004, RN-08 | CA-RF004-1: desvio de relógio ≤ 100 ms vs. NTP; CA-RF004-2: amostra Bad excluída do OEE | Relatório de teste | ✅ Aceito |
| OBJ-01 | META-1 | ENT-1.3, ENT-1.4 | RF-006 | CA-RF006-1: redução de volume ≥ 80% com erro de média ≤ 1% | Relatório ENT-1.4 com dados brutos e scripts | ✅ Aceito |
| OBJ-01 | META-1 | ENT-1.3 | RF-007, RNF-001 (parte borda) | CA-RF007-1: evento de estado no backend em ≤ 5 s (p95) | Medição de latência no ENT-1.4 | ✅ Aceito |
| OBJ-01 | META-1 | ENT-1.4 Experimentos de latência e volume | RF-008, RNF-003, RNF-004 | CA-RF008-1: aviso de buffer > 80% em ≤ 1 min; CPU ≤ 70%, memória ≤ 75%; autonomia ≥ 72 h | Relatório técnico IT-1 com dados brutos | ✅ Aceito |

### A.2 OBJ-02 → META-2 — Plataforma de monitoramento de OEE (meses 3–7)

| OBJ | META | ENT | RF / RNF / RN | Critério de aceite principal | Evidência de verificação | Status 08/07/2026 |
|---|---|---|---|---|---|---|
| OBJ-02 | META-2 | ENT-2.1 Especificação do modelo de OEE | RF-009, RF-010, RN-01, RN-02, RN-03, RN-04, RN-05, RN-06, RN-07 | CA-RF009-1: concordância de tempo por estado ≥ 95% vs. 1 turno anotado | Especificação aprovada pela MetalPrime com ata | ✅ Aceito (mês 4) |
| OBJ-02 | META-2 | ENT-2.2 Backend de OEE | RF-011, RN-01 | CA-RF011-1: erro ≤ 0,1 p.p. vs. cálculo de referência | Release + testes automatizados | 🔄 Em andamento (entrega mês 6) |
| OBJ-02 | META-2 | ENT-2.2, ENT-2.3 | RF-012, RNF-001 | CA-RF012-1: OEE parcial atualizado em ≤ 1 min (CS-02) | Teste ponta a ponta em bancada | 🔄 Em andamento |
| OBJ-02 | META-2 | ENT-2.2, ENT-2.3 | RF-013, RN-05 | CA-RF013-1: parada ≥ 2 min pendente de classificação em ≤ 1 min | Demonstração em ata | 🔄 Em andamento |
| OBJ-02 | META-2 | ENT-2.2 | RF-017 | CA-RF017-1: consulta de OEE em ≤ 1 s (p95), igual ao dashboard | Documentação OpenAPI + teste | 🔄 Em andamento |
| OBJ-02 | META-2 | ENT-2.2, ENT-2.3 | RF-019, RNF-008 | CA-RF019-1: Operador barrado na configuração de tags, com log | Teste de perfis | 🔄 Em andamento |
| OBJ-02 | META-2 | ENT-2.2 | RNF-006, RNF-009, RNF-012, RNF-014 | Cobertura de testes ≥ 70%; TLS 1.2+; ≥ 10 gateways simulados | Relatório de testes e de carga | 🔄 Em andamento |
| OBJ-02 | META-2 | ENT-2.2, ENT-4.1 | RNF-007 | 0 vulnerabilidades críticas/altas antes do ENT-4.2 | Relatório do teste de intrusão independente | ⬜ Não iniciado |
| OBJ-02 | META-2 | ENT-2.3 Dashboards web | RF-014 | CA-RF014-1: dashboard carrega em ≤ 3 s (p95) | Demonstração em ata | 🔄 Em andamento (entrega mês 7) |
| OBJ-02 | META-2 | ENT-2.3 | RF-015 | CA-RF015-1: Pareto de 90 dias em ≤ 5 s | Demonstração em ata | 🔄 Em andamento |
| OBJ-02, OBJ-03 | META-2 | ENT-2.3 | RF-016 | CA-RF016-1: MTTR/MTBF iguais ao cálculo de referência | Teste com conjunto conhecido | 🔄 Em andamento |
| OBJ-02 | META-2 | ENT-2.3 | RNF-011 | Classificação de parada em ≤ 3 cliques; SUS ≥ 70 (≥ 5 usuários) | Teste de usabilidade com a Ferraz | 🔄 Em andamento |
| OBJ-02 | META-2 | ENT-2.4 Verificação do OEE | RF-011, RF-018, RN-10 | CA-RF011-2: desvio absoluto médio ≤ 5 p.p. em 4 semanas (CS-02) | Relatório comparativo com apuração de referência | 🔄 Em andamento (entrega mês 7) |

### A.3 OBJ-03 → META-3 — Detecção de anomalias e manutenção preditiva (meses 6–11)

| OBJ | META | ENT | RF / RNF / RN | Critério de aceite principal | Evidência de verificação | Status 08/07/2026 |
|---|---|---|---|---|---|---|
| OBJ-03 | META-3 | ENT-3.1 Base curada e análise exploratória | RF-020, RNF-009, RNF-010 | CA-RF020-1: dataset com dicionário e hash reprodutível | Dataset versionado + notebook | ⏳ Iniciando (preparação dos dados históricos de PREM-03 e dos coletados) |
| OBJ-03 | META-3 | ENT-3.2 Modelos de anomalias | RF-021 | CA-RF021-1: precisão, recall e F1 por componente, ≥ 3 técnicas | Relatório de experimentos em conjunto de teste separado | ⬜ Não iniciado |
| OBJ-03 | META-3 | ENT-3.3 Modelos embarcados | RF-022, RNF-003, RNF-004 | CA-RF022-1: inferência ≤ 200 ms; +CPU ≤ 25%; ≤ 256 MB | Release embarcada + medições | ⬜ Não iniciado |
| OBJ-03 | META-3 | ENT-3.3 | RF-023, RN-09 | CA-RF023-1: ≥ 70% das falhas alertadas com ≥ 4 h e precisão ≥ 80% (CS-03) | Backtest + relatório | ⬜ Não iniciado |
| OBJ-03 | META-3 | ENT-3.3 | RF-024, RF-025 | CA-RF024-1: rótulo presente no dataset; CA-RF025-1: implantar/reverter modelo em ≤ 5 min | Teste de ciclo de retreino | ⬜ Não iniciado |
| OBJ-03 | META-3 | ENT-3.4 Relatório técnico-científico | RNF-010 | Métodos e resultados de IT-1 a IT-4 documentados (PTA §14, item 5) | Relatório aprovado pela Coordenação | ⬜ Não iniciado |

### A.4 OBJ-04 → META-4 — Validação piloto e transferência (meses 10–12)

| OBJ | META | ENT | RF / RNF / RN | Critério de aceite principal | Evidência de verificação | Status 08/07/2026 |
|---|---|---|---|---|---|---|
| OBJ-04 | META-4 | ENT-4.1 Plano de validação | RNF-007 | Plano aprovado por MetalPrime e Ferraz; pentest sem críticas/altas | Plano assinado | ⬜ Não iniciado |
| OBJ-04 | META-4 | ENT-4.2 Relatório de validação | RF-026, RNF-005 | CA-RF026-1: registro contínuo em ≥ 4 semanas; coletor ≥ 98% (sem SLA, FE-05) | Logs, capturas, atas de visita | ⬜ Não iniciado |
| OBJ-04 | META-4 | ENT-4.3 Pacote de transferência | RF-027, RF-028, RNF-013 | CA-RF027-1: MetalPrime instala sozinha em ≤ 4 h; treinamento ≥ 16 h (CS-05) | Termo de recebimento + lista de presença | ⬜ Não iniciado |
| OBJ-04 | META-4 | ENT-4.4 Relatório técnico final | (documental) | Relatório de execução física | Protocolo na Fundepes | ⬜ Não iniciado |

### A.5 Matriz reversa — Fora de escopo (o que a linha de base NÃO cobre)

| FE | O que NÃO é coberto | Requisitos/regras que delimitam a fronteira | Referência em Especificação de Requisitos v1.0 §6 | Requisito existente que cobre? |
|---|---|---|---|---|
| FE-01 | Rastreabilidade individual de peças; genealogia por número de série; parâmetros de solda, operador, célula, data/hora e inspeção vinculados a uma peça | RN-04 (menor nível = equipamento × turno; não há registro por peça); RN-01 (contadores agregados); RF-006 (parâmetros agregados por janela); RF-011 | Linhas "Unidade de análise", "Contagem para Qualidade", "Parâmetros de solda" | **Nenhum** |
| FE-02 | Envio/recebimento de dados para MES/ERP de terceiros (ex.: VeltraTrace) | RF-017 (API própria, "não há envio ativo a sistemas de terceiros") | Linha "Saída de dados" | **Nenhum** |
| FE-03 | Coleta por Modbus TCP, PROFINET, EtherNet/IP | RF-001..RF-003 (somente OPC UA); PREM-01 | Linha "Protocolo" | **Nenhum** |
| FE-04 | Leitura de DataMatrix/QR e leitores industriais | Nenhum RF de identificação; PTA §11 sem hardware de leitura | Linha "Identificação" | **Nenhum** |
| FE-05 | Operação 24x7, SLA, plantão, tempo de resposta | RNF-005 (meta experimental ≥ 98%, sem SLA) | Linha "Operação" | **Nenhum** |

### A.6 Métricas de cobertura (linha de base v1.0)

| Métrica | Cálculo | Resultado |
|---|---|---|
| RF com ao menos um critério de aceite mensurável | 28 / 28 | **100%** |
| RNF com métrica/critério verificável | 14 / 14 | **100%** |
| RF e RNF vinculados a OBJ, META e ENT | 42 / 42 | **100%** |
| RN referenciadas por ao menos um RF/ENT | 10 / 10 | **100%** |
| ENT com ao menos um RF/RNF rastreado | 14 / 16 (ENT-1.1 e ENT-4.4 são documentais, verificados pelo indicador do PTA §5) | **87,5%** |
| ENT com indicador de verificação definido no PTA | 16 / 16 | **100%** |
| OBJ cobertos por meta e requisitos | 4 / 4 | **100%** |
| FE com requisito que os implementa | 0 / 5 | **0%** (esperado: confirma a fronteira) |
| ENT aceitos em 08/07/2026 | 5 / 16 (ENT-1.1..1.4, ENT-2.1) | 31% — aderente ao cronograma do PTA §10 |

---

## PARTE B — Matriz atualizada v1.1 (pós termo aditivo nº 01, 02/09/2026)

Base: SM-01 (10/07/2026), análise de impacto (17/07/2026), aprovação MetalPrime (31/07/2026), submissão à Fundepes (05/08/2026), **termo aditivo nº 01 assinado em 02/09/2026**. Vigência 01/03/2026–30/06/2027 (16 meses); valor R$ 780.000,00 (+R$ 180.000,00); esforço adicional ~2.150 horas-pessoa. Os RF-101..RF-110 e RNF-101..RNF-105 aparecem aqui só com título e CA principal; o detalhamento virá em versão posterior de Especificação de Requisitos v1.0.

### B.1 Cronograma de metas v1.1

| Meta | Descrição | Meses v1.0 | Meses v1.1 | Mudança |
|---|---|---|---|---|
| META-1 | Arquitetura e aquisição OPC UA | 1–3 | 1–3 | — (concluída) |
| META-2 | Plataforma de OEE | 3–7 | 3–7 | — |
| META-3 | Anomalias e manutenção preditiva | 6–11 | 6–11 | — |
| **META-4** | Validação piloto e transferência | 10–12 | **14–16** | **Deslocada**: o piloto passa a incluir rastreabilidade |
| **META-5** | Rastreabilidade por peça e integração com MES de cliente | — | **9–16** | **Nova** (aditivo) |

### B.2 Metas 1 a 4 (inalteradas no conteúdo)

As linhas de A.1–A.4 continuam válidas, com as alterações abaixo. Situação em 02/09/2026 (mês 7).

| OBJ | META | ENT | RF / RNF / RN | Critério de aceite principal | Evidência de verificação | Situação 02/09/2026 |
|---|---|---|---|---|---|---|
| OBJ-01 | META-1 | ENT-1.1..ENT-1.4 | RF-001..RF-008, RNF-002..RNF-004 | Conforme A.1 | Conforme A.1 | ✅ Aceito |
| OBJ-02 | META-2 | ENT-2.1..ENT-2.4 | RF-009..RF-019, RN-01..RN-07, RN-10 | Conforme A.2 | Conforme A.2 | ENT-2.1 ✅; ENT-2.2 a ENT-2.4 em fechamento/aceite (mês 7) |
| OBJ-03 | META-3 | ENT-3.1..ENT-3.4 | RF-020..RF-025, RN-09 | Conforme A.3 | Conforme A.3 | 🔄 Em andamento (ENT-3.1, mês 7) |
| OBJ-04 | META-4 | ENT-4.1 (mês 14) | RNF-007 | Plano de validação passa a incluir protocolo de rastreabilidade (CS-10) | Plano assinado por MetalPrime e Ferraz | ⬜ Replanejado |
| OBJ-04, OBJ-05 | META-4 | ENT-4.2 (mês 16) | RF-026, RNF-005 | ≥ 4 semanas de operação assistida, agora com OEE, alertas **e** rastreabilidade | Logs, capturas, atas; evidência cruzada com ENT-5.5 | ⬜ Replanejado |
| OBJ-04 | META-4 | ENT-4.3, ENT-4.4 (mês 16) | RF-027, RF-028, RNF-013 | Pacote de transferência inclui componentes da META-5; treinamento ≥ 16 h | Termo de recebimento; protocolo na Fundepes | ⬜ Replanejado |

### B.3 OBJ-05 → META-5 — Rastreabilidade por peça e integração com MES de cliente (meses 9–16)

**OBJ-05:** Registrar, por número de série (DataMatrix), os parâmetros de solda, operador, célula, data/hora e resultado de inspeção de cada peça soldada na CEL-04, e enviá-los ao MES da Veltra (VeltraTrace, API REST) em até 5 min (CS-10).

| OBJ | META | ENT | RF / RNF | Critério de aceite principal | Evidência de verificação | Situação 02/09/2026 |
|---|---|---|---|---|---|---|
| OBJ-05 | META-5 | **ENT-5.1** Especificação de rastreabilidade e contrato de integração VeltraTrace (mês 9) | RF-101, RF-109, RNF-104 | Modelo de registro por peça e contrato de API (OpenAPI) aprovados por MetalPrime, com confirmação da Veltra via STK-06 | Especificação versionada + ata de aprovação | ⬜ Não iniciado (início mês 9) |
| OBJ-05 | META-5 | **ENT-5.2** Coletor Modbus TCP para a estação de inspeção (mês 11) | RF-102, RNF-103 | Resultado de inspeção lido do CLP Modbus TCP da CEL-04 em 100% dos ciclos de bancada | Release + demonstração com CLP de bancada Modbus em ata | ⬜ Não iniciado |
| OBJ-05 | META-5 | **ENT-5.3** Leitura DataMatrix e genealogia por peça (mês 12) | RF-103, RF-104, RF-105, RF-106, RF-109, RNF-101, RNF-105 | Registro completo por peça (parâmetros, operador, célula, data/hora, inspeção) vinculado ao DataMatrix | Release + relatório de teste com leitor DataMatrix industrial | ⬜ Não iniciado |
| OBJ-05 | META-5 | **ENT-5.4** Integração MES com envio ≤ 5 min (mês 13) | RF-107, RF-108, RF-110, RNF-102, RNF-104 | Registro aceito pelo VeltraTrace em ≤ 5 min (p99,5) após o fim do ciclo | Logs de envio/confirmação + teste em homologação do VeltraTrace | ⬜ Não iniciado |
| OBJ-05, OBJ-04 | META-5 | **ENT-5.5** Relatório de validação de rastreabilidade (mês 16) | RF-110, RNF-102, RNF-105 | ≥ 99,5% das peças da CEL-04 entregues ao VeltraTrace em ≤ 5 min no piloto (CS-10) | Relatório com reconciliação peças produzidas × recebidas | ⬜ Não iniciado |

### B.4 Requisitos da META-5 (títulos e CA principal)

| ID | Título | CA principal | ENT |
|---|---|---|---|
| RF-101 | Modelo de dados do registro de rastreabilidade por peça | Registro contém DataMatrix, parâmetros de solda (corrente, tensão, velocidade de arame), operador, célula, data/hora e resultado de inspeção; 0 campos obrigatórios nulos em 1.000 registros de teste | ENT-5.1 |
| RF-102 | Coleta Modbus TCP da estação de inspeção | Leitura do resultado de inspeção em 100% dos ciclos, com latência ≤ 1 s após o fim da inspeção | ENT-5.2 |
| RF-103 | Leitura de DataMatrix da peça | Taxa de leitura válida ≥ 99,5% em lote de teste de peças da CEL-04 | ENT-5.3 |
| RF-104 | Vínculo dos parâmetros de solda ao número de série | Parâmetros do ciclo associados ao DataMatrix correto em 100% dos ciclos de teste (sem troca de peça) | ENT-5.3 |
| RF-105 | Registro de operador, célula e data/hora por peça | Operador logado, célula e carimbo de tempo sincronizado (≤ 100 ms) presentes em 100% dos registros | ENT-5.3 |
| RF-106 | Vínculo do resultado de inspeção à peça (genealogia) | Resultado da inspeção Modbus associado ao mesmo DataMatrix do ciclo de solda em 100% dos casos de teste | ENT-5.3 |
| RF-107 | Envio de registros ao VeltraTrace (API REST) | Registro aceito pelo VeltraTrace em ≤ 5 min após o fim do ciclo | ENT-5.4 |
| RF-108 | Fila de envio com reenvio e idempotência | Após 2 h sem conexão, 100% dos registros pendentes reenviados sem duplicidade | ENT-5.4 |
| RF-109 | Consulta de genealogia por número de série | Consulta por DataMatrix retorna o registro completo em ≤ 2 s (p95) | ENT-5.1, ENT-5.3 |
| RF-110 | Monitoramento e reconciliação de envios | Relatório diário de peças produzidas × aceitas pelo VeltraTrace, com divergências listadas | ENT-5.4, ENT-5.5 |
| RNF-101 | Integridade do registro por peça | 0 registros perdidos ou corrompidos entre a borda e o backend no período de teste | ENT-5.3 |
| RNF-102 | Prazo de entrega ao MES | ≥ 99,5% dos registros entregues ao VeltraTrace em ≤ 5 min (CS-10) | ENT-5.4, ENT-5.5 |
| RNF-103 | Recursos de borda com coleta adicional | Com OPC UA + Modbus TCP + DataMatrix, uso de CPU ≤ 70% e memória ≤ 75% no MP-Edge (RST-03) | ENT-5.2 |
| RNF-104 | Segurança da integração externa | Comunicação com VeltraTrace por HTTPS/TLS 1.2+ com autenticação; zero credenciais em texto claro | ENT-5.1, ENT-5.4 |
| RNF-105 | Retenção e auditabilidade da rastreabilidade | Registros por peça retidos e consultáveis por todo o período do piloto, com trilha de auditoria (IATF 16949) | ENT-5.3, ENT-5.5 |

### B.5 Fora de escopo v1.1 — o que o aditivo mudou

| FE | Situação v1.0 | Situação v1.1 | Coberto por | Observação |
|---|---|---|---|---|
| FE-01 Rastreabilidade por peça | 🚫 Fora | **Escopo via aditivo nº 01** | OBJ-05, META-5, ENT-5.1, ENT-5.3, ENT-5.5; RF-101, RF-104..RF-106, RF-109 | RN-04 permanece válida para o OEE; a rastreabilidade é um registro paralelo, não altera a granularidade do OEE |
| FE-02 Integração MES/ERP | 🚫 Fora | **Escopo via aditivo nº 01, restrito ao VeltraTrace** | ENT-5.1, ENT-5.4; RF-107, RF-108, RF-110, RNF-102, RNF-104 | Outros MES/ERP continuam fora |
| FE-03 Protocolos além de OPC UA | 🚫 Fora | **Escopo via aditivo nº 01, restrito a Modbus TCP da estação de inspeção da CEL-04** | ENT-5.2; RF-102, RNF-103 | PROFINET, EtherNet/IP continuam fora; PREM-01 registrada como não confirmada |
| FE-04 Leitura DataMatrix/QR | 🚫 Fora | **Escopo via aditivo nº 01** | ENT-5.3; RF-103 | Leitor DataMatrix industrial custeado pela rubrica de equipamentos do aditivo |
| FE-05 Operação 24x7 com SLA | 🚫 Fora | 🚫 **Continua fora** | — | RNF-102 é meta de validação do piloto, não SLA; operação contínua é da MetalPrime |

### B.6 Métricas de cobertura v1.1

| Métrica | Cálculo | Resultado |
|---|---|---|
| RF com CA principal | 38 / 38 (28 + 10) | **100%** |
| RNF com métrica | 19 / 19 (14 + 5) | **100%** |
| ENT com requisito rastreado | 19 / 21 (16 + 5; ENT-1.1 e ENT-4.4 documentais) | **90,5%** |
| OBJ cobertos por meta e requisitos | 5 / 5 | **100%** |
| Requisitos da META-5 rastreados a FE "convertido" | 15 / 15 | **100%** |
| FE remanescentes sem cobertura | FE-05 | 1 / 5 |

---

## PARTE C — Como ler a matriz numa negociação

- **Nenhum requisito aceito cobre rastreabilidade.** Os 42 RF/RNF da linha de base mapeiam apenas para OBJ-01..OBJ-04; a coluna "Requisito existente que cobre?" da tabela A.5 é "Nenhum" para FE-01..FE-04. Não há como alegar que a rastreabilidade estava "implícita no monitoramento".
- **A fronteira foi assinada, não só escrita.** FE-01..FE-05 estão no PTA v1.0 (§7, aprovado em 20/02/2026), e RN-04 e a seção 6 dos requisitos foram aprovados em ata pela MetalPrime em 24/04/2026, dois meses antes da exigência da Veltra (30/06/2026).
- **Até os pontos de contato parecidos dizem o contrário.** Qualidade do OEE vem de contadores agregados (RN-01), parâmetros de solda são agregados por janela (RF-006) e a API não envia nada a terceiros (RF-017). A matriz mostra que essas decisões foram de propósito, por causa de IT-1 e de OBJ-02.
- **A exigência bate num FE em cada um de seus elementos.** Número de série → FE-01; DataMatrix → FE-04; VeltraTrace → FE-02; estação de inspeção Modbus TCP → FE-03 e PREM-01 não confirmada. São quatro exclusões explícitas ao mesmo tempo, não um ajuste.
- **O orçamento não tem a capacidade correspondente.** A coluna de evidências e o PTA §11 não preveem leitor DataMatrix nem CLP Modbus, e o aditivo precisa de R$ 22.000,00 em equipamentos só para isso.
- **O status em 08/07/2026 prova que a equipe não tem folga.** Com META-2 em andamento e META-3 começando, absorver ~2.150 horas-pessoa comprometeria entregas que liberam a 3ª e a 4ª parcelas (PTA §12). A matriz mostra o que atrasaria e por quê.
- **A faixa RF-101+ já estava reservada para mudanças via SM** (requisitos §1.3 e §6). A matriz v1.1 mostra que o novo escopo entra como OBJ-05/META-5 com IDs novos, sem alterar o que já foi aceito: é inclusão de meta, o que exige termo aditivo (PTA §13, item 5).
- **FE-05 continua fora mesmo depois do aditivo.** Isso mostra que a matriz não é usada para "vender" escopo. Ela separa o que foi contratado, o que o aditivo contratou e o que continua com a MetalPrime.
