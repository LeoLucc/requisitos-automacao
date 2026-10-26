# JUSTIFICATIVA TÉCNICA — TERMO ADITIVO Nº 01

**Convênio Fundepes nº 042/2026 — Projeto SENTINELA**
**Plataforma de Monitoramento de OEE e Manutenção Preditiva para Células Robotizadas de Solda, embarcada no gateway MP-Edge**

| Item | Valor |
|---|---|
| Documento | Justificativa Técnica do Termo Aditivo nº 01 |
| Data de submissão | **05/08/2026** |
| Destinatária | Fundepes — Adm. Carla Beatriz Lins, Analista de Projetos (gestora do convênio) |
| Elaboração | Leonardo Lucca (Product Owner) e Prof. Dr. Leandro Dias (Coordenador) |
| Base documental | PTA v1.0 (20/02/2026); Requisitos v1.0 (24/04/2026); Matriz de rastreabilidade v1.0; SM-01 (10/07/2026); Análise de impacto da SM-01 (17/07/2026); aprovação da MetalPrime (31/07/2026) |
| Natureza do projeto | P&D — Lei nº 8.248/1991 (Lei de Informática) e alterações |

---

## SUMÁRIO PARA O ANALISTA (quadro-resumo de 1 página)

| Pergunta do analista | Resposta | Onde está demonstrado |
|---|---|---|
| **O que se pede?** | Termo aditivo **combinado**: (i) inclusão da **META-5** e do **OBJ-05**; (ii) acréscimo de **R$ 180.000,00**; (iii) prorrogação de **4 meses** | §1, §2 |
| **Como fica o convênio?** | Vigência 01/03/2026 a **30/06/2027** (16 meses) · Valor global **R$ 780.000,00** · **5 metas** (META-4 deslocada para os meses 14–16) | §2 |
| **Qual o fato superveniente?** | Ofício Veltra Motors VM-SQF-0412/2026, de **30/06/2026**: rastreabilidade por número de série de toda peça soldada a partir de 2027, com envio ao MES VeltraTrace em ≤ 5 min. Exigência **inexistente** na assinatura (20/02/2026) | §3; anexos A-01, A-02 |
| **Isso já não estava contratado?** | **Não.** Cada elemento da exigência corresponde a uma exclusão expressa do PTA v1.0 §7: número de série → **FE-01**; MES → **FE-02**; Modbus TCP → **FE-03**; DataMatrix → **FE-04**. RN-04 (aprovada em ata em 24/04/2026) diz: "não existe registro por peça". Na matriz de rastreabilidade, **0 de 42** requisitos cobrem esses itens | **§4 (núcleo)**; anexo A-04 |
| **É P&D?** | Sim. Três incertezas técnicas novas (**IT-5** correlação peça–ciclo–inspeção; **IT-6** coleta multiprotocolo com inferência embarcada; **IT-7** entrega "efetivamente uma vez" em ≤ 5 min). Atividades de implantação, outros MES e suporte com SLA ficam **fora** | §5 |
| **O que será entregue?** | ENT-5.1 a ENT-5.5 (meses 9, 11, 12, 13 e 16), com indicadores mensuráveis; critério de sucesso **CS-10** (≥ 99,5% das peças no VeltraTrace em ≤ 5 min no piloto) | §6, §7 |
| **Por que R$ 180.000,00?** | Pessoal R$ 128.000,00 · Equipamentos R$ 22.000,00 · Serviços R$ 8.000,00 · Diárias R$ 4.000,00 · DOA (10%) R$ 18.000,00 | §8 |
| **Por que o pessoal compra ~3.393 h se a META-5 tem 2.150 h?** | O aditivo paga os **meses 13–16**, que não têm cobertura. Neles a equipe executa a META-5 restante **e a META-4 deslocada**. As 2.150 h são trabalho novo; as ~1.243 h restantes são o **custo de manter a equipe 4 meses a mais** para sustentar a META-4 na nova janela (gestão, ritos, relatórios, replanejamento do piloto, férias/feriados provisionados). **Não há pagamento em dobro**: a META-4 já orçada é executada com a capacidade que ela liberou nos meses 9–12 | §8.2 |
| **Há alternativa mais barata?** | Rejeitar, absorver sem aditivo ou prorrogar só o prazo foram analisadas e descartadas. Absorver custaria um atraso de ~3–4 meses em META-3/META-4, sem cobertura contratual, e violaria o PTA §13, item 6 | §10 |
| **Já se executou algo da META-5?** | **Não.** Nenhuma atividade da META-5 antes da assinatura do aditivo (PTA §13, itens 5 e 6) | §3.4, §12 |
| **As partes concordam?** | MetalPrime aprovou em **31/07/2026** (Diretoria Industrial e P&D). Coordenação de acordo | §12 |

---

## 1. Identificação do convênio e do aditivo

### 1.1 Convênio

| Item | Valor |
|---|---|
| Instrumento | Convênio Fundepes nº 042/2026 |
| Projeto | SENTINELA — Plataforma de Monitoramento de OEE e Manutenção Preditiva para Células Robotizadas de Solda, embarcada no gateway MP-Edge |
| Executor | LASIN — Laboratório de Sistemas Inteligentes, vinculado a universidade federal em Maceió/AL |
| Fundação de apoio | Fundepes (gestão administrativa e financeira) |
| Empresa parceira/financiadora | MetalPrime Automação Industrial Ltda., Contagem/MG — fabricante dos gateways MP-Edge e de controladores de célula, bens habilitados à Lei de Informática |
| Local da validação piloto | Autopeças Ferraz S.A., Betim/MG — célula robotizada de solda CEL-04 |
| Plano de trabalho vigente | PTA v1.0, aprovado em 20/02/2026 |
| Vigência atual | 01/03/2026 a 28/02/2027 (12 meses) |
| Valor global atual | R$ 600.000,00 |
| Coordenador | Prof. Dr. Leandro Dias |
| Interlocutora técnica da MetalPrime | Eng. Juliana Mendes Prado, Gerente de P&D |

### 1.2 Aditivo

| Item | Valor |
|---|---|
| Número | Termo Aditivo nº 01 |
| **Tipo** | **Combinado: inclusão de meta + acréscimo de valor + prorrogação de prazo** |
| Inclusão de meta | META-5 — Rastreabilidade por peça e integração com MES de cliente (meses 9–16), vinculada ao novo OBJ-05 |
| Acréscimo de valor | + R$ 180.000,00 (30% do valor original) |
| Prorrogação de prazo | + 4 meses, até 30/06/2027 |
| Alteração de cronograma | META-4 deslocada dos meses 10–12 para os meses 14–16 |
| Novo plano de trabalho | PTA v2.0 (anexo) |
| Origem | Solicitação de Mudança SM-01, registrada em 10/07/2026 |
| Fundamento contratual | PTA v1.0 §13, item 5: alteração de meta, valor ou prazo exige termo aditivo com novo PTA, assinado **antes** da execução do novo escopo |

---

## 2. Síntese do pedido

### 2.1 Quadro antes/depois

