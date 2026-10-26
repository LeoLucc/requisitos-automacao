# 07 — Análise de Impacto da SM-01 — SENTINELA

> Convênio Fundepes nº 042/2026 · PTA v1.0 (20/02/2026) · Linha de base: PTA v1.0 + Requisitos v1.0 (24/04/2026)
> **Data: 17/07/2026** (Mês 5, Sprint S10) — 5 dias úteis após o registro da SM-01 (prazo do PTA §13, item 3: 10 dias úteis).
> Elaboração: Leonardo Lucca (PO) · Contribuições técnicas: Felipe Andrade Rocha (borda/backend), Thiago Melo Cavalcante (automação/Modbus), Dra. Aline Souza Medeiros (dados/ML), Lucas Henrique Barros (full stack) · Validação: Prof. Dr. Leandro Dias (Coordenador).
> Referências: Solicitação de Mudança SM-01, PTA v1.0 §3, §5, §7, §11–§13, Especificação de Requisitos v1.0, Matriz de Rastreabilidade, Backlog, Roadmap e Registro de Riscos.

---

## 1. Resumo executivo

| Item | Conclusão |
|---|---|
| Natureza da mudança | **Inclusão de meta** (META-5 / OBJ-05). Converte, com restrições, quatro itens explicitamente fora de escopo (FE-01, FE-02, FE-03, FE-04) e responde a uma premissa não confirmada (PREM-01) |
| Requisitos novos | 10 RF (RF-101..RF-110) e 5 RNF (RNF-101..RNF-105), na faixa reservada desde a linha de base (DEC-03) |
| Requisitos existentes impactados | 14 itens da linha de base precisam de ajuste de texto ou de escopo de verificação; **nenhum requisito aceito é invalidado**; RN-04 é mantida para o OEE |
| Esforço | **~2.150 horas-pessoa** de esforço direto, distribuído em 5 entregáveis (ENT-5.1..ENT-5.5) |
| Custo | **+R$ 180.000,00** — Pessoal R$ 128.000,00; Equipamentos R$ 22.000,00; Serviços de terceiros R$ 8.000,00; Diárias e passagens R$ 4.000,00; DOA Fundepes (10%) R$ 18.000,00 |
| Prazo | **+4 meses** → vigência até **30/06/2027** (16 meses). META-5 nos meses 9–16; META-4 desloca-se para os meses 14–16 |
| Por que não cabe hoje | Backlog restante (204 pts) + META-5 (~110 pts) = ~314 pts contra capacidade de ~284–296 pts até S26; consumiria toda a reserva de incerteza da META-3; rubrica de equipamentos já 100% executada; vedação do PTA §13, item 6 |
| Enquadramento P&D | META-5 tem incertezas técnicas próprias (IT-5, IT-6, IT-7), não triviais, que justificam o enquadramento na Lei de Informática |
| **Recomendação** | **Alternativa D — termo aditivo combinado (meta + valor + prazo)**, assinado antes de qualquer execução da META-5 |

---

## 2. Escopo da mudança e fronteiras

**OBJ-05 (proposto):** registrar, por número de série (DataMatrix), os parâmetros de solda, operador, célula, data/hora e resultado de inspeção de cada peça soldada na CEL-04, e enviá-los ao MES da Veltra (VeltraTrace, API REST) em até 5 min.

**META-5 (proposta):** Rastreabilidade por peça e integração com MES de cliente — meses 9–16.

| FE | Tratamento proposto |
|---|---|
| FE-01 Rastreabilidade por peça | Passa a ser escopo, **somente para a CEL-04** |
| FE-02 Integração MES/ERP | Passa a ser escopo **somente para o VeltraTrace**; outros MES/ERP continuam fora |
| FE-03 Protocolos além de OPC UA | Passa a ser escopo **somente para Modbus TCP da estação de inspeção da CEL-04**; PROFINET e EtherNet/IP continuam fora |
| FE-04 Leitura DataMatrix/QR | Passa a ser escopo (um leitor industrial, na CEL-04) |
| FE-05 Operação 24x7 com SLA | **Continua fora.** A meta de entrega de RNF-102 é critério de validação do piloto, não SLA |

---

## 3. Requisitos novos (faixa RF-101+ / RNF-101+)

Prioridade MoSCoW; todos com origem STK-06/STK-10 (via STK-06) e OBJ-05; vínculo META-5.

### 3.1 Requisitos funcionais

