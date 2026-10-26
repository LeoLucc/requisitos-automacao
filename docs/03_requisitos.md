# 03 — Especificação de Requisitos — Linha de Base v1.0 — SENTINELA

> Convênio Fundepes nº 042/2026 · PTA v1.0 (aprovado em 20/02/2026) · Vigência original 01/03/2026 a 28/02/2027 · R$ 600.000,00
> Elaboração: Leonardo Lucca (PO) · Revisão técnica: Felipe Andrade Rocha, Thiago Melo Cavalcante, Dra. Aline Souza Medeiros · Aprovação: Prof. Dr. Leandro Dias (LASIN) e Eng. Juliana Mendes Prado (MetalPrime).
> Escopo: **somente META-1 a META-4** (PTA v1.0). Requisitos de rastreabilidade por peça não existem nesta linha de base (ver §6).

---

## 1. Introdução

### 1.1 Propósito
Este documento define os requisitos funcionais, não funcionais e as regras de negócio da plataforma SENTINELA conforme o PTA v1.0. Junto com o PTA, compõe a **linha de base de escopo** (PTA §13, item 1). Cada requisito é rastreável a um objetivo (OBJ-xx), a um stakeholder (STK-xx), a uma meta (META-x) e a um entregável (ENT-x.y). A matriz completa está em Matriz de Rastreabilidade.

### 1.2 Escopo do produto
O SENTINELA coleta dados de robôs e CLPs da célula piloto CEL-04 via OPC UA no gateway MP-Edge, calcula OEE **por célula, turno e equipamento**, detecta anomalias e antecipa falhas de tochas, alimentadores de arame e servos, e exibe os resultados em dashboards web. O produto monitora **células e equipamentos, não peças** (FE-01 a FE-05).

### 1.3 Convenções
- Prioridade **MoSCoW**: M = Must (obrigatório para aceite do ENT), S = Should, C = Could, W = Won't (nesta versão).
- Requisitos funcionais RF-001 a RF-099 reservados à linha de base; a faixa RF-101+ / RNF-101+ fica reservada para eventuais mudanças futuras aprovadas via SM.
- Critérios de aceite no formato **Dado / Quando / Então**, com valor mensurável.

### 1.4 Glossário

| Termo | Definição |
|---|---|
| **OEE** (Overall Equipment Effectiveness) | Eficiência global do equipamento: Disponibilidade × Performance × Qualidade (RN-01). |
| **Disponibilidade** | Tempo produzindo ÷ tempo planejado de produção. |
| **Performance** | (Ciclo ideal × quantidade produzida) ÷ tempo produzindo. |
| **Qualidade** | Quantidade aprovada ÷ quantidade produzida, apurada por contadores agregados da célula. |
| **OPC UA** | Open Platform Communications Unified Architecture (IEC 62541): padrão de comunicação industrial cliente-servidor, com modelo de informação e segurança integrados. Único protocolo de coleta no escopo (FE-03). |
| **Tag / nó OPC UA** | Variável exposta por um servidor OPC UA (ex.: corrente de solda, estado do robô). |
| **Borda (edge)** | Processamento feito no próprio gateway MP-Edge, junto à célula, antes de qualquer envio a servidor. |
| **MP-Edge** | Gateway IoT industrial da MetalPrime, habilitado à Lei de Informática, onde o SENTINELA embarca. |
| **CLP** | Controlador Lógico Programável. |
| **Célula** | Conjunto de robôs, CLP e periféricos que executam uma operação de solda (ex.: CEL-04). |
| **Turno** | Janela de trabalho definida em RN-03. |
| **Estado de máquina** | Produzindo, Parada não planejada, Parada planejada, Setup, Sem programação (RN-02). |
| **Microparada** | Parada não planejada com duração < 2 min (RN-05). |
| **MTTR** | Mean Time To Repair: tempo médio entre início de uma parada por falha e o retorno a Produzindo. |
| **MTBF** | Mean Time Between Failures: tempo médio de operação entre falhas. |
| **Anomalia** | Desvio estatisticamente significativo do comportamento normal de um sinal ou equipamento. |
| **Alerta preditivo** | Notificação de provável falha futura de tocha, alimentador ou servo, com antecedência estimada. |
| **Antecedência** | Intervalo entre a emissão do alerta e o início da falha correspondente. |
| **Precisão / Recall / F1** | Métricas de classificação: alertas corretos ÷ alertas emitidos; falhas detectadas ÷ falhas ocorridas; média harmônica de ambas. |
| **Store-and-forward** | Armazenamento local com reenvio posterior quando a conectividade é restabelecida. |
| **p.p.** | Pontos percentuais. |
| **Linha de base** | Versão aprovada de escopo/requisitos; só muda via SM (PTA §13). |