| Elemento | Antes (PTA v1.0) | Depois (PTA v2.0) | Variação |
|---|---|---|---|
| Vigência | 01/03/2026 a 28/02/2027 (12 meses) | 01/03/2026 a **30/06/2027** (16 meses) | + 4 meses |
| Valor global | R$ 600.000,00 | **R$ 780.000,00** | + R$ 180.000,00 (+30%) |
| Objetivos específicos | OBJ-01 a OBJ-04 | OBJ-01 a **OBJ-05** | + OBJ-05 |
| Metas | META-1 a META-4 | META-1 a **META-5** | + META-5 |
| Entregáveis | 16 (ENT-1.1 a ENT-4.4) | **21** (+ ENT-5.1 a ENT-5.5) | + 5 |
| META-1 | Meses 1–3 | Meses 1–3 | Concluída (aceite em 29/05/2026) |
| META-2 | Meses 3–7 | Meses 3–7 | Sem alteração |
| META-3 | Meses 6–11 | Meses 6–11 | Sem alteração |
| META-4 | Meses 10–12 | **Meses 14–16** | Deslocada; o piloto passa a incluir rastreabilidade |
| META-5 | — | **Meses 9–16** | Nova |
| Fora de escopo | FE-01 a FE-05 | FE-01 e FE-04 convertidos (só CEL-04); FE-02 só VeltraTrace; FE-03 só Modbus TCP da estação de inspeção; **FE-05 permanece fora** | Conversão restrita |
| Esforço de P&D | ~13.900 horas-pessoa (capacidade contratual) | + ~3.393 horas-pessoa de capacidade, das quais ~2.150 de trabalho novo direto | §8.2 |
| Desembolso | 4 parcelas (R$ 600.000,00) | 4 parcelas originais inalteradas + 2 parcelas do aditivo (R$ 180.000,00) | §9 |

### 2.2 Objeto acrescido

**OBJ-05:** registrar, por número de série (DataMatrix), os parâmetros de solda, operador, célula, data/hora e resultado de inspeção de cada peça soldada na CEL-04, e enviá-los ao MES da Veltra (VeltraTrace, API REST) em até 5 minutos.

O objeto geral do convênio não muda: continua sendo pesquisar, desenvolver, validar e transferir à MetalPrime uma capacidade analítica embarcada no gateway MP-Edge. A META-5 amplia essa capacidade no mesmo produto, na mesma célula piloto e com a mesma equipe.

---

## 3. Fato superveniente

### 3.1 O fato

Em **30/06/2026**, a Veltra Motors, cliente final dos fornecedores Tier 1 que usam células MetalPrime, emitiu o **Ofício VM-SQF-0412/2026**, "Requisitos de rastreabilidade de peças soldadas — fornecedores Tier 1". O ofício determina que, **a partir de 2027**, toda peça soldada fornecida à Veltra tenha:

1. identificação por número de série (DataMatrix gravado na peça);
2. parâmetros de solda (corrente, tensão, velocidade de arame), operador, célula, data/hora e resultado de inspeção vinculados a esse número de série;
3. envio do registro ao MES da Veltra (**VeltraTrace**, API REST) em **até 5 minutos**.

A motivação declarada é a auditoria de cliente alinhada à IATF 16949.

### 3.2 Por que é superveniente

| Critério | Demonstração |
|---|---|
| **Data posterior à contratação** | PTA v1.0 aprovado em 20/02/2026; requisitos v1.0 aprovados em ata em 24/04/2026; ofício da Veltra em 30/06/2026, **quatro meses depois da assinatura** |
| **Origem externa às partes** | A exigência foi criada pela Veltra Motors, que não é parte do convênio, e chegou ao projeto pela MetalPrime |
| **Imprevisibilidade na contratação** | Nenhum documento do convênio menciona rastreabilidade por peça como requisito. Ao contrário: o PTA a exclui expressamente (FE-01). O registro de riscos previa apenas a *possibilidade* de pedido do cliente final (RSK-02), com resposta já definida: SM e termo aditivo |
| **Fato técnico agravante** | Na visita técnica de 15/07/2026 confirmou-se que o CLP da estação de inspeção da CEL-04 só expõe **Modbus TCP**, o que contraria a PREM-01 ("todos os CLPs e robôs da CEL-04 expõem OPC UA"). A estação constava como "não mapeada" no inventário do ENT-1.2 (24/04/2026) |
| **Consequência para a financiadora** | Sem a capacidade, fornecedores Tier 1 que usam células MetalPrime, a começar pela Ferraz, ficam impedidos de fornecer à Veltra, e a MetalPrime perde competitividade dos gateways MP-Edge no segmento automotivo |

### 3.3 Evidências

| Anexo | Documento | Data | O que comprova |
|---|---|---|---|
| **A-01** | Ofício Veltra Motors VM-SQF-0412/2026 | 30/06/2026 | Conteúdo e data da exigência; campos obrigatórios; prazo de 5 min; referência à IATF 16949 |
| **A-02** | Ata da reunião mensal de acompanhamento nº 05/2026 (LASIN/MetalPrime) | 08/07/2026 | Apresentação da exigência ao projeto; informação sobre a estação Modbus TCP; encaminhamento "PO registra SM em até 2 dias úteis; nenhuma atividade antes do CCB" |
| **A-03** | E-mail da MetalPrime com especificação preliminar da API VeltraTrace (rascunho, sem ambiente de homologação) | 09/07/2026 | Que a integração é nova e que o contrato de API ainda não existia |
| **A-04** | Extrato do PTA v1.0 §7 e da matriz de rastreabilidade v1.0 (tabela A.5) | 10/07/2026 | Que FE-01 a FE-04 estavam excluídos e aprovados em 20/02/2026 e 24/04/2026 |
| **A-05** | Inventário de equipamentos da CEL-04 (ENT-1.2) | 24/04/2026 | Estação de inspeção listada como "não mapeada" |

### 3.4 Tempestividade e conduta das partes

| Data | Evento | Prazo do PTA §13 |
|---|---|---|
| 30/06/2026 | Ofício da Veltra à MetalPrime | — |
| 08/07/2026 | Exigência apresentada ao projeto (ata nº 05/2026) | — |
| 10/07/2026 | **SM-01 registrada** | Registro em até 2 dias úteis: cumprido |
| 14/07/2026 | CCB de admissibilidade | — |
| 15/07/2026 | Visita técnica à CEL-04 confirma Modbus TCP e ausência de leitura DataMatrix | — |
| 17/07/2026 | **Análise de impacto concluída** | Até 10 dias úteis (limite 24/07): entregue em 5 |
| 21/07/2026 | CCB de deliberação técnica: recomendada a alternativa D | — |
| 31/07/2026 | **Aprovação da MetalPrime** (Diretoria Industrial e P&D) | — |
| 05/08/2026 | **Submissão desta justificativa à Fundepes** | — |

Até a data desta submissão, **nenhuma atividade da META-5 foi executada** e nenhum item foi incluído no backlog. A única atividade realizada foi o mapeamento da estação de inspeção, já previsto na linha de base como resposta ao RSK-01, sem custo adicional.

---

## 4. Demonstração de que o objeto acrescido não estava no escopo contratado

> Esta seção é o núcleo da justificativa. Ela mostra, com documentos aprovados pelas partes **antes** do fato superveniente, que nenhum elemento da exigência da Veltra integrava o objeto, as metas ou o valor do convênio.

