// Os componentes são como funções que retornam elementos HTML.
// Os componentes são bits de código independentes e reutilizáveis. Eles têm a mesma finalidade que as funções JavaScript, mas funcionam isoladamente e retornam HTML.
// Os componentes vêm em dois tipos, componentes de classe e componentes de função, neste tutorial vamos nos concentrar nos componentes de função.
// Ao criar um componente React, o nome do componente DEVE começar com uma letra maiúscula.


// Exemplo
// Use um atributo para passar uma cor para o componente Carro e use-o na função render ():

// ## Props

// Os componentes podem ser passados ​​como props, que significa propriedades.
// Os adereços são como argumentos de função e você os envia para o componente como atributos.
// Você aprenderá mais sobre propsno próximo capítulo.

export function Car(props) {
  return <h2>I am a {props.color} Car!</h2>;
}

// ReactDOM.render(<Car color="red"/>, document.getElementById('root'));

// ## Componentes em componentes
// Podemos nos referir a componentes dentro de outros componentes:

// Exemplo
// Use o componente Carro dentro do componente Garagem:

function Car() {
    return <h2>I am a Car!</h2>;
  }
  
export function Garage() {
    return (
      <>
        <h1>Who lives in my Garage?</h1>
        <Car />
      </>
    );
  }
  
 // ReactDOM.render(<Garage />, document.getElementById('root'));

 