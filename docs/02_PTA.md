# PLANO DE TRABALHO (PTA) — v1.0

**Convênio Fundepes nº 042/2026 — Projeto SENTINELA**
**Plataforma de Monitoramento de OEE e Manutenção Preditiva para Células Robotizadas de Solda, embarcada no gateway MP-Edge**

| Item | Valor |
|---|---|
| Versão | 1.0 |
| Situação | Aprovado em 20/02/2026 |
| Elaboração | Product Owner do projeto, com a Coordenação do LASIN |
| Natureza | Projeto de P&D — Lei nº 8.248/1991 (Lei de Informática) e alterações |

---

## 1. Identificação

### 1.1 Partes

| Papel | Instituição | Observações |
|---|---|---|
| Executor | LASIN — Laboratório de Sistemas Inteligentes, vinculado a universidade federal em Maceió/AL | Execução técnico-científica |
| Fundação de apoio | Fundepes | Gestão administrativa e financeira do convênio |
| Empresa parceira/financiadora | MetalPrime Automação Industrial Ltda., Contagem/MG | Fabricante dos gateways IoT industriais (linha MP-Edge) e de controladores de célula, bens habilitados à Lei de Informática; aporta os recursos como parte da sua obrigação de investimento em P&D |
| Local da validação piloto | Autopeças Ferraz S.A., Betim/MG (fornecedor Tier 1 e cliente da MetalPrime) | Célula robotizada de solda piloto CEL-04; acesso viabilizado pela MetalPrime (PREM-02) |

### 1.2 Dados do projeto

| Item | Valor |
|---|---|
| Título | SENTINELA — Plataforma de Monitoramento de OEE e Manutenção Preditiva para Células Robotizadas de Solda, embarcada no gateway MP-Edge |
| Instrumento | Convênio Fundepes nº 042/2026 |
| Vigência | 01/03/2026 a 28/02/2027 (12 meses) |
| Valor global | R$ 600.000,00 (seiscentos mil reais) |
| Coordenador | Prof. Dr. Leandro Dias (docente do LASIN) — 10 h/semana |
| Interlocutor técnico da MetalPrime | Eng. Juliana Mendes Prado, Gerente de P&D |
| Gestora do convênio na Fundepes | Adm. Carla Beatriz Lins, Analista de Projetos |

Convenção de meses: Mês 1 = março/2026 e Mês 12 = fevereiro/2027.

---

## 2. Contextualização e justificativa

A MetalPrime fabrica gateways IoT industriais (linha MP-Edge) e controladores de célula. Também integra células robotizadas de solda para fornecedores do setor automotivo. Os clientes dessas células, fornecedores Tier 1 como a Autopeças Ferraz, não têm hoje uma visão contínua da eficiência global (OEE) nem do estado de saúde dos componentes críticos: tochas, alimentadores de arame e servos. Por isso, a manutenção é corretiva ou feita por calendário, com paradas não planejadas e perda de produtividade.

A MetalPrime quer diferenciar o MP-Edge no mercado. Para isso, o gateway precisa deixar de ser só um concentrador de dados e passar a oferecer, na borda (edge), inteligência analítica embarcada: cálculo de OEE e detecção de anomalias com antecipação de falhas. Para chegar lá, é preciso resolver problemas técnicos que ainda não têm solução pronta. O hardware tem recursos limitados (CPU, memória, armazenamento). Os sinais de processo de solda chegam em alta frequência. A latência precisa ser baixa. E faltam modelos preditivos validados para esse tipo de equipamento.

O LASIN tem competência em sistemas inteligentes, aprendizado de máquina e sistemas embarcados. Isso o torna o parceiro adequado para conduzir a pesquisa e transferir à MetalPrime os resultados e o conhecimento gerados.

---

## 3. Enquadramento como P&D (Lei de Informática)

### 3.1 Incerteza técnica

