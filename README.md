# ApoiaDev 🚀

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Prisma-5.0-2D3748?style=for-the-badge&logo=prisma" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-15-336791?style=for-the-badge&logo=postgresql" alt="PostgreSQL" />
</div>

<br />

<div align="center">
  <p align="center">
    <strong>ApoiaDev</strong> é a plataforma definitiva para desenvolvedores e criadores de conteúdo receberem apoio da comunidade de forma simples, direta e elegante.
    <br />
    Sem burocracias. Apenas código e café. ☕
  </p>
</div>

<br />

## ✨ Funcionalidades

- **Autenticação Simples**: Login rápido e seguro via GitHub.
- **Página de Perfil Personalizada**: Seu espaço único para receber apoio.
- **Dashboard Intuitivo**: Gerencie suas informações e visualize seus apoiadores.
- **URLs Amigáveis**: Slugs gerados automaticamente para facilitar o compartilhamento.
- **Design Moderno**: Interface limpa e responsiva, focada na experiência do usuário.

## 🛠️ Tech Stack

Este projeto utiliza as tecnologias mais modernas do ecossistema React:

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Banco de Dados**: [PostgreSQL](https://www.postgresql.org/) com [Prisma ORM](https://www.prisma.io/)
- **Autenticação**: [Auth.js](https://authjs.dev/) (NextAuth v5)
- **Validação**: [Zod](https://zod.dev/)

## 🚀 Começando

Siga os passos abaixo para rodar o projeto localmente.

### Pré-requisitos

- Node.js 20+
- PostgreSQL (Local ou Docker)

### Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/apoia-dev.git
   cd apoia-dev
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   Crie um arquivo `.env` na raiz do projeto:

   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/apoiadev"

   # Auth (GitHub)
   AUTH_SECRET="sua-chave-secreta-gerada-com-npx-auth-secret"
   AUTH_GITHUB_ID="seu-github-client-id"
   AUTH_GITHUB_SECRET="seu-github-client-secret"

   # App
   NEXT_PUBLIC_HOST_URL="http://localhost:3000"
   ```

4. **Configure o Banco de Dados**

   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. **Rode o projeto**

   ```bash
   npm run dev
   ```

   Acesse [http://localhost:3000](http://localhost:3000) e comece a codar! 🚀

## 📂 Estrutura do Projeto

```bash
src/
├── app/                  # App Router (Páginas e Layouts)
│   ├── dashboard/        # Área logada (Painel do Criador)
│   ├── creator/          # Página pública do perfil
│   └── api/              # API Routes (Auth, etc)
├── components/           # Componentes Reutilizáveis (UI)
├── lib/                  # Configurações (Prisma, Auth)
└── utils/                # Funções Utilitárias (Slugs, Formatters)
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um PR.

1. Fork o projeto
2. Crie sua Feature Branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Adiciona MinhaFeature'`)
4. Push para a Branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

<div align="center">
  Feito com 💜 por <a href="https://github.com/seu-usuario">Você</a>
</div>