### 4.1 O PTA excluiu expressamente cada elemento da exigência

O PTA v1.0 tem uma seção própria de fora de escopo (§7), que diz: "Os itens abaixo **não fazem parte** do objeto, das metas nem do valor deste convênio. Incluir qualquer um deles, total ou parcialmente, é **alteração de escopo** [...]. Se a alteração afetar meta, valor ou prazo, exige termo aditivo."

| Elemento da exigência Veltra (A-01) | Item excluído no PTA v1.0 §7 | Texto do esclarecimento no PTA |
|---|---|---|
| Vincular parâmetros, operador, célula, data/hora e inspeção ao **número de série** da peça | **FE-01** — Rastreabilidade individual de peças (genealogia por número de série) | "A plataforma não vincula parâmetros de processo, operador, célula, data/hora ou resultado de inspeção a uma peça específica nem a seu número de série. O 'monitoramento' previsto neste PTA é de eficiência (OEE) e de saúde de equipamentos, agregado por célula, turno e equipamento" |
| Enviar o registro ao **MES VeltraTrace** (API REST) | **FE-02** — Integração com sistemas MES/ERP de terceiros | "Não há envio nem recebimento de dados para MES, ERP ou outros sistemas corporativos [...] de clientes ou de terceiros, por API ou qualquer outro meio" |
| Ler o resultado da **estação de inspeção em Modbus TCP** | **FE-03** — Protocolos além de OPC UA (ex.: Modbus TCP) | "A coleta é feita apenas via OPC UA. Equipamentos que não exponham OPC UA ficam fora da coleta" |
| Ler o **DataMatrix** da peça com leitor industrial | **FE-04** — Leitura de códigos (DataMatrix/QR) e identificação de peças | "Não estão previstas a aquisição, a integração nem a leitura de códigos de identificação de peças, nem o hardware correspondente" |

A coincidência entre a exigência e a lista de exclusões não é casual nem interpretativa: a exigência cruza **quatro fronteiras explícitas ao mesmo tempo**. A única exclusão que a exigência não toca é **FE-05** (operação 24x7 com SLA), que permanece fora de escopo mesmo após o aditivo.

O PTA reforça a fronteira em outros dois pontos:
- **§6 (escopo incluído):** "Os dados tratados são agregados por célula, turno e equipamento. O projeto não identifica peças individualmente."
- **§11 (plano de aplicação):** não há leitor DataMatrix nem CLP Modbus entre os equipamentos orçados (workstation GPU, 2 notebooks, switch industrial e kit de bancada OPC UA).

### 4.2 A fronteira foi confirmada nos requisitos aprovados em ata

Os requisitos v1.0 (ENT-1.1), aprovados pela MetalPrime em ata de **24/04/2026**, transformaram a fronteira em regras verificáveis:

| Item da linha de base | Conteúdo | Efeito |
|---|---|---|
| **RN-04** | "O menor nível de agregação do OEE é equipamento × turno; o nível de reporte principal é célula × turno. **Não existe registro por peça (FE-01).**" | Exclui o registro por peça no próprio modelo de dados |
| RN-01 / DEC-04 | Qualidade do OEE calculada por contadores agregados OK/refugo, "sem identificação de peças" | Mostra que o resultado de inspeção por peça nunca foi necessário |
| RF-006 / DEC-05 | Parâmetros de solda agregados na borda em janelas de 1 s, sem envio do sinal bruto | Os parâmetros existem só como estatística de janela, não por ciclo nem por peça |
| RF-017 | API própria; "não há envio ativo a sistemas de terceiros (FE-02)" | Exclui a integração com MES |
| RF-001 a RF-003 | Coleta somente OPC UA | Exclui Modbus TCP |
| DEC-03 | Faixa RF-101+/RNF-101+ **reservada para mudanças via SM** | Prevê, desde a linha de base, que escopo novo entra com IDs novos e por mudança formal |

### 4.3 A matriz de rastreabilidade prova a ausência de cobertura

A matriz de rastreabilidade v1.0 liga cada requisito a um objetivo, uma meta e um entregável. Sua tabela A.5 ("matriz reversa") pergunta, para cada FE, se algum requisito existente o cobre:

| FE | Requisito existente que cobre? |
|---|---|
| FE-01 Rastreabilidade por peça | **Nenhum** |
| FE-02 Integração MES/ERP | **Nenhum** |
| FE-03 Protocolos além de OPC UA | **Nenhum** |
| FE-04 Leitura DataMatrix/QR | **Nenhum** |
| FE-05 Operação 24x7 com SLA | **Nenhum** |

Métricas da linha de base:

| Métrica | Resultado |
|---|---|
| RF e RNF vinculados a OBJ, META e ENT | 42 / 42 (100%) — todos mapeiam **apenas** para OBJ-01 a OBJ-04 |
| FE com requisito que os implementa | **0 / 5 (0%)** — confirma a fronteira |
| Épicos de rastreabilidade, MES ou Modbus no backlog | **0** (EP-01 a EP-04 cobrem só META-1 a META-4) |
| Inclusões de escopo desde a linha de base de 24/04/2026 | **0** (escopo estável em 361 pontos) |

**Conclusão da matriz:** não há requisito, entregável, história ou item de orçamento da linha de base que corresponda à rastreabilidade por peça, à integração com MES, à coleta Modbus TCP ou à leitura de DataMatrix. Não é possível sustentar que esses itens estivessem "implícitos" no termo "monitoramento", porque o próprio PTA define "monitoramento" como OEE e saúde de equipamentos, agregados.

### 4.4 Distinção entre ajuste e inclusão de meta

| Critério | Ajuste de requisito (v1.x, sem aditivo) | Situação da SM-01 |
|---|---|---|
| Afeta meta? | Não | **Sim** — novo OBJ-05, nova META-5 e deslocamento da META-4 |
| Afeta valor? | Não (no máximo remanejamento) | **Sim** — rubrica de equipamentos 100% executada; pessoal sem cobertura nos meses 13–16 |
| Afeta prazo? | Não | **Sim** — piloto ampliado não cabe até 28/02/2027 |
| Reabre requisitos aceitos? | Pode reabrir | **Não** — nenhum requisito aceito é invalidado; RN-04 mantida para o OEE; os 14 itens impactados recebem só ajuste de texto ou extensão |
| Enquadramento | PTA §13, item 5, 1º caso | **PTA §13, item 5, 2º caso — termo aditivo obrigatório** |

### 4.5 Conversão restrita do fora de escopo

O aditivo não "abre" o escopo de forma genérica. Converte apenas o necessário para a exigência, na célula piloto:

| FE | Após o aditivo |
|---|---|
| FE-01 | Escopo **somente na CEL-04** |
| FE-02 | Escopo **somente para o VeltraTrace**; outros MES/ERP continuam fora |
| FE-03 | Escopo **somente para Modbus TCP da estação de inspeção da CEL-04**; PROFINET e EtherNet/IP continuam fora |
| FE-04 | Escopo (um leitor industrial, na CEL-04) |
| FE-05 | **Continua fora.** A meta de entrega de RNF-102 é critério de validação do piloto, não SLA |

