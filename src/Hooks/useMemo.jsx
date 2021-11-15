// React useMemoHook
// O React useMemoHook retorna um valor memorizado.

// Pense na memoização como o armazenamento em cache de um valor para que ele não precise ser recalculado.

// O useMemoGancho só é executado quando uma de suas dependências é atualizada.

// Isso pode melhorar o desempenho.

// O useMemoe os useCallbackganchos são semelhantes. A principal diferença é que useMemoretorna um valor memoized e useCallbackretorna uma função memoized. Você pode aprender mais sobre useCallbackno capítulo useCallback .

// atuação
// O useMemoGancho pode ser usado para evitar que funções caras e que consomem muitos recursos sejam executadas desnecessariamente.

// Neste exemplo, temos uma função cara que é executada em cada renderização.

// Ao alterar a contagem ou adicionar uma tarefa, você notará um atraso na execução.

// Exemplo:
// Uma função de desempenho insatisfatório. A expensiveCalculationfunção é executada em cada renderização:

                    // import { useState } from "react";
                    // import ReactDOM from "react-dom";

                    // const App = () => {
                    // const [count, setCount] = useState(0);
                    // const [todos, setTodos] = useState([]);
                    // const calculation = expensiveCalculation(count);

                    // const increment = () => {
                    //     setCount((c) => c + 1);
                    // };
                    // const addTodo = () => {
                    //     setTodos((t) => [...t, "New Todo"]);
                    // };

                    // return (
                    //     <div>
                    //     <div>
                    //         <h2>My Todos</h2>
                    //         {todos.map((todo, index) => {
                    //         return <p key={index}>{todo}</p>;
                    //         })}
                    //         <button onClick={addTodo}>Add Todo</button>
                    //     </div>
                    //     <hr />
                    //     <div>
                    //         Count: {count}
                    //         <button onClick={increment}>+</button>
                    //         <h2>Expensive Calculation</h2>
                    //         {calculation}
                    //     </div>
                    //     </div>
                    // );
                    // };

                    // const expensiveCalculation = (num) => {
                    // console.log("Calculating...");
                    // for (let i = 0; i < 1000000000; i++) {
                    //     num += 1;
                    // }
                    // return num;
                    // };

                    // ReactDOM.render(<App />, document.getElementById('root'));

// Usar useMemo
// Para corrigir esse problema de desempenho, podemos usar o useMemoGancho para memorizar a expensiveCalculationfunção. Isso fará com que a função seja executada apenas quando necessário.

// Podemos encerrar a chamada de função cara com useMemo.

// O useMemoGancho aceita um segundo parâmetro para declarar dependências. A função cara só será executada quando suas dependências forem alteradas.

// No exemplo a seguir, a função dispendiosa só será executada quando count for alterada e não quando todos forem adicionados.

// Exemplo:
// Exemplo de desempenho usando o useMemogancho:

import { useState, useMemo } from "react";
import ReactDOM from "react-dom";

export const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

// ReactDOM.render(<App />, document.getElementById('root'));

