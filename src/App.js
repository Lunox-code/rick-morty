import { useState } from "react";
import "./App.css";
import Characters from "./components/Characters";
import imageRickMorty from "./img/rick-morty.png";

function App() {
  const [characters, setCharacters] = useState(null);

  // Call info API
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>

        {characters ? (
          // Home
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          // Menu
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
