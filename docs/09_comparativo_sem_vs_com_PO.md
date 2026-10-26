# 09 — Comparativo: Projeto SENTINELA sem PO × com PO

> O **Cenário com PO** corresponde ao que os documentos 01 a 08 registram. O **Cenário sem PO** descreve como o mesmo projeto tende a evoluir sem gestão de produto; valores sem registro documental aparecem marcados como *(est.)*.
> Data deste documento: 20/10/2026 (mês 8).

---

## 1. Mensagem central

1. A mesma exigência da Veltra Motors chegou aos dois cenários em 30/06/2026. No Cenário com PO ela virou um **termo aditivo de R$ 180.000,00 e +4 meses, assinado em 02/09/2026**. No Cenário sem PO virou **~2.150 horas de trabalho sem remuneração** e um pedido de prorrogação que chegou tarde.
2. O que separa os dois resultados não foi talento técnico nem boa vontade da MetalPrime. Foi uma **linha de base escrita e assinada antes do problema**: fora de escopo explícito (FE-01 a FE-04), requisitos rastreados e um processo de mudança combinado no PTA.
3. Essa linha de base existe porque havia alguém com tempo e mandato para construí-la: o PO. O custo do PO foi de **R$ 78.000,00, pagos pelo próprio convênio**, e só o aditivo trouxe 2,3 vezes esse valor, além de proteger a META-3, a equipe e o enquadramento P&D.

---

## 2. Linha do tempo paralela

