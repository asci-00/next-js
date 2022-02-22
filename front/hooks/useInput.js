import { useCallback, useState } from 'react';

const useInput = (initialValue = null) => {
  const [val, setVal] = useState(initialValue);
  const handler = useCallback((e) => {
    setVal(e.target.value);
  }, []);

  return [val, handler];
};

export default useInput;
