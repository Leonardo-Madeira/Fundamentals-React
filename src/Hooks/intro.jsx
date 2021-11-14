// React Hooks
// Ganchos foram adicionados ao React na versão 16.8.

// Os ganchos permitem que os componentes da função tenham acesso ao estado e a outros recursos do React. Por causa disso, os componentes da classe geralmente não são mais necessários.

// Embora os Ganchos geralmente substituam os componentes da classe, não há planos para remover as classes do React.

// O que é um gancho?
// Os ganchos nos permitem "conectar" os recursos do React, como métodos de estado e de ciclo de vida.

// ###########
// Exemplo:
// Aqui está um exemplo de um gancho. Não se preocupe se não fizer sentido. Entraremos em mais detalhes na próxima seção .

import React, { useState } from "react";

export function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

//ReactDOM.render(<FavoriteColor />, document.getElementById('root'));

// Você deve importGanchos de react.

// Aqui, estamos usando o useStateGancho para controlar o estado do aplicativo.

// Estado geralmente se refere aos dados ou propriedades do aplicativo que precisam ser rastreados.

// Regras de ganchos
// Existem 3 regras para ganchos:

// * Os ganchos só podem ser chamados dentro dos componentes da função React.
// * Os ganchos só podem ser chamados no nível superior de um componente.
// * Ganchos não podem ser condicionais

// Observação: os ganchos não funcionam nos componentes da classe React.