---

## 2. Atores

| Ator | Descrição | STK |
|---|---|---|
| ACT-01 Operador / líder de turno | Consulta OEE do turno, classifica motivos de parada | STK-09 |
| ACT-02 Técnico / engenheiro de manutenção | Recebe e trata alertas preditivos, registra feedback | STK-09 |
| ACT-03 Gestor de produção | Consulta histórico e comparativos de OEE | STK-09 |
| ACT-04 Administrador da plataforma | Configura células, turnos, tags, usuários e modelos | STK-04, STK-07 |
| ACT-05 Cientista de dados | Extrai datasets, treina e publica modelos | STK-04 |
| ACT-06 Engenharia de Produto MetalPrime | Recebe a transferência, instala e mantém o software | STK-07 |
| ACT-07 Servidores OPC UA (robôs/CLPs da CEL-04) | Sistema externo fonte de dados | — |
| ACT-08 Gateway MP-Edge | Plataforma de execução embarcada | STK-07 |

---

## 3. Requisitos funcionais

Colunas: **Prio** (MoSCoW) · **Origem** (STK/OBJ) · **Vínculo** (META/ENT).

### 3.1 META-1 — Aquisição de dados OPC UA no MP-Edge

**RF-001 — Conexão a servidores OPC UA**
O sistema deve conectar-se, a partir do MP-Edge, a múltiplos servidores OPC UA da célula, com modos de segurança None, Sign e SignAndEncrypt e autenticação por usuário/senha ou certificado X.509.
Prio M · Origem STK-07, STK-09 / OBJ-01 · Vínculo META-1 / ENT-1.3
- CA-RF001-1: Dado o kit de bancada OPC UA com 3 servidores simulados, quando o coletor for iniciado com a configuração padrão, então as 3 sessões devem ficar ativas em ≤ 30 s.
- CA-RF001-2: Dado um servidor configurado com SignAndEncrypt e certificado confiável, quando a sessão for aberta, então a conexão deve ser estabelecida e, com certificado não confiável, rejeitada e registrada em log.

**RF-002 — Configuração de variáveis (tags) a coletar**
O sistema deve permitir ao administrador navegar (browse) no espaço de endereços OPC UA e selecionar, por arquivo de configuração versionado, as tags a coletar por equipamento, com unidade e taxa de amostragem.
Prio M · Origem STK-04, STK-07 / OBJ-01 · Vínculo META-1 / ENT-1.3
- CA-RF002-1: Dado um servidor com ≥ 200 nós, quando o administrador executar o browse, então a árvore completa deve ser listada em ≤ 10 s.
- CA-RF002-2: Dado um arquivo de configuração alterado, quando for recarregado, então as novas tags devem passar a ser coletadas sem reinício do gateway em ≤ 60 s.

