import { useState } from 'react';

import domain from '../domain';

function useDomain(useCase, initVal = null) {
  const [response, setResponse] = useState({
    data: initVal,
    loading: false,
    error: null,
  });

  function execute(...args) {
    setResponse({ data: response.data, error: null, loading: true });
    domain
      .get({ useCase })
      .execute(...args)
      .then(results => {
        setResponse({ data: results, error: null, loading: false });
      })
      .catch(error => {
        setResponse({ error, data: initVal, loading: false });
      });
  }

  return [response, execute];
}

export default useDomain;
