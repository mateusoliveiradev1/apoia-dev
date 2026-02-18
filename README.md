<div align="center">
  <br />
  <img src="https://img.shields.io/badge/Apoia-Dev-7C3AED?style=for-the-badge&logoColor=white" alt="ApoiaDev Logo" width="200" />
  <br />
  <br />

  <h1 align="center">ApoiaDev</h1>

  <p align="center">
    A plataforma open-source definitiva para conectar desenvolvedores e apoiadores.
    <br />
    Simples. Elegante. Feito para a comunidade.
  </p>

  <p align="center">
    <a href="#-funcionalidades">Funcionalidades</a> •
    <a href="#-tech-stack">Tecnologias</a> •
    <a href="#-começando">Instalação</a> •
    <a href="#-contribuindo">Contribuir</a>
  </p>

  <br />

  <img src="https://img.shields.io/github/license/mateusoliveiradev1/apoia-dev?style=flat-square&color=7C3AED" alt="License" />
  <img src="https://img.shields.io/github/stars/mateusoliveiradev1/apoia-dev?style=flat-square&color=7C3AED" alt="Stars" />
  <img src="https://img.shields.io/github/forks/mateusoliveiradev1/apoia-dev?style=flat-square&color=7C3AED" alt="Forks" />
  <img src="https://img.shields.io/badge/PRs-welcome-7C3AED?style=flat-square" alt="PRs Welcome" />

  <br />
  <br />
</div>

---

## 📸 Preview

<div align="center">
  <!-- Substitua este link por um GIF ou Screenshot real do seu projeto -->
  <img src="https://placehold.co/1200x600/18181b/FFF?text=Dashboard+Preview&font=montserrat" alt="Project Screenshot" width="100%" style="border-radius: 10px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);" />
</div>

<br />

## ✨ Funcionalidades

<table>
  <tr>
    <td width="50%">
      <h3 align="center">🔐 Autenticação Robusta</h3>
      <p align="center">Integração nativa com <strong>GitHub OAuth</strong> via NextAuth v5. Seguro, rápido e sem senhas para gerenciar.</p>
    </td>
    <td width="50%">
      <h3 align="center">🎨 Perfil Personalizável</h3>
      <p align="center">Cada criador tem sua página única com <strong>slugs amigáveis</strong> e SEO otimizado automaticamente.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3 align="center">📊 Dashboard Analytics</h3>
      <p align="center">Visualize seus apoiadores e métricas em tempo real com uma interface limpa e responsiva.</p>
    </td>
    <td width="50%">
      <h3 align="center">⚡ Performance Extrema</h3>
      <p align="center">Construído com <strong>Next.js 15 (App Router)</strong> e renderização híbrida para carregamento instantâneo.</p>
    </td>
  </tr>
</table>

<br />

## 🛠️ Tech Stack

Este projeto foi construído com o que há de mais moderno no ecossistema web atual.

<div align="center">
  <table align="center">
    <tr>
      <td align="center" width="90">
        <a href="https://nextjs.org/">
          <img src="https://skillicons.dev/icons?i=nextjs" width="45" alt="Next.js" /><br>Next.js 15
        </a>
      </td>
      <td align="center" width="90">
        <a href="https://react.dev/">
          <img src="https://skillicons.dev/icons?i=react" width="45" alt="React" /><br>React 19
        </a>
      </td>
      <td align="center" width="90">
        <a href="https://www.typescriptlang.org/">
          <img src="https://skillicons.dev/icons?i=ts" width="45" alt="TypeScript" /><br>TypeScript
        </a>
      </td>
      <td align="center" width="90">
        <a href="https://tailwindcss.com/">
          <img src="https://skillicons.dev/icons?i=tailwind" width="45" alt="Tailwind" /><br>Tailwind
        </a>
      </td>
      <td align="center" width="90">
        <a href="https://www.postgresql.org/">
          <img src="https://skillicons.dev/icons?i=postgres" width="45" alt="PostgreSQL" /><br>PostgreSQL
        </a>
      </td>
      <td align="center" width="90">
        <a href="https://www.prisma.io/">
          <img src="https://skillicons.dev/icons?i=prisma" width="45" alt="Prisma" /><br>Prisma
        </a>
      </td>
    </tr>
  </table>
</div>

<br />

## 🚀 Começando

Siga este guia para configurar o ambiente de desenvolvimento em minutos.

### Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** (v20 ou superior)
- **PostgreSQL** (Local ou Docker)
- **Git**

### Instalação Passo a Passo

1. **Clone o repositório**

   ```bash
   git clone https://github.com/mateusoliveiradev1/apoia-dev.git
   cd apoia-dev
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure as Variáveis de Ambiente**
   Renomeie o `.env.example` para `.env` ou crie um novo:

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

4. **Prepare o Banco de Dados**

   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. **Inicie o Servidor**

   ```bash
   npm run dev
   ```

   O projeto estará rodando em `http://localhost:3000`.

<br />

## 📂 Estrutura do Projeto

A arquitetura segue as melhores práticas do Next.js App Router.

```
src/
├── app/                  # Rotas e Layouts (App Router)
│   ├── dashboard/        # Área Protegida (Painel do Criador)
│   ├── creator/          # Página Pública (SSR)
│   └── api/              # API Routes (Auth, Webhooks)
├── components/           # UI Components (Reutilizáveis)
│   ├── ui/               # Shadcn UI (Base Components)
│   └── ...
├── lib/                  # Configurações Globais (Prisma, Auth, Utils)
└── utils/                # Helpers e Formatters
```

<br />

## 🤝 Contribuindo

Contribuições tornam a comunidade open source um lugar incrível. Sinta-se à vontade para contribuir!

1. Faça um Fork do projeto
2. Crie sua Feature Branch (`git checkout -b feature/IncrívelFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Adiciona IncrívelFeature'`)
4. Push para a Branch (`git push origin feature/IncrívelFeature`)
5. Abra um Pull Request

<br />

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <br />
  <img src="https://github.com/mateusoliveiradev1.png" width="60" style="border-radius: 50%;" alt="Avatar Mateus Oliveira" />
  <p>Desenvolvido com 💜 por <strong><a href="https://github.com/mateusoliveiradev1">Mateus Oliveira</a></strong></p>
  
  <a href="https://www.linkedin.com/in/mateusoliveira">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://github.com/mateusoliveiradev1">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</div>
