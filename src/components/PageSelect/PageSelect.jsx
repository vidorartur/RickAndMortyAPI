import React, { useContext } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import context from '../../context/Context';
import './PageSelect.css';

function PageSelect() {
  const { setPage, page, categories } = useContext(context);

  const NUMBER_42 = 42;
  const NUMBER_7 = 7;
  const NUMBER_3 = 3;

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const disableNextButton = () => {
    if ((page === NUMBER_42 && categories === 'character')
    || (page === NUMBER_7 && categories === 'location')
    || (page === NUMBER_3 && categories === 'episode')) {
      return true;
    }
  };

  return (
    <div className="btn-pages">
      <button
        type="button"
        id="prev_btn"
        disabled={ page === 1 }
        onClick={ () => prevPage() }
      >
        <AiOutlineArrowLeft />
      </button>
      <button
        type="button"
        id="next_btn"
        onClick={ () => nextPage() }
        disabled={ disableNextButton() }
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
}

export default PageSelect;
