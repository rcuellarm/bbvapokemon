import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios';

function App() {
  const[listaPokemon, setListaPokemon] = useState([]);

  const[pokemon, setPokemon] = useState([]);

  function submitPoke(url) {
    Axios.get(url).then((response) => {
      var pok = response.data;
      alert(`hello, nombre: ${pok.name} - talla: ${pok.height} - peso: ${pok.weight}`);
    })
  }

  useEffect(() => {
    Axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      setListaPokemon(response.data.results);
    })
  }, []);

  return (
    <div className="App">
      <h1>Listado de Pokemons:</h1>
      <table class="default"> 
        <tr>
          <td>Nombre</td>
          <td>Acciones</td>
        </tr>
        {listaPokemon.map((val) => {
          return <tr><td>{val.name}</td><td><button onClick={() => submitPoke(val.url)}>Ver detalles</button></td></tr>
        })}        
      </table>

      {pokemon.map((val) => {
            return <h1>{val} </h1>
        })}
      
    </div>
  );
}

export default App;
