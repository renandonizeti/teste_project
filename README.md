<h1> Instruções Projeto Teste</h1>

<h2>1 - Como rodar</h2>
1.1 - Com MySQL criar um banco de dados e alterar as informações de acesso ao banco de dados em "/config/config.js" no backend.
Não é necessário criar as tabelas, pois o sequelize ja irá crialas automáticamente.

1.2 - Na pasta backend: npm install para instalar as dependências e node index.js para inicializar o servidor.

1.3 - Na pasta frontend: npm install para instalar as dependências e npm start para inicializar a aplicação React.

<h2>2 - Descrição e tecnologias utilizadas</h2>
2.1 - Banco de dados:
Foi utilizado um banco mySQL como um SQL as a service e o Sequelize ORM.

No banco constém a tabela comments:

A tabela comments contém 4 colunas: id, user_comment, created_at e updated_at. A tabela comment é onde armazena os comentários recebidos.


2.2 - Backend:
Foi utilizado o framework Express para a construção de uma API Rest. 

O SDK do IBM Watson Text-to-Speech também foi incluído, para realizar a sintetização de texto para voz.

Além disso, o Cors também foi utilizado. Atualmente o Cors se encontra liberado para todas as origens.

2.3 - Frontend:
Foi utilizado React , além do Axios para fazer as requisições AJAX para a API.

Funcionalidades
A aplicação conta com:

<b>Uma pagina web para cadastro de comentários, que é um TextArea com um botão cadastrar onde armazena o comentário no banco de dados.
Exibe os comentários feitos a direita, onde possui o botão "Ouvir", que chama a API Watson IBM Text To Speech e converte o comentário em áudio.
Todos as strings base64 dos áudios já sintetizados são armazenados no sessionStorage, para que não precise ser feita outra requisição e sintetização ao escutar um áudio já sintetizado, e duram até o navegador ser fechado.</b>