| # | Incerteza | Por que não é trivial |
|---|---|---|
| IT-1 | **Latência e volume na borda:** coletar via OPC UA e pré-processar sinais de solda (corrente, tensão, velocidade de arame) em alta taxa dentro dos limites de CPU e memória do MP-Edge | Não existe um perfil de carga conhecido para esse hardware com esse tipo de sinal. Será preciso investigar amostragem, buffering, compressão e agregação |
| IT-2 | **Modelos de detecção de anomalias e de previsão de falha** de tochas, alimentadores e servos, com dados desbalanceados (poucas falhas registradas) | Não se sabe de antemão qual combinação de técnicas e atributos atinge desempenho útil com os dados disponíveis |
| IT-3 | **Execução embarcada dos modelos** (inferência na borda), com quantização e redução de modelo | Há um compromisso entre acurácia e custo computacional que só se resolve experimentalmente |
| IT-4 | **Cálculo confiável de OEE por célula e turno** a partir de sinais brutos de CLP/robô, sem apontamento manual | É preciso inferir estados de máquina (produzindo, parada, setup) a partir dos sinais, com regras e heurísticas a validar |

### 3.2 Novidade

O resultado esperado é uma arquitetura de borda com analítica preditiva embarcada em um produto nacional habilitado à Lei de Informática. Isso inclui algoritmos e modelos próprios, ajustados ao processo de solda robotizada. A novidade é tecnológica, no nível da empresa e do produto: hoje a linha MP-Edge não tem essa capacidade.

### 3.3 Atividades de P&D e atividades que não são P&D

| Atividades de P&D (objeto do convênio) | Atividades que não são P&D (ficam com a MetalPrime ou fora do projeto) |
|---|---|
| Pesquisa da arquitetura de coleta e processamento na borda (IT-1) | Fabricação, montagem e certificação dos gateways MP-Edge |
| Experimentos de desempenho (latência, throughput, uso de recursos) | Comercialização, precificação e marketing do produto |
| Pesquisa e desenvolvimento de algoritmos de inferência de estados e cálculo de OEE (IT-4) | Suporte técnico em produção e operação contínua (ver FE-05) |
| Pesquisa, treinamento e avaliação de modelos de anomalia e previsão (IT-2) | Customizações para clientes específicos da MetalPrime fora da CEL-04 |
| Otimização e embarque de modelos (IT-3) | Instalação comercial em escala em outras plantas |
| Protótipo funcional da plataforma e validação experimental em ambiente produtivo (piloto) | Treinamento comercial de usuários finais |
| Documentação técnico-científica e transferência de tecnologia | Manutenção corretiva da célula CEL-04 em si |

---

## 4. Objetivos

### 4.1 Objetivo geral

Pesquisar e desenvolver uma plataforma de monitoramento de OEE e manutenção preditiva, embarcada no gateway MP-Edge, para células robotizadas de solda. A plataforma será validada em ambiente produtivo e transferida à MetalPrime.

### 4.2 Objetivos específicos

- **OBJ-01:** Coletar dados de processo e estado dos robôs e CLPs das células via OPC UA no gateway MP-Edge.
- **OBJ-02:** Calcular e exibir o OEE (disponibilidade, performance e qualidade) por célula e por turno.
- **OBJ-03:** Detectar anomalias e antecipar falhas (manutenção preditiva) de tochas, alimentadores de arame e servos.
- **OBJ-04:** Validar a plataforma em ambiente produtivo (célula piloto CEL-04, na Autopeças Ferraz) e transferir a tecnologia à MetalPrime.

---

## 5. Metas, etapas e entregáveis

| Meta | Descrição | Meses | Objetivo atendido |
|---|---|---|---|
| META-1 | Arquitetura e aquisição de dados OPC UA no MP-Edge | 1–3 | OBJ-01 |
| META-2 | Plataforma de monitoramento de OEE (backend + dashboards web) | 3–7 | OBJ-02 |
| META-3 | Modelos de detecção de anomalias e manutenção preditiva | 6–11 | OBJ-03 |
| META-4 | Validação piloto na CEL-04 e transferência de tecnologia | 10–12 | OBJ-04 |

### META-1 — Arquitetura e aquisição de dados OPC UA no MP-Edge (meses 1–3)

