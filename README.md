# Sistema de Login

Um sistema de login que possibilita a criação de conta caso ainda não possua e autenticação para acessar de fato a tela de boas vindas!

## Descrição

Esse pequeno sistema backend da aplicação soluciona o problema de autenticação de usuarios e pode ajudar a novos estudantes a compreender conceitos de autenticação.

## Tecnologias backend utilizadas

- Typescript
- Express
- Prisma ORM
- Banco de dados (postgresql)
- JWT (Autenticação do usuário)

## Pré - Requisitos para Instalação

- Possuir PostgreSQL Versão 16.4, Link para download: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads.
- Criar o banco de dados db_login
- Obs: Não esqueça de colocar a mesma senha do banco de dados no arquivo .env
- Garanta que tenha o Nodejs na versão 20 ou superior instalada

## Instalação / Configuração

- Clone esse repositório para sua máquina local
- Com o projeto aberto pelo Visual Studio Code abra o cmd (Windows) e rode um "npm install" para Instalação das dependências
- Na raiz do projeto crie um arquivo chamado ".env" onde você ira copiar as informações do arquivo ".env-example" e configurar conforme sua configuração do banco de dados
- Após a configuração do arquivo abra o cmd novamente e digite "npx prisma db push" para criar a tabela no banco
- Processo finalizado, agora basta digitar no cmd "npm run dev"
