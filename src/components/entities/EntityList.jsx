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
          <div className="card p-3 h-100">
            <h5>{char.name}</h5>
            <p><strong>Race:</strong> {char.race}</p>
            <p><strong>Affiliation:</strong> {char.affiliation}</p> {/* reemplaza origin */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EntityList;