| ENT | Entregável | Descrição | Mês | Indicador de verificação / evidência |
|---|---|---|---|---|
| ENT-1.1 | Documento de visão, stakeholders e requisitos de linha de base | Visão do produto, mapa de stakeholders, requisitos iniciais e glossário, com rastreabilidade aos OBJ e às metas | 2 | Documento versionado no repositório e aprovado em ata pela MetalPrime |
| ENT-1.2 | Documento de arquitetura de borda | Arquitetura de software do MP-Edge (coleta, buffer, processamento, publicação), modelo de informação OPC UA e decisões de projeto | 2 | Documento aprovado em revisão técnica, com ata assinada |
| ENT-1.3 | Módulo coletor OPC UA embarcado | Software de coleta OPC UA rodando no MP-Edge e lendo as variáveis definidas de robôs e CLPs | 3 | Código no repositório (tag de release) e demonstração em bancada registrada em ata |
| ENT-1.4 | Relatório de experimentos de latência e volume | Resultados dos experimentos de IT-1: taxas de amostragem, latência ponta a ponta e consumo de CPU e memória | 3 | Relatório técnico com dados brutos e scripts de teste anexados |

### META-2 — Plataforma de monitoramento de OEE (meses 3–7)

| ENT | Entregável | Descrição | Mês | Indicador de verificação / evidência |
|---|---|---|---|---|
| ENT-2.1 | Especificação do modelo de OEE | Regras de inferência de estados de máquina, fórmulas de disponibilidade, performance e qualidade, definição de turnos e modelo de dados | 4 | Especificação aprovada pela MetalPrime, com ata |
| ENT-2.2 | Backend de cálculo e armazenamento de OEE | Serviços de ingestão, cálculo de OEE por célula e turno, e API de consulta | 6 | Release no repositório, testes automatizados com cobertura de no mínimo 70% e relatório de testes |
| ENT-2.3 | Dashboards web de OEE | Interface web com OEE por célula e turno, histórico, motivos de parada e indicadores de disponibilidade, performance e qualidade | 7 | Demonstração com dados reais ou de bancada, registrada em ata |
| ENT-2.4 | Relatório de verificação do OEE | Comparação do OEE calculado com uma referência (apontamento manual ou planilha da planta) | 7 | Relatório com desvio absoluto médio de no máximo 5 pontos percentuais em relação à referência |

### META-3 — Modelos de detecção de anomalias e manutenção preditiva (meses 6–11)

| ENT | Entregável | Descrição | Mês | Indicador de verificação / evidência |
|---|---|---|---|---|
| ENT-3.1 | Base de dados curada e análise exploratória | Consolidação dos dados históricos de falhas (PREM-03) e dos dados coletados, rotulagem e análise exploratória | 7 | Dataset versionado, dicionário de dados e notebook de análise |
| ENT-3.2 | Modelos de detecção de anomalias | Modelos candidatos para tochas, alimentadores de arame e servos, com protocolo experimental comparativo | 9 | Relatório de experimentos com métricas (precisão, recall, F1) em conjunto de teste separado |
| ENT-3.3 | Modelos preditivos embarcados no MP-Edge | Versões otimizadas (IT-3) rodando por inferência no gateway, com alertas antecipados | 11 | Release embarcada e medições de consumo de recursos e tempo de inferência |
| ENT-3.4 | Relatório técnico-científico de P&D | Consolidação dos métodos, resultados e lições aprendidas das incertezas IT-1 a IT-4 | 11 | Relatório aprovado pela Coordenação; pode gerar artigo científico (seção 15) |

### META-4 — Validação piloto na CEL-04 e transferência de tecnologia (meses 10–12)

| ENT | Entregável | Descrição | Mês | Indicador de verificação / evidência |
|---|---|---|---|---|
| ENT-4.1 | Plano de validação piloto | Protocolo de testes em produção, critérios de sucesso, cronograma de visitas e responsabilidades na Autopeças Ferraz | 10 | Plano aprovado pela MetalPrime e pela Autopeças Ferraz |
| ENT-4.2 | Relatório de validação na CEL-04 | Resultados de no mínimo 4 semanas de operação assistida do piloto (OEE e alertas preditivos) | 12 | Relatório com evidências (registros de log, capturas de tela, atas de visita) |
| ENT-4.3 | Pacote de transferência de tecnologia | Código-fonte, documentação técnica, manuais de instalação e operação, e treinamento técnico da equipe da MetalPrime (mínimo de 16 horas) | 12 | Termo de recebimento assinado pela MetalPrime e lista de presença do treinamento |
| ENT-4.4 | Relatório técnico final | Relatório final de execução física do convênio | 12 | Relatório protocolado na Fundepes |

