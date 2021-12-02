## Instruções

Após clonar o repositorio, siga estas instruções:

1. rode o comando `yarn` no terminal, para baixar todas as dependências necessárias para o backend do projeto;
2. renomeie o arquivo `.env.example` para `.env`, e adicione as credenciais do postgres;
3. rode o comando `yarn sequelize db:create` para criar no seu banco de dados o banco 'showdomilhao';
4. rode o comando `yarn sequelize db:migrate` para executar as migrations existentes, para a criação das tabelas no banco;

## Comandos uteis

- Criar banco de dados (conforme env):
  `yarn sequelize db:create`
- Criar migrations:
  `yarn sequelize migration:create --name=<nome da migration>`
- Executar migration:
  `yarn sequelize db:migrate`
