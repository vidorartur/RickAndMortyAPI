import React, { useContext, useEffect, useState } from 'react';
import context from '../../context/Context';

function APIRequest() {
  const [response, setResponse] = useState(undefined);
  const { categories, setRequest, page, setLoading } = useContext(context);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://rickandmortyapi.com/api/${categories}/?page=${page}`;
      const responseAPI = await fetch(url);
      const result = await responseAPI.json();
      setResponse(result);
    };
    fetchApi();
  }, [categories, page]);

  useEffect(() => {
    if (typeof response === 'object') {
      setRequest(response);
      setLoading(true);
    }
  }, [response, setRequest, setLoading]);

  return (
    <div />
  );
}

export default APIRequest;