**RF-003 — Coleta por assinatura e amostragem configurável**
O sistema deve coletar as tags por assinatura (subscription/monitored items) com intervalo de amostragem configurável de 10 ms a 60 s por tag.
Prio M · Origem STK-07 / OBJ-01, IT-1 · Vínculo META-1 / ENT-1.3, ENT-1.4
- CA-RF003-1: Dado um sinal de corrente de solda configurado a 100 ms, quando coletado por 1 h em bancada, então a perda de amostras deve ser < 0,5% (CS-01).

**RF-004 — Carimbo de tempo e qualidade do dado**
O sistema deve armazenar cada amostra com carimbo de tempo de origem (source timestamp), carimbo do gateway e o código de status OPC UA, com relógio sincronizado por NTP.
Prio M · Origem STK-04 / OBJ-01, IT-4 · Vínculo META-1 / ENT-1.3
- CA-RF004-1: Dado o gateway sincronizado, quando comparado a uma referência NTP, então o desvio de relógio deve ser ≤ 100 ms.
- CA-RF004-2: Dado um nó com status Bad, quando a amostra for registrada, então ela deve ser marcada como inválida e excluída dos cálculos de OEE.

**RF-005 — Armazenamento local e store-and-forward**
O sistema deve manter buffer local persistente no MP-Edge e reenviar os dados ao backend, em ordem, quando a conectividade for restabelecida.
Prio M · Origem STK-09 / OBJ-01, IT-1 · Vínculo META-1 / ENT-1.2, ENT-1.3
- CA-RF005-1: Dado o link com o backend interrompido por 24 h, quando restabelecido, então 100% dos dados agregados do período devem chegar ao backend em ≤ 2 h, sem duplicidade.

**RF-006 — Pré-processamento e agregação na borda**
O sistema deve calcular na borda agregados por janela (mín., máx., média, desvio-padrão, RMS) dos sinais de alta frequência, publicando agregados e não o sinal bruto contínuo.
Prio M · Origem STK-07 / OBJ-01, IT-1 · Vínculo META-1 / ENT-1.3, ENT-1.4
- CA-RF006-1: Dado sinais de solda a 100 ms, quando agregados em janelas de 1 s, então o volume publicado deve ser reduzido em ≥ 80% em relação ao bruto, com erro de média ≤ 1%.

**RF-007 — Publicação ao backend**
O sistema deve publicar dados agregados e eventos de estado do MP-Edge ao backend por canal autenticado e criptografado (MQTT sobre TLS 1.2+).
Prio M · Origem STK-07 / OBJ-01 · Vínculo META-1 / ENT-1.3
- CA-RF007-1: Dado o gateway conectado, quando um evento de mudança de estado ocorrer, então ele deve estar disponível no backend em ≤ 5 s (p95).

**RF-008 — Autodiagnóstico do gateway**
O sistema deve monitorar e publicar métricas de saúde do MP-Edge (CPU, memória, disco, ocupação de buffer, estado das sessões OPC UA).
Prio S · Origem STK-07 / IT-1 · Vínculo META-1 / ENT-1.4
- CA-RF008-1: Dado o gateway em operação, quando a ocupação do buffer ultrapassar 80%, então um evento de aviso deve ser exibido na plataforma em ≤ 1 min.

### 3.2 META-2 — Plataforma de monitoramento de OEE

**RF-009 — Inferência de estados de máquina**
O sistema deve inferir automaticamente o estado de cada equipamento e da célula (RN-02) a partir dos sinais coletados, sem apontamento manual.
Prio M · Origem STK-09 / OBJ-02, IT-4 · Vínculo META-2 / ENT-2.1, ENT-2.2
- CA-RF009-1: Dado um registro de 1 turno com estados anotados manualmente como referência, quando comparado ao inferido, então a concordância de tempo por estado deve ser ≥ 95%.

**RF-010 — Cadastro de células, turnos e calendário**
O sistema deve permitir cadastrar células, equipamentos, turnos (RN-03), paradas planejadas e ciclo ideal por programa de solda.
Prio M · Origem STK-09 / OBJ-02 · Vínculo META-2 / ENT-2.1
- CA-RF010-1: Dado um novo calendário de turnos cadastrado, quando salvo, então os cálculos a partir do turno seguinte devem usá-lo, sem alterar turnos já fechados.

