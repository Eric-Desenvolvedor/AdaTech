import { useState } from "react";

export function Counter() {
  const [contador, setContador] = useState(0)

  return (
    <div style={{ margin: "20px 20px" }}>
      <h1>{contador}</h1>

      <div>
        <button
          onClick={() => {
            setContador(contador - 1 );
          }}
        >
          Diminuir
        </button>

        <button
          onClick={() => {
            setContador(contador + 1 );
          }}
        >
          Aumentar
        </button>

        <button onClick={() => {
          setContador(0)
        }}
        >
        Zerar
        </button>
      </div>

      {/* <form style={{ marginTop: "40px" }}>
        <input
          type="text"
          placeholder="Nome"
          value={this.state.name}
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        />

        <input
          type="password"
          placeholder="Senha"
          value={this.state.password}
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }}
        />
        <button>Enviar</button>
      </form> */}
    </div>
  );
}