| ID | Requisito | CA principal (Dado / Quando / Então) | Prio | ENT |
|---|---|---|---|---|
| **RF-101** | **Modelo de dados do registro de rastreabilidade por peça.** Estrutura canônica com DataMatrix, parâmetros de solda do ciclo (corrente, tensão, velocidade de arame), operador, célula, data/hora e resultado de inspeção, versionada e mapeada ao contrato VeltraTrace | CA-RF101-1: Dado um lote de 1.000 registros de teste, quando validados contra o esquema, então deve haver 0 campos obrigatórios nulos e 100% de conformidade com o contrato OpenAPI aprovado | M | ENT-5.1 |
| **RF-102** | **Coleta Modbus TCP da estação de inspeção.** Cliente Modbus TCP no MP-Edge lendo, por ciclo, resultado (OK/NOK) e código de defeito da estação de inspeção da CEL-04, segundo mapa de registradores fornecido pela planta | CA-RF102-1: Dado o CLP de bancada Modbus simulando 500 ciclos, quando a inspeção terminar, então o resultado deve ser lido em 100% dos ciclos, com latência ≤ 1 s após o fim da inspeção | M | ENT-5.2 |
| **RF-103** | **Leitura de DataMatrix da peça.** Integração com leitor DataMatrix industrial na CEL-04, com validação de formato e tratamento de falha de leitura (registro "sem identificação" sinalizado) | CA-RF103-1: Dado um lote de teste de peças da CEL-04, quando lidas em condição de produção, então a taxa de leitura válida deve ser ≥ 99,5%, e toda falha deve gerar evento de exceção | M | ENT-5.3 |
| **RF-104** | **Vínculo dos parâmetros de solda ao número de série.** Agregação dos sinais por **ciclo de solda** (início/fim do programa) e associação ao DataMatrix lido | CA-RF104-1: Dado 300 ciclos de teste com sequência conhecida, quando processados, então os parâmetros devem estar associados ao DataMatrix correto em 100% dos ciclos (0 trocas de peça) | M | ENT-5.3 |
| **RF-105** | **Registro de operador, célula e data/hora por peça.** Operador logado no posto, identificação da célula e carimbo de tempo sincronizado | CA-RF105-1: Dado o gateway sincronizado por NTP, quando um registro for criado, então operador, célula e carimbo (desvio ≤ 100 ms vs. referência) devem estar presentes em 100% dos registros | M | ENT-5.3 |
| **RF-106** | **Vínculo do resultado de inspeção à peça (genealogia).** Correlação do resultado Modbus com o mesmo DataMatrix do ciclo de solda, considerando fila física de peças entre solda e inspeção | CA-RF106-1: Dado um cenário de teste com até 3 peças em trânsito entre solda e inspeção, quando a inspeção terminar, então o resultado deve ser associado ao DataMatrix correto em 100% dos casos | M | ENT-5.3 |
| **RF-107** | **Envio de registros ao VeltraTrace (API REST).** Publicação do registro completo, com tratamento dos códigos de resposta do VeltraTrace | CA-RF107-1: Dado o ambiente de homologação do VeltraTrace disponível, quando um ciclo terminar, então o registro deve ser aceito pelo VeltraTrace em ≤ 5 min | M | ENT-5.4 |
| **RF-108** | **Fila de envio com reenvio e idempotência.** Fila persistente com chave de idempotência por peça, reenvio com recuo exponencial e preservação de ordem por peça | CA-RF108-1: Dado o link com o VeltraTrace interrompido por 2 h, quando restabelecido, então 100% dos registros pendentes devem ser reenviados, sem duplicidade no destino | M | ENT-5.4 |
| **RF-109** | **Consulta de genealogia por número de série.** Consulta na plataforma SENTINELA e na API própria pelo DataMatrix | CA-RF109-1: Dado um DataMatrix existente, quando consultado, então o registro completo deve retornar em ≤ 2 s (p95) | S | ENT-5.1, ENT-5.3 |
| **RF-110** | **Monitoramento e reconciliação de envios.** Painel de pendências/rejeições e relatório diário de peças produzidas × aceitas pelo VeltraTrace | CA-RF110-1: Dado um dia de produção, quando o relatório for gerado, então todas as divergências (não enviadas, rejeitadas, duplicadas) devem estar listadas com motivo | M | ENT-5.4, ENT-5.5 |

### 3.2 Requisitos não funcionais

| ID | Categoria | Requisito | Métrica / critério | Prio | ENT |
|---|---|---|---|---|---|
| **RNF-101** | Integridade | Integridade do registro por peça entre borda e backend | 0 registros perdidos ou corrompidos no período de teste (verificação por hash e contagem) | M | ENT-5.3 |
| **RNF-102** | Desempenho (entrega) | Prazo de entrega ao MES | ≥ 99,5% dos registros entregues ao VeltraTrace em ≤ 5 min (p99,5), medido no piloto (CS-10). Meta de validação, sem SLA (FE-05) | M | ENT-5.4, ENT-5.5 |
| **RNF-103** | Recursos de borda | Coleta adicional dentro dos limites do MP-Edge (RST-03) | Com OPC UA + Modbus TCP + DataMatrix + fila de envio + inferência embarcada, CPU ≤ 70% e memória ≤ 75% em regime | M | ENT-5.2 |
| **RNF-104** | Segurança | Segurança da integração externa | HTTPS/TLS 1.2+ com autenticação do VeltraTrace; credenciais em cofre/arquivo cifrado; zero credenciais em texto claro; revisão de segurança independente da integração | M | ENT-5.1, ENT-5.4 |
| **RNF-105** | Retenção / auditoria | Retenção e auditabilidade da rastreabilidade | Registros por peça retidos e consultáveis durante todo o piloto (e exportáveis à MetalPrime na transferência), com trilha de auditoria imutável (IATF 16949) | M | ENT-5.3, ENT-5.5 |

