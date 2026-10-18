# Portfólio · Eros Rodrigues

Site pessoal de AI Engineer. Agentes de IA, automação, integrações e produto.

## Stack

Next.js 15, React 19 e TypeScript. CSS puro, sem framework de UI.

## Rodar local

```bash
npm install
npm run dev
```

Abre em http://localhost:3000.

## Estrutura

```
src/
  app/
    layout.tsx        fontes, metadados e tema
    globals.css       design system e estilos
    page.tsx          página inicial
  components/
    Portfolio.tsx     seções da página
    Illustration.tsx  ilustrações dos cards de projeto
    Icon.tsx          ícones em SVG
  content/
    data.ts           todo o conteúdo em PT e EN
public/
  logos/              logos dos clientes
```

## Editar conteúdo

Tudo que aparece no site está em `src/content/data.ts`: perfil, projetos, clientes, trajetória e certificações. Cada texto tem versão em português e inglês.

## Recursos

* Tema claro e escuro automático, com troca manual
* Português e inglês
* Animações respeitam a preferência de movimento reduzido
* Layout responsivo do celular ao desktop

## Currículo

A fonte está em `curriculo/curriculo.html`. Para gerar o PDF, abra o arquivo no navegador, imprima em A4 sem cabeçalho e rodapé e salve como `public/curriculo.pdf`.

## Deploy

Publicado na Vercel. Nenhuma variável de ambiente é necessária.
