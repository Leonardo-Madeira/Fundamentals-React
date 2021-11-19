// O useEffectGancho permite que você execute efeitos colaterais em seus componentes.

// Alguns exemplos de efeitos colaterais são: obtenção de dados, atualização direta do DOM e temporizadores.

// useEffectaceita dois argumentos. O segundo argumento é opcional.

// useEffect(<function>, <dependency>)

// Vamos usar um cronômetro como exemplo.

// Exemplo:
// Use setTimeout()para contar 1 segundo após a renderização inicial:

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000); // 1000 é 1s ou seja a cada 1s count vai receber +1
  });

  return <h1>I've rendered {count} times!</h1>;
}

// ReactDOM.render(<Timer />, document.getElementById('root'));

// Mas espere!! Continuo contando, embora deva contar apenas uma vez!

// useEffecté executado em cada renderização. Isso significa que, quando a contagem muda, ocorre uma renderização, que aciona outro efeito.

// Não é isso que queremos. Existem várias maneiras de controlar quando os efeitos colaterais ocorrem.

// Devemos sempre incluir o segundo parâmetro que aceita uma matriz. Podemos, opcionalmente, passar dependências para useEffectnesta matriz.


// 1. Nenhuma dependência aprovada:
//useEffect(() => { /*Runs on every render */ });

// 2. Uma matriz vazia:
//useEffect(() => { /*Runs only on the first render */ }, []);

// 3. Suportes ou valores de estado:
//useEffect(() => { /*Runs on the first render*/ /*And any time any dependency value changes*/ }, [prop, state]);


// Portanto, para corrigir esse problema, vamos apenas executar esse efeito na renderização inicial.

// Exemplo:
// Execute o efeito apenas na renderização inicial:


// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

export function Timer2() {
     const [count, setCount] = useState(0);
    
     useEffect(() => {
       setTimeout(() => {
         setCount((count) => count + 1);
       }, 1000);
     }, []); // <- add empty brackets here
    
 return <h1>I've rendered {count} times!</h1>;
}

//ReactDOM.render(<Timer />, document.getElementById('root'));

// Exemplo:
// Aqui está um exemplo de um useEffectGancho que depende de uma variável. Se a countvariável for atualizada, o efeito será executado novamente:

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

export function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
      <>
       <p>Count: {count}</p>
       <button onClick={() => setCount((c) => c + 1)}>+</button>
       <p>Calculation: {calculation}</p>
     </>
  );
// // ReactDOM.render(<Counter />, document.getElementById('root'));
}

//Se houver várias dependências, elas devem ser incluídas na useEffectmatriz de dependência.

// Limpeza de Efeito
// Alguns efeitos requerem limpeza para reduzir vazamentos de memória.

// Timeouts, assinaturas, ouvintes de eventos e outros efeitos que não são mais necessários devem ser descartados.

// Fazemos isso incluindo uma função de retorno no final do useEffectGancho.

// Exemplo:
// Limpe o cronômetro no final do useEffectgancho:


// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

export function Timer3() {
  const [count, setCount] = useState(0);

   useEffect(() => {
    let timer = setTimeout(() => {
     setCount((count) => count + 1);
   }, 1000);

   return () => clearTimeout(timer)
   }, []);

   return <h1>I've rendered {count} times!</h1>;
 }

 //ReactDOM.render(<Timer />, document.getElementById("root"));

// Nota: para limpar o cronômetro, tivemos que nomeá-lo.
