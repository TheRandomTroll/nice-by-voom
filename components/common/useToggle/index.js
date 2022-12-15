import { useState, useCallback } from 'react';

const useToggler = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const toggler = useCallback(() => setValue((value) => !value), []);
  return [value, toggler];
};

export default useToggler;
