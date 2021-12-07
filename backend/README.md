## Instruções

Após clonar o repositorio, siga estas instruções:

1. rode o comando `yarn` no terminal, para baixar todas as dependências necessárias para o backend do projeto;
2. renomeie o arquivo `.env.example` para `.env`, e preencha os valores que houve (se houver);
3. renomeie o arquivo `ormconfig.example.json` para `ormconfig.json`, e adicione as credenciais do postgres, atribua valores nos atributos username e password;
4. criei no o banco de dados 'show-do-milhao' no postgres;
5. rode o comando `yarn typeorm migration:run` para executar as migrations existentes, para a criação das tabelas no banco;
6. rode o comando `yarn dev` para executar o projeto. O projeto será executado no seguinte endereço: http://localhost:3000;

## Comandos uteis

- Criar banco de dados (conforme configuração do ormconfig) via linha de comando no postgres:
  `CREATE DATABASE "nome-do-banco";`
- Criar migrations:
  `yarn typeorm migration:create -n <nome da migration>`
- Executar migration:
  `yarn typeorm migration:run`
- Executar o projeto:
  `yarn dev`

## Links úteis:

- [Diagrama de relacionamento das tabelas ](https://dbdiagram.io/d/6189348b02cf5d186b4b7a7b);
- [Diagrama de caso de uso](https://whimsical.com/pi-4-show-do-milhao-KPJB4nRE19DYFiXMrf2zFi);
- [Esteira de desenvolvimento](https://trello.com/b/ikcgNWg8/pi4);

## Observações

1. Para facilitar na manutenção deste projeto, é usado uma adaptação do MVC, da seguinte forma:

- **Controller**: responsável por desempacotar as informações do _request_ e empacotar as informações no _response_;
- **UseCase**: responsável por _aplicar_ as regras de negócios estabelecidas;
- **Repository**: responsável por gerenciar as interações com o banco de dados;
- Onde : <br/>
  Controller >> UseCase >> Repository

2. Para evitar criação de instancias toda vez que for ser realizada uma consulta, é utilizado o _tsyringe_ , assim, a cada criação de nova fluxo ("MVC"), é necessário adicionar o seguinte script no arquivo index.ts, localizado em : `./src/shared/container/index.ts`.

```
  container.registerSingleton<nome-repositorio>('nome-repositorio', nome-repositorio);
  // onde nome-repositorio é o nome da classe Repository que foi criada;
```

## Dependências instaladas

- [TypeORM]() : ORM para gerenciamento do banco de dados;
- [Tsyringe](): para organização das instancias dos objetos que serão usadas, afim de diminuir a criação de instancia a cada consulta;

* [Express](): gerenciar rotas;
* [Typescript]();
