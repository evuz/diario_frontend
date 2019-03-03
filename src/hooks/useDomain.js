import { useState, useEffect } from 'react';

import domain from '../domain';

function useDomain(useCase, initVal, init = false) {
  const [val, setVal] = useState(initVal);
  const [loading, setLoading] = useState(false);

  function trigger(...args) {
    setLoading(true);
    domain
      .get({ useCase })
      .execute(...args)
      .then(results => {
        setLoading(true);
        setVal(results);
      });
  };

  useEffect(() => {
    if (init) {
      trigger();
    }
  }, []);

  return [val, trigger, loading];
}

export default useDomain;