---

## 4. Requisitos existentes impactados (linha de base v1.0)

Nenhum requisito aceito perde validade. Os ajustes abaixo entram na versão de requisitos posterior ao aditivo.

| Item da linha de base | Impacto | Tipo de ajuste |
|---|---|---|
| **RN-04** — Granularidade mínima do OEE = equipamento × turno | **Mantida para o OEE.** A rastreabilidade é um registro paralelo; nota explicativa substitui "Não existe registro por peça (FE-01)" por "O OEE não usa registro por peça; a rastreabilidade (META-5) é tratada em RF-101..RF-110" | Texto |
| RN-01 / DEC-04 — Qualidade por contadores agregados | Sem alteração. O resultado de inspeção por peça **não** substitui os contadores do OEE (evita reabrir ENT-2.1, já aceito) | Nenhum (confirmação) |
| RF-004 — Carimbo de tempo e NTP | A mesma base de tempo passa a valer para eventos Modbus e leituras DataMatrix (pré-condição de RF-105/RF-106) | Escopo de verificação ampliado |
| RF-005 / RNF-004 — Store-and-forward e autonomia ≥ 72 h | O buffer passa a conter também registros por peça; dimensionamento revisto para manter ≥ 72 h dos agregados **e** dos registros | Revisão de capacidade |
| RF-006 / DEC-05 — Agregação em janelas de 1 s | Mantida; acrescenta-se agregação por ciclo de solda, derivada das mesmas janelas (sem envio de sinal bruto) | Extensão |
| RF-008 — Autodiagnóstico do gateway | Inclui estado da sessão Modbus, do leitor DataMatrix e ocupação da fila de envio | Extensão |
| RF-017 — API própria; "não há envio ativo a terceiros (FE-02)" | Texto passa a "exceto o envio ao VeltraTrace (META-5)"; a API própria ganha o recurso de genealogia (RF-109) | Texto + extensão |
| RF-019 / RNF-008 — Perfis RBAC | Novo perfil **Qualidade** (consulta de genealogia e reconciliação) | Extensão |
| RF-026 — Log de evidências do piloto | Inclui envios, rejeições e reconciliação (evidência cruzada com ENT-5.5) | Extensão |
| RF-027 / RNF-013 — Instalação reprodutível e transferibilidade | Pacote e manuais incluem componentes da META-5; treinamento ≥ 16 h mantido, com conteúdo ampliado | Escopo de verificação ampliado |
| RF-028 — Trilha de auditoria de configuração | Inclui mapa de registradores Modbus, configuração do leitor e credenciais/endpoints da integração | Extensão |
| RNF-003 — CPU ≤ 70% / memória ≤ 75% | Orçamento de recursos do MP-Edge repartido entre OEE, inferência (ENT-3.3) e META-5; verificado em conjunto por RNF-103 | Verificação conjunta |
| RNF-006 / RNF-007 — Criptografia e pentest | O pentest do mês 8 cobre a linha de base; a integração externa recebe revisão de segurança complementar (rubrica de serviços do aditivo) antes do ENT-4.2 | Escopo complementar |
| RNF-009 — Retenção | Acrescenta retenção dos registros por peça (RNF-105) | Extensão |
| Critérios de sucesso | CS-04 e CS-05 passam ao mês 16; criação de **CS-10** (≥ 99,5% das peças entregues ao VeltraTrace em ≤ 5 min no piloto) | Cronograma + novo CS |

---

## 5. Impacto em arquitetura

### 5.1 Visão geral

```
 CEL-04                                 MP-Edge (borda)                                   Backend SENTINELA          Veltra
 ┌──────────────────┐   OPC UA    ┌──────────────────────────────────────────┐   MQTT/TLS   ┌───────────────────┐
 │ Robôs + CLP célula├───────────▶│ Coletor OPC UA (ENT-1.3)                 │─────────────▶│ OEE / alertas     │
 └──────────────────┘             │   └─ agregação 1 s + **por ciclo** (novo) │              │ (META-2/3)        │
 ┌──────────────────┐ Modbus TCP  │ **Coletor Modbus TCP** (ENT-5.2)          │              │ **Genealogia**    │  HTTPS/TLS  ┌────────────┐
 │ Estação inspeção ├───────────▶│ **Leitor DataMatrix** (ENT-5.3)           │─────────────▶│ (RF-109, RNF-105) │────────────▶│ VeltraTrace│
 └──────────────────┘             │ **Correlacionador peça–ciclo–inspeção**  │              │ **Fila idempotente│◀────────────│ (API REST) │
 ┌──────────────────┐ TCP/serial  │ **Buffer de registros por peça**          │              │ + reconciliação** │   ack/erro  └────────────┘
 │ Leitor DataMatrix├───────────▶│                                           │              │ (RF-107/108/110)  │
 └──────────────────┘             └──────────────────────────────────────────┘              └───────────────────┘
```