---

## 5. Pertinência ao objeto e enquadramento como P&D

### 5.1 Pertinência ao objeto do convênio

A META-5 é pertinente ao objeto porque:
1. **mesmo produto:** amplia a capacidade embarcada do gateway MP-Edge, bem habilitado à Lei de Informática;
2. **mesma arquitetura:** reaproveita a coleta na borda (META-1), o store-and-forward e o MQTT/TLS (DEC-02), a base de tempo NTP (RF-004) e o backend (META-2);
3. **mesmo ambiente de validação:** CEL-04, na Autopeças Ferraz, dentro da META-4 já prevista;
4. **mesma finalidade:** transferir à MetalPrime tecnologia própria que diferencie o MP-Edge no mercado.

A rastreabilidade é um **registro paralelo** ao OEE. Ela não altera a granularidade do OEE (RN-04) nem reabre entregáveis já aceitos.

### 5.2 Incertezas técnicas novas

A META-5 não se resume a "integrar um sistema". Ela traz incertezas que não se resolvem pela aplicação direta de uma solução pronta, no mesmo hardware de recursos limitados (RST-03):

| # | Incerteza técnica | Por que não é trivial | ENT que a investiga |
|---|---|---|---|
| **IT-5** | **Correlação determinística peça–ciclo–inspeção na borda**, a partir de três fontes assíncronas (OPC UA, Modbus TCP e leitor DataMatrix), com bases de tempo distintas e peças em trânsito | Não há sinal comum de identidade de peça entre os equipamentos. É preciso inferir a associação com 0 troca de peça em 100% dos casos de teste, inclusive em retrabalho ou retirada manual | ENT-5.1, ENT-5.3 |
| **IT-6** | **Coleta multiprotocolo concorrente com inferência embarcada** dentro dos limites do MP-Edge | O perfil de carga de ENT-1.4 cobre apenas OPC UA (pico de CPU de 41%). A interação com Modbus, leitor, fila de envio e modelos do ENT-3.3 não é conhecida e só se resolve por experimento | ENT-5.2 |
| **IT-7** | **Entrega "efetivamente uma vez" em ≤ 5 min (p99,5)** com conectividade intermitente e buffer limitado na borda | Combinar idempotência, ordem por peça, recuo exponencial e buffer finito, com meta estatística de prazo, exige modelagem e ensaios de falha | ENT-5.4, ENT-5.5 |

Assim como nas metas originais (PTA §14, item 5), o aceite dos entregáveis de pesquisa avalia o rigor metodológico e a documentação dos resultados.

### 5.3 Distinção entre P&D e serviço ou manutenção

| Atividades da META-5 custeadas pelo aditivo (P&D) | Atividades que **não** são P&D (ficam com a MetalPrime ou fora do convênio) |
|---|---|
| Pesquisa do método de correlação peça–ciclo–inspeção (IT-5) | Implantação da rastreabilidade em outras células ou plantas |
| Experimentos de carga multiprotocolo no MP-Edge (IT-6) | Adaptação a outros MES de clientes da MetalPrime |
| Projeto e ensaios de falha da fila idempotente com meta de prazo (IT-7) | Operação contínua da integração após a transferência |
| Protótipo funcional e validação experimental no piloto da CEL-04 | Suporte com SLA, plantão ou tempo de resposta (FE-05) |
| Documentação técnico-científica e transferência de tecnologia | Fabricação, certificação e comercialização do MP-Edge |
| | Manutenção corretiva da CEL-04 e do leitor em si |

### 5.4 Aderência à Lei de Informática

O projeto é executado no âmbito da Lei nº 8.248/1991 e alterações, como parte da obrigação de investimento em P&D da MetalPrime, fabricante de bens habilitados. A META-5:
- gera **novidade tecnológica no nível do produto**: hoje a linha MP-Edge não tem rastreabilidade por peça nem integração com MES de montadora;
- tem **incerteza técnica caracterizada** (IT-5 a IT-7) e entregáveis de pesquisa com evidência documental;
- mantém a **rastreabilidade de dispêndios**: cada requisito novo (RF-101 a RF-110, RNF-101 a RNF-105) está ligado a OBJ-05, META-5, um ENT-5.x e uma incerteza técnica. Na matriz v1.1, 15 de 15 requisitos da META-5 estão rastreados. Isso sustenta o relatório anual da MetalPrime ao MCTI (STK-08) e o critério CS-08.

O enquadramento detalhado e os dispositivos legais aplicáveis devem ser confirmados pela área fiscal da MetalPrime e pela Fundepes, conforme suas normas.

---

## 6. Nova meta: META-5

### 6.1 Identificação

| Item | Valor |
|---|---|
| Meta | **META-5 — Rastreabilidade por peça e integração com MES de cliente** |
| Objetivo atendido | OBJ-05 |
| Período | Meses 9–16 (novembro/2026 a junho/2027) |
| Esforço direto | ~2.150 horas-pessoa |
| Requisitos | RF-101 a RF-110; RNF-101 a RNF-105 |
| Critério de sucesso | **CS-10:** ≥ 99,5% das peças da CEL-04 com registro de rastreabilidade entregue ao VeltraTrace em ≤ 5 min, durante a validação piloto (meses 14–16) |

### 6.2 Etapas

| Etapa | Descrição | Meses | ENT |
|---|---|---|---|
| E5.1 Especificação | Modelo de registro por peça, contrato de API com o VeltraTrace (OpenAPI), fluxos de exceção com a Ferraz | 9 | ENT-5.1 |
| E5.2 Coleta Modbus TCP | Cliente Modbus TCP no MP-Edge; experimentos de carga conjunta (IT-6) | 9–11 | ENT-5.2 |
| E5.3 Identificação e genealogia | Leitura DataMatrix, agregação por ciclo, correlação peça–ciclo–inspeção (IT-5) | 10–12 | ENT-5.3 |
| E5.4 Integração MES | Envio ao VeltraTrace com fila idempotente, reconciliação e ensaios de falha (IT-7) | 12–13 | ENT-5.4 |
| E5.5 Validação | Rastreabilidade em operação assistida no piloto ampliado, junto com a META-4 | 14–16 | ENT-5.5 |

### 6.3 Entregáveis e indicadores