---

## 6. Escopo incluído

1. Coleta via **OPC UA** de dados de processo e de estado de robôs e CLPs da célula piloto CEL-04, no gateway MP-Edge.
2. Pré-processamento, armazenamento temporário e publicação dos dados a partir da borda.
3. Cálculo de OEE (disponibilidade, performance, qualidade) **por célula e por turno**, com dashboards web.
4. Pesquisa, desenvolvimento e embarque de modelos de detecção de anomalias e previsão de falhas para **tochas, alimentadores de arame e servos**.
5. Alertas de manutenção preditiva exibidos na plataforma.
6. Validação piloto em **uma** célula (CEL-04), com operação assistida em horário comercial pela equipe do projeto.
7. Documentação técnica, relatórios de P&D, treinamento técnico e transferência de tecnologia à MetalPrime.

Os dados tratados são **agregados por célula, turno e equipamento**. O projeto não identifica peças individualmente.

---

## 7. FORA DE ESCOPO

> **Seção crítica.** Os itens abaixo **não fazem parte** do objeto, das metas nem do valor deste convênio. Incluir qualquer um deles, total ou parcialmente, é **alteração de escopo** e segue obrigatoriamente o procedimento da seção 13. Isso significa abrir uma Solicitação de Mudança e fazer a análise de impacto. Se a alteração afetar meta, valor ou prazo, exige termo aditivo.

| ID | Fora de escopo | Esclarecimento |
|---|---|---|
| **FE-01** | **Rastreabilidade individual de peças** (genealogia por número de série) | A plataforma não vincula parâmetros de processo, operador, célula, data/hora ou resultado de inspeção a uma peça específica nem a seu número de série. O "monitoramento" previsto neste PTA é de **eficiência (OEE)** e de **saúde de equipamentos**, agregado por célula, turno e equipamento |
| **FE-02** | **Integração com sistemas MES/ERP de terceiros** | Não há envio nem recebimento de dados para MES, ERP ou outros sistemas corporativos da planta, de clientes ou de terceiros, por API ou qualquer outro meio. A única saída prevista são a API própria e os dashboards da plataforma SENTINELA |
| **FE-03** | **Protocolos além de OPC UA** (ex.: Modbus TCP, PROFINET, EtherNet/IP) | A coleta é feita apenas via OPC UA. Equipamentos que não exponham OPC UA ficam fora da coleta, a menos que a MetalPrime ou a planta forneça um conversor e o ponto seja exposto em OPC UA (ver PREM-01) |
| **FE-04** | **Leitura de códigos (DataMatrix/QR) e identificação de peças** | Não estão previstas a aquisição, a integração nem a leitura de códigos de identificação de peças, nem o hardware correspondente (leitores industriais) |
| **FE-05** | **Operação 24x7 com SLA de suporte em produção** | O piloto é experimental, com acompanhamento assistido em horário comercial. Não há compromisso de disponibilidade, plantão, tempo de resposta nem suporte de produção. A operação contínua, após a transferência, é de responsabilidade da MetalPrime |

Também ficam fora de escopo as atividades classificadas como não P&D na seção 3.3.

---

## 8. Premissas e restrições

### 8.1 Premissas

Se alguma premissa não se confirmar, a situação deve ser comunicada formalmente e tratada como risco ou mudança, conforme a seção 13.

| ID | Premissa | Responsável |
|---|---|---|
| **PREM-01** | Todos os CLPs e robôs da célula piloto CEL-04 expõem OPC UA | MetalPrime / Autopeças Ferraz |
| **PREM-02** | A MetalPrime fornece 2 gateways MP-Edge (em comodato) e acesso à CEL-04 | MetalPrime |
| **PREM-03** | Dados históricos de 6 meses de falhas estarão disponíveis até o mês 4 | MetalPrime / Autopeças Ferraz |
| PREM-04 | A MetalPrime disponibiliza a documentação técnica do MP-Edge (SDK, sistema operacional embarcado, limites de hardware) até o mês 1 | MetalPrime |
| PREM-05 | A Autopeças Ferraz autoriza visitas técnicas e a operação assistida do piloto nos meses 10 a 12, conforme o plano ENT-4.1 | MetalPrime / Autopeças Ferraz |
| PREM-06 | A MetalPrime indica um interlocutor técnico com disponibilidade para as revisões e os aceites mensais | MetalPrime |

