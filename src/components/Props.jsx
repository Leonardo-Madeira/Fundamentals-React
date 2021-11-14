// // React Props
// // Props são argumentos passados ​​para componentes React.
// // Os acessórios são passados ​​para os componentes por meio de atributos HTML.

// // props significa propriedades.

// // React Props são como argumentos de função em JavaScript e atributos em HTML.

// Para enviar adereços para um componente, use a mesma sintaxe dos atributos HTML:

// Exemplo
// Adicione um atributo "marca" ao elemento Carro:

const myelement = <Car brand="Ford" />;

// O componente recebe o argumento como um propsobjeto:

// Exemplo
// Use o atributo de marca no componente:

function Car2(props) {
  return <h2>I am a { props.brand }!</h2>;
}

// Passar dados
// Suportes também são como você passa dados de um componente para outro, como parâmetros.

// Exemplo
// Envie a propriedade "marca" do componente Garagem para o componente Carro:

function Car3(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage1() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car3 brand="Ford" />
    </>
  );
}

//ReactDOM.render(<Garage />, document.getElementById('root'));

// Se você tem uma variável para enviar, e não uma string como no exemplo acima, basta colocar o nome da variável entre chaves:

// Exemplo
// Crie uma variável chamada carNamee envie-a ao Carcomponente:

function Car4(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage2() {
  const carName = "Ford";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car4 brand={ carName } />
    </>
  );
}

//ReactDOM.render(<Garage2 />, document.getElementById('root'));

// Ou se fosse um objeto:

function Car(props) {
    return <h2>I am a { props.brand.model }!</h2>;
  }
  
  function Garage() {
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand={ carInfo } />
      </>
    );
  }
  
  ReactDOM.render(<Garage />, document.getElementById('root'));

  