| ENT | Entregável | Mês | Requisitos | Indicador de verificação / evidência |
|---|---|---|---|---|
| **ENT-5.1** | Especificação de rastreabilidade e contrato de integração VeltraTrace | 9 | RF-101, RF-109, RNF-104 | Modelo de registro e contrato OpenAPI aprovados pela MetalPrime, com confirmação da Veltra; 0 campos obrigatórios nulos e 100% de conformidade ao contrato em 1.000 registros de teste (CA-RF101-1). Especificação versionada e ata |
| **ENT-5.2** | Coletor Modbus TCP para a estação de inspeção | 11 | RF-102, RNF-103 | Resultado de inspeção lido em 100% de 500 ciclos de bancada, com latência ≤ 1 s; com OPC UA + Modbus + DataMatrix + fila + inferência, CPU ≤ 70% e memória ≤ 75%. Release e demonstração com CLP de bancada em ata |
| **ENT-5.3** | Leitura DataMatrix e genealogia por peça | 12 | RF-103 a RF-106, RF-109, RNF-101, RNF-105 | Leitura válida ≥ 99,5%; parâmetros e inspeção associados ao DataMatrix correto em 100% dos ciclos de teste (0 trocas, até 3 peças em trânsito); carimbo de tempo ≤ 100 ms; 0 registros perdidos ou corrompidos. Release e relatório de teste |
| **ENT-5.4** | Integração MES com envio ≤ 5 min | 13 | RF-107, RF-108, RF-110, RNF-102, RNF-104 | Registro aceito pelo VeltraTrace em ≤ 5 min; após 2 h sem conexão, 100% dos pendentes reenviados sem duplicidade; TLS 1.2+, zero credenciais em texto claro, revisão de segurança independente. Logs e teste em homologação do VeltraTrace |
| **ENT-5.5** | Relatório de validação de rastreabilidade | 16 | RF-110, RNF-102, RNF-105 | ≥ 99,5% das peças entregues em ≤ 5 min no piloto (CS-10); reconciliação peças produzidas × aceitas; documentação dos resultados de IT-5 a IT-7. Relatório com evidências cruzadas com o ENT-4.2 |

### 6.4 Efeitos sobre a META-4

A META-4 mantém seu conteúdo e seus quatro entregáveis, com nova janela e piloto ampliado:

| ENT | Mês v1.0 | Mês v2.0 | Alteração |
|---|---|---|---|
| ENT-4.1 Plano de validação piloto | 10 | **14** | Inclui protocolo de rastreabilidade (CS-10) |
| ENT-4.2 Relatório de validação na CEL-04 | 12 | **16** | ≥ 4 semanas de operação assistida com OEE, alertas **e** rastreabilidade |
| ENT-4.3 Pacote de transferência | 12 | **16** | Inclui componentes da META-5; treinamento ≥ 16 h mantido |
| ENT-4.4 Relatório técnico final | 12 | **16** | Protocolo na Fundepes até 30/06/2027 |

### 6.5 Premissas da META-5 (responsabilidade da MetalPrime)

| ID | Premissa |
|---|---|
| PREM-07 | Contrato de API e acesso ao ambiente de homologação do VeltraTrace até o mês 9 |
| PREM-08 | Autorização da Ferraz para instalação do leitor, acesso ao CLP de inspeção e operação assistida nos meses 14–16 (substitui a janela de PREM-05) |
| PREM-09 | Mapa de registradores Modbus da estação de inspeção até o mês 9 |

---

## 7. Cronograma físico replanejado (meses 1–16)

Convenção: Mês 1 = março/2026; Mês 12 = fevereiro/2027; Mês 13 = março/2027; Mês 16 = junho/2027.
Legenda: ■ = execução; ◆ = mês de entrega; ✔ = concluído.

| Meta / ENT | M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10 | M11 | M12 | M13 | M14 | M15 | M16 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **META-1** | ■ | ■ | ✔ | | | | | | | | | | | | | |
| ENT-1.1, ENT-1.2 | ■ | ✔ | | | | | | | | | | | | | | |
| ENT-1.3, ENT-1.4 | ■ | ■ | ✔ | | | | | | | | | | | | | |
| **META-2** | | | ■ | ■ | ■ | ■ | ◆ | | | | | | | | | |
| ENT-2.1 | | | ■ | ✔ | | | | | | | | | | | | |
| ENT-2.2 | | | | ■ | ■ | ◆ | | | | | | | | | | |
| ENT-2.3, ENT-2.4 | | | | | ■ | ■ | ◆ | | | | | | | | | |
| **META-3** | | | | | | ■ | ■ | ■ | ■ | ■ | ◆ | | | | | |
| ENT-3.1 | | | | | | ■ | ◆ | | | | | | | | | |
| ENT-3.2 | | | | | | | ■ | ■ | ◆ | | | | | | | |
| ENT-3.3, ENT-3.4 | | | | | | | | | ■ | ■ | ◆ | | | | | |
| **META-5 (nova)** | | | | | | | | | ■ | ■ | ■ | ■ | ■ | ■ | ■ | ◆ |
| ENT-5.1 | | | | | | | | | ◆ | | | | | | | |
| ENT-5.2 | | | | | | | | | ■ | ■ | ◆ | | | | | |
| ENT-5.3 | | | | | | | | | | ■ | ■ | ◆ | | | | |
| ENT-5.4 | | | | | | | | | | | | ■ | ◆ | | | |
| ENT-5.5 | | | | | | | | | | | | | | ■ | ■ | ◆ |
| **META-4 (deslocada)** | | | | | | | | | | | | | | ■ | ■ | ◆ |
| ENT-4.1 | | | | | | | | | | | | | | ◆ | | |
| ENT-4.2, ENT-4.3, ENT-4.4 | | | | | | | | | | | | | | ■ | ■ | ◆ |

**Caminho crítico:** assinatura do aditivo (até o mês 8) → ENT-5.1 (mês 9; depende de PREM-07) → ENT-5.2 (mês 11) → ENT-5.3 (mês 12) → ENT-5.4 (mês 13) → ENT-4.1 (mês 14) → piloto de no mínimo 4 semanas com OEE, alertas e rastreabilidade (meses 14–16) → ENT-5.5 e ENT-4.2 (mês 16). Folga total: ~2 semanas (18/06 a 30/06/2027).

**Por que a META-4 vai para os meses 14–16 e não 13–15:** o piloto ampliado só pode começar depois do ENT-5.4 (mês 13), porque precisa validar OEE, alertas e rastreabilidade na mesma operação assistida.

**O que não muda:** META-1, META-2 e META-3 mantêm suas janelas e entregáveis; os desembolsos originais (3ª parcela em 01/09/2026 e 4ª em 01/12/2026) mantêm datas e condições.

---

## 8. Plano de aplicação do aditivo

### 8.1 Quadro do aditivo

| Rubrica | Valor (R$) | % do aditivo |
|---|---|---|
| Pessoal | 128.000,00 | 71,1% |
| Equipamentos e material permanente (CLP de bancada Modbus + leitor DataMatrix industrial) | 22.000,00 | 12,2% |
| Material de consumo | 0,00 | 0,0% |
| Serviços de terceiros (PJ) | 8.000,00 | 4,4% |
| Diárias e passagens | 4.000,00 | 2,2% |
| Despesas operacionais e administrativas (Fundepes, 10%) | 18.000,00 | 10,0% |
| **Total do aditivo** | **180.000,00** | **100,0%** |

### 8.2 Memória de cálculo — Pessoal (R$ 128.000,00)

#### 8.2.1 Mecanismo de custeio (por que não há pagamento em dobro)

O ponto que merece atenção do analista é este: **o aditivo não paga horas da META-5 nos meses 9–12 nem paga duas vezes a META-4.** O mecanismo é uma permuta no tempo:

