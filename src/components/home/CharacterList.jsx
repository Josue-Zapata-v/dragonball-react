import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../services/api';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(data => setCharacters(data));
  }, []);

  return (
    <div className="row g-4">
      {characters.map(char => (
        <div key={char.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            {/* Imagen responsive que se adapta a la card */}
            <img
              src={char.image}
              className="card-img-top img-fluid"
              alt={char.name}
              style={{ objectFit: 'contain', maxHeight: '300px' }}
            />
            <div className="card-body">
              <h5 className="card-title">{char.name}</h5>
              <p className="card-text"><strong>Race:</strong> {char.race}</p>
              <p className="card-text"><strong>Affiliation:</strong> {char.affiliation}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