|---|---|---|
| **20/02/2026** | PTA aprovado com escopo genérico ("plataforma de monitoramento de células"). Não há seção de fora de escopo nem processo de mudança | PTA v1.0 aprovado com §7 (FE-01 a FE-05), premissas PREM-01 a PREM-06 e §13 (gestão de mudanças, termo aditivo obrigatório para meta/valor/prazo) |
| **24/04/2026** | Não há documento de requisitos aprovado. O escopo fica "na cabeça" do coordenador e da equipe | Requisitos v1.0 aprovados em ata pela MetalPrime (DEC-03). RN-04 ("não existe registro por peça") e a faixa RF-101+ reservada para SM |
| **30/06/2026** | Veltra envia o ofício VM-SQF-0412/2026 à MetalPrime | Igual |
| **08/07/2026** | Reunião mensal. A MetalPrime apresenta a exigência como algo que "o monitoramento já deve cobrir". Ninguém consegue mostrar onde está escrito que não cobre. Encaminhamento informal: "vamos ver por e-mail" | Reunião mensal (ata nº 05/2026). Encaminhamento registrado: "PO registra SM em até 2 dias úteis; nenhuma atividade antes do CCB" |
| **10/07/2026** | Primeiros e-mails sobre o que "monitoramento" significa no PTA | **SM-01 registrada**, com parecer preliminar mostrando que a exigência bate em FE-01, FE-02, FE-03 e FE-04 |
| **14–15/07/2026** | Equipe começa a "estudar" Modbus e DataMatrix em paralelo à META-2, sem registro *(est.)* | CCB admite a SM (14/07). Visita técnica confirma o CLP Modbus TCP da estação de inspeção (15/07) |
| **17/07/2026** | Troca de e-mails continua, com cópias crescentes | **Análise de impacto concluída** (5 dias úteis): ~2.150 h, R$ 180.000,00, +4 meses, 4 alternativas |
| **21/07/2026** | — | CCB recomenda a alternativa D |
| **31/07/2026** | — | **MetalPrime aprova** META-5 + R$ 180.000,00 + 4 meses (23 dias após a reunião) |
| **05/08/2026** | — | Dossiê protocolado na Fundepes (justificativa, PTA v2.0, plano de aplicação) |
| **17/08/2026** | Após ~6 semanas de e-mails, o coordenador aceita "encaixar a rastreabilidade" para preservar a relação. Não há SM, estimativa nem ata *(est.)* | — |
| **28/08/2026** | Review do S13 sem a demonstração completa do ENT-2.3: parte da equipe está na integração VeltraTrace *(est.)* | Demonstração antecipada do ENT-2.3 (DEC-07), conforme planejado |
| **01/09/2026** | 3ª parcela (R$ 150.000,00) atrasa porque ENT-2.2/2.3 ainda não foram aceitos *(est.: liberada só em out/2026)* | 3ª parcela no calendário do PTA |
| **02/09/2026** | — | **Termo aditivo nº 01 assinado.** Vigência até 30/06/2027; valor total R$ 780.000,00 |
| **set–out/2026** | Horas extras passam de 10% da carga *(est.)*. CLP de bancada e leitor DataMatrix não são comprados porque a rubrica de equipamentos está esgotada. Testes são feitos direto na célula de produção da Ferraz, em janelas apertadas *(est.)* | Linha de base v2.0, matriz v1.1, EP-05 aberto. META-3 segue com a reserva de ~30% para a incerteza de P&D |
| **nov/2026 (mês 9)** | Uma bolsista deixa o projeto alegando carga incompatível com as aulas *(est.)*. ENT-3.2 escorrega | ENT-5.1 (especificação e contrato VeltraTrace) e ENT-3.2 no prazo previsto |
| **dez/2026 (mês 10)** | 4ª parcela (R$ 120.000,00) em risco: ENT-3.1/3.2 sem aceite *(est.: liberada em fev/2027)* | 4ª parcela no calendário do PTA. 3º bolsista contratado pelo aditivo a partir do mês 11 |
| **jan/2027 (mês 11)** | Coordenador percebe que META-3 e META-4 não cabem até 28/02/2027. Pedido de **prorrogação só de prazo**, sem valor e sem nova meta, justificado com "complexidade técnica imprevista" *(est.: protocolado em 11/01/2027)* | ENT-3.3/3.4 entregues; META-3 concluída no mês 11 |
| **fev/2027 (mês 12)** | Prorrogação aprovada perto do fim da vigência *(est.)*. Os meses 13–16 não têm recurso para pessoal: a equipe é reduzida ou mantida com bolsas improvisadas *(est.)* | ENT-5.3 entregue; 6ª parcela (R$ 80.000,00, aditivo) prevista para mar/2027, após o aceite |
| **mar–jun/2027** | META-3 termina com ~4 meses de atraso e sem a reserva para experimentação. CS-03 fica em risco. META-4 é comprimida. A rastreabilidade funciona "em parte", sem critério de aceite formal | META-5 até o mês 16 e META-4 nos meses 14–16, piloto de no mínimo 4 semanas com OEE, alertas e rastreabilidade (CS-10) |
| **1º sem./2027** | A área fiscal da MetalPrime tem dificuldade para justificar no RDA ao MCTI horas de "integração com MES de cliente" que não estão no PTA. Há risco de glosa e de questionamento do enquadramento P&D | Matriz v1.1 entregue ao STK-08: META-5 rastreada a IT-5, IT-6 e IT-7, com dispêndios cobertos pelo aditivo |

---

## 3. Quadro comparativo quantitativo

