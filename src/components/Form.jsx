// Assim como no HTML, o React usa formulários para permitir que os usuários interajam com a página da web.

// Adicionando Formulários no React
// Você adiciona um formulário com React como qualquer outro elemento:

// Exemplo:
// Adicione um formulário que permita aos usuários inserir seus nomes:

function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
// ReactDOM.render(<MyForm />, document.getElementById('root'));

// Isso funcionará normalmente, o formulário será enviado e a página será atualizada.

// Mas geralmente não é isso que queremos que aconteça no React.

// Queremos evitar esse comportamento padrão e deixar o React controlar o formulário.

// Manipulando Formulários
// Manipular formulários é como você lida com os dados quando eles mudam de valor ou são enviados.

// Em HTML, os dados do formulário geralmente são tratados pelo DOM.

// No React, os dados do formulário geralmente são tratados pelos componentes.

// Quando os dados são tratados pelos componentes, todos os dados são armazenados no estado do componente.

// Você pode controlar as alterações adicionando manipuladores de eventos no onChangeatributo.

// Podemos usar o useStateGancho para rastrear cada valor de entrada e fornecer uma "fonte única de verdade" para todo o aplicativo.

// Exemplo:
// Use o onChangeGancho para gerenciar a entrada:


function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

// ReactDOM.render(<MyForm />, document.getElementById('root'));

// Envio de formulários
// Você pode controlar a ação de envio adicionando um manipulador de eventos no onSubmitatributo para <form>:

// Exemplo:
// Adicione um botão de envio e um manipulador de eventos no onSubmitatributo:


function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('The name you entered was: ${name}')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

// ReactDOM.render(<MyForm />, document.getElementById('root'));

// Vários campos de entrada
// Você pode controlar os valores de mais de um campo de entrada adicionando um nameatributo a cada elemento.

// Iremos inicializar nosso estado com um objeto vazio.

// Para acessar os campos no manipulador de eventos, use a sintaxe event.target.namee event.target.value.

// Para atualizar o estado, use colchetes [notação de colchetes] ao redor do nome da propriedade.

// Exemplo:
// Escreva um formulário com dois campos de entrada:


function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

// ReactDOM.render(<MyForm />, document.getElementById('root'));

// Observação: usamos a mesma função de manipulador de eventos para ambos os campos de entrada, poderíamos escrever um manipulador de eventos para cada um, mas isso nos dá um código muito mais limpo e é a forma preferida no React.

// Textarea
// O elemento textarea no React é ligeiramente diferente do HTML comum.

// Em HTML, o valor de uma textarea era o texto entre a tag inicial <textarea> e a tag final </textarea>.

// <textarea>
//   Content of the textarea.
// </textarea>
// No React, o valor de uma textarea é colocado em um atributo de valor. Usaremos o useStateGancho para gerenciar o valor da textarea:

// Exemplo:
// Uma área de texto simples com algum conteúdo:

function MyForm() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}

// ReactDOM.render(<MyForm />, document.getElementById('root'));

// Selecione
// Uma lista suspensa ou uma caixa de seleção no React também é um pouco diferente do HTML.

// em HTML, o valor selecionado na lista suspensa foi definido com o selectedatributo:

// HTML:
<select>
  <option value="Ford">Ford</option>
  <option value="Volvo" selected>Volvo</option>
  <option value="Fiat">Fiat</option>
</select>

// No React, o valor selecionado é definido com um value atributo na selecttag:

// Exemplo:
// Uma caixa de seleção simples, onde o valor selecionado "Volvo" é inicializado no construtor:

function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

// Fazendo essas pequenas alterações em <textarea>e <select>, o React é capaz de lidar com todos os elementos de entrada da mesma maneira.

