import './App.css';
import { useEffect, useState } from 'react';
import { CharacterItem } from './components/CharacterItem';


function App() {
  const [disney, setDisney] = useState([]);
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);
  const fetchData = () => {
    fetch('https://api.disneyapi.dev/characters')
      .then(res => res.json())
      .then(disney => console.log(disney.data))
  }
  // setDisney(disney.data)
  // console.log(disney.data)

  const handleAddToFavorites = (character) => {
    setFavoriteCharacters([...favoriteCharacters, character])
  }
  

  useEffect(fetchData, [])
  // console.log('favoriteBooks: ', favoriteBooks);

    return (
      <div className="App">
        <h1>Disney Characters</h1>
        <div className='character-container'>
          {disney.map((character) => (
            <CharacterItem name={character.name} image={character.imageUrl} key={character._id} handleAddToFavorites={handleAddToFavorites}/>
          ))}
        </div>
      </div>
    );
}

export default App;
