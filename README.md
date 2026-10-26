# SENTINELA — Estudo de caso de gestão de produto

Site de apresentação do caso SENTINELA: um projeto de P&D (Lei de Informática, Fundepes) em que a presença de uma pessoa de produto desde o início permitiu justificar um termo aditivo de R$ 180 mil e 4 meses.

- `docs/` — os 9 documentos do projeto em Markdown (fonte)
- `src/` — site React + Vite que apresenta a narrativa e renderiza os documentos

## Rodar localmente
```bash
npm install
npm run dev
```

## Publicar na Vercel
Importe o repositório em vercel.com/new. A Vercel detecta Vite automaticamente (build `npm run build`, saída `dist`).
