export default function Characters(props) {
  const { characters, setCharacters } = props;

  const backHome = () => {
    setCharacters(null);
  };

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={backHome}>
        Return to Home
      </span>
      {/* Character list */}
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive">Alive</span>
                  </>
                ) : (
                  <span className="dead"> Dead</span>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodes: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Species: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={backHome}>
        Return to Home
      </span>
    </div>
  );
}
