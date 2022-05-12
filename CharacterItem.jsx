import { useState } from 'react';
export const CharacterItem = ({ name, image, handleAddToFavorites }) => {
    // const [isFavorite, setIsFavorite] = useState(false);
    
    // const handleClick = () => {
    //     setIsFavorite(!isFavorite);
    //     console.log(characterInfo)
    //     <p className='favorite' onClick={handleClick}>{isFavorite ? '💙' : '♡'} </p>
    //     handleAddToFavorites(characterInfo);;
    // }
    
    return (
        <div className="character-item">
            <img alt={name} src={image}/>
            <h3>{name}</h3>
        </div>
    )
}