1. **Meses 9–12 (cobertos pelo orçamento original).** A META-4, que no PTA v1.0 ocupava os meses 10–12, sai dessa janela. A capacidade da equipe que estava reservada para ela, já paga pelo convênio original, passa a executar a parte inicial da META-5 (especificação, Modbus, genealogia). Custo adicional para o aditivo nesses meses: zero (exceto o 3º bolsista, item 4 abaixo).
2. **Meses 13–16 (sem cobertura no orçamento original, RST-01/RST-02).** Neles a equipe executa a parte final da META-5 **e** a META-4 deslocada. Como o orçamento original termina em 28/02/2027, esses meses precisam ser pagos pelo aditivo.
3. **Resultado líquido.** A META-4 continua custando o que o PTA v1.0 previa (só mudou de mês). O trabalho realmente novo é a META-5: ~2.150 horas-pessoa diretas. O que o aditivo compra, além disso, é o **prolongamento da equipe por 4 meses** necessário para sustentar a META-4 na nova janela.
4. **3º bolsista (meses 11–16).** Os dois bolsistas atuais estão alocados à META-2 e à META-3 até o mês 12. O pico de testes da META-5 (bancada Modbus, lotes de leitura, reconciliação) começa no mês 11. O 3º bolsista é custeado pelo aditivo e não se sobrepõe a bolsas já pagas.

#### 8.2.2 Composição

Custo mensal = custo total para o projeto (remuneração, encargos e provisões, no caso de CLT; ou valor da bolsa), conforme o PTA v1.0 §11.1, **sem reajuste**.

| Papel | Nome | Custo mensal (R$) | Dedicação meses 13–16 | Meses-pessoa | Total (R$) |
|---|---|---|---|---|---|
| Product Owner / Analista de Requisitos | Leonardo Lucca | 6.500,00 | 75% (30 h/sem) | 3,0 | 19.500,00 |
| Engenheiro de software sênior | Felipe Andrade Rocha | 8.500,00 | 100% (40 h/sem) | 4,0 | 34.000,00 |
| Desenvolvedor full stack | Lucas Henrique Barros | 6.000,00 | 87,5% (35 h/sem) | 3,5 | 21.000,00 |
| Engenheiro de automação | Thiago Melo Cavalcante | 7.000,00 | 100% (40 h/sem) | 4,0 | 28.000,00 |
| Cientista de dados (ML) | Dra. Aline Souza Medeiros | 7.000,00 | 75% (30 h/sem) | 3,0 | 21.000,00 |
| Bolsista de iniciação tecnológica (3º bolsista, 20 h/sem) | A selecionar | 750,00 | Meses 11–16 | 6,0 bolsa-meses | 4.500,00 |
| Coordenador (docente) | Prof. Dr. Leandro Dias | — | 10 h/sem, sem remuneração | — | 0,00 |
| **Total** | | | | **17,5 MP CLT + 6 bolsa-meses** | **128.000,00** |

**Por que dedicação ajustada:** nos meses 13–16 a META-3 já estará encerrada (mês 11). O pico fica na integração (engenheiro sênior) e no piloto com Modbus (engenheiro de automação), ambos a 100%. PO, full stack e cientista de dados ficam em dedicação parcial, o que evita pagar capacidade ociosa. A redução de jornada será formalizada por termo junto à Fundepes, conforme suas normas.

#### 8.2.3 Conciliação horas × custo: as ~3.393 horas

Referência de capacidade do PTA v1.0 §11.1: 13.900 horas-pessoa / 12 meses ≈ **165,5 h/mês** por pessoa a 40 h/sem e **82,75 h/mês** a 20 h/sem.

| Linha | Cálculo | Horas-pessoa |
|---|---|---|
| (a) Capacidade CLT comprada pelo aditivo | 17,5 MP × 165,5 h | 2.896 |
| (b) Capacidade de bolsa comprada pelo aditivo | 6 × 82,75 h | 497 |
| **(c) Capacidade total comprada** | (a) + (b) | **~3.393** |
| **(d) Trabalho novo direto da META-5** | Estimativa bottom-up por ENT (tabela 8.2.4) | **2.150** |
| **(e) Extensão de 4 meses da equipe que sustenta a META-4 deslocada** | (c) − (d) | **~1.243** |

**Como ler a linha (e).** Prorrogar um projeto em 4 meses tem um custo que existe mesmo sem trabalho novo: a equipe continua sendo gerida, faz seus ritos e relatórios, replaneja e revalida o plano do piloto (ENT-4.1) para a nova janela, faz deslocamentos e integração de segurança na Ferraz, e tem férias e feriados provisionados no custo mensal. Essas ~1.243 h (cerca de 37% da capacidade comprada) são o custo de "carregar" a equipe que vai executar a META-4 nos meses 14–16. Sem elas, a META-4 já orçada não teria quem a executasse depois de 28/02/2027.

**Em termos líquidos:** o projeto ganha 2.150 horas-pessoa de trabalho novo e paga 4 meses adicionais de equipe parcial.

| Indicador | Valor | Comentário |
|---|---|---|
| Custo por hora contratada do aditivo | R$ 128.000,00 ÷ ~3.393 h ≈ **R$ 37,73/h** | Comparável à média contratual do PTA original (R$ 438.000,00 ÷ 13.900 h ≈ R$ 31,51/h); a diferença vem do mix mais sênior |
| Custo por hora direta da META-5 | R$ 128.000,00 ÷ 2.150 h ≈ **R$ 59,53/h** | Inclui o custo da extensão (linha e) |
| Participação de engenheiro sênior e engenheiro de automação nas horas diretas | 1.000 h ÷ 2.150 h ≈ 46% | Explica a maior parte do diferencial de custo por hora |

#### 8.2.4 Esforço direto da META-5 por entregável e papel (horas-pessoa)

Estimativa bottom-up feita pela equipe técnica em 15–16/07/2026 (planning poker com histórias preliminares do futuro épico EP-05), convertida em horas pela relação histórica do projeto (S1–S9).

| ENT | Mês | PO | Eng. sênior | Full stack | Eng. automação | Cient. dados | Bolsista | **Total** |
|---|---|---|---|---|---|---|---|---|
| ENT-5.1 | 9 | 90 | 60 | 30 | 40 | 20 | 20 | **260** |
| ENT-5.2 | 11 | 20 | 60 | 0 | 240 | 20 | 40 | **380** |
| ENT-5.3 | 12 | 60 | 170 | 140 | 120 | 70 | 60 | **620** |
| ENT-5.4 | 13 | 50 | 200 | 150 | 0 | 50 | 70 | **520** |
| ENT-5.5 | 16 | 80 | 30 | 60 | 80 | 60 | 60 | **370** |
| **Total** | | **300** | **520** | **380** | **480** | **220** | **250** | **2.150** |

### 8.3 Memória de cálculo — demais rubricas

