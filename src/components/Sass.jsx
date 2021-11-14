// O que é Sass
// Sass é um pré-processador CSS.

// Os arquivos Sass são executados no servidor e enviam CSS para o navegador.

// Posso usar o Sass?
// Se você usar o create-react-appem seu projeto, poderá facilmente instalar e usar o Sass em seus projetos React.

// Instale o Sass executando este comando em seu terminal: 
// >npm i sass

// Agora você está pronto para incluir arquivos Sass em seu projeto!

// Crie um arquivo Sass
// Crie um arquivo Sass da mesma maneira que cria arquivos CSS, mas os arquivos Sass têm a extensão de arquivo .scss

// Em arquivos Sass, você pode usar variáveis ​​e outras funções Sass:

// Pasta >> my-sass.scss:
// Crie uma variável para definir a cor do texto:

// $myColor: red;

// h1 {
//   color: $myColor;
// }

// Importe o arquivo Sass da mesma forma que importou um arquivo CSS:
// Pasta >> index.js:

// import React from 'react';
// import ReactDOM from 'react-dom';
import './my-sass.scss'; //Desta forma que importa o arquivo sass pro react

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
}

// ReactDOM.render(<Header />, document.getElementById('root'));

 



