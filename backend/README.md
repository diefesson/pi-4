## Instruções

Após clonar o repositorio, siga estas instruções:

1. rode o comando `yarn` no terminal, para baixar todas as dependências necessárias para o backend do projeto;
2. renomeie o arquivo `.env.example` para `.env`, e preencha os valores que houve (se houver);
3. renomeie o arquivo `ormconfig.example.json` para `ormconfig.json`, e adicione as credenciais do postgres, atribua valores nos atributos username e password;
4. rode o comando `yarn typeorm migration:run` para executar as migrations existentes, para a criação das tabelas no banco;

## Comandos uteis

- Criar banco de dados (conforme configuração do ormconfig) via linha de comando no postgres:
  `CREATE DATABASE "nome-do-banco";`
- Criar migrations:
  `yarn typeorm migration:create -n <nome da migration>`
- Executar migration:
  `yarn typeorm migration:run`

## Links úteis:

- [Diagrama de relacionamento das tabelas ](https://dbdiagram.io/d/6189348b02cf5d186b4b7a7b);
- [Diagrama de caso de uso](https://whimsical.com/pi-4-show-do-milhao-KPJB4nRE19DYFiXMrf2zFi);
- [Esteira de desenvolvimento](https://trello.com/b/ikcgNWg8/pi4);
