// #React Context
// React Context é uma forma de gerenciar o estado globalmente.

// Ele pode ser usado junto com o useStateGancho para compartilhar o estado entre componentes profundamente aninhados mais facilmente do que useStatesozinho.

// #O problema
// O estado deve ser mantido pelo componente pai mais alto da pilha que requer acesso ao estado.

// Para ilustrar, temos muitos componentes aninhados. O componente na parte superior e inferior da pilha precisa acessar o estado.

// Para fazer isso sem contexto, precisaremos passar o estado como "adereços" por meio de cada componente aninhado. Isso é chamado de "perfuração de suporte".

// #Exemplo:
// Passando "adereços" por meio de componentes aninhados:

//import { useState } from "react";
//import ReactDOM from "react-dom";

export function ComponentEx1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <ComponentEx2 user={user} />
    </>
  );
}

function ComponentEx2({ user }) {
  return (
    <>Ex
      <h1>Component 2</h1>
      <ComponentEx3 user={user} />
    </>
  );
}

function ComponentEx3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <ComponentEx4 user={user} />
    </>
  );
}

function ComponentEx4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <ComponentEx5 user={user} />
    </>
  );
}

function ComponentEx5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

//ReactDOM.render(<Component1 />, document.getElementById("root"));

//Mesmo que os componentes 2-4 não precisassem do estado, eles tiveram que passar o estado adiante para que pudesse atingir o componente 5.

// #A solução
// A solução é criar contexto.

// Criar Contexto
// Para criar o contexto, você deve importá createContext-lo e inicializá-lo:

//******************************************** */
//import { useState, createContext } from "react";
//import ReactDOM from "react-dom";

const UserContext = createContext()

function ComponentEx02() {
    const [user, setUser] = useState("Jesse Hall");
  
    return (
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <ComponentEx02 user={user} />
      </UserContext.Provider>
    );
  }
// Agora, todos os componentes desta árvore terão acesso ao Contexto do usuário.

// Use o useContextgancho
// Para usar o Contexto em um componente filho, precisamos acessá-lo usando o useContextGancho.

// Primeiro, inclua o useContextna declaração de importação:

import { useState, createContext, useContext } from "react";

// Em seguida, você pode acessar o contexto do usuário em todos os componentes:

function Component5() {
    const user = useContext(UserContext);
  
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }

// ##Exemplo Completo
// Exemplo:
// Aqui está o exemplo completo usando React Context:

// import { useState, createContext, useContext } from "react";
// import ReactDOM from "react-dom";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

//ReactDOM.render(<Component1 />, document.getElementById("root"));

