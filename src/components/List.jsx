// No React, você renderizará listas com algum tipo de loop.

// O map()método de array JavaScript é geralmente o método preferido.

// Exemplo:
// Vamos renderizar todos os carros de nossa garagem:

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

// ReactDOM.render(<Garage />, document.getElementById('root'));

// Ao executar este código no seu create-react-app, ele funcionará, mas você receberá um aviso de que não há nenhuma "chave" fornecida para os itens da lista.

// Chaves
// As teclas permitem que o React acompanhe os elementos. Dessa forma, se um item for atualizado ou removido, apenas aquele item será renderizado novamente em vez de toda a lista.

// As chaves precisam ser exclusivas para cada irmão. Mas eles podem ser duplicados globalmente.

// Geralmente, a chave deve ser um ID exclusivo atribuído a cada item. Como último recurso, você pode usar o índice da matriz como uma chave.

// Exemplo:
// Vamos refatorar nosso exemplo anterior para incluir chaves:

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

// ReactDOM.render(<Garage />, document.getElementById('root'));