| Rubrica | Item | Justificativa técnica | Valor (R$) |
|---|---|---|---|
| Equipamentos | CLP de bancada com Modbus TCP, módulo de E/S e fonte | Desenvolver e testar o coletor Modbus (ENT-5.2) sem interferir na produção da CEL-04; base dos 500 ciclos de teste de CA-RF102-1 | 9.500,00 |
| | Leitor DataMatrix industrial fixo, com iluminação e licença de decodificação | Leitura da peça na entrada da célula (ARQ-02); sem ele não há número de série (ENT-5.3). Não previsto no PTA v1.0 (FE-04) | 12.500,00 |
| | **Subtotal** | Rubrica original 100% executada em 30/06/2026 | **22.000,00** |
| Serviços de terceiros | Extensão da infraestrutura de nuvem de homologação por 4 meses | Ambiente de homologação nos meses 13–16 | 4.700,00 |
| | Revisão de segurança independente da integração externa | RNF-104; o pentest do mês 8 cobre apenas a linha de base | 3.300,00 |
| | **Subtotal** | | **8.000,00** |
| Diárias e passagens | 2 missões curtas Maceió–Betim (1 pessoa, cerca de R$ 2.000,00 cada) | Instalação do leitor e do coletor Modbus na CEL-04; acompanhamento do piloto ampliado | 4.000,00 |
| Material de consumo | Sem acréscimo | O saldo da rubrica original (R$ 8.800,00 em 30/06/2026) cobre cabos e conectores adicionais | 0,00 |
| DOA Fundepes | 10% do valor do aditivo | Conforme percentual do convênio | 18.000,00 |

### 8.4 Quadro consolidado (convênio + aditivo)

| Rubrica | Original (R$) | Aditivo nº 01 (R$) | **Consolidado (R$)** | % do total |
|---|---|---|---|---|
| Pessoal (CLT/RPA/bolsas) | 438.000,00 | 128.000,00 | **566.000,00** | 72,6% |
| Equipamentos e material permanente | 42.000,00 | 22.000,00 | **64.000,00** | 8,2% |
| Material de consumo | 12.000,00 | 0,00 | **12.000,00** | 1,5% |
| Serviços de terceiros (PJ) | 30.000,00 | 8.000,00 | **38.000,00** | 4,9% |
| Diárias e passagens | 18.000,00 | 4.000,00 | **22.000,00** | 2,8% |
| Despesas operacionais e administrativas (Fundepes, 10%) | 60.000,00 | 18.000,00 | **78.000,00** | 10,0% |
| **Total** | **600.000,00** | **180.000,00** | **780.000,00** | **100,0%** |

Os gateways MP-Edge continuam fornecidos em comodato pela MetalPrime (PREM-02) e não são custeados pelo convênio nem pelo aditivo.

---

## 9. Cronograma de desembolso do aditivo

### 9.1 Parcelas do aditivo

| Parcela | Data prevista | Condição | Valor (R$) | Destinação principal |
|---|---|---|---|---|
| 5ª (1ª do aditivo) | Na assinatura do termo aditivo (previsão: 02/09/2026) | Assinatura do Termo Aditivo nº 01 | 100.000,00 | Compra do CLP de bancada e do leitor DataMatrix; bolsas do 3º bolsista; DOA; início do pessoal dos meses 13–16 |
| 6ª (2ª do aditivo) | Após o aceite do ENT-5.3 (previsão: março/2027, Mês 13) | Termo de aceite do ENT-5.3 pela MetalPrime | 80.000,00 | Pessoal dos meses 13–16; nuvem; revisão de segurança; diárias |
| **Total do aditivo** | | | **180.000,00** | |

### 9.2 Cronograma consolidado

| Parcela | Data prevista | Condição | Valor (R$) | Acumulado (R$) |
|---|---|---|---|---|
| 1ª | 01/03/2026 | Assinatura do convênio (recebida) | 180.000,00 | 180.000,00 |
| 2ª | 01/06/2026 | Aceite da META-1 (recebida) | 150.000,00 | 330.000,00 |
| 3ª | 01/09/2026 | Aceite dos ENT-2.2 e ENT-2.3 | 150.000,00 | 480.000,00 |
| **5ª (aditivo)** | Assinatura do aditivo (prev. 02/09/2026) | Assinatura do Termo Aditivo nº 01 | 100.000,00 | 580.000,00 |
| 4ª | 01/12/2026 | Aceite dos ENT-3.1 e ENT-3.2 | 120.000,00 | 700.000,00 |
| **6ª (aditivo)** | Prev. março/2027 | Aceite do ENT-5.3 | 80.000,00 | **780.000,00** |

A numeração das parcelas do aditivo (5ª e 6ª) preserva a identificação das quatro parcelas originais, que **não mudam** de valor, data nem condição.

---

## 10. Alternativas consideradas

### 10.1 Quadro comparativo

| | A — Rejeitar | B — Absorver sem aditivo | C — Aditivo só de prazo | **D — Aditivo de meta + valor + prazo** |
|---|---|---|---|---|
| Descrição | Manter a linha de base; MetalPrime busca solução fora do convênio | Executar a META-5 com equipe e saldo atuais | Prorrogar 4 meses sem recurso nem meta | Incluir META-5/OBJ-05, + R$ 180.000,00, + 4 meses |
| Atende a exigência da Veltra? | Não | Parcialmente, com alto risco | Não de forma sustentável | **Sim**, com validação em produção até jun/2027 |
| Efeito sobre META-3 (núcleo de P&D) | Nenhum | Atraso de ENT-3.3/3.4 para os meses 13–14; perda de 35–40% da capacidade de papéis críticos no pico | Nenhum direto | **Preservada** |
| Equipamentos (R$ 22.000,00) | — | Sem recurso (rubrica 100% executada) | Sem recurso | Custeados |
| Pessoal dos meses 13–16 | — | Sem cobertura | Sem cobertura | Custeado |
| Conformidade com o PTA §13 | Conforme | **Viola o item 6** (absorção informal) | **Não atende o item 5** (há inclusão de meta) | **Conforme** |
| Risco de glosa / questionamento P&D | Baixo | Alto | Médio | Baixo (rastreabilidade completa) |
| Custo para a MetalPrime | R$ 0 (custo de oportunidade alto) | R$ 0 aparente (custo oculto alto) | R$ 0, mas insuficiente | R$ 180.000,00 |
| **Parecer** | Não recomendada | Não recomendada | Não recomendada | **Recomendada** |

### 10.2 O custo de não fazer (alternativa B quantificada)

"Absorver" a META-5 parece gratuito, mas não é. O custo seria transferido para a META-3, para o prazo e para a equipe, sem base contratual:

| Efeito | Quantificação |
|---|---|
| Capacidade | Backlog restante (204 pts) + META-5 (~110 pts) = ~314 pts contra ~284–296 pts de capacidade até a S26 → déficit de 18 a 30 pts e folga zero |
| Prazo | 314 ÷ 16,7 ≈ 18,8 sprints contra 17 disponíveis → estouro de ~1 mês **mesmo sem imprevistos** |
| META-3 | Consumo integral da reserva de ~30% para a incerteza de P&D; probabilidade de RSK-04 sobe de 3 para 4–5 |
| META-3/META-4 | Atraso provável de **~3 a 4 meses**; piloto de 4 semanas inviável até 28/02/2027 |
| Desembolso | 4ª parcela (R$ 120.000,00) em risco; saldo em conta em 30/06/2026 (R$ 95.100,00) cobre só ~2,5 meses de pessoal |
| Equipamentos | Impossível comprar CLP Modbus e leitor DataMatrix sem mutilar outra rubrica |
| Equipe | Horas extras subiriam de 2,1% para mais de 10% (limite CS-09: 5%); maior risco de saída de membro (RSK-10) |
| Conformidade | Execução de escopo fora do PTA; risco de glosa e de questionamento do enquadramento P&D (RSK-12, RST-05) |

