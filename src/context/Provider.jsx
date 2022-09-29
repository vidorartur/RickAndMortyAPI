import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import context from './Context';

function Provider({ children }) {
  const [request, setRequest] = useState('');
  const [categories, setCategories] = useState('character');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const contextValue = useMemo(() => {
    const objState = { request,
      setRequest,
      categories,
      setCategories,
      page,
      setPage,
      loading,
      setLoading };
    return objState;
  }, [categories, request, page, loading, setLoading]);

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
