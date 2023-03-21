import React from "react";
import PropTypes from 'prop-types';
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
// para otros desarrolladores saber los tipos de props y tambien sirve para testing, esto tiene que ser debajo del functional component
AppWithProperty.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
};

AppWithProperty.defaultProps = {
  title: "este es default desde props",
  number: "este es default desde props",
};