### 5.2 Decisões arquiteturais propostas

| # | Componente | Proposta | Racional |
|---|---|---|---|
| ARQ-01 | **Coletor Modbus TCP** | Módulo cliente Modbus TCP no MP-Edge, com *polling* do registrador de "inspeção concluída" (≤ 200 ms) e leitura do bloco de resultado; mapa de registradores versionado como as tags OPC UA (RF-002) | Atende PREM-01 não confirmada sem conversor externo; mantém configuração por arquivo |
| ARQ-02 | **Leitura DataMatrix** | Leitor industrial fixo na entrada da célula, integrado por TCP; a leitura abre a "ficha" da peça antes da solda | Garante o número de série antes do ciclo, evitando correlação retroativa |
| ARQ-03 | **Correlacionador peça–ciclo–inspeção** | Máquina de estados na borda com fila FIFO das peças em trânsito (solda → inspeção), sincronizada pelo relógio NTP (RF-004) e confirmada por sinais de presença do CLP | Núcleo da incerteza IT-5; precisa tolerar retrabalho, peça retirada e falha de leitura |
| ARQ-04 | **Envio ao VeltraTrace pelo backend** | O registro é consolidado na borda, publicado via MQTT/TLS (DEC-02) e enviado ao VeltraTrace pelo backend | Credenciais da integração ficam fora da planta; reaproveita store-and-forward já validado |
| ARQ-05 | **Fila de envio idempotente** | Fila persistente com chave de idempotência = DataMatrix + carimbo do ciclo; *retry* com recuo exponencial; estado por registro (pendente, enviado, aceito, rejeitado); semântica "pelo menos uma vez" na rede + deduplicação = "efetivamente uma vez" no destino | Necessária para RF-108 e RNF-102 sob conectividade intermitente (RSK-11) |
| ARQ-06 | **Orçamento de recursos da borda** | Medição conjunta OPC UA + Modbus + leitor + fila + inferência embarcada no ENT-5.2; perfil de referência de ENT-1.4 (pico de CPU de 41% na coleta) | RNF-103 / RST-03; interação com RSK-05 |

---

## 6. Estimativa de esforço e custo de pessoal

### 6.1 Método

- Estimativa *bottom-up* por entregável, feita pela equipe técnica em sessão de 15–16/07/2026 (planning poker com histórias preliminares do futuro épico EP-05), convertida em horas pela relação histórica do projeto (S1–S9).
- O esforço é **direto** (horas apontáveis em itens da META-5). O custo usa o **custo mensal total por papel do PTA §11.1** (remuneração + encargos + provisões, ou bolsa), multiplicado pelos meses-pessoa contratados no período adicional.
- Referência de capacidade do PTA §11.1: 13.900 horas-pessoa / 12 meses → **~165,5 h/mês** por pessoa a 40 h/sem e ~82,75 h/mês a 20 h/sem.

### 6.2 Esforço por entregável (horas-pessoa diretas)

| ENT | Mês | PO | Eng. sênior | Full stack | Eng. automação | Cient. dados | Bolsista | **Total** |
|---|---|---|---|---|---|---|---|---|
| ENT-5.1 Especificação e contrato VeltraTrace | 9 | 90 | 60 | 30 | 40 | 20 | 20 | **260** |
| ENT-5.2 Coletor Modbus TCP | 11 | 20 | 60 | 0 | 240 | 20 | 40 | **380** |
| ENT-5.3 DataMatrix e genealogia | 12 | 60 | 170 | 140 | 120 | 70 | 60 | **620** |
| ENT-5.4 Integração MES ≤ 5 min | 13 | 50 | 200 | 150 | 0 | 50 | 70 | **520** |
| ENT-5.5 Validação de rastreabilidade | 16 | 80 | 30 | 60 | 80 | 60 | 60 | **370** |
| **Total por papel** | | **300** | **520** | **380** | **480** | **220** | **250** | **2.150** |

Notas: o cientista de dados atua na qualidade dos dados de ciclo, na análise de exceções de leitura e correlação e na reconciliação estatística do piloto. O bolsista atua em testes de leitura, bancada Modbus, massa de testes e relatórios de reconciliação.

### 6.3 Custo de pessoal — R$ 128.000,00

O aditivo **não remunera em dobro** quem já é pago pelo orçamento original nos meses 9–12. O mecanismo é este:

1. Nos meses 9–12, parte da capacidade da equipe, já paga pelo orçamento original, passa para a META-5. Isso é possível porque a META-4 (meses 10–12 na v1.0) sai desse período.
2. A META-4, já orçada no PTA original, e o restante da META-5 passam aos **meses 13–16**, que **não têm cobertura** no orçamento original (RST-01/RST-02).
3. O pessoal do aditivo paga, portanto, os **meses 13–16** com **dedicação ajustada** por papel e mais **6 bolsa-meses**.

| Papel | Custo mensal (PTA §11.1) | Dedicação meses 13–16 | Meses-pessoa | Total (R$) |
|---|---|---|---|---|
| Product Owner | 6.500,00 | 75% (30 h/sem) | 3,0 | 19.500,00 |
| Engenheiro de software sênior | 8.500,00 | 100% (40 h/sem) | 4,0 | 34.000,00 |
| Desenvolvedor full stack | 6.000,00 | 87,5% (35 h/sem) | 3,5 | 21.000,00 |
| Engenheiro de automação | 7.000,00 | 100% (40 h/sem) | 4,0 | 28.000,00 |
| Cientista de dados (ML) | 7.000,00 | 75% (30 h/sem) | 3,0 | 21.000,00 |
| Bolsista de IT adicional (3º bolsista, 20 h/sem) | 750,00 | meses 11–16 | 6,0 bolsa-meses | 4.500,00 |
| Coordenador (docente) | — | 10 h/sem, sem remuneração | — | 0,00 |
| **Total Pessoal (aditivo)** | | | **17,5 MP CLT + 6 bolsa-meses** | **128.000,00** |

**Por que dedicação ajustada:** nos meses 13–16, a META-3 já estará encerrada (mês 11). O pico de trabalho fica na integração (engenheiro sênior), no piloto com Modbus (engenheiro de automação) e na validação. PO, full stack e cientista de dados ficam com dedicação parcial, o que evita pagar capacidade ociosa. O Coordenador formaliza a redução de jornada por termo junto à Fundepes, conforme suas normas.

**Por que um bolsista adicional, e nos meses 11–16:** os dois bolsistas atuais estão alocados à META-3 (ENT-3.1 a ENT-3.4) até o mês 12, após o encerramento da META-2 no mês 7. O pico de testes da META-5 (bancada Modbus, lotes de leitura DataMatrix, reconciliação) começa no mês 11. O 3º bolsista é custeado pelo aditivo desde a assinatura e não se sobrepõe a bolsas já pagas.

### 6.4 Conciliação horas × custo

| Item | Horas-pessoa |
|---|---|
| Capacidade contratada pelo aditivo: 17,5 MP × 165,5 h + 6 × 82,75 h | ~3.393 |
| (−) Esforço direto da META-5 executado com essa capacidade ou com a capacidade liberada nos meses 9–12 (contabilização líquida) | 2.150 |
| (=) Custo fixo da extensão de 4 meses: ritos Scrum, gestão do convênio e relatórios à Fundepes no período adicional, replanejamento e revalidação do plano da META-4 (ENT-4.1), deslocamentos e integração de segurança na Ferraz, férias e feriados provisionados no custo mensal | ~1.243 |

Em termos líquidos, o projeto ganha 2.150 horas-pessoa de trabalho novo e paga 4 meses adicionais de equipe parcial. O índice resultante, de **~R$ 59,53 por hora direta** (128.000 ÷ 2.150), é maior que a média do PTA original (R$ 438.000 ÷ 13.900 ≈ R$ 31,51/h contratual). A diferença vem de três fatores: (i) mix mais sênior (engenheiro sênior e engenheiro de automação concentram 46% das horas); (ii) horas diretas comparadas com horas contratuais; (iii) custo fixo da extensão. A memória de cálculo fica à disposição da Fundepes.

---

## 7. Impacto em orçamento (aditivo)

| Rubrica (aditivo) | Valor (R$) | Memória de cálculo |
|---|---|---|
| Pessoal | **128.000,00** | §6.3 |
| Equipamentos (CLP de bancada Modbus + leitor DataMatrix industrial) | **22.000,00** | CLP de bancada com Modbus TCP, módulo de E/S e fonte: R$ 9.500,00 · Leitor DataMatrix industrial fixo, com iluminação e licença de decodificação: R$ 12.500,00 |
| Serviços de terceiros | **8.000,00** | Extensão da infraestrutura de nuvem de homologação por 4 meses: R$ 4.700,00 · Revisão de segurança independente da integração externa (RNF-104): R$ 3.300,00 |
| Diárias e passagens | **4.000,00** | 2 missões curtas Maceió–Betim (1 pessoa, cerca de R$ 2.000,00 cada): instalação do leitor e do coletor Modbus na CEL-04 e acompanhamento do piloto ampliado |
| Despesas operacionais e administrativas (Fundepes, 10%) | **18.000,00** | 10% do valor do aditivo |
| **Total** | **180.000,00** | Novo valor global: **R$ 780.000,00** |

