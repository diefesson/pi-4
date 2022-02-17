# PI 4

project for the discipline of Integrative Project 4

## Links sobre o projeto

- [Documento de requisitos;](https://drive.google.com/drive/folders/1ewR84lJvKEuRrE1U4biuA2-b5DlusJMm)
- [Prototipo de telas no Figma;](https://www.figma.com/file/n7P6meSsCO24D6zwE9CXw9/pi4)
- [Esteira de desenvolvimento no Trello;](https://trello.com/b/ikcgNWg8/pi4)
- [Instruções para consumir a API desenvolvida;](https://watery-blanket-6fc.notion.site/Show-do-milh-o-Requisi-es-b235b64f21fb40ea9bf42362fbf92532)
- [Diagrama caso de uso](https://whimsical.com/pi-4-show-do-milhao-KPJB4nRE19DYFiXMrf2zFi)
- [Relacionamento das tabelas;](https://dbdiagram.io/d/6189348b02cf5d186b4b7a7b)
- [Descrição do modelo arquitetural;](https://docs.google.com/document/d/1269KoNAmZbArcHmDyWCWO15gRjtHHvhd/edit?usp=sharing&ouid=111183877853335339722&rtpof=true&sd=true)
- [Documento para casos de testes;](https://docs.google.com/spreadsheets/d/1SeJcq9pJr4cdDH8gCl9uHrKXfN-Z4W07/edit?usp=sharing&ouid=111183877853335339722&rtpof=true&sd=true)

## Instruções
### Backend

Após clonar o repositorio, siga estas instruções:

1. Rode o comando `yarn` ou `npm install` no terminal, para baixar todas as dependências necessárias para o backend do projeto;
2. Renomeie o arquivo `.env-example` para .env, e preencha as variáveis com a credencial do postgres, o nome do banco criado e a variável 'CRYPTO_CODE' com o code salt, que será usado para criptografar dados do player;
3. Criei o banco de dados 'show-do-milhao' no postgres;
4. Execute o comando `yarn start` ou `npm start`, para executar o projeto;
5. Ao executar será criado as entidades no banco de dados automaticamente e será exibido a porta no qual esta sendo executado o projeto. Ex: http://localhost:3000 ;

### Frontend

1. Rode o comando `yarn` ou `npm install` no terminal, para baixar todas as dependências necessárias para o frontend do projeto;
2. Renomeie o arquivo `.env-example` para .env, e preencha VUE_APP_BACKEND_URL com o local onde está o banco de dados;
3. Execute o comando `yarn start` ou `npm start`, para executar o projeto;

Agora basta jogar! 😁😀
