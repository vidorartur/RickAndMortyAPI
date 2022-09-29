import React, { useContext } from 'react';
import './CharactersCards.css';
import context from '../../context/Context';

function CharactersCards() {
  const { categories, request, loading } = useContext(context);

  const categoriesChange = () => {
    switch (categories) {
    case 'character':
      return (request.results.map((item) => (
        <div key={ item.id } className="character-card">
          <p className="name">
            {item.name}
          </p>
          <p>
            Gender:
            {' '}
            {' '}
            {item.gender}
          </p>
          <p>
            Status:
            {' '}
            {' '}
            {item.status}
          </p>
          <p>
            Species:
            {' '}
            {' '}
            {item.species}
          </p>
          <p>
            Type:
            {' '}
            {' '}
            {item.type === '' ? 'unknown' : item.type}
          </p>
          <img src={ item.image } alt="character" />
        </div>
      )));
    case 'location':
      return (request.results.map((item) => (
        <div key={ item.id } className="character-card">
          <p className="name">
            {item.name}
          </p>
          <p>
            Type:
            <br />
            {item.type}
          </p>
          <p>
            Dimension:
            <br />
            {item.dimension}
          </p>
          <p>
            Created in:
            <br />
            {item.created}
          </p>
        </div>
      )));
    case 'episode':
      return (request.results.map((item) => (
        <div key={ item.id } className="character-card">
          <p className="name">
            {item.name}
          </p>
          <p>
            Air Date:
            <br />
            <br />
            {item.air_date}
          </p>
          <p>{item.episode}</p>
        </div>
      )));
    default:
      return undefined;
    }
  };

  return (
    <div className="characters-container">
      {loading
        ? categoriesChange()
        : <p>Loading...</p>}
    </div>
  );
}

export default CharactersCards;