Material de consumo: não há acréscimo. O saldo da rubrica original (R$ 8.800,00 em 30/06/2026) cobre cabos e conectores adicionais.

Proposta de desembolso do aditivo, a confirmar com a MetalPrime e a Fundepes: **R$ 100.000,00** na assinatura e **R$ 80.000,00** no aceite do ENT-5.3.

---

## 8. Impacto em prazo e cronograma

### 8.1 Cronograma proposto (v2.0)

Mês 13 = março/2027 · Mês 16 = junho/2027. Sprints adicionais S27 (01/03/2027) a S34 (07/06–18/06/2027), mais o fechamento até 30/06/2027.

| Meta / ENT | M7 | M8 | M9 | M10 | M11 | M12 | M13 | M14 | M15 | M16 |
|---|---|---|---|---|---|---|---|---|---|---|
| META-2 (fim) | ◆ | | | | | | | | | |
| META-3 | ■ | ■ | ■ (ENT-3.2) | ■ | ◆ ENT-3.3/3.4 | | | | | |
| **META-5** | | | ◆ ENT-5.1 | ■ | ◆ ENT-5.2 | ◆ ENT-5.3 | ◆ ENT-5.4 | ■ | ■ | ◆ ENT-5.5 |
| **META-4** (deslocada) | | | | | | | | ◆ ENT-4.1 | ■ (piloto) | ◆ ENT-4.2/4.3/4.4 |

### 8.2 Caminho crítico

**Assinatura do aditivo (até o mês 8) → ENT-5.1 (mês 9; depende de homologação VeltraTrace, PREM-07) → ENT-5.2 (mês 11) → ENT-5.3 (mês 12) → ENT-5.4 (mês 13) → ENT-4.1 (mês 14) → piloto de no mínimo 4 semanas com OEE, alertas e rastreabilidade (meses 14–16) → ENT-5.5 e ENT-4.2 (mês 16).**

- Folga total: ~2 semanas (de 18/06 a 30/06/2027).
- O piloto ampliado não pode começar antes do ENT-5.4. Por isso a META-4 vai para os meses 14–16 e não para 13–15.
- META-3 e os desembolsos originais (3ª parcela em 01/09/2026; 4ª em 01/12/2026) **não mudam**.

---

## 9. Por que a mudança NÃO cabe no saldo e na equipe atuais

### 9.1 Capacidade

| Indicador (08/07/2026) | Valor |
|---|---|
| Backlog restante da linha de base | 204 pts (24 em curso + 180 a fazer) |
| Velocidade média S1–S9 / S7–S9 | 17,4 / 16,7 pts por sprint |
| Sprints restantes na vigência original | 17 (S10–S26) |
| Capacidade até S26 | ~284 pts (a 16,7) a ~296 pts (a 17,4) |
| Folga atual | ~80–92 pts (~30%), **reservada para a incerteza de P&D da META-3** (IT-2/IT-3, RSK-03, RSK-04) |
| META-5 estimada | ~110 pts (EP-05 preliminar), equivalentes a ~2.150 h diretas |
| **Demanda total se absorvida** | **~314 pts** → déficit de 18 a 30 pts e **folga zero ou negativa** |

### 9.2 Cenário B ("absorver sem aditivo") quantificado

| Efeito | Quantificação |
|---|---|
| Sprints necessários a 16,7 pts/sprint | 314 ÷ 16,7 ≈ **18,8 sprints** contra 17 disponíveis → estouro de ~2 sprints (~1 mês) **mesmo sem nenhum imprevisto** |
| Concorrência de pessoas nos meses 9–11 | Engenheiro sênior e cientista de dados são críticos em ENT-3.2/ENT-3.3 (US-026 e US-027, 21 pts cada) **e** em ENT-5.3/ENT-5.4. Na prática, a META-3 perde 35–40% da capacidade desses papéis no pico |
| Atraso provável na META-3 | ENT-3.3/ENT-3.4 do mês 11 para os meses 13–14 (**+2 a 3 meses**), fora da vigência |
| META-4 | Piloto de no mínimo 4 semanas (ENT-4.2) inviável até 28/02/2027 → **atraso de ~3 a 4 meses** em META-3/META-4, sem cobertura contratual |
| Risco de não atingir CS-03 | Sem a reserva de ~30% para experimentação (≥ 3 técnicas, quantização, poda), sobe a probabilidade de RSK-04: estimativa de P de 3 para 4–5 (exposição ≥ 16) |
| Desembolso | 4ª parcela (R$ 120.000, aceite de ENT-3.1/3.2 em 01/12/2026) em risco. O saldo em conta (R$ 95.100 em 30/06) cobre só ~2,5 meses de pessoal |
| Equipamentos | Rubrica 100% executada: **não há como comprar** CLP Modbus e leitor DataMatrix (R$ 22.000) sem aditivo ou remanejamento que mutilaria outra rubrica |
| Equipe | Horas extras de 2,1% para > 10% estimados (CS-09 ≤ 5%); RSK-10 (saída de membro) sobe |
| Conformidade | Viola PTA §13, item 6 e CS-07; executar escopo fora do PTA aumenta o risco de glosa e de questionamento do enquadramento (RSK-12, RST-05) |

