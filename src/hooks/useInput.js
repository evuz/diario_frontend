import { useState, useCallback } from 'react';

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const onChange = useCallback(function changeInput(event) {
    setValue(event.currentTarget.value);
  });

  return [value, onChange];
}

export default useInput;
