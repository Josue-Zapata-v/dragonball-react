import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../services/api';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(data => setCharacters(data));
  }, []);

  return (
    <div className="row">
      {characters.map(char => (
        <div key={char.id} className="col-md-4 mb-3">
          <div className="card">
            <img src={char.imageUrl} className="card-img-top" alt={char.name} />
            <div className="card-body">
              <h5 className="card-title">{char.name}</h5>
              <p className="card-text">Race: {char.race}</p>
              <p className="card-text">Origin: {char.origin}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
