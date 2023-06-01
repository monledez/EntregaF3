
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  // use state colocacion
  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState("");
  const [edad, setEdad] = useState (0);
  const [cancion, setCancion] = useState("");
  const [libro, setLibro] =useState("");

  // Onchange declaradas

  const OnchangeNombre = (e) => setNombre(e.target.value);
  const OnchangePais = (e) => setPais(e.target.value);
  const OnchangeEdad = (e) => setEdad(e.target.value);
  const OnchangeCancion = (e) => setCancion(e.target.value);
  const OnchangeLibro = (e) => setLibro(e.target.value);
  


// se coloca el handle submit 
  const handleSubmit = (event) =>{
    event.preventDefault();

    if(nombre.length <= 3) {
      if(libro.length >= 6) {
      alert("Por favor chequea que la información sea correcta");
      }
    } else {
      alert ("Enviando");
      
    }
  }


  


  return (
    <>
      <div>
        <h1>Informacion personal </h1>
        <h2 className='datos'> Coloca tus datos en el siguiente formulario </h2>
        <form onSubmit={handleSubmit}>
          <label> Nombre:  {" "} </label>
          <input 
          type='text'
          placeholder='Escribe tu nombre'
          value={nombre}
          onChange = {OnchangeNombre}
          />

           <br></br>

          <label> Pais:  {" "} </label>
          <input 
          type='text'
          placeholder='Escribe tu pais'
          value={pais}
          onChange = {OnchangePais}
          />
          <br></br>

          <label> Edad:  {" "} </label>
          <input 
          type='number'
          placeholder='Escribe tu edad'
          value={edad}
          onChange = {OnchangeEdad}
          />
          
          <br></br>

          <label> Cancion favorita:  {" "} </label>
          <input 
          type='text'
          placeholder='Coloca tu cancion favorita'
          value={cancion}
          onChange = {OnchangeCancion}
          />

          <br></br>

          <label> Coloca tu libro favorito:  {" "} </label>
          <input 
          type='text'
          placeholder='Escribe tu libro'
          value={libro}
          onChange = {OnchangeLibro}
          />

          <br></br>

          <button className='button'
              onClick={()=>{
                setNombre(nombre)}}>

              Enviar
          </button>
          
          <p>Tu nombre es {nombre} </p>

        </form>
       
        
      </div>
    </>
  )
}

export default App
