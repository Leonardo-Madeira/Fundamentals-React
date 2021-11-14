// React Memo

// Usar memofará com que o React ignore a renderização de um componente se seus adereços não tiverem mudado.

// Isso pode melhorar o desempenho.

// Problema:
// Neste exemplo, o Todoscomponente é renderizado novamente mesmo quando os todos não foram alterados.

// Exemplo:
// Pasta >> index.js:

// import { useState } from "react";
// import ReactDOM from "react-dom";
// import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

// ReactDOM.render(<App />, document.getElementById('root'));

// Pasta >> Todos.js:

const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

// export default Todos;

// Quando você clica no botão de incremento, o Todoscomponente é renderizado novamente.

// Se este componente for complexo, ele pode causar problemas de desempenho.



//****************************************************************** */

// // ##Solução
// Para corrigir isso, podemos usar memo.

// Use memopara evitar que o Todoscomponente seja renderizado novamente.

// Envolva a Todosexportação do componente em memo:

// Exemplo:
// Pasta >>> index.js:

// import { useState } from "react";
// import ReactDOM from "react-dom";
// import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

// ReactDOM.render(<App />, document.getElementById('root'));

// Pasta >> Todos.js:

// import { memo } from "react";

const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

// export default memo(Todos);

// Agora, o Todoscomponente só é renderizado novamente quando os itens todosque são passados ​​para ele por meio de adereços são atualizados.
