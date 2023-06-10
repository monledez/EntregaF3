import React from 'react'

const Card = ({nombre, libro}) => {
  return (

    <>
    <h1> Hola {nombre} !</h1>
    <p>Sabemos que tu libro favorito es: {libro}</p>
    <h2>Gracias por registrarte con nosotros! </h2>
    </>
    
  )
}

export default Card