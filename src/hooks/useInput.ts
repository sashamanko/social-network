import { useState } from "react";

const useInput = <T>(initialValue: T) => {
  const [value, setValue] = useState(initialValue || '');

  const reset = () => {
    setValue(initialValue);
  };

  const bind = {
	  value,
    onChange: (e: any) => setValue(e.target.value),
  };

  return [bind, value, reset];
};

export default useInput;