import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../services/api';

const EntityList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(data => setCharacters(data));
  }, []);

  return (
    <div className="row">
      {characters.map(char => (
        <div key={char.id} className="col-md-4 mb-3">
          <div className="card p-3">
            <h5>{char.name}</h5>
            <p>Race: {char.race}</p>
            <p>Origin: {char.origin}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EntityList;