|---|---|---|
| Tempo da reunião (08/07) até o registro formal da mudança | Nunca houve registro formal | **2 dias** (SM-01 em 10/07) |
| Tempo até a análise de impacto quantificada | Não houve | **9 dias** (17/07) |
| Tempo até a decisão da financiadora | ~40 dias até um "sim" informal, sem recurso *(est.)* | **23 dias** (31/07), com recurso |
| Tempo até a formalização contratual | ~7 meses, e só de prazo *(est.: fev/2027)* | **56 dias** (aditivo em 02/09) |
| Recursos obtidos | **R$ 0**, com prorrogação só de prazo e tardia | **R$ 180.000,00 + 4 meses** (total R$ 780.000,00) |
| Equipamentos novos (CLP Modbus + leitor DataMatrix) | Nenhum. Testes na célula de produção *(est.)* | R$ 22.000,00 custeados pelo aditivo |
| Horas absorvidas sem remuneração | **~2.150 horas-pessoa** | **0**. As ~2.150 h estão cobertas (pessoal do aditivo R$ 128.000,00) |
| META-3 (núcleo de P&D) | Atraso de ~4 meses. Reserva de ~30% para incerteza consumida | No prazo (mês 11), com reserva preservada |
| META-4 (piloto e transferência) | Atraso de ~4 meses e piloto comprimido | Replanejada por contrato para os meses 14–16 |
| CS-03 (≥ 70% das falhas com ≥ 4 h; precisão ≥ 80%) | Probabilidade de RSK-04 sobe de 3 para 4–5 (Análise de Impacto §9.2) | Risco mantido no nível original (P = 3) |
| Carga da equipe (horas extras; meta CS-09 ≤ 5%) | > 10% *(est., Análise de Impacto §9.2)* | 2,1% em 08/07, mantida dentro da meta |
| Saída de bolsista | 1 bolsista sai *(est.)* | Nenhuma saída. Entra um 3º bolsista (meses 11–16) |
| Parcelas do convênio | 3ª e 4ª parcelas atrasam *(est.)*. Saldo de R$ 95.100,00 cobria só ~2,5 meses de pessoal | Calendário do PTA mantido, mais 2 parcelas do aditivo |
| Risco de glosa e de questionamento do enquadramento P&D no RDA da MetalPrime ao MCTI | **Alto**: trabalho executado fora do PTA (viola o §13, item 6) e sem incerteza técnica documentada | **Baixo**: RSK-12 com P = 1, META-5 rastreada a IT-5..IT-7 e dispêndio coberto por aditivo |
| Relação com a MetalPrime | Cordial na superfície, mas com expectativa errada criada ("o laboratório faz de graça"), atrasos nas entregas originais e desgaste no fim | Negociação técnica e transparente. A MetalPrime recebe uma solução validada para oferecer aos Tier 1 em 2027 |
| Chance de novos projetos | Menor *(julgamento qualitativo)*: o laboratório chega ao fim com metas atrasadas e uma entrega informal | Maior *(julgamento qualitativo)*: o laboratório mostra que sabe crescer o escopo com governança, e a META-5 abre uma linha nova (rastreabilidade/MES) para outros clientes da MetalPrime |

**Leitura honesta do quadro.** No Cenário sem PO a equipe não deixa de entregar coisas. Ela entrega mais trabalho do que no B, só que sem pagamento, sem critério de aceite e às custas do núcleo de P&D contratado. As estimativas do Cenário sem PO podem variar para mais ou para menos. A direção do efeito, porém, decorre de números do próprio projeto: a demanda total seria de ~314 pts contra uma capacidade de ~284–296 pts (Análise de Impacto §9.1).

---

## 4. O artefato que salvou o projeto

| Artefato | Momento que ele decidiu |
|---|---|
| **01 — Visão e stakeholders** | 08/07/2026: STK-10 (Veltra) já estava no mapa como fonte potencial de mudança. Por isso a exigência foi tratada como **fato externo novo**, e não como "detalhe esquecido", e a frase de fronteira ("monitora células, não peças") encerrou a discussão semântica |
| **02 — PTA v1.0** | 10/07/2026: a §7 (FE-01 a FE-04, com esclarecimentos) e a §13 (termo aditivo obrigatório; proibição de absorção informal) transformaram a pergunta "é escopo?" numa consulta de 5 minutos, com resposta assinada desde 20/02 |
| **03 — Requisitos** | 24/04/2026: RN-04, DEC-04 e a faixa RF-101+ reservada, aprovadas em ata **dois meses antes** da exigência, mostraram que a ausência de registro por peça foi decisão de projeto, e não omissão |
| **04 — Matriz de rastreabilidade** | Na negociação com a MetalPrime: a coluna "Requisito existente que cobre?" = **Nenhum** para FE-01..FE-04 provou que nada aceito cobria rastreabilidade. Depois, a matriz v1.1 entregou ao STK-08 a evidência de P&D da META-5 |
| **05 — Backlog, roadmap e riscos** | 17/07/2026: velocidade (17,4 pts/sprint), burnup (204 pts restantes) e saldo financeiro (R$ 95.100,00) provaram que **não havia folga**. RSK-02 já previa exatamente esta resposta |
| **06 — SM-01** | 10/07/2026: tirou o assunto do e-mail e o colocou num rito com prazo (análise em até 10 dias úteis) e com proibição explícita de execução antes da decisão |
| **07 — Análise de impacto** | 31/07/2026: deu à diretoria da MetalPrime números para decidir (~2.150 h, R$ 180.000,00 por rubrica, +4 meses, 4 alternativas) e mostrou que "absorver" tinha custo oculto maior |
| **08 — Justificativa do aditivo** | 05/08/2026: compôs o dossiê protocolado na Fundepes. Demonstrou o fato superveniente (§3), provou que o objeto não estava contratado (§4: FE-01..FE-04, RN-04, 0 de 42 requisitos), caracterizou IT-5..IT-7 (§5) e conciliou as ~3.393 h compradas com as 2.150 h diretas (§8.2), o que permitiu a assinatura do termo aditivo nº 01 em 02/09/2026, antes do início da META-5 no mês 9 |

