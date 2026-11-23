# LeadSoft — Landing Page

Landing page institucional da LeadSoft, com apresentação de serviços, projetos, empresa, carreira e RavenDB. O repositório também contém uma API para candidaturas, comentários, galeria e painel administrativo.

## Tecnologias

- **Web:** Next.js, React, TypeScript e Tailwind CSS.
- **API:** Node.js, Fastify e TypeScript.
- **Dados:** RavenDB.
- **Validação e segurança:** Zod, JWT com Jose, bcryptjs, reCAPTCHA v3 e plugins Fastify para CORS, cookies, upload e rate limiting.
- **Ambiente:** npm Workspaces e Docker Compose.

## Estrutura

```text
apps/
  web/       # Landing page Next.js
  api/       # API Fastify
packages/
  shared/    # Schemas e tipos compartilhados
docker-compose.yml
```

## Requisitos

- Node.js 18 ou superior
- npm
- Docker Desktop (para executar o RavenDB localmente)

## Como executar

Instale as dependências na raiz do projeto:

```bash
npm install
```

Inicie a landing page em `http://localhost:3000`:

```bash
npm run dev
```

Para iniciar também a API, abra outro terminal. Primeiro configure as variáveis de ambiente e inicie o RavenDB:

```bash
docker compose up -d ravendb
npm run dev:api
```

A API fica disponível em `http://localhost:3001`. O endpoint de verificação é `GET /api/health`.

## Configuração da API

Copie `.env.example` para `.env` na raiz e ajuste os valores necessários. No mínimo, configure um `JWT_SECRET` com 32 ou mais caracteres:

```env
API_HOST=0.0.0.0
API_PORT=3001
RAVENDB_URL=http://localhost:8080
RAVENDB_DATABASE=LeadSoftDB
JWT_SECRET=troque-por-um-segredo-com-pelo-menos-32-caracteres
JWT_EXPIRES_IN=8h
CORS_ORIGIN=http://localhost:3000
```

As demais opções — reCAPTCHA, upload e credenciais administrativas — estão documentadas em `.env.example`. Não use credenciais padrão em produção e não publique o arquivo `.env`.

## Comandos úteis

```bash
npm run dev          # Inicia o frontend
npm run dev:api      # Inicia a API em modo de desenvolvimento
npm run build        # Gera os builds dos workspaces
npm run build:web    # Gera o build do frontend
npm run build:api    # Compila a API
npm run lint         # Executa o lint dos workspaces configurados
```

## Identidade visual

<img width="1910" height="894" alt="image" src="https://github.com/user-attachments/assets/a437c5fc-03ca-44a4-a4f6-53875ee1c8ca" />
<img width="1898" height="876" alt="image" src="https://github.com/user-attachments/assets/a43cd0d1-4499-46f6-85f4-476c74e3ecdc" />
<img width="1792" height="719" alt="image" src="https://github.com/user-attachments/assets/475c74bb-1685-491e-8c67-90dd876f80e1" />
<img width="1911" height="775" alt="image" src="https://github.com/user-attachments/assets/c4d07ad4-0baa-45aa-9192-9710701defd0" />
<img width="1909" height="879" alt="image" src="https://github.com/user-attachments/assets/1989d38e-632f-4a23-8f00-e1cbdbc6ea70" />
<img width="1872" height="468" alt="image" src="https://github.com/user-attachments/assets/f4d967d9-2b90-4a62-9449-680cba5c383c" />
<img width="1902" height="641" alt="image" src="https://github.com/user-attachments/assets/91d76de5-f83e-4f9e-93b7-55a7fea35106" />





