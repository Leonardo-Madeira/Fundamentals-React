// O React useStateHook nos permite rastrear o estado em um componente de função.

// Estado geralmente se refere a dados ou propriedades que precisam ser rastreados em um aplicativo.

// Importar useState
// Para usar o useStateGancho, primeiro precisamos importcolocá - lo em nosso componente.

// Exemplo:
// No topo do seu componente, importo useStateGancho.

import { useState } from "react";

// Tenha em conta que estamos a desestruturação useStatede reactcomo é uma exportação nomeado.

// Inicializar useState
// Inicializamos nosso estado chamando useStatenosso componente de função.

// useState aceita um estado inicial e retorna dois valores:
// * O estado atual.
// * Uma função que atualiza o estado.

// Exemplo:
// Estado de inicialização na parte superior do componente de função.

//import { useState } from "react";

function FavoriteColor1() {
  const [color, setColor] = useState("");
}
// Observe que, novamente, estamos desestruturando os valores retornados de useState.

// O primeiro valor,, coloré nosso estado atual.

// O segundo valor setColor,, é a função que é usada para atualizar nosso estado.

// Esses nomes são variáveis ​​que podem ser nomeadas como você quiser.

// Por último, definimos o estado inicial como uma string vazia: useState("")


// # Estado de leitura
// Agora podemos incluir nosso estado em qualquer lugar em nosso componente.

// Exemplo:
// Use a variável de estado no componente renderizado.

//import { useState } from "react";
import ReactDOM from "react-dom";

function FavoriteColor2() {
  const [color, setColor] = useState("red");

  return <h1>My favorite color is {color}!</h1>
}

// ReactDOM.render(<FavoriteColor />, document.getElementById('root'));

// # Estado de atualização
// Para atualizar nosso estado, usamos nossa função atualizador de estado.

// Nunca devemos atualizar o estado diretamente. Ex: color = "red"não é permitido.

// # Exemplo:
// Use um botão para atualizar o estado:

//import { useState } from "react";
import ReactDOM from "react-dom";

function FavoriteColor3() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

// ReactDOM.render(<FavoriteColor />, document.getElementById('root'));

// ## O que o estado pode reter
// O useStateGancho pode ser usado para rastrear strings, números, booleanos, arrays, objetos e qualquer combinação deles!

// Poderíamos criar vários Ganchos de estado para rastrear valores individuais.

// Exemplo:
// Crie vários ganchos de estado:

import { useState } from "react";
import ReactDOM from "react-dom";

function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}

//ReactDOM.render(<Car />, document.getElementById('root'));


// Ou podemos apenas usar um estado e incluir um objeto!

// Exemplo:
// Crie um único gancho que segure um objeto:


  //  import { useState } from "react";
    import ReactDOM from "react-dom";

    function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    return (
        <>
        <h1>My {car.brand}</h1>
        <p>
            It is a {car.color} {car.model} from {car.year}.
        </p>
        </>
    )
    }

// ReactDOM.render(<Car />, document.getElementById('root'));

// Como agora estamos rastreando um único objeto, precisamos fazer referência a esse objeto e, em seguida, à propriedade desse objeto ao renderizar o componente. (Ex: car.brand)

// Atualizando objetos e matrizes no estado
// Quando o estado é atualizado, todo o estado é sobrescrito.

// E se quisermos apenas atualizar a cor do nosso carro?

// Se apenas ligássemos setCar({color: "blue"}), isso removeria a marca, modelo e ano de nosso estado.

// Podemos usar o operador JavaScript spread para nos ajudar.

// Exemplo:
// Use o operador JavaScript spread para atualizar apenas a cor do carro:


//import { useState } from "react";
import ReactDOM from "react-dom";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

// ReactDOM.render(<Car />, document.getElementById('root'));


// Como precisamos do valor atual de estado, passamos uma função para nossa setCarfunção. Esta função recebe o valor anterior.

// Em seguida, retornamos um objeto, espalhando previousStatee sobrescrevendo apenas a cor.



