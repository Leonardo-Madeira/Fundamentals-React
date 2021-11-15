// React useReducerHook
// O useReducerGancho é semelhante ao useStateGancho.

// Ele permite a lógica de estado personalizada.

// Se você estiver acompanhando várias partes do estado que dependem de uma lógica complexa, useReducerpode ser útil.

// Sintaxe
// O gancho useReducer aceita dois argumentos.

// useReducer (<redutor>, <initialState>)

// A reducerfunção contém sua lógica de estado personalizada e initialStatepode ser um valor simples, mas geralmente contém um objeto.

// O useReducerGancho retorna o atual statee um dispatchmétodo.

// Aqui está um exemplo de useReducerem um aplicativo de contador:

// Exemplo:

import { useReducer } from "react";
import ReactDOM from "react-dom";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export function Todos() { //N
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

// ReactDOM.render(<Todos />, document.getElementById('root'));

// Essa é apenas a lógica para acompanhar o status de todas as tarefas concluídas.

// Toda a lógica para adicionar, excluir e concluir um todo pode estar contida em um único useReducerGancho, adicionando mais ações.