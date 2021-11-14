// Folha de estilo CSS
// Você pode escrever seu estilo CSS em um arquivo separado, basta salvar o arquivo com a .cssextensão do arquivo e importá-lo em seu aplicativo.

// Pasta >> App.css:
// Crie um novo arquivo chamado "App.css" e insira algum código CSS nele:

// body {
//   background-color: #282c34;
//   color: white;
//   padding: 40px;
//   font-family: Sans-Serif;
//   text-align: center;
// }

// Nota: Você pode chamar o arquivo como quiser, apenas lembre-se da extensão de arquivo correta.

// Importe a folha de estilo em seu aplicativo:

// Pasta >> index.js:
// import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
}

// ReactDOM.render(<Header />, document.getElementById('root'));