Nenhum desses artefatos foi feito "para o aditivo". Todos, exceto 06, 07 e 08, já existiam antes de 30/06/2026. Foi por isso que eles funcionaram.

---

## 5. Custo × retorno de ter um PO

### 5.1 Custo

| Item | Valor |
|---|---|
| PO no orçamento original: R$ 6.500,00/mês × 12 meses (PTA §11.1) | **R$ 78.000,00** |
| Participação no orçamento original | 17,8% da rubrica de pessoal · 13,0% do valor global |
| PO no aditivo (meses 13–16, 75%) | R$ 19.500,00, já incluídos nos R$ 180.000,00 captados |
| **Custo para o laboratório** | **R$ 0 de recurso próprio.** O PO é pago pelo convênio, como os demais membros da equipe CLT via Fundepes |

O custo real para o laboratório é de **decisão**, não de caixa: reservar, na pré-proposta, uma linha de pessoal para essa função em vez de alocá-la em mais um desenvolvedor.

### 5.2 Retorno financeiro (Cenário com PO em relação ao A)

| Retorno | Valor | Natureza |
|---|---|---|
| Recurso novo captado pelo aditivo | **R$ 180.000,00** (2,3 × o custo do PO) | Fato do caso |
| Trabalho que deixou de ser feito de graça | ~2.150 h, equivalentes aos R$ 128.000,00 de pessoal do aditivo | Fato do caso (contido nos R$ 180.000,00, não somar) |
| Parcelas originais protegidas de atraso | 3ª (R$ 150.000,00) e 4ª (R$ 120.000,00) | Risco evitado *(est.)*, não é receita nova |
| Exposição a glosa reduzida | Até o valor do dispêndio executado fora do PTA no Cenário sem PO | Risco evitado, de magnitude incerta |

**Conta conservadora:** considerando só o recurso novo, o PO "se pagou" 2,3 vezes num único evento de mudança, sem contar os riscos evitados. Os demais itens não devem ser somados ao aditivo, porque se sobrepõem a ele ou são probabilísticos.

### 5.3 Retorno não financeiro

- **Núcleo científico preservado:** a META-3 (modelos preditivos, IT-2/IT-3) manteve a reserva para experimentação. É dela que saem artigos e formação.
- **Equipe sustentável:** sem saída de bolsista e com horas extras dentro da meta (CS-09).
- **Coordenador liberado:** o docente, com 10 h/semana, não vira negociador de escopo por e-mail. Ele aprova decisões preparadas pelo PO.
- **Credibilidade com a financiadora e com a Fundepes:** dossiês completos, aceites no prazo e mudanças tratadas com números.
- **Conformidade com a Lei de Informática:** a rastreabilidade requisito → meta → incerteza técnica facilita o RDA da empresa e protege a reputação do laboratório como executor de P&D.
- **Nova competência do laboratório:** rastreabilidade e integração com MES (IT-5 a IT-7), vendável a outros parceiros.

---

## 6. O que muda no processo do laboratório — plano de adoção em 3 fases

### Fase 1 — Pré-proposta e contratação (próximos projetos, a partir de agora)

