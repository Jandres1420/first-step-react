import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
export default function CounterApp({ value }) {
  // primer hook useState, y solo renderiza una vez con el resultado
  const [counter, setCounter] = useState(value);
  const handleAdd = (event, value) => {
    setCounter(counter + 1);
  };

  const handleSubstract = (event, value) => {
    setCounter(counter - 1);
  };
  const handleReset = (event, value) => {
    setCounter(value);
  };
  return (
    <>
      <h1> CounterApp</h1>
      <h2> {counter} </h2>
      {/* por default cuando se crea una funcion de ese estilo tiene como parametro un evento */}
      {/* si no le paso nada a la funcion handleAdd el toma como referencia el onclick en el mismo orden de la misma manera como el onclick lo hace por default */}
      <button onClick={(event) => handleAdd(event, value)}> +1 </button>
      <button onClick={(event) => handleSubstract(event, value)}> -1 </button>
      <button onClick={(event) => handleReset(event, value)}> reset</button>
    </>
  );
}

CounterApp.prototypes = {
  value: PropTypes.number.isRequired,
};