**Conclusão:** absorver não é "gratuito". O custo é transferido para a META-3 (núcleo de P&D do convênio), para o prazo e para a equipe, sem base contratual.

---

## 10. Novos riscos e premissas

### 10.1 Riscos novos (escala do Registro de Backlog e Riscos §6)

| ID | Risco | P | I | Exp. | Resposta | Dono |
|---|---|---|---|---|---|---|
| RSK-13 | Ambiente de homologação ou contrato da API VeltraTrace indisponível ou instável até o mês 9 | 3 | 4 | 12 | Mitigar: condicionante da aprovação (PREM-07); simulador do VeltraTrace a partir do OpenAPI (ENT-5.1); escalonamento via STK-06 | Leonardo Lucca (PO) |
| RSK-14 | Coleta multiprotocolo + fila + inferência excedem CPU/memória do MP-Edge (RNF-103, RST-03) | 3 | 4 | 12 | Mitigar: medição conjunta no ENT-5.2; *polling* Modbus de baixa frequência; priorização de processos | Felipe Andrade Rocha |
| RSK-15 | Taxa de leitura DataMatrix < 99,5% por respingos, oxidação ou marcação de baixa qualidade nas peças | 3 | 4 | 12 | Mitigar: ensaio de leitura na visita do mês 9; ajuste de posição e iluminação; registro de exceção (RF-103) | Thiago Melo Cavalcante |
| RSK-16 | Trâmite do aditivo após o mês 8 reduz a janela da META-5 | 2 | 4 | 8 | Mitigar: dossiê completo (esta análise + PTA v2.0) e submissão até 05/08/2026; acompanhamento semanal com a Fundepes | Prof. Dr. Leandro Dias |
| RSK-17 | Sobreposição dos picos da META-3 e da META-5 nos meses 9–11 | 3 | 3 | 9 | Mitigar: META-5 nos meses 9–11 concentrada em especificação e Modbus (PO, engenheiro de automação, bolsista); engenheiro sênior entra com força a partir do mês 11 | Leonardo Lucca (PO) |
| RSK-18 | Correlação peça–ciclo–inspeção falha em retrabalho ou retirada manual de peça (IT-5) | 3 | 4 | 12 | Mitigar: modelagem dos fluxos de exceção com a Ferraz no ENT-5.1; testes com cenários de fila (CA-RF106-1) | Felipe Andrade Rocha |

Riscos existentes: **RSK-01** e **RSK-02** passam a "Materializado — tratado pela SM-01". RSK-05 é reavaliado em conjunto com RSK-14. RSK-09 ganha o escopo complementar de revisão da integração.

### 10.2 Premissas novas

| ID | Premissa | Responsável |
|---|---|---|
| PREM-07 | A MetalPrime viabiliza junto à Veltra o contrato de API e o acesso ao ambiente de homologação do VeltraTrace até o mês 9 | MetalPrime |
| PREM-08 | A Autopeças Ferraz autoriza a instalação do leitor DataMatrix, o acesso ao CLP da estação de inspeção e a operação assistida do piloto ampliado nos meses 14–16 (substitui a janela de PREM-05) | MetalPrime / Ferraz |
| PREM-09 | A Ferraz ou o fabricante do CLP de inspeção fornece o mapa de registradores Modbus até o mês 9 | MetalPrime / Ferraz |

---

## 11. Alternativas avaliadas

| | A — Rejeitar | B — Absorver sem aditivo | C — Aditivo só de prazo | **D — Aditivo de meta + valor + prazo** |
|---|---|---|---|---|
| Descrição | Manter a linha de base; MetalPrime busca a solução fora do convênio | Executar a META-5 com equipe e saldo atuais, sem formalização | Prorrogar 4 meses sem novo recurso nem nova meta | Incluir META-5/OBJ-05, +R$ 180.000,00, +4 meses (até 30/06/2027) |
| Prós | Protege META-1..4; zero risco contratual | Nenhum trâmite; "resposta rápida" ao cliente | Trâmite mais simples; dá tempo | Escopo, custo e prazo cobertos; META-3 preservada; enquadramento P&D documentado; equipamentos custeados |
| Contras | MetalPrime perde competitividade no automotivo; perde-se P&D de alto valor no próprio produto; desgaste com a financiadora | Déficit de ~30 pts e folga zero; atraso de ~3–4 meses em META-3/META-4; sem dinheiro para equipamentos; violação do PTA §13, item 6; risco de glosa e de CS-03 | Não paga pessoal dos meses 13–16 nem equipamentos; a META-5 continua sem cobertura de meta (seria escopo informal); **não atende o PTA §13, item 5**, porque há inclusão de meta | Exige aprovação da MetalPrime e da Fundepes antes de executar; início da META-5 só no mês 9 |
| Custo para a MetalPrime | R$ 0 (custo de oportunidade alto) | R$ 0 aparente (custo oculto alto) | R$ 0 a mais, mas insuficiente | R$ 180.000,00 |
| Atende a exigência Veltra? | Não | Parcialmente e com alto risco | Não de forma sustentável | **Sim**, com validação em produção até jun/2027 |
| **Parecer** | Não recomendada | **Não recomendada** | Não recomendada | **Recomendada** |