### 10.3 Por que D é a mais vantajosa

1. É a **única que cumpre o PTA §13** (itens 5 e 6) e a única que atende à exigência da Veltra de forma sustentável.
2. **Preserva as metas já contratadas**, em especial a META-3, núcleo de P&D do convênio, e os desembolsos originais.
3. Tem **custo marginal proporcional**: +30% de valor para +1 meta e +5 entregáveis, sem reajuste de custos unitários, com 100% do pessoal calculado sobre os valores do PTA v1.0.
4. **Transfere à MetalPrime uma capacidade nova no produto habilitado**, que ela não obteria ao rejeitar ou ao absorver de forma precária.
5. **Mantém a rastreabilidade de dispêndios** para a prestação de contas da Fundepes e para o relatório anual da MetalPrime ao MCTI.

---

## 11. Riscos e mitigação

| ID | Risco | P | I | Exp. | Mitigação | Responsável |
|---|---|---|---|---|---|---|
| RSK-13 | Ambiente de homologação ou contrato da API VeltraTrace indisponível até o mês 9 | 3 | 4 | 12 | Condicionante PREM-07 (MetalPrime); simulador do VeltraTrace a partir do OpenAPI (ENT-5.1); escalonamento via Diretoria de P&D da MetalPrime | Leonardo Lucca |
| RSK-14 | Coleta multiprotocolo + fila + inferência excedem CPU/memória do MP-Edge (RST-03) | 3 | 4 | 12 | Medição conjunta no ENT-5.2; polling Modbus de baixa frequência; priorização de processos | Felipe Andrade Rocha |
| RSK-15 | Leitura DataMatrix < 99,5% por respingos, oxidação ou marcação de baixa qualidade | 3 | 4 | 12 | Ensaio de leitura na visita do mês 9; ajuste de posição e iluminação; registro de exceção (RF-103) | Thiago Melo Cavalcante |
| RSK-16 | Trâmite do aditivo após o mês 8 reduz a janela da META-5 | 2 | 4 | 8 | Dossiê completo submetido em 05/08/2026; acompanhamento semanal com a Fundepes | Prof. Dr. Leandro Dias |
| RSK-17 | Sobreposição dos picos da META-3 e da META-5 nos meses 9–11 | 3 | 3 | 9 | META-5 nos meses 9–11 concentrada em especificação e Modbus (PO, engenheiro de automação, bolsista); engenheiro sênior entra com força a partir do mês 11 | Leonardo Lucca |
| RSK-18 | Correlação peça–ciclo–inspeção falha em retrabalho ou retirada manual (IT-5) | 3 | 4 | 12 | Modelagem dos fluxos de exceção com a Ferraz no ENT-5.1; testes com cenários de fila (CA-RF106-1) | Felipe Andrade Rocha |

Escala: P e I de 1 a 5; exposição = P × I (≥ 12 alta; 6–11 média; ≤ 5 baixa).

Riscos existentes: **RSK-01** (protocolo não-OPC UA) e **RSK-02** (escopo vindo do cliente final) passam a "Materializado — tratado pela SM-01". RSK-05 é reavaliado com RSK-14; RSK-09 recebe a revisão de segurança complementar da integração.

**Salvaguarda de P&D:** se uma incerteza técnica (IT-5 a IT-7) levar a resultado abaixo da meta, o resultado será documentado com rigor metodológico e aceito como resultado de pesquisa, como já prevê o PTA §14, item 5. Isso não autoriza descumprimento de entregáveis documentais.

---

## 12. Declaração de concordância das partes e anexos

### 12.1 Declaração

As partes abaixo declaram que:

1. a exigência de rastreabilidade por peça da Veltra Motors (Ofício VM-SQF-0412/2026, de 30/06/2026) é **fato superveniente** à assinatura do convênio e não integrava seu objeto, suas metas nem seu valor, conforme o PTA v1.0 §7 (FE-01 a FE-04), a RN-04 dos requisitos aprovados em 24/04/2026 e a matriz de rastreabilidade v1.0;
2. concordam com a inclusão da **META-5** e do **OBJ-05**, com o deslocamento da **META-4** para os meses 14–16, com o acréscimo de **R$ 180.000,00** (valor global de **R$ 780.000,00**) e com a prorrogação da vigência até **30/06/2027**, nos termos do PTA v2.0;
3. a conversão do fora de escopo é restrita: FE-01 e FE-04 somente na CEL-04; FE-02 somente para o VeltraTrace; FE-03 somente para Modbus TCP da estação de inspeção da CEL-04; **FE-05 permanece fora de escopo**; RN-04 permanece válida para o OEE;
4. a MetalPrime assume as premissas PREM-07, PREM-08 e PREM-09;
5. **nenhuma atividade da META-5 foi ou será executada antes da assinatura do Termo Aditivo nº 01** (PTA §13, itens 5 e 6);
6. as atividades classificadas como não P&D (§5.3) não serão custeadas pelo convênio nem pelo aditivo.

### 12.2 Anexos

| Nº | Documento |
|---|---|
| A-01 | Ofício Veltra Motors VM-SQF-0412/2026 (30/06/2026) |
| A-02 | Ata da reunião mensal de acompanhamento nº 05/2026 (08/07/2026) |
| A-03 | E-mail da MetalPrime com especificação preliminar da API VeltraTrace (09/07/2026) |
| A-04 | Extrato do PTA v1.0 §7 e da matriz de rastreabilidade v1.0, tabela A.5 (10/07/2026) |
| A-05 | Inventário de equipamentos da CEL-04 — ENT-1.2 (24/04/2026) |
| A-06 | Solicitação de Mudança SM-01 (10/07/2026) |
| A-07 | Análise de impacto da SM-01 (17/07/2026) |
| A-08 | Atas do CCB de 14/07/2026 (admissibilidade) e 21/07/2026 (deliberação técnica) |
| A-09 | Aprovação formal da MetalPrime — Diretoria Industrial e P&D (31/07/2026) |
| A-10 | PTA v2.0 (minuta), com plano de aplicação e cronograma de desembolso consolidados |
| A-11 | Matriz de rastreabilidade v1.1 (minuta, com OBJ-05/META-5 e RF-101..RF-110, RNF-101..RNF-105) |

---

## 13. Assinaturas

| Parte | Nome | Cargo | Assinatura | Data |
|---|---|---|---|---|
| LASIN / Universidade | Prof. Dr. Leandro Dias | Coordenador do projeto | __________ | 05/08/2026 |
| LASIN (elaboração técnica) | Leonardo Lucca | Product Owner / Analista de Requisitos | __________ | 05/08/2026 |
| MetalPrime Automação Industrial Ltda. | Roberto Siqueira Campos | Diretor Industrial | __________ | 05/08/2026 |
| MetalPrime (ciência técnica) | Eng. Juliana Mendes Prado | Gerente de P&D | __________ | 05/08/2026 |
| Fundepes (recebimento e análise) | Adm. Carla Beatriz Lins | Analista de Projetos | __________ | ___/___/2026 |
| Fundepes (de acordo) | Dr. Eduardo Farias Lessa | Diretor-Presidente | __________ | ___/___/2026 |