**RF-011 — Cálculo de OEE por célula, turno e equipamento**
O sistema deve calcular Disponibilidade, Performance, Qualidade e OEE por célula, por turno e por equipamento conforme RN-01, a partir de contadores agregados de produção e refugo da célula.
Prio M · Origem STK-06, STK-09 / OBJ-02, IT-4 · Vínculo META-2 / ENT-2.2, ENT-2.4
- CA-RF011-1: Dado um conjunto de teste com valores conhecidos, quando processado, então os resultados devem coincidir com o cálculo de referência com erro ≤ 0,1 p.p.
- CA-RF011-2: Dado 4 semanas de operação da CEL-04, quando comparado à apuração de referência auditada, então o desvio absoluto médio do OEE por turno deve ser ≤ 5 p.p. (ENT-2.4, CS-02).

**RF-012 — Atualização em tempo quase real**
O sistema deve atualizar o OEE parcial do turno em curso continuamente.
Prio M · Origem STK-09 / OBJ-02 · Vínculo META-2 / ENT-2.2, ENT-2.3
- CA-RF012-1: Dado uma mudança de estado na célula, quando ocorrer, então o OEE parcial no dashboard deve refletir a mudança em ≤ 1 min (CS-02).

**RF-013 — Registro e classificação de paradas**
O sistema deve registrar automaticamente cada parada (início, fim, duração, equipamento) e permitir ao líder de turno classificá-la segundo uma lista de motivos configurável.
Prio M · Origem STK-09 / OBJ-02 · Vínculo META-2 / ENT-2.2, ENT-2.3
- CA-RF013-1: Dado uma parada ≥ 2 min, quando encerrada, então ela deve aparecer na lista de paradas pendentes de classificação em ≤ 1 min.
- CA-RF013-2: Dado uma parada classificada, quando o motivo for alterado, então o histórico da alteração (usuário, data/hora, valor anterior) deve ser mantido.

**RF-014 — Dashboard de OEE em tempo real**
O sistema deve exibir, em interface web responsiva, OEE e seus três componentes por célula e turno, estado atual de cada equipamento e paradas do turno.
Prio M · Origem STK-09 / OBJ-02 · Vínculo META-2 / ENT-2.3
- CA-RF014-1: Dado um usuário autenticado, quando abrir o dashboard da CEL-04, então a página deve carregar completa em ≤ 3 s (p95) em rede da planta.

**RF-015 — Histórico e comparativos**
O sistema deve exibir histórico de OEE por dia, turno e semana, comparativo entre turnos e Pareto de motivos de parada, com filtros por período e equipamento.
Prio M · Origem STK-09 / OBJ-02 · Vínculo META-2 / ENT-2.3
- CA-RF015-1: Dado 90 dias de dados, quando o usuário consultar o Pareto do período, então o resultado deve ser exibido em ≤ 5 s.

**RF-016 — Indicadores de manutenção (MTTR/MTBF)**
O sistema deve calcular MTTR e MTBF por equipamento e por componente (tocha, alimentador, servo) a partir das paradas classificadas.
Prio S · Origem STK-09 / OBJ-02, OBJ-03 · Vínculo META-2 / ENT-2.3
- CA-RF016-1: Dado um conjunto de paradas de teste com valores conhecidos, quando processado, então MTTR e MTBF devem coincidir com o cálculo de referência.

**RF-017 — API de consulta**
O sistema deve oferecer API REST própria, autenticada e documentada (OpenAPI), para consulta de OEE, estados, paradas e alertas agregados. Não há envio ativo a sistemas de terceiros (FE-02).
Prio M · Origem STK-07 / OBJ-02, OBJ-04 · Vínculo META-2 / ENT-2.2
- CA-RF017-1: Dado um token válido, quando consultado o OEE de um turno, então a resposta deve retornar em ≤ 1 s (p95) e corresponder ao valor exibido no dashboard.

