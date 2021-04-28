<h1> Instruções Projeto Teste</h1>

<h2>1 - Como rodar</h2>
1.1 - Para iniciar o banco de dados, utilizar o dotenv, tem o modelo no arquivo "example.env" que tem os parametros necessários.

1.2 - Na pasta backend: npm install para instalar as dependências e node index.js para inicializar o servidor.

1.3 - Na pasta frontend: npm install para instalar as dependências e npm start para inicializar a aplicação React.

<h2>2 - Descrição e tecnologias utilizadas</h2>
2.1 - Banco de dados:

    Para o banco de dados, utilizei o MySQL, é nele que irá salvar nossos dados e fazer com que eu possa inserir novos dados e lista-los.
    
    Dependência
        MYSQL2 - É o nosso módulo de conexção com no bando de dados, é através dele que teremos os parâmetros para a conexão do nosso node com o mysql.

    
    No banco constém a tabela comments:

    A tabela comments contém 4 colunas: id, user_comment, created_at e updated_at. A tabela comment é onde armazena os comentários recebidos.


2.2 - Backend:

    Framework
        Express - utilizado para gerenciar as requisições HTTP
    
    Dependências

        Sequelize ORM - utilizado para fazer o mapeamento de dados relacionais (tabelas, colunas e linhas) para objetos Javascript.
        
        CORS - utilizado para fazer a interação do frontend com o backend, através das APIs para haver a troca de recursos com dominios diferentes.

        IBM Watson Text-to-Speech - Trabsforma o texto digital em áudio para vários idiomas, no nosso caso, para PORTUGUÊS DO BRASIL.

        HTTP-STATUS - utilizado para nos orientar como estão as situações das nossas requisções, se a mesma foi concluída ou se houve algum erro.



2.3 - Frontend:
    
    Framework 
        ReactJS - Para desenvolver meu frontend, utilizei a biblioteca do React, além de ter uma abordagem mais simples, é construido por componentes que nos facilita a manipulação e organização do nosso código, além de pode reaproveitar nosso código.

    Dependêcias
        React-Router-Dom - Tem a funcção de roteare gerênciar nossas URLs além da mante-las sincronizadas.
        
        Axios - a utilização do axios é baseado em promessas, o que oferece a capacidade de aproveitar o async e await do JavaScript para um código assíncrono mais legível.
        Também é possível interceptar e cancelar solicitações, e existe uma proteção integrada do lado do cliente contra a falsificação de solicitações entre sites.

    <h3> Funcionalidade da Aplicação </h3>
        
    <b>Uma pagina web para cadastro de comentários, que é um TextArea com um botão cadastrar onde armazena o comentário no banco de dados.

    Exibe os comentários feitos a direita, onde possui o botão "Ouvir", que chama a API Watson IBM Text To Speech e converte o comentário em áudio.
=======
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