### 8.2 Restrições

| ID | Restrição |
|---|---|
| RST-01 | Vigência fixa de 12 meses (01/03/2026 a 28/02/2027); qualquer prorrogação depende de termo aditivo |
| RST-02 | Valor global limitado a R$ 600.000,00, executado conforme o plano de aplicação por rubrica (seção 11) |
| RST-03 | Os modelos e o software embarcado devem respeitar os limites de hardware do MP-Edge, sem alteração do hardware |
| RST-04 | Os dados da planta ficam sujeitos a acordo de confidencialidade e não podem ser publicados sem anonimização e autorização |
| RST-05 | As despesas seguem as normas da Fundepes e a legislação aplicável à Lei de Informática; as atividades não P&D não podem ser custeadas pelo convênio |
| RST-06 | O acesso à CEL-04 deve seguir as normas de segurança da Autopeças Ferraz (EPI, integração de segurança, janelas de produção) |

---

## 9. Equipe e dedicação

| Papel | Nome | Qtde | Dedicação | Vínculo |
|---|---|---|---|---|
| Coordenador (docente) | Prof. Dr. Leandro Dias | 1 | 10 h/sem | Sem remuneração pelo projeto |
| Product Owner / Analista de Requisitos | Leonardo Lucca | 1 | 40 h/sem | CLT via Fundepes |
| Engenheiro de software sênior (backend/edge) | Felipe Andrade Rocha | 1 | 40 h/sem | CLT via Fundepes |
| Desenvolvedor full stack | Lucas Henrique Barros | 1 | 40 h/sem | CLT via Fundepes |
| Cientista de dados (ML) | Dra. Aline Souza Medeiros | 1 | 40 h/sem | CLT via Fundepes |
| Engenheiro de automação (OPC UA/CLP) | Thiago Melo Cavalcante | 1 | 40 h/sem | CLT via Fundepes |
| Bolsistas de graduação | Gabriel Lima Santos; Beatriz Oliveira Nunes | 2 | 20 h/sem cada | Bolsa de iniciação tecnológica |

**Total: 8 pessoas.** Responsabilidades principais: o PO responde pela linha de base de requisitos, pela rastreabilidade, pelo controle de mudanças (seção 13) e pela preparação dos aceites. O coordenador responde academicamente e assina os relatórios.

---

## 10. Cronograma físico

Legenda: ■ = execução; ◆ = mês da entrega principal da meta.

| Meta / Entregável | M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10 | M11 | M12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **META-1** | ■ | ■ | ◆ | | | | | | | | | |
| ENT-1.1, ENT-1.2 | ■ | ◆ | | | | | | | | | | |
| ENT-1.3, ENT-1.4 | ■ | ■ | ◆ | | | | | | | | | |
| **META-2** | | | ■ | ■ | ■ | ■ | ◆ | | | | | |
| ENT-2.1 | | | ■ | ◆ | | | | | | | | |
| ENT-2.2 | | | | ■ | ■ | ◆ | | | | | | |
| ENT-2.3, ENT-2.4 | | | | | ■ | ■ | ◆ | | | | | |
| **META-3** | | | | | | ■ | ■ | ■ | ■ | ■ | ◆ | |
| ENT-3.1 | | | | | | ■ | ◆ | | | | | |
| ENT-3.2 | | | | | | | ■ | ■ | ◆ | | | |
| ENT-3.3, ENT-3.4 | | | | | | | | | ■ | ■ | ◆ | |
| **META-4** | | | | | | | | | | ■ | ■ | ◆ |
| ENT-4.1 | | | | | | | | | | ◆ | | |
| ENT-4.2, ENT-4.3, ENT-4.4 | | | | | | | | | | ■ | ■ | ◆ |

---

## 11. Plano de aplicação (orçamento por rubrica)

