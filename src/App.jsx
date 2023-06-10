
import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {

  // use state colocacion
  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState("");
  const [edad, setEdad] = useState (0);
  const [cancion, setCancion] = useState("");
  const [libro, setLibro] = useState("");
  const [error, setError] = useState("");
  const [mostrar, setMostrar] = useState(false);
 
  // Onchange declaradas

  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangePais = (e) => setPais(e.target.value);
  const onChangeEdad = (e) => setEdad(e.target.value);
  const onChangeCancion = (e) => setCancion(e.target.value);
  const onChangeLibro = (e) => setLibro(e.target.value);


  // definimos test de verificacion
const primerValidacion=()=>{

  //console.log(nombreNoSpacios);
  if(nombre.length<3 && nombre != "") {
    return true;

} else {
  return false
}
}

const segundaValidacion =()=>{

  if(libro.length < 6 ) {
    return true;
  } else {
 return false
}
}

 

 
// se coloca el handle submit 
  const handleSubmit = (event) =>{
    event.preventDefault();

   // console.log(primerValidacion);
    //console.log(segundaValidacion);

    if(primerValidacion == true && segundaValidacion == true ){
      setError("Por favor chequea que la información sea correcta");
     
      
    } else {
      setMostrar(true);
  };

  


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
          onChange = {onChangeNombre}
          />
      

           <br></br>

          <label> Pais:  {" "} </label>
          <input 
          type='text'
          placeholder='Escribe tu pais'
          value={pais}
          onChange = {onChangePais}
          />
          <br></br>

          <label> Edad:  {" "} </label>
          <input 
          type='number'
          placeholder='Escribe tu edad'
          value={edad}
          onChange = {onChangeEdad}
          />
          
          <br></br>

          <label> Cancion favorita:  {" "} </label>
          <input 
          type='text'
          placeholder='Coloca tu cancion favorita'
          value={cancion}
          onChange = {onChangeCancion}
          />

          <br></br>

          <label> Coloca tu libro favorito:  {" "} 
          <input 
          type='text'
          placeholder='Escribe tu libro'
          value={libro}
          onChange = {onChangeLibro}
          />
          </label>
        
      <div className="error">
        <p>{error}</p>
        </div>
      
          <button type='submit'>
              Enviar
          </button>

        </form>

        {(mostrar == true)? <Card nombre={nombre} libro={libro}/> : null}

       
        
      </div>
    </>
  )

}

}

export default App
