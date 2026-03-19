import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0 };
    console.log("Construindo");
  }

  componentDidMount() {
    console.log("O componene foi montado!");
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    console.log("Foi atualizado");
  }

  componentWillUnmount() {
    console.log("Desmontado será")
  }

  render() {
    return (
      <div>
        <h1>{this.state.contador}</h1>

        <button
          onClick={() => {
            this.setState({ contador: this.state.contador - 1 });
          }}
        >
          Diminuir
        </button>

        <button
          onClick={() => {
            this.setState({ contador: this.state.contador + 1 });
          }}
        >
          Aumentar
        </button>

        <button
          onClick={() => {
            this.setState({ contador: 0 });
          }}
        >
          Zerar
        </button>
      </div>
    );
  }
}
