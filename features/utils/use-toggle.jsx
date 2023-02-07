import { useCallback, useState } from 'react';

export const useToggle = (initialState = false) => {
  const [status, setStatus] = useState(initialState);

  const toggle = useCallback(() => setStatus((status) => !status), []);

  const setToggleStatus = (value) => setStatus(value);

  return [status, toggle, setToggleStatus];
};