**RF-018 — Exportação de dados agregados**
O sistema deve exportar em CSV os indicadores agregados (OEE por turno, paradas) para fins de verificação (ENT-2.4) e relatórios.
Prio S · Origem STK-03, STK-09 / OBJ-02 · Vínculo META-2 / ENT-2.4
- CA-RF018-1: Dado um período selecionado, quando exportado, então o arquivo deve conter os mesmos valores exibidos na tela para o período.

**RF-019 — Autenticação e perfis de acesso**
O sistema deve autenticar usuários e aplicar perfis (Operador, Manutenção, Gestor, Administrador, Cientista de dados) com permissões distintas.
Prio M · Origem STK-07, STK-09 / OBJ-02 · Vínculo META-2 / ENT-2.2, ENT-2.3
- CA-RF019-1: Dado um usuário com perfil Operador, quando tentar acessar a configuração de tags, então o acesso deve ser negado e registrado em log de auditoria.

### 3.3 META-3 — Detecção de anomalias e manutenção preditiva

**RF-020 — Extração de datasets para modelagem**
O sistema deve permitir extrair, por período e equipamento, datasets versionados de sinais agregados, estados e paradas classificadas, combináveis com o histórico de falhas (PREM-03).
Prio M · Origem STK-04 / OBJ-03, IT-2 · Vínculo META-3 / ENT-3.1
- CA-RF020-1: Dado um período de 30 dias, quando o dataset for gerado, então deve vir acompanhado de dicionário de dados e hash de versão, e uma nova extração com os mesmos parâmetros deve produzir o mesmo hash.

**RF-021 — Detecção de anomalias por componente**
O sistema deve detectar anomalias em tochas, alimentadores de arame e servos a partir dos sinais coletados, atribuindo um escore de anomalia por componente.
Prio M · Origem STK-09 / OBJ-03, IT-2 · Vínculo META-3 / ENT-3.2
- CA-RF021-1: Dado o conjunto de teste separado, quando avaliados os modelos, então o relatório deve apresentar precisão, recall e F1 por componente com protocolo comparativo de ≥ 3 técnicas candidatas.

**RF-022 — Inferência embarcada no MP-Edge**
O sistema deve executar a inferência dos modelos selecionados no próprio MP-Edge, sem dependência do backend para emitir alertas.
Prio M · Origem STK-07 / OBJ-03, IT-3 · Vínculo META-3 / ENT-3.3
- CA-RF022-1: Dado o modelo embarcado, quando executado em regime, então o tempo de inferência deve ser ≤ 200 ms por janela e o consumo adicional de CPU ≤ 25% e de memória ≤ 256 MB (RNF-003).

**RF-023 — Alertas preditivos**
O sistema deve emitir alertas de provável falha com componente, severidade, antecedência estimada e sinais que motivaram o alerta, exibidos no dashboard.
Prio M · Origem STK-09 / OBJ-03 · Vínculo META-3 / ENT-3.3
- CA-RF023-1: Dado o backtest em dados históricos, quando avaliado, então ≥ 70% das falhas de tocha/alimentador/servo devem ser alertadas com ≥ 4 h de antecedência e precisão ≥ 80% (CS-03). Resultado inferior é aceito como resultado de pesquisa se documentado (PTA §14, item 5).
- CA-RF023-2: Dado um alerta gerado no gateway, quando o backend estiver acessível, então ele deve aparecer no dashboard em ≤ 1 min.

**RF-024 — Tratamento e feedback de alertas**
O sistema deve permitir ao técnico reconhecer o alerta, registrar a ação tomada e marcá-lo como verdadeiro ou falso positivo, alimentando a rotulagem para retreino.
Prio S · Origem STK-09 / OBJ-03, IT-2 · Vínculo META-3 / ENT-3.3
- CA-RF024-1: Dado um alerta reconhecido e rotulado, quando o dataset for extraído (RF-020), então o rótulo deve constar no registro correspondente.

