import React, { useContext } from 'react';
import context from '../../context/Context';
import './SearchMachine.css';

function SearchMachine() {
  const { setPage, setCategories } = useContext(context);
  return (
    <div className="nav">
      <form className="form">
        <button
          type="button"
          onClick={ () => setCategories('character') || setPage(1) }
          className="btn"
        >
          Characters
        </button>
        <button
          type="button"
          onClick={ () => setCategories('location') || setPage(1) }
          className="btn"
        >
          Locations
        </button>
        <button
          type="button"
          onClick={ () => setCategories('episode') || setPage(1) }
          className="btn"
        >
          Episodes
        </button>
      </form>
    </div>
  );
}

export default SearchMachine;