---

## 12. Impacto no enquadramento P&D (Lei de Informática)

A META-5 não é apenas "integrar um sistema". Ela traz **incerteza técnica nova** no mesmo produto habilitado (MP-Edge), com resultado que não pode ser obtido por aplicação direta de solução pronta:

| # | Incerteza técnica nova | Por que não é trivial | ENT que a investiga |
|---|---|---|---|
| **IT-5** | **Correlação determinística peça–ciclo–inspeção na borda**, a partir de três fontes assíncronas (OPC UA, Modbus TCP e leitor DataMatrix) com bases de tempo distintas e peças em trânsito | Não há sinal comum de identidade de peça entre os equipamentos; é preciso inferir a associação com 0 troca em 100% dos casos de teste, inclusive em retrabalho ou retirada | ENT-5.1, ENT-5.3 |
| **IT-6** | **Coleta multiprotocolo concorrente com inferência embarcada** dentro dos limites do MP-Edge (RST-03) | O perfil de carga de ENT-1.4 só cobre OPC UA. A interação com Modbus, leitor, fila e modelos de ENT-3.3 não é conhecida e só se resolve por experimento | ENT-5.2 |
| **IT-7** | **Entrega "efetivamente uma vez" em ≤ 5 min (p99,5)** com conectividade intermitente e buffer limitado na borda | Combinar idempotência, ordem por peça, recuo exponencial e capacidade finita de buffer, com meta estatística de prazo, exige modelagem e ensaios de falha | ENT-5.4, ENT-5.5 |

**Atividades da META-5 que não são P&D**, e por isso ficam com a MetalPrime ou fora do convênio (PTA §3.3): implantação em outras células ou plantas, adaptação a outros MES de clientes, operação contínua da integração após a transferência e suporte com SLA (FE-05).

A rastreabilidade requisito → ENT → META-5 → IT-5..IT-7 será incorporada à matriz v1.1 e ao relatório técnico (ENT-5.5). Isso reforça CS-08 e reduz RSK-12.

---

## 13. Recomendação

1. **Aprovar a SM-01 na alternativa D:** inclusão da META-5 (meses 9–16) e do OBJ-05; deslocamento da META-4 para os meses 14–16; **+4 meses** (vigência até 30/06/2027); **+R$ 180.000,00** (total R$ 780.000,00), com as rubricas da §7; esforço de ~2.150 horas-pessoa.
2. **Condicionantes:** FE-02 restrito ao VeltraTrace; FE-03 restrito a Modbus TCP da estação de inspeção da CEL-04; FE-05 mantido fora; RN-04 mantida para o OEE; PREM-07..PREM-09 assumidas pela MetalPrime.
3. **Nenhuma atividade da META-5 antes da assinatura do termo aditivo** (PTA §13, itens 5 e 6). Até lá, só as atividades já previstas na linha de base (ex.: mapeamento da estação de inspeção ligado a RSK-01).

## 14. Próximos passos

| # | Ação | Responsável | Data |
|---|---|---|---|
| 1 | CCB de deliberação técnica | Coordenador, PO, Juliana Prado | 21/07/2026 |
| 2 | Aprovação formal da MetalPrime (Diretoria Industrial e P&D) | Roberto Siqueira Campos; Eng. Juliana Mendes Prado | 31/07/2026 |
| 3 | Montagem do dossiê: justificativa do aditivo, PTA v2.0 e plano de aplicação | PO + Coordenador | até 04/08/2026 |
| 4 | Submissão à Fundepes | Prof. Dr. Leandro Dias | 05/08/2026 |
| 5 | Assinatura do termo aditivo nº 01 | Partes | 02/09/2026 (previsão) |
| 6 | Linha de base v2.0: requisitos (RF-101..RF-110, RNF-101..RNF-105), matriz v1.1, épico EP-05 e registro de riscos e premissas | PO | após a assinatura |
| 7 | Compra do CLP de bancada Modbus e do leitor DataMatrix; contratação do 3º bolsista (início no mês 11) | Coordenador / Fundepes | após a assinatura |
