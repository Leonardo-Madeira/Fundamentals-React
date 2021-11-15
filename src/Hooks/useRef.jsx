// #React useRef Hook
// O useRefGancho permite que você persista valores entre renderizações.

// Ele pode ser usado para armazenar um valor mutável que não causa uma nova renderização quando atualizado.

// Ele pode ser usado para acessar um elemento DOM diretamente.

// ##Não Causa Re-renderizações

// Se tentássemos contar quantas vezes nosso aplicativo renderiza usando o useStateGancho, seríamos pegos em um loop infinito, já que esse próprio Gancho causa uma nova renderização.

// Para evitar isso, podemos usar o useRefGancho.

//Exemplo:
// Use useRefpara rastrear renderizações de aplicativos.

// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));

// useRef()retorna apenas um item. Ele retorna um objeto chamado current.

// Quando inicializar useRefvamos definir o valor inicial: useRef(0).

// É como fazer isso: const count = {current: 0}. Podemos acessar a contagem usando count.current.

// Execute-o em seu computador e tente digitar a entrada para ver o aumento da contagem de renderização do aplicativo.

// Acessando Elementos DOM
// Em geral, queremos deixar o React lidar com toda a manipulação de DOM.

// Mas há alguns casos em que useRefpode ser usado sem causar problemas.

// No React, podemos adicionar um refatributo a um elemento para acessá-lo diretamente no DOM.

// #Exemplo:
// Use useRefpara focar a entrada:

import { useRef } from "react";
import ReactDOM from "react-dom";

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));

// Rastreando mudanças de estado
// O useRefGancho também pode ser usado para controlar os valores de estado anteriores.

// Isso ocorre porque somos capazes de persistir useRefvalores entre renderizações.

// Exemplo:
// Use useRefpara acompanhar os valores do estado anterior:

// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom";

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));

// Desta vez, usar uma combinação de useState, useEffecte useRefpara acompanhar o estado anterior.

// No useEffect, estamos atualizando o useRefvalor atual cada vez que o inputValueé atualizado inserindo texto no campo de entrada.