| Rubrica | Valor (R$) | % |
|---|---|---|
| Pessoal (CLT/RPA/bolsas) | 438.000,00 | 73,0% |
| Equipamentos e material permanente | 42.000,00 | 7,0% |
| Material de consumo | 12.000,00 | 2,0% |
| Serviços de terceiros (PJ) | 30.000,00 | 5,0% |
| Diárias e passagens | 18.000,00 | 3,0% |
| Despesas operacionais e administrativas (Fundepes, 10%) | 60.000,00 | 10,0% |
| **Total** | **600.000,00** | **100,0%** |

### 11.1 Memória de cálculo — Pessoal

Os valores mensais são o **custo total para o projeto**: remuneração, encargos e provisões, no caso de CLT, ou valor da bolsa.

| Papel | Qtde | Custo mensal (R$) | Meses | Total (R$) |
|---|---|---|---|---|
| Coordenador (docente) | 1 | — | 12 | 0,00 |
| Product Owner / Analista de Requisitos | 1 | 6.500,00 | 12 | 78.000,00 |
| Engenheiro de software sênior | 1 | 8.500,00 | 12 | 102.000,00 |
| Desenvolvedor full stack | 1 | 6.000,00 | 12 | 72.000,00 |
| Cientista de dados (ML) | 1 | 7.000,00 | 12 | 84.000,00 |
| Engenheiro de automação | 1 | 7.000,00 | 12 | 84.000,00 |
| Bolsistas de graduação | 2 | 750,00 cada | 12 | 18.000,00 |
| **Total Pessoal** | **8** | | | **438.000,00** |

Esforço de referência: 6 pessoas × 40 h/sem mais 2 × 20 h/sem, cerca de 13.900 horas-pessoa em 12 meses (sem contar o coordenador).

### 11.2 Memória de cálculo — demais rubricas

| Rubrica | Item | Total (R$) |
|---|---|---|
| Equipamentos | Workstation com GPU para treinamento de modelos | 18.000,00 |
| | 2 notebooks de desenvolvimento (R$ 7.500,00 cada) | 15.000,00 |
| | Switch industrial gerenciável + kit de bancada OPC UA (simulador/servidor de testes) | 9.000,00 |
| | **Subtotal** | **42.000,00** |
| Material de consumo | Cabos, conectores, cartões de memória industriais, componentes eletrônicos e EPIs para visitas | 12.000,00 |
| Serviços de terceiros (PJ) | Infraestrutura em nuvem para ambiente de homologação (12 meses) | 14.000,00 |
| | Consultoria especializada em segurança OPC UA / teste de intrusão | 10.000,00 |
| | Revisão técnica e tradução de artigo científico | 6.000,00 |
| | **Subtotal** | **30.000,00** |
| Diárias e passagens | Cerca de 6 missões Maceió–Belo Horizonte (Contagem/Betim), com 2 pessoas e 3 diárias cada, a cerca de R$ 3.000,00 por missão | 18.000,00 |
| DOA Fundepes | 10% do valor global | 60.000,00 |

Os gateways MP-Edge **não** são custeados pelo convênio: a MetalPrime os fornece em comodato (PREM-02).

---

## 12. Cronograma de desembolso

| Parcela | Data prevista | Condição | Valor (R$) | Acumulado (R$) |
|---|---|---|---|---|
| 1ª | 01/03/2026 (Mês 1) | Assinatura do convênio | 180.000,00 | 180.000,00 |
| 2ª | 01/06/2026 (Mês 4) | Aceite da META-1 | 150.000,00 | 330.000,00 |
| 3ª | 01/09/2026 (Mês 7) | Aceite dos ENT-2.2 e ENT-2.3 | 150.000,00 | 480.000,00 |
| 4ª | 01/12/2026 (Mês 10) | Aceite dos ENT-3.1 e ENT-3.2 | 120.000,00 | 600.000,00 |
| **Total** | | | **600.000,00** | |

---

## 13. Gestão de mudanças