**RF-025 — Versionamento e implantação de modelos**
O sistema deve versionar modelos e permitir implantar ou reverter uma versão no MP-Edge de forma controlada.
Prio S · Origem STK-07 / OBJ-03, IT-3 · Vínculo META-3 / ENT-3.3
- CA-RF025-1: Dado uma nova versão publicada, quando implantada, então o gateway deve passar a usá-la em ≤ 5 min e a reversão à versão anterior deve ser possível em ≤ 5 min.

### 3.4 META-4 — Validação piloto e transferência

**RF-026 — Registro de evidências do piloto**
O sistema deve manter log consultável de eventos de operação (disponibilidade do coletor, alertas, classificações, falhas de comunicação) para compor o relatório de validação.
Prio M · Origem STK-02, STK-08 / OBJ-04 · Vínculo META-4 / ENT-4.2
- CA-RF026-1: Dado o período de operação assistida (≥ 4 semanas), quando o relatório for gerado, então deve haver registro contínuo, com lacunas identificadas e justificadas.

**RF-027 — Instalação e configuração reprodutíveis**
O sistema deve ser instalável no MP-Edge e no servidor de backend por pacote e scripts documentados, sem intervenção da equipe do LASIN.
Prio M · Origem STK-07 / OBJ-04 · Vínculo META-4 / ENT-4.3
- CA-RF027-1: Dado um MP-Edge zerado e o manual de instalação, quando a Engenharia de Produto da MetalPrime executar a instalação, então a coleta deve estar operacional em ≤ 4 h, sem apoio do LASIN.

**RF-028 — Trilha de auditoria de configuração**
O sistema deve registrar quem alterou configurações (tags, turnos, motivos, modelos, usuários), quando e o valor anterior.
Prio S · Origem STK-07, STK-08 / OBJ-04 · Vínculo META-4 / ENT-4.3
- CA-RF028-1: Dado qualquer alteração de configuração, quando consultada a trilha, então devem constar usuário, data/hora, item e valores anterior/novo.

---

## 4. Requisitos não funcionais

