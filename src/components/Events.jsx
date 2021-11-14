// Assim como os eventos HTML DOM, o React pode executar ações com base nos eventos do usuário.

// O React tem os mesmos eventos do HTML: clique, altere, passe o mouse etc.
// Adicionando Eventos
// Os eventos React são escritos na sintaxe camelCase:

// onClick em vez de onclick.

// Os manipuladores de eventos React são escritos entre chaves:

// onClick={shoot}  em vez de onClick="shoot()"

// React
//<button onClick={shoot}>Take the Shot!</button>

// //*************** */

// HTML:
//<button onclick="shoot()">Take the Shot!</button>

// Exemplo:
// Coloque a shootfunção dentro do Footballcomponente:

 function Football() {
   const shoot = () => {
     alert("Great Shot!");
   }

   return (
     <button onClick={shoot}>Take the shot!</button>
   );
 }

// ReactDOM.render(<Football />, document.getElementById('root'));

// Argumentos de passagem
// Para passar um argumento para um manipulador de eventos, use uma função de seta.

// Exemplo:
// Envie "Gol!" como um parâmetro para a shoot função, usando a função de seta:

function Football() {
    const shoot = (a) => {
      alert(a);
    }
  
    return (
      <button onClick={() => shoot("Goal!")}>Take the shot!</button>
    );
  }
  
// ReactDOM.render(<Football />, document.getElementById('root'));

