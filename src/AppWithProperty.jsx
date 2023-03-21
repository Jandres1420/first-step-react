import React from "react";

// Functional component with property 'props' props va a dar la informacion del componente, fluye desde el componente padre osea desde main.jsx, props es como un objeto por lo que desestructirizarlo es lo mejor que seria lo mismo que props.title, props es como un objeto con parametros que definamos
export const AppWithProperty = ({
  title = "Esto solo pasa si es por default",
  number,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <h1>Estoy con property</h1>
      <h2>{number + 1}</h2>
    </>
  );
};