1. **Linha de base.** Este PTA v1.0 e o documento de requisitos derivado (ENT-1.1) formam a linha de base do escopo. Cada requisito é rastreável a um OBJ, a uma META e a um ENT.
2. **Solicitação de Mudança (SM).** Toda alteração de escopo exige uma Solicitação de Mudança formal, numerada SM-xx. Isso vale para inclusão, exclusão ou alteração de funcionalidade, meta, entregável, premissa ou item de fora de escopo (seção 7), e também para premissa não confirmada. A SM pode ser aberta por qualquer parte e é registrada pelo PO. Pedidos por e-mail, reunião ou mensagem não alteram o escopo até virarem uma SM registrada.
3. **Análise de impacto.** Em até 10 dias úteis após o registro, o PO e a equipe técnica avaliam o impacto da SM em escopo, requisitos, cronograma, esforço (horas-pessoa), custo por rubrica, riscos e enquadramento como P&D. O resultado é um parecer com alternativas.
4. **Decisão.** A Coordenação e a MetalPrime decidem: aprovar, rejeitar ou adiar. A decisão é registrada em ata.
5. **Formalização:**
   - **Sem impacto em meta, valor ou prazo:** basta atualizar a versão do PTA ou dos requisitos (v1.x) e registrar no histórico, com comunicação à Fundepes. Remanejamentos entre rubricas seguem as regras da Fundepes.
   - **Com alteração de meta, valor ou prazo:** é **obrigatório um termo aditivo** ao convênio, com novo PTA (v2.0), submetido à Fundepes e assinado pelas partes **antes** de executar o novo escopo.
6. **Proibição de absorção informal.** A equipe não deve executar trabalho fora da linha de base sem uma SM aprovada e, quando for o caso, sem o termo aditivo assinado.
7. **Registro.** Todas as SMs, análises e decisões ficam no repositório do projeto e são informadas nos relatórios de acompanhamento.

---

## 14. Critérios de aceite das entregas

1. Cada ENT é aceito quando atende ao **indicador de verificação/evidência** da seção 5 e aos critérios de aceite dos requisitos rastreados a ele.
2. O PO submete a entrega à MetalPrime com as evidências. A MetalPrime tem **10 dias úteis** para aceitar ou apontar não conformidades objetivas. Sem manifestação nesse prazo, a entrega é considerada aceita tacitamente.
3. As não conformidades são corrigidas em até 15 dias úteis e reapresentadas uma vez. Divergências persistentes são levadas ao comitê gestor (Coordenador, PO e interlocutora da MetalPrime).
4. Não serão motivo de recusa as funcionalidades listadas como fora de escopo (seção 7) nem resultados que dependam de premissa não cumprida (seção 8.1).
5. Nos entregáveis de pesquisa (ENT-1.4, ENT-3.2, ENT-3.4), o aceite avalia o rigor metodológico e a documentação dos resultados, mesmo que sejam negativos. Isso é inerente à incerteza técnica de P&D.
6. Uma meta está concluída quando todos os seus ENT foram aceitos. O aceite é registrado em termo assinado.

---

## 15. Propriedade intelectual

1. A titularidade dos resultados (software, modelos, algoritmos, know-how) segue o instrumento jurídico do convênio, a política de inovação da universidade e a Lei nº 10.973/2004, com divisão e condições de exploração definidas nesse instrumento.
2. A MetalPrime tem o direito de uso e exploração comercial dos resultados no MP-Edge, nas condições do convênio.
3. O conhecimento preexistente de cada parte continua sendo dela.
4. A equipe pode publicar artigos científicos desde que haja autorização prévia da MetalPrime (prazo de 30 dias para resposta), preservadas as informações confidenciais e os dados da planta (RST-04).
5. Os registros de software e pedidos de patente seguem os trâmites do núcleo de inovação tecnológica da universidade.

---

## 16. Assinaturas

| Parte | Nome | Cargo | Assinatura | Data |
|---|---|---|---|---|
| LASIN / Universidade | Prof. Dr. Leandro Dias | Coordenador do projeto | __________ | 20/02/2026 |
| Fundepes | Dr. Eduardo Farias Lessa | Diretor-Presidente | __________ | 20/02/2026 |
| MetalPrime Automação Industrial Ltda. | Roberto Siqueira Campos | Diretor Industrial | __________ | 20/02/2026 |
| MetalPrime (ciência técnica) | Eng. Juliana Mendes Prado | Gerente de P&D | __________ | 20/02/2026 |