| Ação | Responsável | Evidência de adoção |
|---|---|---|
| Incluir PO / analista de requisitos como **linha de pessoal obrigatória** em propostas acima de um porte a definir pela direção (sugestão: ≥ R$ 300 mil ou ≥ 4 pessoas técnicas) | Direção do laboratório | Rubrica de pessoal com o papel previsto |
| PO participa **desde a pré-proposta**: visão, mapa de stakeholders (incluindo o cliente do cliente) e premissas verificáveis | Coordenador + PO | Documento de visão anexado à proposta |
| **Modelo de PTA do laboratório** com seções obrigatórias: escopo incluído, **fora de escopo com esclarecimento**, premissas com responsável, restrições e **gestão de mudanças** (cópia adaptável do §13 do SENTINELA) | Direção + PO de referência | Modelo publicado no repositório do laboratório |
| Cláusula de aceite com prazo e aceite tácito (como o §14 do PTA) | Coordenador / Fundepes | PTA assinado com a cláusula |

### Fase 2 — Execução (projetos em andamento, em até 3 meses)

| Ação | Responsável | Evidência de adoção |
|---|---|---|
| Linha de base de requisitos aprovada em ata até o mês 2, com faixa de IDs reservada para mudanças | PO | Ata de aprovação |
| **Processo de SM**: toda demanda nova vira SM em até 2 dias úteis, análise de impacto em até 10 dias úteis e CCB. Nada entra no backlog sem decisão registrada | PO + Coordenador | Log de SMs |
| **Matriz de rastreabilidade** OBJ → META → ENT → requisito → evidência, incluindo a matriz reversa de fora de escopo | PO | Matriz atualizada a cada aceite |
| **Ritos mínimos**: alinhamento semanal coordenador–PO, review quinzenal com a empresa, reunião mensal com relatório de status, comitê trimestral com a área fiscal da empresa | PO | Atas e relatórios |
| Para projetos atuais sem PO: **"retrofit" da linha de base**, ou seja, escrever o fora de escopo e fazê-lo aprovar em ata **antes** que surja uma mudança | Coordenador (com apoio de um PO compartilhado) | Ata de reconhecimento de escopo |

### Fase 3 — Institucionalização (6 a 12 meses)

| Ação | Responsável | Evidência de adoção |
|---|---|---|
| Painel do laboratório com indicadores por projeto: % de requisitos com critério de aceite, SMs abertas, horas extras (CS-09), entregáveis aceitos no prazo | Direção | Painel revisado trimestralmente |
| Pool de POs ou PO compartilhado entre projetos menores (rateio entre convênios conforme as regras da Fundepes) | Direção + Fundepes | Alocação formal |
| Biblioteca de artefatos-modelo (01 a 08 deste caso) e treinamento de 8 h para coordenadores e equipe | PO de referência | Lista de presença; modelos em uso |
| Revisão pós-projeto obrigatória (lições aprendidas sobre escopo, mudanças e glosas) | Coordenador | Relatório de encerramento |

---

## 7. Perguntas que os coordenadores devem se fazer sobre os projetos atuais

1. Se a empresa pedir amanhã uma funcionalidade nova, **consigo mostrar em um documento assinado** que ela não estava contratada? Onde está o "fora de escopo" do meu PTA?
2. Quem é o **cliente do meu financiador** e que exigência dele pode chegar ao meu projeto nos próximos 6 meses?
3. Quantas horas a minha equipe gastou no último trimestre em coisas que **não estão rastreadas a nenhuma meta** do plano de trabalho?
4. Se a empresa precisar justificar ao MCTI cada hora do meu projeto como P&D, **eu tenho a evidência** de requisito → entrega → meta → incerteza técnica?
5. Qual é a **folga real** do meu cronograma (velocidade, backlog restante, saldo em conta)? Eu saberia dizer em uma semana se uma mudança cabe ou não?
6. Hoje, quem do meu projeto tem **tempo e mandato** para dizer "isso é uma solicitação de mudança" à empresa? Se a resposta for "eu, nas minhas 10 h/semana", o que está ficando para trás?
7. Algum bolsista ou membro da equipe está com carga acima do combinado por causa de demandas informais?
