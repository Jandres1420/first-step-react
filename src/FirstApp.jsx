
// para tener más de una etiqueta tiene que tener un padre normalmente se usa Div , pero esto es una linea innecesaria por lo que se usa Fragment o poner <> sin importarlo

//objetos no son permitidos como un react child, tocaria mandar propiedades del objeto, pero si se necesita mandar el objeto se usa JSON.stringify(elObjeto)
const newObject = {
    message:'probando objeto',
    titulo:'Object new message',
    date : Date.now()
};

const list = [1,2,3,4,5,6,7,8,9]

// Al hacer esto toca tener cuidado de que no sea async porque si lo es el va a ir a la linea y no va a saber cuando ejecutar esa linea 
const getObject= ()=>{
    return `${newObject.message} hello getObject` ;
}

// Esto es un fuctional component
export const FirstApp = () => {

  return (
    <>
      <h1>Andrés Pico</h1>
      {/* etiqueta code se ve mucho mejor para cuando se va a expresar un objeto textualmente */}
      <code>{getObject()}</code>
      <br/>
      <code>{JSON.stringify(newObject)}</code>
      <h2>{list}</h2>
      <p> I'm a subtitle</p>
    </>
  );
};
