import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios';

function App() {
  const[listaPokemon, setListaPokemon] = useState([]);

  const[pokemon, setPokemon] = useState([]);

  function submitPoke(url) {
    //alert(`hello, ${name}`);
    Axios.get(url).then((response) => {
      var pok = response.data;
      alert(`hello, ${pok.name}-${pok.height}-${pok.weight}`);
      //console.log(response.data.name);
      //setPokemon(response);
    })
  }

  useEffect(() => {
    Axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      //console.log(response.data.results);
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
          return <tr><td>{val.name}</td><td><button onClick={() => submitPoke(val.url)}>Greet</button></td></tr> 
          //return <tr><td>{val.name}</td><td><button type="button" onClick={submitPoke(val.url)}>Ver Detalles</button></td></tr>
        })}        
      </table>

      {pokemon.map((val) => {
            return <h1>{val} </h1>
        })}
      
    </div>
  );
}

export default App;