| ID | Categoria | Requisito | Métrica / critério | Prio | Vínculo |
|---|---|---|---|---|---|
| RNF-001 | Desempenho (latência) | Latência ponta a ponta de evento de estado (CLP → dashboard) | ≤ 5 s p95 até backend; ≤ 1 min até OEE exibido | M | META-1, META-2 / ENT-1.4, ENT-2.2 |
| RNF-002 | Desempenho (coleta) | Integridade da coleta OPC UA | Perda de amostras < 0,5% em 7 dias contínuos (CS-01) | M | META-1 / ENT-1.4 |
| RNF-003 | Recursos de borda | Respeitar limites do MP-Edge sem alteração de hardware (RST-03) | Uso total de CPU ≤ 70% e memória ≤ 75% em regime; sem perda de ciclos | M | META-1, META-3 / ENT-1.4, ENT-3.3 |
| RNF-004 | Operação offline na borda | Coleta, cálculo de estados e alertas continuam sem backend | Autonomia de buffer ≥ 72 h de dados agregados; alertas emitidos localmente | M | META-1, META-3 / ENT-1.3, ENT-3.3 |
| RNF-005 | Disponibilidade | Disponibilidade do coletor durante a operação assistida do piloto | ≥ 98% medida no período do ENT-4.2. **Meta experimental, sem SLA, plantão ou tempo de resposta** (FE-05) | S | META-4 / ENT-4.2 |
| RNF-006 | Segurança (comunicação) | Comunicação criptografada | OPC UA SignAndEncrypt quando suportado; MQTT/HTTPS com TLS 1.2+; zero credenciais em texto claro | M | META-1, META-2 / ENT-1.2, ENT-2.2 |
| RNF-007 | Segurança (avaliação) | Teste de intrusão independente antes do piloto | 0 vulnerabilidades críticas/altas abertas no início do ENT-4.2 | M | META-2, META-4 / ENT-2.2, ENT-4.1 |
| RNF-008 | Segurança (acesso) | Controle de acesso e senhas | Perfis RBAC (RF-019); bloqueio após 5 tentativas; sessão expira em 30 min de inatividade | M | META-2 / ENT-2.2 |
| RNF-009 | Retenção | Retenção de dados | Borda: ≥ 72 h agregados; backend: agregados e OEE ≥ 24 meses; sinais de alta frequência para modelagem ≥ 6 meses | M | META-2, META-3 / ENT-2.2, ENT-3.1 |
| RNF-010 | Confidencialidade | Dados da planta sob NDA (RST-04) | Datasets para publicação anonimizados; nenhum dado sai do ambiente do projeto sem autorização registrada | M | Todas / ENT-3.1, ENT-3.4 |
| RNF-011 | Usabilidade | Dashboards legíveis no chão de fábrica | Interface pt-BR, responsiva (≥ 10"); líder de turno classifica uma parada em ≤ 3 cliques; SUS ≥ 70 com ≥ 5 usuários da Ferraz | S | META-2 / ENT-2.3 |
| RNF-012 | Manutenibilidade | Qualidade de código | Cobertura de testes automatizados ≥ 70% no backend (ENT-2.2); análise estática sem bloqueadores | M | META-2 / ENT-2.2 |
| RNF-013 | Portabilidade / transferibilidade | Software empacotado para o SO embarcado do MP-Edge (PREM-04) e documentado | 100% dos componentes com manual; treinamento ≥ 16 h (CS-05) | M | META-4 / ENT-4.3 |
| RNF-014 | Escalabilidade | Arquitetura preparada para mais células sem reprojeto | Backend suporta ≥ 10 gateways simulados com RNF-001 atendido (teste de carga); implantação real limitada à CEL-04 | C | META-2 / ENT-2.2 |

---

## 5. Regras de negócio

| ID | Regra |
|---|---|
| **RN-01** | **Fórmula do OEE:** OEE = Disponibilidade × Performance × Qualidade. Disponibilidade = Tempo produzindo ÷ Tempo planejado de produção. Performance = (Σ ciclo ideal × peças produzidas) ÷ Tempo produzindo, limitada a 100%. Qualidade = Peças aprovadas ÷ Peças produzidas. Contagens vêm de **contadores agregados** de produção e refugo da célula, não de identificação de peças. |
| **RN-02** | **Estados de máquina:** Produzindo; Parada não planejada; Parada planejada (refeição, manutenção programada, troca de turno); Setup; Sem programação. Sem programação e Parada planejada não entram no Tempo planejado de produção. |
| **RN-03** | **Turnos da CEL-04:** T1 06:00–14:00, T2 14:00–22:00, T3 22:00–06:00 (segunda a sábado). O T3 é atribuído à data de seu início. Turnos são configuráveis por célula (RF-010). |
| **RN-04** | **Granularidade:** o menor nível de agregação do OEE é equipamento × turno; o nível de reporte principal é célula × turno. Não existe registro por peça (FE-01). |
| **RN-05** | **Microparada:** parada não planejada < 2 min entra no cálculo de disponibilidade, mas não exige classificação de motivo; é agrupada como "microparada". |
| **RN-06** | **Ciclo ideal:** definido por programa de solda e cadastrado pelo administrador; na ausência, usa-se o menor ciclo estável observado em 10 ciclos consecutivos, sinalizado como provisório. |
| **RN-07** | **Fechamento do turno:** o OEE do turno é fechado 15 min após o fim do turno; correções posteriores (ex.: reclassificação de parada) recalculam o turno e ficam na trilha de auditoria. |
| **RN-08** | **Dados inválidos:** amostras com status OPC UA Bad ou lacunas > 60 s geram período "Sem dados", excluído do OEE e exibido como tal no dashboard. |
| **RN-09** | **Alerta preditivo:** só é exibido se o escore superar o limiar calibrado do modelo vigente; alertas repetidos do mesmo componente em < 1 h são agrupados em um único alerta. |
| **RN-10** | **Referência de verificação do OEE:** a apuração de referência (ENT-2.4) é feita com apontamento manual assistido pela equipe junto ao líder de turno, auditado por amostragem; tolerância ≤ 5 p.p. de desvio absoluto médio. |

---

## 6. Fronteira de escopo — por que agregar por célula/turno/equipamento e não por peça

| Aspecto | Linha de base v1.0 (dentro do escopo) | Não incluído (referência) | Justificativa |
|---|---|---|---|
| Unidade de análise | Célula, turno e equipamento (RN-04) | Peça individual / número de série | OBJ-02 pede OEE "por célula e turno"; PTA §6 declara que o projeto não identifica peças. **FE-01** |
| Contagem para Qualidade | Contadores agregados OK/refugo da célula (RN-01) | Vínculo de resultado de inspeção a cada peça | Qualidade do OEE é razão agregada; genealogia é outro produto. **FE-01** |
| Parâmetros de solda | Agregados por janela para OEE e anomalias (RF-006, RF-021) | Parâmetros de solda gravados por peça | Objetivo é saúde de equipamento (OBJ-03), não registro de processo por peça; IT-1 depende de agregação na borda. **FE-01** |
| Identificação | Nenhuma | Leitura de DataMatrix/QR e leitores industriais | Sem hardware nem orçamento previstos (PTA §11). **FE-04** |
| Saída de dados | API própria e dashboards (RF-017) | Envio a MES/ERP de terceiros | PTA §7 restringe saídas à plataforma SENTINELA. **FE-02** |
| Protocolo | OPC UA (RF-001..RF-003) | Modbus TCP, PROFINET, EtherNet/IP | PREM-01: todos os equipamentos da CEL-04 expõem OPC UA. **FE-03** |
| Operação | Piloto assistido em horário comercial; RNF-005 sem SLA | 24x7 com SLA de suporte | Piloto experimental; operação contínua é da MetalPrime após transferência. **FE-05** |

Qualquer pedido que cruze esta fronteira é **alteração de escopo** e segue PTA §13 (SM-xx, análise de impacto e, se afetar meta/valor/prazo, termo aditivo). A faixa RF-101+ / RNF-101+ fica reservada para esse caso.

---

## 7. Controle de versão

| Versão | Data | Descrição | Autor | Aprovação |
|---|---|---|---|---|
| 0.1 | 27/03/2026 | Rascunho a partir de entrevistas com Ferraz e MetalPrime | Leonardo Lucca (PO) | — |
| 0.9 | 14/04/2026 | Revisão técnica interna (RNF de borda, regras de OEE) | PO + equipe técnica | Prof. Dr. Leandro Dias |
| **1.0** | **24/04/2026** | **Linha de base aprovada** (ENT-1.1): RF-001..RF-028, RNF-001..RNF-014, RN-01..RN-10 | Leonardo Lucca (PO) | Eng. Juliana Mendes Prado (MetalPrime), em ata da reunião de 24/04/2026; Prof. Dr. Leandro Dias (LASIN) |

**Nota:** a partir da v1.0, qualquer inclusão, exclusão ou alteração de requisito segue o processo de Solicitação de Mudança da **seção 13 do PTA**: registro de SM-xx pelo PO, análise de impacto em até 10 dias úteis, decisão em ata e, havendo impacto em meta, valor ou prazo, termo aditivo assinado antes da execução. Ajustes sem esse impacto geram versões v1.x.
