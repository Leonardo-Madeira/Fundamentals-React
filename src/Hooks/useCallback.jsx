// React useCallbackHook
// O React useCallbackHook retorna uma função de retorno de chamada memorizada.

// Pense na memoização como o armazenamento em cache de um valor para que ele não precise ser recalculado.

// Isso nos permite isolar funções com uso intensivo de recursos para que não sejam executadas automaticamente em cada renderização.

// O useCallbackGancho só é executado quando uma de suas dependências é atualizada.

// Isso pode melhorar o desempenho.

// O useCallbacke os useMemoganchos são semelhantes. A principal diferença é que useMemoretorna um valor memoized e useCallbackretorna uma função memoized . Você pode aprender mais sobre useMemo no capítulo useMemo .

// Problema
// Uma razão para usar useCallbacké evitar que um componente seja renderizado novamente, a menos que seus adereços tenham mudado.

// Neste exemplo, você pode pensar que o Todoscomponente não será renderizado novamente, a menos que a todosalteração:

// Este é um exemplo semelhante ao da seção React.memo .

// Exemplo:
// index.js

// import { useState } from "react";
// import ReactDOM from "react-dom";
// import Todos from "./Todos";

            // const App = () => {
            // const [count, setCount] = useState(0);
            // const [todos, setTodos] = useState([]);

            // const increment = () => {
            //     setCount((c) => c + 1);
            // };
            // const addTodo = () => {
            //     setTodos((t) => [...t, "New Todo"]);
            // };

            // return (
            //     <>
            //     <Todos todos={todos} addTodo={addTodo} />
            //     <hr />
            //     <div>
            //         Count: {count}
            //         <button onClick={increment}>+</button>
            //     </div>
            //     </>
            // );
            // };

            // ReactDOM.render(<App />, document.getElementById('root'));
            // Todos.js

            // import { memo } from "react";

            // const Todos = ({ todos, addTodo }) => {
            // console.log("child render");
            // return (
            //     <>
            //     <h2>My Todos</h2>
            //     {todos.map((todo, index) => {
            //         return <p key={index}>{todo}</p>;
            //     })}
            //     <button onClick={addTodo}>Add Todo</button>
            //     </>
            // );
            // };

            // export default memo(Todos);

// Tente executar isso e clique no botão de incremento de contagem.

// Você notará que o Todoscomponente é renderizado novamente mesmo quando todosnão muda.

// Por que isso não funciona? Estamos usando memo, portanto, o Todoscomponente não deve ser renderizado novamente, pois nem o todosestado nem a addTodofunção mudam quando a contagem é incrementada.

// Isso se deve a algo chamado "igualdade referencial".

// Cada vez que um componente é renderizado novamente, suas funções são recriadas. Por causa disso, a addTodofunção realmente mudou.

// Solução
// Para corrigir isso, podemos usar o useCallbackgancho para evitar que a função seja recriada, a menos que seja necessário.

// Use o useCallbackGancho para evitar que o Todoscomponente seja renderizado novamente sem necessidade:

// Exemplo:
// index.js

import { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

// ReactDOM.render(<App />, document.getElementById('root'));

// Todos.js

import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);

// Agora, o Todoscomponente só será renderizado novamente quando a todosprop mudar.